export const LoginStart = () => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (payload) => ({
  type: "LOGIN_SUCCESS",
  payload,
});

export const LoginFailure = () => ({
  type: "LOGIN_FAILURE",
});

export const Logout = () => ({
  type: "LOGOUT",
});

export const UpdateStart = () => ({
  type: "UPDATE_START",
});

export const UpdateSuccess = (payload) => ({
  type: "UPDATE_SUCCESS",
  payload,
});

export const UpdateFailure = () => ({
  type: "UPDATE_FAILURE",
});
