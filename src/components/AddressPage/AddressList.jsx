import { useAddressForm, useUserData } from 'common/context';
import { useAccountActions } from "common/helpers";
import { EditAddressForm } from 'components';

const AddressList = () => {
    const { isEditBtnClicked, setIsEditBtnClicked, clearFormStates, handleFormData, currentAddressId, setCurrentAddressId } = useAddressForm();
    const { removeAddress } = useAccountActions();
    const { userData } = useUserData();

    const handleEditBtnClick = (id) => {
        setCurrentAddressId({ _id: id });
        handleFormData(userData.addresses.find((address) => address._id === id));
        setIsEditBtnClicked(true);
        clearFormStates();
    }

    const deleteAddressHandler = (id) => {
        removeAddress(id);
        clearFormStates();
    }

    return (
        <ul className='flex-col-container address-list'>
            { !userData.addresses.length ? <h2 className='heading-2 no-addresses-heading'>No addresses Added!</h2>: userData.addresses.map(address => {
                return (
                <li key={address._id}>
                    {isEditBtnClicked && currentAddressId._id === address._id ?  
                    <EditAddressForm /> : <div className='flex-col-container address-card'>
                        <p className='flex-row-container para-4 name-phone-no-container'>
                            <span><mark className='address-field-labels'>Name:</mark> {address.name}</span>
                            <span><mark className='address-field-labels'>Phone No:</mark> {address.mobile_no}</span>
                            { address.alt_mobile_no && <span><mark className='address-field-labels'>Alt mobile No:</mark> {address.alt_mobile_no}</span>}
                        </p>
                        <p className='flex-row-container para-4 address-txt-container'>{address.address}</p>
                        <p className='flex-row-container para-4 state-city-container'>
                            <span><mark className='address-field-labels'>State:</mark> {address.state}</span>
                            <span><mark className='address-field-labels'>City:</mark> {address.city}</span>
                            <span><mark className='address-field-labels'>Pincode:</mark> {address.pincode} </span>
                        </p>
                        <div className='flex-row-container address-list-btns'>
                            <button className='btn btn-primary rounded-med' onClick={() => handleEditBtnClick(address._id)}>Edit</button>
                            <button className='btn btn-error rounded-med' onClick={() => deleteAddressHandler(address._id)}>Delete</button>
                        </div>
                    </div>
                    }
                </li>
                );
            })}
        </ul>
    );
}

export { AddressList };
