import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import usePayment from "../../../Hooks/usePayment";

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

const PaymentHistory = () => {
    const [classes] = usePayment()
    
    return (
        <div>
            <Helmet>
                <title>School of Music | Payment History</title>
            </Helmet>
            <SectionTitle heading={"Payment History"}></SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Amount</th>
                                <th>TransactionId</th>
                                <th>Date and Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                classes.map((item,index) => <tr key={item._id}>
                                    <th>{index+1}</th>
                                    <td>$ {item.price}</td>
                                    <td>{item.transactionId}</td>
                                    <td>{formatDate(item.date)}</td>
                                </tr>)
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;
