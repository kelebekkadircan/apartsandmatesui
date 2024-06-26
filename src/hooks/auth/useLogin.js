import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";
import { newRequest } from "~/utils/newRequest";

export const useLogin = () => {
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const login = async (props) => {
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await newRequest.post("/auth/login", { ...props });
      console.log("USE LOGIN RES : 19.SATIR", res);
      localStorage.setItem("user", JSON.stringify(res.data));
      // update the user  in the context
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (err) {
      console.log("USE LOGIN ERR : 28.SATIR", err.response.data.message);
      setError(err.response.data.message);
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data.message });
    }
  };

  return { login, error };
};
