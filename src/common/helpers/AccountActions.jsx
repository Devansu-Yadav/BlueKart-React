// Custom Hook to perform actions related to Account Data
import { useNavigate } from "react-router-dom";
import { useUserData, useAuth, useFormError, useAddressForm } from "common/context";
import {
    addUserAddress, 
    updateUserAddress, 
    removeUserAddress
} from "common/helpers";
import {
    ADD_USER_ADDRESS,
    UPDATE_USER_ADDRESS,
    REMOVE_USER_ADDRESS
} from "common/constants";

const useAccountActions = () => {
    const { userData, userDataDispatch } = useUserData();
    const { userAuthToken } = useAuth();
    const navigate = useNavigate();
    const { setFormDataErr } = useFormError();
    const { handleFormControllerClick, setIsEditBtnClicked } = useAddressForm();

    // Used to add a new Address to user's saved address list
    const addNewUserAddress = async (address) => {
        if(!userAuthToken) {
            navigate("/login");
        } else {
            try {
                const addressResponse = await addUserAddress(userAuthToken, address);
                console.log("Added new address to address list!", addressResponse.addresses);

                userDataDispatch({
                    type: ADD_USER_ADDRESS,
                    payload: addressResponse.addresses
                });

                handleFormControllerClick();
            } catch(error) {
                console.log(error);
                setFormDataErr(error.response);
            }
        }
    };

    // Used to update user's address
    const updateAddress = async (addressId, address) => {
        if(!userAuthToken) {
            navigate("/login");
        } else {
            try {
                const addressResponse = await updateUserAddress(userAuthToken, addressId, address);
                console.log("Updated User Address!", addressResponse.addresses);

                userDataDispatch({
                    type: UPDATE_USER_ADDRESS,
                    payload: addressResponse.addresses
                });
                setIsEditBtnClicked(false);
            } catch(error) {
                setFormDataErr(error.response);
            }
        }
    };

    // Delete User address
    const removeAddress = async (addressId) => {
        if(!userAuthToken) {
            navigate("/login");
        } else {
            try {
                const addressResponse = await removeUserAddress(userAuthToken, addressId);
                console.log("Deleted User Address!", addressResponse.addresses);

                userDataDispatch({
                    type: REMOVE_USER_ADDRESS,
                    payload: addressResponse.addresses
                });
            } catch(error) {
                console.log(error);
                setFormDataErr(error.response);
            }
        }
    };

    return { addNewUserAddress, updateAddress, removeAddress };
};

export { useAccountActions };
