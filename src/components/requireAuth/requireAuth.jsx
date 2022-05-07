import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/authContext"


export const RequiresAuth = ({ children }) => {
    const { isUserLoggedIn } = useAuth();
    console.log('checking is user logged in or not', isUserLoggedIn)
    const location = useLocation();
    return isUserLoggedIn ? (children) :
        (<Navigate to='/login' state={{ from: location }} replace />)
}