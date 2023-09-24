import { useEffect, useState } from "react";
import InstructorCard from "../../components/InstructorCard/InstructorCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Instructors = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/instructor')
            .then(res => res.json())
            .then(data =>  setClasses(data)) 
    }, []);
    return (
        <div className="mb-20">
            <SectionTitle heading="Instructors"></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {classes.map(classItem => (
                    <InstructorCard
                        classItem={classItem}
                        key={classItem._id}>
                    </InstructorCard>
                ))}
            </div>
        </div>
    );
};

export default Instructors;