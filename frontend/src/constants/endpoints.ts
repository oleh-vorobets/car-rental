import { hostname } from '../providers/AxiosProvider';

const auth = '/auth';
const user = '/user';

const login = '/login';
const signup = '/signup';
const refresh = '/refresh';
const logout = '/logout';
const forgotPassword = '/forgot-password';
const resetPassword = '/reset-password';

const getMe = '/getMe';

export const endpoints = {
  login,
  signup,
  forgotPassword,
  resetPassword,

  loginUrl: () => hostname + `${auth}${login}`,
  signupUrl: () => hostname + `${auth}${signup}`,
  refreshUrl: () => hostname + `${auth}${refresh}`,
  logoutUrl: () => hostname + `${auth}${logout}`,
  forgotPasswordUrl: () => hostname + `${auth}${forgotPassword}`,
  resetPasswordUrl: () => hostname + `${auth}${resetPassword}`,

  getMeUrl: () => hostname + `${user}${getMe}`
};
