/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { FaTrash, FaUserCog } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { deleteUser } from "firebase/auth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {

    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get("/users")
        return res.data;
    })

    const handleMakeAdmin = (user) => {
        fetch(`https://food-house-server-rose.vercel.app/users/admin/${user._id}`, {
            method: "PATCH",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: 'Succussfully Done',
                        text: `${user.name} is Admin Now!`,
                    })
                }
            })
            .catch(er => console.log(er.message))
    }

    const handleDelete = (usr) => {
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

                fetch(`https://food-house-server-rose.vercel.app/users/${usr._id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {

                            deleteUser(user).then(() => {
                                refetch();
                                Swal.fire(
                                    'Deleted!',
                                    'User Deleted Successfully',
                                    'success'
                                )
                            }).catch((error) => {
                                console.log(error.message);
                            });


                        }
                    })
            }
        })
    }

    return (
        <div>
            <Helmet>
                <title>Food house | All Users</title>
            </Helmet>

            <SectionTitle subHeading="--- how Many?? ---" heading="Manage All Users"></SectionTitle>

            <div className="card-body mx-4 shadow-2xl rounded-xl">

                <div className="font-semibold h-5 text-2xl">
                    <h4>Total Users: {users.length}</h4>
                </div>

                <div className="overflow-x-auto my-5">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr >
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {

                                user.length > 0
                                    ?
                                    <>
                                        {
                                            users.map((user, index) => <tr key={user._id}>
                                                <td>{index + 1}</td>

                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>
                                                    {
                                                        user?.role == "admin" ? "admin"
                                                            :
                                                            <button onClick={() => handleMakeAdmin(user)} className="bg-yellow-500 border-none text-xl p-2 text-white rounded-md">
                                                                <FaUserCog></FaUserCog>
                                                            </button>
                                                    }
                                                </td>
                                                <td>
                                                    <button onClick={() => handleDelete(user)} className="bg-red-500 border-none text-xl p-2 text-white rounded-md">
                                                        <FaTrash></FaTrash>
                                                    </button>
                                                </td>
                                            </tr>)
                                        }
                                    </>
                                    :
                                    <>
                                        <tr className="text-center my-5">
                                            <td className="text-2xl font-bold ">No User To Show!!</td>
                                        </tr>
                                    </>

                            } */}
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <td>{index + 1}</td>

                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                            user?.role == "admin" ? "admin"
                                                :
                                                <button onClick={() => handleMakeAdmin(user)} className="bg-yellow-500 border-none text-xl p-2 text-white rounded-md">
                                                    <FaUserCog></FaUserCog>
                                                </button>
                                        }
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(user)} className="bg-red-500 border-none text-xl p-2 text-white rounded-md">
                                            <FaTrash></FaTrash>
                                        </button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default AllUsers;