/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const CheckoutForm = ({ price }) => {

    const { user } = useAuth();

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState("");

    const [transactionId, setTransactionId] = useState("");
    const [processing, setProcessing] = useState(false);

    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState("");

    

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            // save payment information to the server

        }


    }


    return (
        <div>
            <form className="card shadow-2xl w-2/3 mx-auto p-8" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },

                        },
                    }}
                />
                <div className="text-center">
                    <button className="btn btn-primary mt-10" type="submit" disabled={!stripe || !clientSecret || processing}>
                        Pay
                    </button>
                </div>
            </form>

            <div className="card shadow-2xl my-5 p-2 w-2/3 mx-auto">
                {
                    cardError && <p className="text-red-600 text-center">{cardError}</p>
                }
                {
                    transactionId && <p className="text-green-600 text-center">{transactionId}</p>
                }
            </div>

        </div>
    );
};

export default CheckoutForm;