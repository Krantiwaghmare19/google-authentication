import { useSelector, useDispatch } from "react-redux";
import { logout, selectUser } from "../redux/userSlice";
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem("email");
        navigate('/login');
    };

    return (
        <>
            <h1>Welcome {user?.email || "User"}</h1>
            <button onClick={handleLogout}>Logout</button>
        </>
    );
};

export default Logout;
