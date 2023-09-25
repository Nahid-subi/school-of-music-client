import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMyClasses from "../../../Hooks/useMyClasses";

const MyClasses = () => {
    const [classes] = useMyClasses()
    return (
        <div>
            <Helmet>
                <title>School of Music | My Classes</title>
            </Helmet>
            <SectionTitle heading={"My Classes"}></SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Total Enrolled</th>
                                <th>Feedback</th>
                                <th>Update</th>
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
                                        {item.status}
                                    </td>
                                    <td>
                                       {item.enrolled ? item.enrolled : 0}
                                    </td>
                                    <td>
                                        {item.status === 'denied' && item.feedback}
                                    </td>
                                    <td>
                                        <button className="btn btn-warning btn-xs">update</button>
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

export default MyClasses;