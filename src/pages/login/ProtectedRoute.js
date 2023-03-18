import { Navigate, Outlet} from "react-router-dom";
import { decodeJwt } from "../../utils/tokenUtils";


export default function ProtectedRoutes() {

    let isAuthenticated = decodeJwt(window.localStorage.getItem("accessToken"))?.auth;
    console.log(isAuthenticated);

    return (
        isAuthenticated ? <Outlet /> : <Navigate to="/login" />
    );

};