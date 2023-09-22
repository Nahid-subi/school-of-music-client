import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ClassCard = ({ classItem }) => {
    const isSoldOut = classItem.availableSeats === 0;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();


    const addToCart = () => {
        if (user && user.email) {
            const cartItem = {cartId:classItem._id,name:classItem.name,price:classItem.price,email:user.email,image:classItem.imageInstrument
            }
            fetch(`http://localhost:5000/carts`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json" // corrected header name
                },
                body: JSON.stringify(cartItem) // corrected syntax to stringify the data
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Add to Cart Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        } else {
            // Redirect to login page
            navigate("/login", { state: { from: location } });
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Login First',
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    return (
        <div>
            <div className={`card flex justify-center mx-2 max-w-80 ${isSoldOut ? 'bg-red-500' : 'bg-base-100'} shadow-xl`}>
                <figure className="px-8 pt-8">
                    <img className="w-full h-44 hover:scale-150 duration-200 rounded-xl" src={classItem.imageInstrument} alt="Shoes" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-blue">Name of class: {classItem.name}</h2>
                    <p className="font-semibold">Instructor: {classItem.instructorName}</p>
                    <p className="font-semibold">Instructor: {classItem.instructorEmail}</p>
                    <p className="font-semibold">Available-seats: {classItem.availableSeats}</p>
                    <p className="font-semibold">Price: {classItem.price}</p>
                    <div className="card-actions">
                        <button
                            className={`btn btn-yellow  ${isSoldOut ? 'disabled:cursor-not-allowed' : ''}`}
                            onClick={addToCart}
                            disabled={isSoldOut}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;
