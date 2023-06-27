import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle"
import useCarts from "../../../hooks/useCarts";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const MyCart = () => {

    const [cart, refetch] = useCarts();
    const total = cart.reduce((sum, item) => item.price + sum, 0);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://food-house-server-rose.vercel.app/carts/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'item has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

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
                    <Link to="/dashboard/payment">
                        <button className="btn btn-warning btn-sm">PAY</button>
                    </Link>
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
                                cart.length > 0
                                    ?
                                    <>
                                        {
                                            cart.map((item, index) => <tr key={item._id}>
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
                                                    <button onClick={() => handleDelete(item._id)} className="bg-red-500 border-none text-xl p-2 text-white rounded-md">
                                                        <FaTrash></FaTrash>
                                                    </button>
                                                </td>
                                            </tr>)
                                        }
                                    </> 
                                    : 
                                    <>
                                        <tr className="text-center my-5">
                                            <td className="text-2xl font-bold ">Please Add Some Item Nothing To Show!!!</td>
                                        </tr>
                                    </>
                            }
                            {/* {
                                cart.map((item, index) => <tr key={item._id}>
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
                                        <button onClick={() => handleDelete(item._id)} className="bg-red-500 border-none text-xl p-2 text-white rounded-md">
                                            <FaTrash></FaTrash>
                                        </button>
                                    </td>
                                </tr>)
                            } */}

                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    );
};

export default MyCart;