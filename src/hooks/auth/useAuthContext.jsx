import { useContext } from "react";
import { AuthContext } from "~/context/auth/AuthContext";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context || context === undefined) {
    throw Error("useAuthContext must be used inside an AuthContextProvider");
  }

  return context;
};
