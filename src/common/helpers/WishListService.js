import axios from "axios";

const getWishListData = async (authToken) => {
    try {
        const response = await axios.get("/api/user/wishlist", { headers: { authorization: authToken }});
        if(response.status === 200) {
            return response.data;
        }
    } catch(err) {
        console.log("getWishListData: Error in fetching wishList details of the user", err.response.data.errors[0]);
    }
}

const addItemToWishList = async (authToken, wishListItem) => {
    try {
        const response = await axios.post("/api/user/wishlist", { product: wishListItem }, { headers: { authorization: authToken }});
        if(response.status === 201) {
            return response.data;
        } 
    } catch (error) {
        console.log("addItemToWishList : Error in adding item to wishList", error.response.data.errors[0]);
    }
}

const removeItemFromWishList = async (authToken, itemId) => {
    try {
        const response = await axios.delete(`/api/user/wishlist/${itemId}`, { headers: { authorization: authToken }});
        if(response.status === 200) {
            return response.data;
        }
    } catch(error) {
        console.log("removeItemFromCart : Error in deleting item from wishList", error.response.data.errors[0]);
    }
}

export { getWishListData, addItemToWishList, removeItemFromWishList };
