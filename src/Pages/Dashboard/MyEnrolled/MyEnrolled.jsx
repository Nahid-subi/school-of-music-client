import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const MyEnrolled = () => {
    return (
        <div>
             <Helmet>
                <title>School of Music | My Enrolled</title>
            </Helmet>
            <SectionTitle heading={"My Enrolled"}></SectionTitle>
        </div>
    );
};

export default MyEnrolled;