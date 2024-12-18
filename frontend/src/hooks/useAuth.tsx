import { useMutation } from '@tanstack/react-query';
import { AuthResponse } from '../services/auth-service/types';
import { authService } from '../services/auth-service/auth.service';
import {
  ISendForgotPassword,
  ISendResetPassword,
  LoginPayload,
  SignupPayload
} from '../types/auth.types';
import { EQueryKeys } from '../constants/queryKeys';
import { useAuthContext } from '../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { urls } from '../constants/urls';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';
export const useAuth = () => {
  const { setAccessToken, setUserData } = useAuthContext();
  const navigate = useNavigate();

  const {
    mutate: loginMutation,
    data: loginData,
    isError: isLoginError,
    isPending: isLoginPending
  } = useMutation({
    mutationKey: [EQueryKeys.LOGIN],
    mutationFn: async ({
      email,
      password
    }: LoginPayload): Promise<AuthResponse> => {
      const data = await authService.login(email, password);
      return data;
    },

    onSuccess: async (data: AuthResponse) => {
      const { access_token } = data;
      setAccessToken(access_token);
      navigate(urls.home);
      toast.success('You are successfully logged in!');
    }
  });

  const {
    mutate: signupMutation,
    data: signupData,
    isError: isSignupError,
    isPending: isSignupPending
  } = useMutation({
    mutationKey: [EQueryKeys.SIGNUP],
    mutationFn: async ({
      email,
      password,
      firstName,
      lastName
    }: SignupPayload): Promise<AuthResponse> => {
      const data = await authService.signup(
        email,
        password,
        firstName,
        lastName
      );
      return data;
    },

    onSuccess: async (data: AuthResponse) => {
      const { access_token } = data;
      setAccessToken(access_token);
      navigate(urls.home);
    }
  });

  const {
    mutate: logoutMutation,
    isError: isLogoutError,
    isPending: isLogoutPending
  } = useMutation({
    mutationKey: [EQueryKeys.LOGOUT],
    mutationFn: async (): Promise<void> => {
      await authService.logout();
    },
    onSuccess: () => {
      setAccessToken('');
      setUserData(null);
      navigate(urls.login);
    },
    onError: (_err: Error) => {
      navigate(urls.home);
    }
  });

  const {
    mutate: resetPasswordMutation,
    data: resetPasswordData,
    isError: isResetPasswordError,
    isPending: isResetPasswordPending
  } = useMutation({
    mutationKey: [EQueryKeys.RESET_PASSWORD],
    mutationFn: async (payload: ISendResetPassword): Promise<AuthResponse> => {
      const data = await authService.sendResetPassword(payload);
      return data;
    },
    onSuccess: (data: AuthResponse) => {
      const { access_token } = data;
      setAccessToken(access_token);
      navigate(urls.home);
      toast.success('Password was successfully reseted!');
    }
  });

  const {
    mutate: forgotPasswordMutation,
    isError: isForgotPasswordError,
    isPending: isForgotPasswordPending
  } = useMutation({
    mutationKey: [EQueryKeys.FORGOT_PASSWORD],
    mutationFn: async ({ email }: ISendForgotPassword): Promise<void> => {
      await authService.sendForgotPassword(email);
    },
    onSuccess: () => {
      navigate(urls.login);
      toast.success('An email has been sent!');
    },
    onError: (error: AxiosError) => {
      if (error.response?.status !== 404) {
        toast.error(error.message || 'An unexpected error occurred.');
      }
    }
  });

  return {
    resetPasswordMutation,
    resetPasswordData,
    isResetPasswordError,
    isResetPasswordPending,
    loginMutation,
    loginData,
    isLoginError,
    isLoginPending,
    signupMutation,
    signupData,
    isSignupError,
    isSignupPending,
    logoutMutation,
    isLogoutError,
    isLogoutPending,
    forgotPasswordMutation,
    isForgotPasswordError,
    isForgotPasswordPending
  };
};
