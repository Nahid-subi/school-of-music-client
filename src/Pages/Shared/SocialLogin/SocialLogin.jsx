import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const SocialLogin = () => {
    const { googleSignIn } = useAuth()
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((loggedInUser) => {
                const saveUser = {
                    name: loggedInUser.user?.displayName,
                    email: loggedInUser.user?.email,
                    photo:loggedInUser.user?.photoURL
                }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => { 
                        navigate(from, { replace: true });
                    })
            })
    }

    return (
        <div>
            <div className="divider"></div>
            <div className="text-center my-4">
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline text-yellow">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;