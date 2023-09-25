import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import usePayment from "../../../Hooks/usePayment";

const MyEnrolled = () => {
    const [classes] = usePayment();

    // Create a map to store counts by item name
    const itemCounts = new Map();

    // Calculate item counts
    classes && classes.forEach(classItem => {
        classItem.itemNames.forEach(name => {
            if (itemCounts.has(name)) {
                itemCounts.set(name, itemCounts.get(name) + 1);
            } else {
                itemCounts.set(name, 1);
            }
        });
    });

    return (
        <div>
            <Helmet>
                <title>School of Music | My Enrolled</title>
            </Helmet>
            <SectionTitle heading={"My Enrolled"}></SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Item Name</th>
                                <th>Item Photos</th>
                                <th>Item Prices</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from(itemCounts.entries()).map(([itemName], index) => {
                                // Find the class item that contains the current item
                                const classItem = classes.find(item => item.itemNames.includes(itemName));
                                const itemIndex = classItem.itemNames.indexOf(itemName);
                                const itemPhoto = classItem.itemPhotos[itemIndex];
                                const itemPrice = classItem.itemPrices[itemIndex];

                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{itemName}</td>
                                        <td>
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={itemPhoto} alt="" />
                                            </div>
                                        </td>
                                        <td>{itemPrice}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyEnrolled;
