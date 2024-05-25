// import Cookies from "js-cookie";
// import { createContext, useEffect, useReducer } from "react";

// const INITIAL_STATE = {
//   user: JSON.parse(localStorage.getItem("user")) || null,
//   loading: false,
//   error: null,
// };

// export const AuthContext = createContext(INITIAL_STATE);

// const AuthReducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN_START":
//       return {
//         user: null,
//         loading: true,
//         error: null,
//       };
//     case "LOGIN_SUCCESS":
//       return {
//         user: action.payload,
//         loading: false,
//         error: null,
//       };
//     case "LOGIN_FAILURE":
//       return {
//         user: null,
//         loading: false,
//         error: action.payload,
//       };
//     case "LOGOUT":
//       return {
//         user: null,
//         loading: false,
//         error: null,
//       };
//     default:
//       return state;
//   }
// };

// export const AuthContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
//   const x = Cookies.get("accessToken");

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user) {
//       dispatch({ type: "LOGIN_SUCCESS", payload: user });
//     }
//     //  console.log(x);
//     if (x === undefined || !x) {
//       //      console.log(x);
//       localStorage.setItem("user", null);
//       dispatch({ type: "LOGOUT", payload: null });
//     }
//   }, [dispatch, x]);

//   // console.log("AUTH CONTEXT : ", state);

//   return (
//     <AuthContext.Provider
//       value={{
//         user: state.user,
//         loading: state.loading,
//         error: state.error,
//         //...state, could be used instead of the above 3 lines
//         dispatch,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

import Cookies from "js-cookie";
import { createContext, useEffect, useReducer } from "react";
import { newRequest } from "~/utils/newRequest"; // Assuming you have this utility for making requests

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  const accessToken = Cookies.get("accessToken");

  useEffect(() => {
    const fetchUser = async () => {
      if (!accessToken) {
        localStorage.setItem("user", null);
        dispatch({ type: "LOGOUT" });
        return;
      }

      dispatch({ type: "LOGIN_START" });

      try {
        const response = await newRequest.get("users/auth/me");
        localStorage.setItem("user", JSON.stringify(response.data));
        dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
      } catch (error) {
        localStorage.setItem("user", null);
        dispatch({ type: "LOGIN_FAILURE", payload: error.message });
      }
    };

    fetchUser();
  }, [dispatch, accessToken]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
