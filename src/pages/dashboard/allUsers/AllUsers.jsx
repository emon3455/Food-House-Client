/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { FaTrash, FaUserCog } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";
import { Helmet } from "react-helmet-async";

const AllUsers = () => {

    const {data: users = [] , refetch } = useQuery( ['users'] , async()=>{
        const res = await fetch("http://localhost:5000/users")
        return res.json()
    })

    const handleMakeAdmin = (id) =>{

    }

    const handleDelete = (id) =>{

    }

    return (
        <div>
            <Helmet>
                <title>Food house | My Cart</title>
            </Helmet>

            <SectionTitle subHeading="--- My Cart ---" heading="Wanna Add More?"></SectionTitle>

            <div className="card-body mx-4 shadow-2xl rounded-xl">

                <div className="font-semibold h-5 text-2xl">
                    <h4>Total Users: {users.length}</h4>
                </div>

                <div className="overflow-x-auto my-5">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => {
                                    return <tr key={user._id}>
                                        <td>{index + 1}</td>
                                        
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <button onClick={() => handleMakeAdmin(user._id)} className="bg-yellow-500 border-none text-xl p-2 text-white rounded-md">
                                                <FaUserCog></FaUserCog>
                                            </button>
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(user._id)} className="bg-red-500 border-none text-xl p-2 text-white rounded-md">
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

export default AllUsers;