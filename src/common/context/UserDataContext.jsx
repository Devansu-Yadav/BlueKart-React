import { useReducer, useContext, createContext } from "react";
import { USER_LOGIN, USER_LOGOUT } from "../constants";

const UserDataContext = createContext({ 
    userData: {
        _id: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        cart: [],
        wishList: []
    }, 
    userDataDispatch: () => {}
});

const useUserData = () => useContext(UserDataContext);

const UserDataProvider = ({ children }) => {
    const initialUserData = {
        _id: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        cart: [],
        wishList: []
    }

    const userDataReducer = (state, action) => {
        switch (action.type) {
            case USER_LOGIN:
            case USER_LOGOUT:
                return {
                    ...state,
                    ...action.payload
                }
            default:
                return {...state}
        }
    }

    const [userData, userDataDispatch] = useReducer(userDataReducer, initialUserData);

    return (
        <UserDataContext.Provider value={{ userData, userDataDispatch, initialUserData }}>
            { children }
        </UserDataContext.Provider>
    );
}

export { useUserData, UserDataProvider };