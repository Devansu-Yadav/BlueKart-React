// Custom Hook to perform Product Action related to WishList and Cart
import { useUserData } from "../context/UserDataContext";
import { addItemToWishList, removeItemFromWishList } from "./WishListService";
import { addItemToCart, updateCartItemQuantity, removeItemFromCart } from "./CartService";
import { useAuth } from "../context/AuthenticationContext";
import { useNavigate } from "react-router-dom";
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, ADD_TO_CART } from "../constants";

const useProductActions = () => {
    const { userData, userDataDispatch } = useUserData();
    const { userAuthToken } = useAuth();
    const navigate = useNavigate();

    // Check if Item is in WishList or not
    const isItemInWishList = (itemId) => {
        return userData.wishList.find(wishListItem => wishListItem._id === itemId) ? true: false;
    }

    // Check if Item is in Cart or not
    const isItemInCart = (itemId) => {
        return userData.cart.find(cartItem => cartItem._id === itemId) ? true: false;
    }

    // Used to toggle WishList on ProductListing page to add or Remove an Item from WishList.
    const toggleWishList = async (event, product) => {
        event.preventDefault();

        if(!userAuthToken) {
            navigate("/login");
        } else {
            const itemInWishList = isItemInWishList(product._id);
            const wishListResponse = !itemInWishList 
            ? await addItemToWishList(userAuthToken, product) : await removeItemFromWishList(userAuthToken, product._id);

            console.log("Updated WishList ", wishListResponse.wishlist);
            userDataDispatch({ 
                type: !itemInWishList ? ADD_TO_WISHLIST: REMOVE_FROM_WISHLIST, 
                payload: product 
            });
        }
    }

    // For MOVE TO CART functionality on wishlist page, if it's not present in Cart, add it and remove from wishList
    const addToCartFromWishList = async (event, product) => {
        event.preventDefault();

        if(!isItemInCart(product._id) && userAuthToken) {
            const cartResponse = await addItemToCart(userAuthToken, product);
            console.log("Updated the Cart!", cartResponse.cart);

            userDataDispatch({
                type: ADD_TO_CART,
                payload: product
            });

            const wishListResponse = await removeItemFromWishList(userAuthToken, product._id);
            console.log("Updated the Cart!", wishListResponse.wishlist);

            userDataDispatch({
                type: REMOVE_FROM_WISHLIST,
                payload: product
            })
        } else if(!userAuthToken) {
            navigate("/login");
        }
        else {
            navigate("/cart");
        }
    } 

    return { isItemInWishList, toggleWishList, isItemInCart, addToCartFromWishList };
}

export { useProductActions };