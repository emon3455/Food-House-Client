import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCarts from "../../../hooks/useCarts";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PAYMENT_PK);

const Payment = () => {

    const [cart, refetch] = useCarts();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    
    return (
        <div>
            <Helmet>
                <title>Food House | Payment</title>
            </Helmet>

            <SectionTitle subHeading="----- Process -----" heading="PAYMENT"></SectionTitle>

            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price} refetch={refetch} />
            </Elements>

        </div>
    );
};

export default Payment;