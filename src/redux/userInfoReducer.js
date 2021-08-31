import { userConstants } from './userConstants';
 
const initialState = {
  registering: false,
  isUserInfoStepCompleted: false,
  isOfficeInfoStepCompleted: false,
  isRegistered: false,
  isError: false,
  user: {}
}
const userInfoReducer=(state = initialState, action) =>{
  switch (action.type) {
    case userConstants.USERS_INFO_REQUEST:
      return {
        ...state,
        registering: true
      };
    case userConstants.USERS_INFO_SUCCESS:
      return {
        ...state,
        isRegistered: true,
        user: action.payload,
        registering: false,
        isUserInfoStepCompleted: true
      };
    case userConstants.USERS_INFO_FAILURE:
      return {
        ...state,
        isError: true,
        errorMsg: action.payload,
        registering: false,
        isUserInfoStepCompleted: false
      };
    case userConstants.OFFICE_INFO_REQUEST:
      return {
        ...state,
        registering: true
      };
    case userConstants.OFFICE_INFO_SUCCESS:
    console.log('OFFICE_INFO_SUCCESS');
      return {
        ...state,
        isRegistered: true,
        user: action.payload,
        registering: false,
        isOfficeInfoStepCompleted: true,
        isUserInfoStepCompleted: false
      };
    case userConstants.OFFICE_INFO_FAILURE:
      return {
        ...state,
        isError: true,
        errorMsg: action.payload,
        registering: false,
        isOfficeInfoStepCompleted: false,
        isUserInfoStepCompleted: false
      };
    case userConstants.REGISTER_REQUEST:
      return {
        ...state,
        registering: true
      };
    case userConstants.REGISTER_SUCCESS:
      return {
        ...state,
        isRegistered: true,
        user: action.payload,
        registering: false
      };
    case userConstants.REGISTER_FAILURE:
      return {
        ...state,
        isError: true,
        errorMsg: action.payload,
        registering: false
      };
    default:
      return state
  }
}

export default userInfoReducer;