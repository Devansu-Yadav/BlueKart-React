import axios from "axios";

const getCartData = async (authToken) => {
    try {
        const response = await axios.get("/api/user/cart", { headers: { authorization: authToken }});
        if(response.status === 200) {
            return response.data;
        } else {
            throw new Error(response.errors[0]);
        }
    } catch(err) {
        console.log("getCartData: Error in fetching cart details of the user", err.message);
    }
}

const addItemToCart = async (authToken, cartItem) => {
    try {
        const response = await axios.post("/api/user/cart", cartItem, { headers: { authorization: authToken }});
        if(response.status === 201) {
            return response.data;
        } else {
            throw new Error(response.errors[0]);
        }
    } catch (error) {
        console.log("addItemToCart : Error in adding item to cart", error.message);
    }
}

const updateCartItemQuantity = async (authToken, itemId, type) => {
    try {
        const response = await axios.post(`/api/user/cart/:${itemId}`, { action: { type: type } }, { headers: { authorization: authToken }});
        if(response.status === 200) {
            return response.data;
        } else {
            throw new Error(response.errors[0]);
        }
    } catch (error) {
        console.log("updateCartItemQuantity : Error in updating item quantity in cart", error.message);
    }
}

const removeItemFromCart = async (authToken, itemId) => {
    try {
        const response = await axios.delete(`/api/user/cart/:${itemId}`, { headers: { authorization: authToken }});
        if(response.status === 200) {
            return response.data;
        } else {
            throw new Error(response.errors[0]);
        }
    } catch(error) {
        console.log("removeItemFromCart : Error in deleting item from cart", error.message);
    }
}

export { getCartData, addItemToCart, updateCartItemQuantity, removeItemFromCart };
