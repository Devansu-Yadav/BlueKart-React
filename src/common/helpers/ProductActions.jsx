// Custom Hook to perform Product Action related to WishList and Cart
import { useUserData } from "../context/UserDataContext";
import { addItemToWishList, removeItemFromWishList } from "./WishListService";
import { addItemToCart, updateCartItemQuantity, removeItemFromCart } from "./CartService";
import { useAuth } from "../context/AuthenticationContext";
import { useNavigate } from "react-router-dom";
import { 
    ADD_TO_WISHLIST, 
    REMOVE_FROM_WISHLIST, 
    ADD_TO_CART, 
    REMOVE_FROM_CART,
    INCREASE_ITEM_QUANTITY,
    DECREASE_ITEM_QUANTITY
} from "../constants";

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

    // For MOVE TO WISHLIST functionality on cart page, if it's not present in WishList, add it and remove from cart
    const addToWishListFromCart = async (event, product) => {
        event.preventDefault();

        if(!userAuthToken) {
            navigate("/login");
        } else if(!isItemInWishList(product._id)) {
            const wishListResponse = await addItemToWishList(userAuthToken, product);
            console.log("Updated the WishList!", wishListResponse.wishlist);

            userDataDispatch({
                type: ADD_TO_WISHLIST,
                payload: product
            });

            const cartResponse = await removeItemFromCart(userAuthToken, product._id);
            console.log("Updated the Cart!", cartResponse.cart);

            userDataDispatch({
                type: REMOVE_FROM_CART,
                payload: product
            })
        } else {
            navigate("/wishList");
        }
    }

    // Used to add item to Cart from ProductListing page.
    const addToCart = async (event, product) => {
        event.preventDefault();

        if(!userAuthToken) {
            navigate("/login");
        } else if(!isItemInCart(product._id)) {
            const cartResponse = await addItemToCart(userAuthToken, product);
            console.log("Added item to Cart!", cartResponse.cart);

            userDataDispatch({
                type: ADD_TO_CART,
                payload: {...product, qty: 1 }
            });
        } else {
            // If item already in cart.
            navigate("/cart");
        }
    }

    // Used to remove item from Cart page
    const removeCartItem = async (event, itemId) => {
        event.preventDefault();

        if(!userAuthToken) {
            navigate("/login");
        } else if(isItemInCart(itemId)) {
            const cartResponse = await removeItemFromCart(userAuthToken, itemId);
            console.log("Removed item from Cart!", cartResponse.cart);

            userDataDispatch({
                type: REMOVE_FROM_CART,
                payload: {
                    _id: itemId
                }
            });
        }
    }

    // Update Quantity of Cart Item
    const updateCartItemQty = async (event, product, type) => {
        event.preventDefault();

        if(!userAuthToken) {
            navigate("/login");
        } else {
            if(type === INCREASE_ITEM_QUANTITY) {
                const increaseCartQtyResponse = await updateCartItemQuantity(userAuthToken, product._id, type);
                console.log("Cart Item qty increased!", increaseCartQtyResponse.cart);
    
                userDataDispatch({
                    type: INCREASE_ITEM_QUANTITY,
                    payload: {
                        _id: product._id
                    }
                });
            } else {
                if(product.qty === 1) {
                    await removeCartItem(event, product._id);
                } else {
                    const decreaseCartQtyResponse = await updateCartItemQuantity(userAuthToken, product._id, type);
                    console.log("Cart Item qty increased!", decreaseCartQtyResponse.cart);

                    userDataDispatch({
                        type: DECREASE_ITEM_QUANTITY,
                        payload: {
                            _id: product._id
                        }
                    });
                }
            }
        }
    }

    // For MOVE TO CART functionality on wishlist page, if it's not present in Cart, add it and remove from wishList
    const addToCartFromWishList = async (event, product) => {
        event.preventDefault();

        if(!userAuthToken) {
            navigate("/login");
        } else if(!isItemInCart(product._id)) {
            const cartResponse = await addItemToCart(userAuthToken, product);
            console.log("Updated the Cart!", cartResponse.cart);

            userDataDispatch({
                type: ADD_TO_CART,
                payload: {...product, qty: 1 }
            });

            const wishListResponse = await removeItemFromWishList(userAuthToken, product._id);
            console.log("Updated the Cart!", wishListResponse.wishlist);

            userDataDispatch({
                type: REMOVE_FROM_WISHLIST,
                payload: product
            })
        } else {
            navigate("/cart");
        }
    } 

    return { 
        isItemInWishList, 
        toggleWishList, 
        isItemInCart, 
        addToCart, 
        removeCartItem,
        updateCartItemQty,
        addToCartFromWishList,
        addToWishListFromCart
    };
}

export { useProductActions };