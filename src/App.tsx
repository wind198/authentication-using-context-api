import React, { FC, PropsWithChildren } from "react";
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import RouteGuard from "./component/routeGuard";
import { useAuthentication } from "./hooks/useAuthentication";
import { About } from "./pages/About";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { NoMatch } from "./pages/NoMatch";
function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<Layout />}>
                <Route
                    path="/"
                    element={
                        <RouteGuard>
                            <Home />
                        </RouteGuard>
                    }
                />
                <Route
                    path="about"
                    element={
                        <RouteGuard>
                            <About />
                        </RouteGuard>
                    }
                />
                <Route
                    path="dashboard"
                    element={
                        <RouteGuard>
                            <Dashboard />
                        </RouteGuard>
                    }
                />
                <Route
                    path="*"
                    element={
                        <RouteGuard>
                            <NoMatch />
                        </RouteGuard>
                    }
                />
            </Route>
        </Routes>
    );
}

export default App;

const Layout = () => {
    const authContext = useAuthentication();
    if (!authContext) {
        return null;
    }
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/nothing-here">Nothing Here</Link>
                    </li>
                </ul>
            </nav>
            <hr />
            <Outlet />
            <button
                onClick={() => {
                    authContext.signout();
                }}>
                Sign out
            </button>
        </div>
    );
};
