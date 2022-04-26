import { createContext, FC, PropsWithChildren, useState } from "react";

interface IAuthContext {
    isAuth: boolean;
    signin: () => void;
    signout: () => void;
}

export const AuthContext = createContext<IAuthContext | null>(null);

const AuthContextProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);

    const signin = () => {
        setIsAuth(true);
    };

    const signout = () => {
        setIsAuth(false);
    };

    return (
        <AuthContext.Provider value={{ isAuth, signin, signout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
