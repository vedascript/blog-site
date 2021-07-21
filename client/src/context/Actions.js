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
