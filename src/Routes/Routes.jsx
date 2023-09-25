import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layouts/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../components/Login/Login";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import SignUp from "../components/SignUP/SignUp";
import PrivateRoute from "./PrivateRoute";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import Dashboard from "../Layouts/Dashboard";
import MyEnrolled from "../Pages/Dashboard/MyEnrolled/MyEnrolled";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import AddAClass from "../Pages/Dashboard/AddAClass/AddAClass";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import Welcome from "../Pages/Dashboard/AddAClass/Welcome/Welcome";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import PaymentHistory from "../Pages/Dashboard/PaymentHistroy/PaymentHistory";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: "welcome",
                element: <Welcome></Welcome>
            },
            {
                path: "mycart",
                element: <MyCart></MyCart>
            },
            {
                path: "paymenthistory",
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: "myenrolled",
                element: <MyEnrolled></MyEnrolled>
            },
            {
                path: 'manageusers',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path: 'manageclasses',
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            {
                path: 'addclass',
                element: <InstructorRoute><AddAClass></AddAClass></InstructorRoute>
            },
            {
                path: 'myclasses',
                element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
            },
        ]
    }
]);