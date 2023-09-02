
const InstructorCard = ({classItem}) => {
    console.log(classItem)
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={classItem.imageInstructor} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{classItem.instructorName}</h2>
                    <h3 className="text-blue text-base font-semibold">Email: {classItem.instructorEmail}</h3>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;