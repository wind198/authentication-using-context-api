import { FC, PropsWithChildren, useContext } from "react";

import { Route, Navigate } from "react-router-dom";
import { useAuthentication } from "../../hooks/useAuthentication";

const RouteGuard: FC<PropsWithChildren<{}>> = ({ children }) => {
    const authContext = useAuthentication();
    if (!authContext) {
        return <Navigate to="/login" />;
    }
    const { isAuth, signin, signout } = authContext;

    if (!isAuth) {
        return <Navigate to="/login" />;
    }

    return (
        <>
            {children}
        </>
    )
};

export default RouteGuard;
