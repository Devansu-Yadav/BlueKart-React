import axios from "axios";
import { toast } from "react-toastify";

const getCartData = async (authToken) => {
    try {
        const response = await axios.get("/api/user/cart", { headers: { authorization: authToken }});
        if(response.status === 200) {
            return response.data;
        }
    } catch(err) {
        console.log("getCartData: Error in fetching cart details of the user", err.response.data.errors[0]);
    }
}

const addItemToCart = async (authToken, cartItem) => {
    try {
        const response = await axios.post("/api/user/cart", { product: cartItem }, { headers: { authorization: authToken }});
        if(response.status === 201) {
            toast.success("Item added to Cart!");
            return response.data;
        }
    } catch (error) {
        toast.error("Error: Couldn't add item to cart :(");
        console.log("addItemToCart : Error in adding item to cart", error.response.data.errors[0]);
    }
}

const updateCartItemQuantity = async (authToken, itemId, type) => {
    try {
        const response = await axios.post(`/api/user/cart/${itemId}`, { action: { type: type } }, { headers: { authorization: authToken }});
        if(response.status === 200) {
            toast.success("Cart Item quantity updated successfully!");
            return response.data;
        }
    } catch (error) {
        toast.error("Error: Couldn't update item quantity :(");
        console.log("updateCartItemQuantity : Error in updating item quantity in cart", error.response);
    }
}

const removeItemFromCart = async (authToken, itemId) => {
    try {
        const response = await axios.delete(`/api/user/cart/${itemId}`, { headers: { authorization: authToken }});
        if(response.status === 200) {
            toast.success("Item removed from Cart succesfully!");
            return response.data;
        }
    } catch(error) {
        toast.error("Couldn't remove item from Cart :(");
        console.log("removeItemFromCart : Error in deleting item from cart", error.response.data.errors[0]);
    }
}

// Used to calculate Total items in cart including the individual item quantities.
const calculateTotalCartItems = (cartData) => {
    return cartData.reduce((totalQty, currItem) => currItem.qty + totalQty, 0);
}

export { getCartData, addItemToCart, updateCartItemQuantity, removeItemFromCart, calculateTotalCartItems };
