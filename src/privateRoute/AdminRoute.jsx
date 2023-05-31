import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import useAdmin from "../hooks/useAdmin";


const AdminRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const  [ isAdmin, isAdminLoading] = useAdmin();

    const location = useLocation();

    if(loading || isAdminLoading){
        return <div className="h-60 w-full flex justify-center items-center">
            <progress className="progress w-56"></progress>
        </div>
    }

    if(user && isAdmin){
        return children
    }

    return <Navigate to="/" state={{from:location}} replace></Navigate>;
};

export default AdminRoute;