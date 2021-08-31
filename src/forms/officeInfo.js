import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from '../renderField';
import { connect } from 'react-redux';

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

const OfficeInfo = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-12 col-md-8">
          <Field
            name="buildingName"
            type="text"
            component={renderField}
            label="Building Name"
          />
          <Field
            name="city"
            type="text"
            component={renderField}
            label="City"
          />
          <Field
            name="landLineNumber"
            type="text"
            component={renderField}
            label="Landline Number"
          />
          <Field
            name="officeAddressLine1"
            type="text"
            component={renderField}
            label="Address Line 1"
          />
          <Field
            name="officeAddressLine2"
            type="text"
            component={renderField}
            label="Address Line 2"
          />
          <Field
            name="poBox"
            type="text"
            component={renderField}
            label="PO Box Number"
          />
        </div>
      <div className="col-6 col-md-4">
          <div className="row h-100">
              <button type="submit" className="btn btn-primary align-self-center">Next</button>
          </div>
        </div>
      </div>
    </form>
  );
};

const validate = values => {
  const errors = {};
  if (!values.buildingName) {
    errors.buildingName = 'Required';
  }
  if (!values.city) {
    errors.city = 'Required';
  }
  if (!values.landLineNumber) {
    errors.landLineNumber = 'Required';
  }
  if (!values.officeAddressLine1) {
    errors.officeAddressLine1 = 'Required';
  }
  if (!values.officeAddressLine2) {
    errors.officeAddressLine2 = 'Required';
  }
  if (!values.poBox) {
    errors.poBox = 'Required';
  }
  return errors;
};

const officeInfoForm = reduxForm({
  form: 'officeInfoForm', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(OfficeInfo);

export default officeInfoForm;

