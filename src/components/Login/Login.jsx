import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import { useState } from "react";
import SocialLogin from "../../Pages/Shared/SocialLogin/SocialLogin";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        const { email, password } = data;

        signIn(email, password)
            .then(() => {
                Swal.fire({
                    title: 'User Login Successful',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
            .catch(error => {
                // Handle Firebase authentication errors here
                Swal.fire({
                    title: 'Error',
                    text: error.message, // Display the error message
                    icon: 'error',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
            });
    }

    return (
        <div>
            <Helmet>
                <title>School of Music | Login</title>
            </Helmet>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:w-[40%] lg:text-left">
                            <h1 className="text-5xl font-bold text-blue">Login now!</h1>
                            <p className="py-6 hidden md:block lg:block">Guitar has different strings on it which help to produce sound, the strings of the guitar can be vibrated and with help of this vibration, the sound is produced.</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="email"
                                        className="input input-bordered"
                                        {...register("email", { required: "Email is required" })}
                                    />
                                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div className="relative flex items-center gap-4">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            placeholder="password"
                                            className="input input-bordered"
                                            {...register("password", { required: "Password is required" })}
                                        />
                                        {showPassword ?
                                            <FiEyeOff className="password-toggle" onClick={togglePasswordVisibility} /> :
                                            <FiEye className="password-toggle" onClick={togglePasswordVisibility} />
                                        }
                                    </div>
                                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" className="btn btn-yellow" value="Login" />
                                </div>
                                <label className="label">
                                    <h2>Do not have an account?
                                        <Link className="text-blue" to="/signup"> Sign up</Link></h2>
                                </label>
                            </form>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
