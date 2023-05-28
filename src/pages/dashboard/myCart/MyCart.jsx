import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle"
import useCarts from "../../../hooks/useCarts";
import { FaTrash } from "react-icons/fa";
const MyCart = () => {

    const [cart] = useCarts();
    const total = cart.reduce((sum, item) => item.price + sum, 0);

    return (
        <div className="w-full">

            <Helmet>
                <title>Food house | My Cart</title>
            </Helmet>

            <SectionTitle subHeading="--- My Cart ---" heading="Wanna Add More?"></SectionTitle>

            <div className="card-body mx-4 shadow-2xl rounded-xl">

                <div className="flex justify-around font-semibold h-5 text-xl">
                    <h4>Total Items: {cart.length}</h4>
                    <h4>Total Price: $<span className="text-violet-500 font-bold">{total.toFixed(3)}</span></h4>
                    <button className="btn btn-warning btn-sm">PAY</button>
                </div>

                <div className="overflow-x-auto my-5">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => {
                                   return <tr key={item._id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>{item.name}</td>
                                        <td>${item.price}</td>
                                        <td>
                                            <button className="bg-red-500 border-none text-xl p-2 text-white rounded-md">
                                                <FaTrash></FaTrash>
                                            </button>
                                        </td>
                                    </tr>
                                })
                            }

                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    );
};

export default MyCart;