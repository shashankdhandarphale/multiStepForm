import {store} from './redux/store';

export const getUserData = () => {
    const state = store.getState();
    const { form: formData = {} } = state;
    const { personalInfoForm: { values: { name, email, mobileNumber, addressLine1, addressLine2, addressLine3 } = {} } = {} } = formData || {};
    const { officeInfoForm: { values: { buildingName, city, landLineNumber, officeAddressLine1, officeAddressLine2, poBox } = {} } = {} } = formData || {}; 
    
    return {
        name,
        email,
        mobileNumber,
        addressLine1, 
        addressLine2,
        addressLine3,
        buildingName,
        city,
        landLineNumber,
        officeAddressLine1,
        officeAddressLine2,
        poBox
    }
}