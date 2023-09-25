import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PaymentHistory = () => {
    return (
        <div>
             <Helmet>
                <title>School of Music | Payment History</title>
            </Helmet>
            <SectionTitle heading={"Payment History"}></SectionTitle>
        </div>
    );
};

export default PaymentHistory;