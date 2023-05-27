/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/others/authentication1.png";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const Login = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { signInUser } = useContext(AuthContext);
    const [disable, setDisble] = useState(true);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const onSubmit = data => {
        console.log(data)
        reset();
        signInUser(data.email, data.password)
            .then(res => {
                const logedUser = res.user;
                if (logedUser) {
                    Swal.fire(
                        'Successfully Loged In!',
                        'Success!',
                        'success'
                    )
                    navigate(from, { replace: true });
                }
                else {
                    return;
                }
            })
            .catch(er => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
            })
    };
    const handleCaptaValidation = (e) => {
        const userCapta = e.target.value;
        console.log(userCapta);
        if (validateCaptcha(userCapta) == true) {
            setDisble(false);
        }

        else {
            setDisble(true);
        }
    }

    return (
        <div className='mt-10' >
            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-5 p-2">
                <div className="card w-full max-w-sm drop-shadow-2xl bg-base-100 order-2 md:order-1">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h2 className="text-3xl font-bold text-center">Login</h2>
                        <p className="text-center text-red-600">  </p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" {...register("email", { required: true })} className="p-2 border-2 rounded-lg w-full" />
                            {errors.email && <span className="text-red-600 ">email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"  {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })} placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                        </div>

                        <div className="form-control">
                            <input type="text" id="capta" onBlur={handleCaptaValidation} name="capta" placeholder="type here" className="p-2 border-2 rounded-lg w-full" />
                        </div>

                        {/* To Do: we have to add this into submit button--- disabled={disable} */}
                        <input type="submit" value="Login" className="btn btn-warning btn-sm mt-2"  />
                    </form>
                    <div className="px-4 py-2">
                        <p className="text-center text-gray-600">
                            Don't have an Account? <Link className="text-sky-600" to="/register">Create an account</Link>
                        </p>
                        <p className="text-center font-bold">
                            OR Login With
                        </p>
                        <div className="flex justify-evenly">
                            <span className="p-4 btn-ghost rounded-full text-sky-600 text-lg"><FaFacebookF></FaFacebookF></span>
                            <span className="p-4 btn-ghost rounded-full text-orange-400 text-lg"><FaGoogle></FaGoogle></span>
                            <span className="p-4 btn-ghost rounded-full text-lg"><FaGithub></FaGithub></span>
                        </div>
                    </div>

                </div>
                <div className="max-w-lg order-1 md:order-2">
                    <img className="w-full" src={login} alt="login image" />
                </div>
            </div>


        </div>
    );
};

export default Login;