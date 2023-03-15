import { Navigate, Outlet, Route } from "react-router-dom";
import { decodeJwt } from "../../utils/tokenUtils";


export default function ProtectedRoutes() {
       
    let isAuthenticated = localStorage.getItem("accessToken");
    console.log(decodeJwt(window.localStorage.getItem("accessToken")));
    return (
       !isAuthenticated ?  <Navigate to="/login" /> : <Outlet/>
    );

};