import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PersonalInfo from './forms/personalInfo';
import OfficeInfo from './forms/officeInfo';
import ConfirmPage from './forms/confirmPage';
import {getUserData} from './utils';
import './css/app.css';
import './css/forms.css';
import Stepper from 'react-stepper-horizontal';
import { registerUser, initiateOfficeInfo, initiateUserInfo } from './redux/userActions';
import {store} from './redux/store';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 0,
      showModal: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  nextPage() {
     this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }
  
  setCurrentPage(step){
    this.setState({ page: step });
  }

  submitForm(values, dispatch, props) {
    if (this.state.page == 0) {
      dispatch(initiateUserInfo(values));
    } else if (this.state.page == 1) {
      dispatch(initiateOfficeInfo(values));
    } else if (this.state.page == 2) { 
      values = getUserData();
      dispatch(registerUser(values));
    }
  }

  renderPageTitle(page) {
      switch(page) {
        case 0:
          return 'Personal info';
        case 1:
          return 'Office Info';
        case 2:
          return 'Confirmation Page';
        default:
          return 'Personal info';
      }
  };

  componentDidUpdate(prevProps) {
    if (this.props.response.userInfoReducer.isUserInfoStepCompleted && this.state.page == 0) {
      this.nextPage();
    } else if (this.props.response.userInfoReducer.isOfficeInfoStepCompleted && this.state.page == 1) {
      this.nextPage();
    }
}

  render() {
    
    const { onSubmit } = this.props;
    const { page } = this.state;
    const sections = [
      { title: 'Step 1', onClick: () => this.setCurrentPage(0) },
      { title: 'Step 2', onClick: () => this.setCurrentPage(1) },
      { title: 'Step 3', onClick: () => this.setCurrentPage(2) }
    ];
 
    return (
      <div className="container">
        <h2>
          {this.renderPageTitle(page)}
        </h2>
        <Stepper
          steps={sections}
          activeStep={page}
          activeColor="red"
          defaultBarColor="red"
          completeColor="red"
          completeBarColor="red"
        />
        <div className="user-forms-div">
          {page === 0 && (
            <div className="div-user-info-form">
              <PersonalInfo onSubmit={this.submitForm} />
            </div>
            )
            }
          {page === 1 && (
            <div className="div-user-info-form">
              <OfficeInfo
              onSubmit={this.submitForm}
            />
            </div>
          )}
          {page === 2 && (
            <div className="div-user-info-form">
              <ConfirmPage 
                previousPage={this.previousPage}
                onSubmit={this.submitForm}
              />
            </div>)}
          </div>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({
  response
});

export default connect(mapStateToProps)(UserInfo);
