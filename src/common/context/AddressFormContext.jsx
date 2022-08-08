import { useState, useContext, createContext } from 'react';

const AddressFormContext = createContext({   
        isFormControllerAdded: false, 
        handleFormControllerClick: () => {}, 
        isEditBtnClicked: false, 
        setIsEditBtnClicked: () => {}, 
        clearFormStates: () => {},
        formData: {},
        handleFormData: () => {},
        currentAddressId: { _id: "" },
        setCurrentAddressId: () => {}
});

const useAddressForm = () => useContext(AddressFormContext);

const AddressFormProvider = ({ children }) => {
    const [isFormControllerAdded, setIsFormControllerAdded] = useState(false);
    const [isEditBtnClicked, setIsEditBtnClicked] = useState(false);

    const defaultFormData = {
        "name": "",
        "mobile_no": "",
        "pincode": "",
        "city": "",
        "address": "",
        "alt_mobile_no": "",
        "state": ""
    };
    const [formData, setFormData] = useState(defaultFormData);
    const [currentAddressId, setCurrentAddressId] = useState({ _id: "" });

    const clearFormStates = () => {
        if(isFormControllerAdded) {
            handleFormControllerClick();
        } else if(isEditBtnClicked) {
            setIsEditBtnClicked(false);
        }
    }

    const handleFormData = (data) => {
        setFormData({...data});
    }
  
    const handleFormControllerClick= () => {
      isFormControllerAdded ? setIsFormControllerAdded(false): setIsFormControllerAdded(true);
    }
  
    return (
        <AddressFormContext.Provider value={{ 
                isFormControllerAdded, 
                handleFormControllerClick, 
                isEditBtnClicked, 
                setIsEditBtnClicked, 
                clearFormStates, 
                defaultFormData, 
                formData, 
                handleFormData,
                currentAddressId,
                setCurrentAddressId 
            }}>
            {children}
        </AddressFormContext.Provider>
    );
}

export { useAddressForm, AddressFormProvider };
