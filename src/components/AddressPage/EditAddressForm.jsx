import { useAddressForm } from 'common/context';
import { AddressForm } from 'components';

const EditAddressForm = () => {
    const { isEditBtnClicked } = useAddressForm();

    return (
        <div style={{ display: isEditBtnClicked ? "block": "none" }}>
            <AddressForm />
        </div>
    );
}

export { EditAddressForm };
