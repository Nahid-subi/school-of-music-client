import { Link, Outlet } from "react-router-dom";
import { FaShoppingCart, FaBookReader, FaHome, FaNewspaper, FaUserTie, FaCalendar, FaUsersCog, FaClipboardList } from 'react-icons/fa';

const Dashboard = () => {
    // todo : load data from the server to have  dynamic 
    const isAdmin = true;
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <div className="flex justify-center mt-8">
                        <label htmlFor="my-drawer-2" className="btn btn-yellow drawer-button  lg:hidden">Open Navbar</label>
                    </div>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content bg-blue gap-2">
                        {/* Sidebar content here */}
                        {
                            isAdmin ?

                                <>
                                    <li className="bg-yellow rounded text-white"><Link to="manageclasses"><FaClipboardList></FaClipboardList>Manage Classes</Link></li>
                                    <li className="bg-yellow rounded text-white"><Link to="manageusers"><FaUsersCog></FaUsersCog>Manage Users</Link></li>

                                </> :

                                <>
                                    <li className="bg-yellow rounded text-white"><Link to="mycart"><FaShoppingCart></FaShoppingCart> My Selected Classes</Link></li>
                                    <li className="bg-yellow rounded text-white"><Link to="myenrolled"><FaBookReader></FaBookReader>My Enrolled Classes</Link></li>
                                    <li className="bg-yellow rounded text-white"><Link to="myenrolled"><FaCalendar></FaCalendar>Payment History</Link></li>

                                </>
                        }

                        <div className="divider bg-white h-1"></div>

                        <li className="bg-yellow rounded text-white"><Link to="/"><FaHome></FaHome>Home</Link></li>
                        <li className="bg-yellow rounded text-white"><Link to="../classes"><FaNewspaper></FaNewspaper>Classes</Link></li>
                        <li className="bg-yellow rounded text-white"><Link to="../instructors"><FaUserTie></FaUserTie>Instructors</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;