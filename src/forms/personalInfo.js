import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from '../renderField';
import { connect } from 'react-redux';
import '../css/forms.css';

const PersonalInfo = props => {
  const { handleSubmit } = props;
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-12 col-md-8">
          <Field
            name="name"
            type="text"
            component={renderField}
            label="Name"
          />
          <Field
            name="email"
            type="email"
            component={renderField}
            label="Email"
          />
          <Field
            name="mobileNumber"
            type="text"
            component={renderField}
            label="Mobile Number"
          />
          <Field
            name="addressLine1"
            type="text"
            component={renderField}
            label="Address Line 1"
          />
          <Field
            name="addressLine2"
            type="text"
            component={renderField}
            label="Address Line 2"
          />
          <Field
            name="addressLine3"
            type="text"
            component={renderField}
            label="Address Line 3"
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
  if (!values.name) {
    errors.name = 'Required';
  }
  if (!values.mobileNumber) {
    errors.mobileNumber = 'Required';
  } else if (!/^\d{10}$/.test(values.mobileNumber)) {
    errors.mobileNumber = 'Invalid mobile number';
  } 
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.addressLine1) {
    errors.addressLine1 = 'Required';
  }
  if (!values.addressLine2) {
    errors.addressLine2 = 'Required';
  }
  if (!values.addressLine3) {
    errors.addressLine3 = 'Required';
  }
  return errors;
};

const personalInfoForm = reduxForm({
  form: 'personalInfoForm', 
  destroyOnUnmount: false,
  validate
})(PersonalInfo);

const InitializeFromStateForm = connect(
  state => ({
    initialValues: state.userInfoReducer 
  })
)(personalInfoForm)

export default InitializeFromStateForm;


