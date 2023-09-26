import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import InstructorCard from "../../../components/InstructorCard/InstructorCard";

const PopularInstructors = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('https://school-of-music-server.vercel.app/instructor')
            .then(res => res.json())
            .then(data => setClasses(data.slice(0, 6))) // Limit to 6 items
    }, []);
    return (
        <div>
            <SectionTitle heading="Popular Instructors"></SectionTitle>
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

export default PopularInstructors;