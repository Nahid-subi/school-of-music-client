import { Link, Outlet } from "react-router-dom";
import { FaShoppingCart, FaBookReader, FaHome, FaNewspaper, FaUserTie } from 'react-icons/fa';
const Dashboard = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Navbar</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content bg-blue gap-2">
                        {/* Sidebar content here */}
                        <li className="bg-yellow rounded text-white"><Link to="mycart"><FaShoppingCart></FaShoppingCart> My Selected Classes</Link></li>
                        <li className="bg-yellow rounded text-white"><Link to=""><FaBookReader></FaBookReader>My Enrolled Classes</Link></li>
                        <div className="divider bg-white h-1"></div>
                        <li className="bg-yellow rounded text-white"><Link to="/"><FaHome></FaHome>Home</Link></li>
                        <li className="bg-yellow rounded text-white"><Link to="classes"><FaNewspaper></FaNewspaper>Classes</Link></li>
                        <li className="bg-yellow rounded text-white"><Link to="instructors"><FaUserTie></FaUserTie>Instructors</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;