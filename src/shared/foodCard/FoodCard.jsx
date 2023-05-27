/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {

    const {_id,name,image,price,recipe} = item;

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = (im) => {

        if (user && user?.email) {

            const addededItem = {menuItemId: _id, name, image, price, email:user.email};

            fetch("http://localhost:5000/carts",{
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(addededItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire(
                            'Item Added To Cart Successfully!',
                            'OK',
                            'success'
                        );
                    }
                })
                .catch(er => console.log(er.message))
        }
        else {
            Swal.fire({
                title: 'Please Log in To Order',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", {state:{from: location}});
                }
            })
        }
    }

    return (
        <div className="card bg-base-100 shadow-2xl relative">
            <div className="h-1/2">
                <img className="w-full h-full rounded-lg" src={image} alt="Shoes" />
            </div>
            <div className="h-1/2 card-body flex items-center">
                <h2 className="card-title text-justify">{name}</h2>
                <p className="bg-slate-950 px-4 py-1 absolute top-5 right-5 text-white font-bold">${price}</p>
                <p>{recipe}</p>
                <button onClick={() => handleAddToCart({ item })} className="btn  btn-outline border-0 border-yellow-500 border-b-4 text-yellow-400">Add To Cart</button>
            </div>
        </div>
    );
};

export default FoodCard;