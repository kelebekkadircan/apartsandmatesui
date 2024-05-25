import { newRequest } from "~/utils/newRequest";
import { useAuthContext } from "./useAuthContext"
import { useNavigate } from "react-router-dom";


export const useRegister = () => {

    const { dispatch, } = useAuthContext()
    const navigate = useNavigate();


    const register = async (props) => {
        console.log(props, "PROPS");

        dispatch({ type: "LOGIN_START" });
        try {
            const res = await newRequest.post("/auth/register", { ...props });
            console.log("USE REGISTER RES : 19.SATIR", res);
            // update the user  in the context
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });

            navigate("/login");
        } catch (err) {
            console.log("USE LOGIN ERR : 28.SATIR", err.response.data.message);
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data.message });
        }
    }

    return { register };
}