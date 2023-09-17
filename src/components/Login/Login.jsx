import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const {signIn} = useContext(AuthContext)

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email,password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
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
                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" />
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
                                        />
                                        {showPassword ?
                                            <FiEyeOff className="password-toggle" onClick={togglePasswordVisibility} /> :
                                            <FiEye className="password-toggle" onClick={togglePasswordVisibility} />
                                        }
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" className="btn btn-yellow" value="Login" />
                                </div>
                                <label className="label">
                                    <h2>Do not have an account? 
                                    <Link className="text-blue" to="/signup"> Sign up</Link></h2>
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;