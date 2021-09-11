import React, { createContext, useEffect, useState } from "react";
import AuthService from "../Service/AccountService";
export const AuthContext = createContext();

export default ({ children }) => {
    const [use, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        AuthService.isAuthenticated().then((data) => {
            setUser(data.user);
            setIsAuthenticated(data.isAuthenticated);
            setIsLoaded(true);
        });
    }, []);
    return <div>{!isLoaded ? <p>Loading...</p> : <AuthContext.Provider value={{ use, setUser, isAuthenticated, setIsAuthenticated }}>{children}</AuthContext.Provider>}</div>;
};
