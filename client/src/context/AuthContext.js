import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user: {
        _id: "62600f4daa94bf68ae531e2c",
        username: "First user",
        email: "first@gmail.com",
        password: "$2b$10$KgGL/u2tugDstLLFK2Vo8u0uGTlBp7RklW30hM.p3TZuIf3t3.ybK",
        profilePicture: "",
        coverPicture: "",
        followers: ["62600f4daa94bf68ae531e2c"],
        followings: ["62609cc01a697c336f6a946a"],
        isAdmin: false,
        
    },
    isFetching: false,
    error: false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}>
            {children}
        </AuthContext.Provider>
    )
}