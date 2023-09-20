import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PopularClasses = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClasses(data.slice(0, 6))) // Limit to 6 items
    }, []);

    return (
        <div>
            <SectionTitle heading={"Popular Classes"}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-3">
                {classes.map(classItem => (
                    <div key={classItem._id}>
                        <div className="card card-side bg-base-100 shadow-xl mx-2 p-2">
                            <figure><img className="w-32 h-28 rounded hover:scale-125 duration-200" src={classItem.imageInstrument} alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{classItem.name}</h2>
                                <p>price: ${classItem.price}</p>
                                <p>Available Seat: {classItem.availableSeats}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularClasses;
