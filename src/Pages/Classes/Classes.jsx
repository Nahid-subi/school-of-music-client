import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ClassCard from "../../components/ClassCard/ClassCard";

const Classes = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/classes/approved')
            .then(res => res.json())
            .then(data => setClasses(data)) // Limit to 6 items
    }, []);
    return (
        <div className="mb-8">
            <div>
                <SectionTitle heading={"Classes"}></SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-3">
                    {classes.map(classItem => <ClassCard
                        key={classItem._id}
                        classItem={classItem}
                    ></ClassCard>)}
                </div>
            </div>
        </div>
    );
};

export default Classes;