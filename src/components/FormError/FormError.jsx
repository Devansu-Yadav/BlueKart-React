import './FormError.css';
import { useFormError } from '../../common/context/Form-Error-Context';

const FormError = () => {
    const { formDataErr } = useFormError();

    return (
        <div className='form-error'>{ formDataErr }</div>
    );
}

export { FormError };