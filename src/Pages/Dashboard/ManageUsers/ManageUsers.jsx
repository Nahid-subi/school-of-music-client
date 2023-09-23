import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserShield, FaUserTie } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })
    const handleDelete = (user) => {

    }
    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }



    return (
        <div>
            <Helmet>
                <title>School of Music | Manage Users</title>
            </Helmet>
            <SectionTitle heading={"Manage Users"}></SectionTitle>
            <div>
                <h3 className="text-3xl font-semibold">Total Users {users.length}</h3>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Make Instructor</th>
                                <th>Make Admin</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) =>
                                    <tr key={user._id}>
                                        <th>{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role === 'instructor' ? "instructor" :
                                            <button className="btn btn-info btn-sm"><FaUserTie></FaUserTie></button>}
                                        </td>
                                        <td>{user.role === 'admin' ? "admin" :
                                            <button onClick={() => handleMakeAdmin(user)} className="btn btn-yellow btn-sm"><FaUserShield></FaUserShield></button>}
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(user)} className="btn btn-error btn-sm"><FaTrashAlt></FaTrashAlt></button>
                                        </td>
                                    </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;