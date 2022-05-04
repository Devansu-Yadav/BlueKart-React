import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useAddressForm } from 'common/context';

const AddressFormController = () => {
    const { isFormControllerAdded, handleFormControllerClick, clearFormStates, defaultFormData, handleFormData } = useAddressForm();

    return (
        <div className='flex-row-container add-address space-M' onClick={() => {
            console.log("Is clicked??");
            handleFormControllerClick();
            handleFormData(defaultFormData);
            clearFormStates();
        }} 
        style={{ display: isFormControllerAdded ? "none": "flex" }}>
            <div className='add-address-icon centered-flex-row-container'>
                <FontAwesomeIcon icon={faPlus} />
            </div>
            <h3 className='heading-3 add-address-heading'>ADD A NEW ADDRESS</h3>
        </div>
    );
}

export { AddressFormController };
