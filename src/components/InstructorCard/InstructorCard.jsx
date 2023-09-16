
const InstructorCard = ({classItem}) => {
    return (
        <div className="flex justify-center mx-2">
            <div className="card card-compact w-72 bg-base-100 shadow-xl">
                <figure><img className="w-full h-44 hover:scale-150 duration-200" src={classItem.imageInstructor} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{classItem.instructorName}</h2>
                    <h3 className="text-blue text-base font-semibold">Email: {classItem.instructorEmail}</h3>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;