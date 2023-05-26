/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import login from "../../assets/others/authentication1.png";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useRef, useState } from "react";

const Login = () => {

    const ref= useRef(null);
    const [disable, setDisble] = useState(true);

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
    }

    const handleCaptaValidation=()=>{
        const userCapta = ref.current.value;
        console.log(userCapta);
        if (validateCaptcha(userCapta)==true) {
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
                    <form onSubmit={handleSubmit} className="card-body">
                        <h2 className="text-3xl font-bold text-center">Login</h2>
                        <p className="text-center text-red-600">  </p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" id="email" className="p-2 border-2 rounded-lg w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" id="password" name="password" placeholder="password" className="p-2 border-2 rounded-lg w-full" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                        </div>

                        <div className="flex justify-between gap-4">
                            <input type="text" id="capta" ref={ref} name="capta" placeholder="type here" className="p-2 border-2 rounded-lg w-full" />
                            <button onClick={handleCaptaValidation} className="btn p-2">Check</button>
                        </div>

                        <input type="submit" value="Login" className="btn btn-warning btn-sm mt-2" disabled={disable}/>
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