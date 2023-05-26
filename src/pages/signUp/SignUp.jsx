/* eslint-disable react/no-unescaped-entities */
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import img from "../../assets/others/authentication1.png"

const SignUp = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name= form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name,email, password);
    }

    return (
        <div className='mt-10' >
            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-5 p-2">
                <div className="card w-full max-w-sm drop-shadow-2xl bg-base-100 order-2 md:order-1">
                    <form onSubmit={handleSubmit} className="card-body">
                        <h2 className="text-3xl font-bold text-center">Sign Up</h2>
                        <p className="text-center text-red-600">  </p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" />
                        </div>
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

                        <input type="submit" value="Sign Up" className="btn btn-warning btn-sm mt-2"/>
                    </form>
                    <div className="px-4 py-2">
                        <p className="text-center text-gray-600">
                            Already have an Account? <Link className="text-sky-600" to="/login">Login</Link>
                        </p>
                        <p className="text-center font-bold">
                            OR SignUp With
                        </p>
                        <div className="flex justify-evenly">
                            <span className="p-4 btn-ghost rounded-full text-sky-600 text-lg"><FaFacebookF></FaFacebookF></span>
                            <span className="p-4 btn-ghost rounded-full text-orange-400 text-lg"><FaGoogle></FaGoogle></span>
                            <span className="p-4 btn-ghost rounded-full text-lg"><FaGithub></FaGithub></span>
                        </div>
                    </div>

                </div>
                <div className="max-w-lg order-1 md:order-2">
                    <img className="w-full" src={img} alt="login image" />
                </div>
            </div>


        </div>
    );
};

export default SignUp;