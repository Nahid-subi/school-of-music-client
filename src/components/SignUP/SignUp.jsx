import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const SignUp = () => {
    const { register, handleSubmit, reset,  formState: { errors } } = useForm();
    const {createUser,updateUserProfile} = useContext(AuthContext)
    const navigate = useNavigate()
    const { logOut } = useContext(AuthContext)

    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            updateUserProfile(data.name,data.photo)
            .then(()=>{
                console.log("User profile info updated")
                reset();
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'User created successfully',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  logOut()
                  navigate('/login')
            })
            .catch(error => console.log(error))
        })
    }
    // console.log(watch("example"));

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }


    return (
        <div>
            <Helmet>
                <title>School of Music | Sign Up</title>
            </Helmet>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:w-[40%] lg:text-left">
                            <h1 className="text-5xl font-bold text-blue">Sign Up!</h1>
                            <p className="py-6 hidden md:block lg:block">Guitar has different strings on it which help to produce sound, the strings of the guitar can be vibrated and with help of this vibration, the sound is produced.</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        className="input input-bordered"
                                        {...register("name", { required: "Name is required" })}
                                    />
                                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="photo"
                                        placeholder="photo"
                                        className="input input-bordered"
                                        {...register("photo", { required: "photo is required" })}
                                    />
                                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                                </div>
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
                                    <div>
                                        <div className=" flex items-center gap-4">
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                name="password"
                                                placeholder="password"
                                                className="input input-bordered"
                                                {...register("password", {
                                                    required: true,
                                                    minLength: 6,
                                                    maxLength: 20,
                                                    pattern: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).*$/ // At least one capital letter, one number, and one special character
                                                })}
                                            />
                                            {showPassword ?
                                                <FiEyeOff className="password-toggle" onClick={togglePasswordVisibility} /> :
                                                <FiEye className="password-toggle" onClick={togglePasswordVisibility} />
                                            }
                                        </div>
                                        {errors.password && errors.password.type === "required" && (
                                            <span className="text-red-500">This field is required</span>
                                        )}
                                        {errors.password && errors.password.type === "minLength" && (
                                            <span className="text-red-500">Password must be at least 6 characters long</span>
                                        )}
                                        {errors.password && errors.password.type === "maxLength" && (
                                            <span className="text-red-500">Password must not exceed 20 characters</span>
                                        )}
                                        {errors.password && errors.password.type === "pattern" && (
                                            <span className="text-red-500">Password must contain at least one capital letter, one number, and one special character</span>
                                        )}
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" className="btn btn-yellow" value="Sign Up" />
                                </div>
                                <label className="label">
                                    <h2>Already have an account?
                                        <Link className="text-blue" to="/login"> Login</Link>
                                    </h2>
                                </label>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;