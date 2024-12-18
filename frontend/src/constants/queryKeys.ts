export enum EQueryKeys {
  LOGIN = 'login',
  SIGNUP = 'signup',
  REFRESH = 'refresh',
  LOGOUT = 'logout',
  RESET_PASSWORD = 'reset-password',
  FORGOT_PASSWORD = 'forgot-password'
}

export type QueryKeys = `${EQueryKeys}`;
