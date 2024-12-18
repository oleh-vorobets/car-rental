import { endpoints } from '../../constants/endpoints';
import { authAxios, publicAxios } from '../../providers/AxiosProvider';
import { ISendReset } from '../../types/auth.types';
import { AuthResponse } from './types';

export const authService = {
  login: async (email: string, password: string) => {
    const { data } = await publicAxios.post<AuthResponse>(
      endpoints.loginUrl(),
      {
        email,
        password
      }
    );
    return data;
  },

  signup: async (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => {
    const { data } = await publicAxios.post<AuthResponse>(
      endpoints.signupUrl(),
      {
        email,
        password,
        firstName,
        lastName
      }
    );
    return data;
  },

  logout: async () => {
    return await authAxios.get<void>(endpoints.logoutUrl());
  },

  refresh: async () => {
    const { data } = await publicAxios.get<AuthResponse>(
      endpoints.refreshUrl(),
      {
        withCredentials: true
      }
    );
    return data;
  },

  sendForgotPassword: async (email: string) => {
    const { data } = await publicAxios.post<void>(
      endpoints.forgotPasswordUrl(),
      {
        email
      }
    );
    return data;
  },

  sendResetPassword: async (payload: ISendReset) => {
    const { data } = await publicAxios.post<AuthResponse>(
      endpoints.resetPasswordUrl(),
      payload
    );
    return data;
  }
};
