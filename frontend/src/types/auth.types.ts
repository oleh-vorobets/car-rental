export interface ISendResetPassword {
  token: string;
  password: string;
}

export interface ISendForgotPassword {
  email: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface SignupPayload {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
