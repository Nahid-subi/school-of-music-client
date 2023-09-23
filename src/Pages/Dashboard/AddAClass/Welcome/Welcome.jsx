import { Helmet } from "react-helmet-async";
import useAuth from "../../../../Hooks/useAuth";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

const Welcome = () => {
    const {user} = useAuth()
    return (
        <div>
            <SectionTitle heading={`Welcome`}></SectionTitle>
            <Helmet><title> School of Music | Welcome</title></Helmet>
            <div>
                <h1 className="text-yellow text-5xl text-center font-semibold">Welcome, <span className="text-blue">{user?.displayName}</span> to your Dashboard</h1>
            </div>
        </div>
    );
};

export default Welcome;