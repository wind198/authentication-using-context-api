import { useAuthentication } from "../hooks/useAuthentication";
import { useNavigate } from "react-router-dom";
export const Login = () => {
    const authContext = useAuthentication();
    const navigate = useNavigate();
    if (!authContext) {
        return null;
    }

    return (
        <div>
            <p>Please login to view out content</p>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    authContext.signin();
                    navigate("/");
                }}>
                <label>
                    Username: <input type="text" />
                </label>{" "}
                <label>
                    Password: <input type="password" />
                </label>{" "}
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};
