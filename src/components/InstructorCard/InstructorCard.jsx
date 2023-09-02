
const InstructorCard = ({classItem}) => {
    console.log(classItem)
    return (
        <div className="flex justify-center mx-2">
            <div className="card card-compact w-60 bg-base-100 shadow-xl">
                <figure><img className="w-full h-44" src={classItem.imageInstructor} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{classItem.instructorName}</h2>
                    <h3 className="text-blue text-base font-semibold">Email: {classItem.instructorEmail}</h3>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;