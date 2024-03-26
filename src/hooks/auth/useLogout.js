import { newRequest } from "~/utils/newRequest";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from 'react-router-dom';


export const useLogout = () => {
    const { dispatch } = useAuthContext();
    const navigate = useNavigate();



    const logout = async () => {

        try {
            const res = await newRequest.post("/auth/logout");
            console.log("USE LOGOUT RES : 19.SATIR", res);
            // update the user  in the context
            localStorage.setItem("user", null);
            dispatch({ type: "LOGOUT" });
            navigate("/login");
        } catch (err) {
            console.log("USE LOGIN ERR : 28.SATIR", err.response.data.message);
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data.message });
        }

    }

    return { logout };


}