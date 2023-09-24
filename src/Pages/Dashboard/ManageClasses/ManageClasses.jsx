import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useClasses from "../../../Hooks/useClasses";
import { useState } from "react";

const ManageClasses = () => {
    const [classes] = useClasses();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedClass, setSelectedClass] = useState(null);
    if (!classes) {
        return <div>Loading...</div>; // Or some loading indicator
      }
    const openModal = (classData) => {
        setSelectedClass(classData);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <Helmet>
                <title>School of Music | Manage Classes</title>
            </Helmet>
            <SectionTitle heading={"Manage Classes"}></SectionTitle>
            <div>
                <h2>Total classes: {classes.length}</h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Class</th>
                                <th>Instructor</th>
                                <th>Available seats</th>
                                <th>Price</th>
                                <th>Action</th>
                                <th>Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                classes.map((item, index) => <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.imageInstrument} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Name: {item.instructorName}
                                        <br />
                                        <span className="badge badge-ghost badge-sm"> email: {item.instructorEmail}</span>
                                    </td>
                                    <td>{item.availableSeats}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <button
                                            className="btn btn-yellow mx-2 btn-xs"
                                            disabled={item.status === "Approved" || item.status === "Denied"}
                                        >
                                            Approve
                                        </button>
                                        <button
                                            className="btn btn-error btn-xs"
                                            disabled={item.status === "Approved" || item.status === "Denied"}
                                        >
                                            Deny
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-info btn-xs"
                                            onClick={() => openModal(item)}
                                        >
                                            Feedback
                                        </button>
                                    </td>
                                </tr>)
                            }

                        </tbody>


                    </table>
                </div>
            </div>
            {isModalOpen && selectedClass && (
                <dialog id="my_modal_3" className="modal" open>
                    <div className="modal-box">
                        <form method="dialog">
                            <button
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                onClick={closeModal}
                            >
                                ✕
                            </button>
                        </form>
                        <h3 className="font-bold text-lg">Feedback for {selectedClass.name}</h3>
                        <p className="py-4">
                            Instructor: {selectedClass.instructorName}
                            <br />
                            Instructor: {selectedClass.instructorEmail}
                        </p>
                        <div>
                            <form>
                                <textarea name="text" className="w-full"></textarea>
                                <input className="btn btn-info btn-xs" type="submit" value="Send Feedback" />
                            </form>
                            {/* <div>
                                <textarea name="text" className="w-full"></textarea>
                                <button className="btn btn-info btn-xs">Send Feedback</button>
                            </div> */}

                        </div>
                    </div>
                </dialog>
            )}

        </div>
    );
};

export default ManageClasses;