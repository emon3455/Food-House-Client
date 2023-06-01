import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { FaExternalLinkAlt, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageItems = () => {

    const [menu, ,refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();

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

                axiosSecure.delete(`/menu/${id}`)
                    .then(res => {
                        console.log(res);
                        if(res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Item has been deleted.',
                                'success'
                            )
                        }
                    })
                    .catch(er=> console.log(er.message))

            }
        })
    }
    const handleUpdate = (id) => {
        console.log(id);
    }

    return (
        <div>
            <Helmet>
                <title>Food house | Manage Items</title>
            </Helmet>
            <SectionTitle heading="Manage All Items" subHeading="------- Hurry Up -------"></SectionTitle>

            <div className="overflow-x-auto my-5 p-4">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.length > 0
                                ?
                                <>
                                    {
                                        menu.map((item, index) => <tr key={item._id}>
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
                                                <button onClick={() => handleUpdate(item._id)} className="bg-yellow-500 border-none text-xl p-2 text-white rounded-md">
                                                    <FaExternalLinkAlt></FaExternalLinkAlt>
                                                </button>
                                            </td>
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

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageItems;