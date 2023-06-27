/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {

    const { signInWithGoggle } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
        signInWithGoggle()
            .then(res => {
                const logedUser = res.user;
                const savedUser = { name: logedUser.displayName , email: logedUser.email}
                console.log(savedUser);
                fetch("https://food-house-server-rose.vercel.app/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(dt => {
                        if(dt.insertedId){
                            Swal.fire(
                                'User created Successfully!',
                                'Success!',
                                'success'
                            )
                        }
                    })
                    .catch(er => console.log(er.message))

                if(logedUser){
                    navigate(from, { replace: true });
                }

            })
            .catch(er => console.log(er.message))
    }

    return (
        <div className="flex justify-evenly">
            <span className="p-4 btn-ghost rounded-full text-sky-600 text-lg"><FaFacebookF></FaFacebookF></span>
            <span onClick={handleGoogleLogin} className="p-4 btn-ghost rounded-full text-orange-400 text-lg"><FaGoogle></FaGoogle></span>
            <span className="p-4 btn-ghost rounded-full text-lg"><FaGithub></FaGithub></span>
        </div>
    );
};

export default SocialLogin;