import axios from "axios";
import { toast } from "react-toastify";

const getUserData = async (authToken) => {
    try {
        const response = await axios.get("/api/user/account", { headers: { authorization: authToken }});
        if(response.status === 200) {
            return response.data;
        }
    } catch(err) {
        console.log("getUserData: Error in fetching user account data", err.response.data.errors[0]);
    }
};

const getUserAddresses = async (authToken) => {
    try {
        const response = await axios.get("/api/user/account/addresses", { headers: { authorization: authToken }});
        if(response.status === 200) {
            toast.success("User Addresses fetched successfully!");
            return response.data;
        }
    } catch(err) {
        toast.error("Error: Couldn't fetch user addresses :(");
        console.log("getUserAddresses: Error in fetching user addresses", err.response.data.errors[0]);
    }
};

const addUserAddress = async (authToken, address) => {
    console.log(address);
    try {
        const response = await axios.post("/api/user/account/addresses", { address: address }, { headers: { authorization: authToken }});
        if(response.status === 201) {
            toast.success("User address added successfully!");
            return response.data;
        }
    } catch (error) {
        toast.error("Error: Couldn't add user address :(");
        console.log("addUserAddress : Error in adding address to user's saved address list", error.response.data.errors[0]);
    }
};

const updateUserAddress = async (authToken, addressId, address) => {
    try {
        const response = await axios.post(`/api/user/account/addresses/${addressId}`, { address: address }, { headers: { authorization: authToken }});
        if(response.status === 200) {
            toast.success("User address updated successfully!");
            return response.data;
        }
    } catch (error) {
        toast.error("Error: Couldn't update user address :(");
        console.log("updateUserAddress : Error in updating user address", error.response.data.errors[0]);
    }
};

const removeUserAddress = async (authToken, addressId) => {
    try {
        const response = await axios.delete(`/api/user/account/addresses/${addressId}`, { headers: { authorization: authToken }});
        if(response.status === 200) {
            toast.success("User address removed successfully!");
            return response.data;
        }
    } catch (error) {
        toast.error("Error: Couldn't delete user address :(");
        console.log("removeUserAddress : Error in deleting user address", error.response.data.errors[0]);
    }
};

export { getUserData, getUserAddresses, addUserAddress, updateUserAddress, removeUserAddress };
