import "./AddressPageContent.css";
import { ProfilePageTabs, AddressFormController, AddressForm, AddressList } from "components";
import { useAddressForm } from "common/context";

const AddressPageContent = () => {
    const { isFormControllerAdded } = useAddressForm();

    return (
        <div className="address-page-container">
            <div className="address-page-content centered-flex-col-container">
                <ProfilePageTabs activeTab="addresses" />
                <AddressFormController />
                { isFormControllerAdded && <AddressForm /> }
                <AddressList />
            </div>
        </div>
    );
};

export { AddressPageContent };
