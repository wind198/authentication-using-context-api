import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

export function useAuthentication() {
    return useContext(AuthContext);
}
