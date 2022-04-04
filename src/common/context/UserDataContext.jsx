import { useReducer, useEffect, useContext, createContext } from "react";
import { 
    USER_LOGIN, 
    USER_LOGOUT, 
    SAVE_USER_WISHLIST, 
    SAVE_USER_CART,
    ADD_TO_WISHLIST,
    REMOVE_FROM_WISHLIST,
    ADD_TO_CART
} from "../constants";

import { getWishListData } from "../helpers/WishListService";
import { getCartData } from "../helpers/CartService";
import { useAuth } from "../context/AuthenticationContext";

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
    const { userAuthToken } = useAuth();

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
            case SAVE_USER_WISHLIST:
                return {
                    ...state,
                    wishList: [...action.payload]
                }
            case SAVE_USER_CART:
                return {
                    ...state,
                    cart: [...action.payload]
                }
            case ADD_TO_WISHLIST: 
                return {
                    ...state,
                    wishList: [...state.wishList, action.payload]
                }
            case REMOVE_FROM_WISHLIST:
                return {
                    ...state,
                    wishList: [...state.wishList.filter(item => item._id !== action.payload._id)]
                }
            case ADD_TO_CART: 
                return {
                    ...state,
                    cart: [...state.cart, action.payload]
                }
            default:
                return {...state}
        }
    }
    
    const [userData, userDataDispatch] = useReducer(userDataReducer, initialUserData);

    // Fetch User WishList and Cart initially
    useEffect(() => {
        const saveUserWishListAndCart = async () => {
            if(userAuthToken) {
                const { wishlist } = await getWishListData(userAuthToken);
                const { cart } = await getCartData(userAuthToken);

                userDataDispatch({ type: SAVE_USER_WISHLIST, payload: wishlist });
                userDataDispatch({ type: SAVE_USER_CART, payload: cart });                
            }
        }
        saveUserWishListAndCart();
    }, [userAuthToken]);

    return (
        <UserDataContext.Provider value={{ userData, userDataDispatch, initialUserData }}>
            { children }
        </UserDataContext.Provider>
    );
}

export { useUserData, UserDataProvider };