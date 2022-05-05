import { useReducer, useEffect, useContext, createContext } from "react";
import { 
    USER_LOGIN, 
    USER_LOGOUT, 
    SAVE_USER_WISHLIST, 
    SAVE_USER_CART,
    ADD_TO_WISHLIST,
    REMOVE_FROM_WISHLIST,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREASE_ITEM_QUANTITY,
    DECREASE_ITEM_QUANTITY,
    ADD_USER_ADDRESS,
    UPDATE_USER_ADDRESS,
    REMOVE_USER_ADDRESS
} from "common/constants";

import { getUserData, getWishListData, getCartData, useLogoutHandler } from "common/helpers";
import { useAuth } from "common/context";
import { toast } from "react-toastify";

const UserDataContext = createContext({ 
    userData: {
        _id: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        cart: [],
        wishList: [],
        addresses: []
    }, 
    userDataDispatch: () => {}
});

const useUserData = () => useContext(UserDataContext);

const UserDataProvider = ({ children }) => {
    const { userAuthToken } = useAuth();
    const { logoutHandler } = useLogoutHandler();

    const initialUserData = {
        _id: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        cart: [],
        wishList: [],
        addresses: []
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
            case REMOVE_FROM_CART:
                return {
                    ...state,
                    cart: [...state.cart.filter(item => item._id !== action.payload._id)]
                }
            case INCREASE_ITEM_QUANTITY:
                return {
                    ...state,
                    cart: [...state.cart.reduce((updatedCart, currItem) => currItem._id === action.payload._id ? [...updatedCart, {...currItem, qty: currItem.qty + 1 }]: [...updatedCart, currItem], [])]
                }
            case DECREASE_ITEM_QUANTITY:
                return {
                    ...state,
                    cart: [...state.cart.reduce((updatedCart, currItem) => currItem._id === action.payload._id ? [...updatedCart, {...currItem, qty: currItem.qty - 1 }]: [...updatedCart, currItem], [])]
                }
            case ADD_USER_ADDRESS:
            case UPDATE_USER_ADDRESS:
            case REMOVE_USER_ADDRESS:
                return {
                    ...state,
                    addresses: [...action.payload]
                }
            default:
                return {...state}
        }
    }
    
    const [userData, userDataDispatch] = useReducer(userDataReducer, initialUserData);

    // Fetch User account Data along with WishList and Cart initially
    useEffect(() => {
        const saveUserDataWithWishListAndCart = async () => {
            if(userAuthToken) {
                try {
                    // Fetch all the user account Data including Addresses
                    const userAccountData = await getUserData(userAuthToken);
                    const { wishlist } = await getWishListData(userAuthToken);
                    const { cart } = await getCartData(userAuthToken);

                    const { _id, firstName, lastName, email, password, addresses } = userAccountData.userData;
                    userDataDispatch({ type: USER_LOGIN, payload: { _id, firstName, lastName, email, password, addresses }});

                    userDataDispatch({ type: SAVE_USER_WISHLIST, payload: wishlist });
                    userDataDispatch({ type: SAVE_USER_CART, payload: cart });
                } catch (error) {
                    // Log out the User if User Data can't be fetched from saved Auth Token
                    console.log(error);
                    toast.error("Couldn't fetch User Account Data. Please try logging in again!");
                    logoutHandler();
                }
            }
        }
        saveUserDataWithWishListAndCart();
    }, [userAuthToken]);

    return (
        <UserDataContext.Provider value={{ userData, userDataDispatch, initialUserData }}>
            { children }
        </UserDataContext.Provider>
    );
}

export { useUserData, UserDataProvider };
