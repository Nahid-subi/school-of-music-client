import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddAClass = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = data => {

        const { name, instructorName, availableSeats, price, instructorEmail, imageInstrument, imageInstructor } = data;
        const newItem = { name, instructorName, availableSeats: parseFloat(availableSeats), price: parseFloat(price), instructorEmail, imageInstrument, imageInstructor }
        axiosSecure.post('/classes', newItem)
            .then(data => {
                if(data.data.insertedId){
                    reset();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Class added successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
    }

    return (
        <div>
            <Helmet>
                <title>School of Music | Add A Class</title>
            </Helmet>
            <SectionTitle heading={"Add A Class"}></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center my-6">
                <div className="form-control w-full mx-6 px-6">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Class Name"
                        {...register("name", { required: true })}
                        className="input input-bordered w-full"
                    />
                    {errors.name && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="form-control w-full mx-6 px-6">
                    {/*TODO: if image bb website fixed between my submit my assignment i well input as a image now i take input image link  */}
                    <label className="label">
                        <span className="label-text font-semibold">Class Image*</span>
                    </label>
                    <input
                        // type="file"
                        type="text"
                        placeholder="Class Image Link"
                        {...register("imageInstrument", { required: true })}
                        className="input input-bordered w-full"
                    // className="file-input file-input-bordered file-input-warning w-full max-w-xs"
                    />
                    {errors.imageInstrument && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="form-control w-full mx-6 px-6">
                    <label className="label">
                        <span className="label-text font-semibold">Available seats*</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Available seats"
                        {...register("availableSeats", { required: true })}
                        className="input input-bordered w-full"
                    />
                    {errors.availableSeats && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="form-control w-full mx-6 px-6">
                    <label className="label">
                        <span className="label-text font-semibold">Price*</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Type here"
                        {...register("price", { required: true })}
                        className="input input-bordered w-full"
                    />
                    {errors.price && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="form-control w-full mx-6 px-6">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor name*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Instructor name"
                        {...register("instructorName", { required: true })}
                        className="input input-bordered w-full"
                        readOnly
                        value={user.displayName}
                    />
                    {errors.instructorName && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="form-control w-full mx-6 px-6">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor email*</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Instructor email "
                        {...register("instructorEmail", { required: true })}
                        className="input input-bordered w-full"
                        readOnly
                        value={user.email}
                    />
                    {errors.instructorEmail && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="form-control w-full mx-6 px-6">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Image*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Instructor Image Link"
                        {...register("imageInstructor", { required: true })}
                        className="input input-bordered w-full"
                        readOnly
                        value={user.photoURL}
                    />
                    {errors.imageInstructor && <span className="text-red-500">This field is required</span>}
                </div>
                <input type="submit" className="btn btn-yellow my-4" value="Add Class" />
            </form>
        </div>
    );
};

export default AddAClass;
