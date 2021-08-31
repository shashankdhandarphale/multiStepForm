
export const initiateUserInfo = (user) => ({
  type: "USERS_INFO_REQUEST",
  payload: user,
});

export const userInfoSuccess = (user) => ({
  type: "USERS_INFO_SUCCESS",
  payload: user,
});

export const userInfoFail = (errorMsg) => ({
  type: "USERS_INFO_FAILURE",
  payload: errorMsg,
});

export const initiateOfficeInfo = (user) => ({
  type: "OFFICE_INFO_REQUEST",
  payload: user,
});

export const officeInfoSuccess = (user) => ({
  type: "OFFICE_INFO_SUCCESS",
  payload: user,
});

export const officeInfoFail = (errorMsg) => ({
  type: "OFFICE_INFO_FAILURE",
  payload: errorMsg,
});

export const registerUser = (user) => ({
  type: "USERS_REGISTER_REQUEST",
  payload: user,
});

export const registerUserSuccess = (user) => ({
  type: "USERS_REGISTER_SUCCESS",
  payload: user,
});

export const registerUserFail = (errorMsg) => ({
  type: "USERS_REGISTER_FAILURE",
  payload: errorMsg,
});