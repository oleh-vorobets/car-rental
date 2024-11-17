import { useMutation } from '@tanstack/react-query';
import {
  LoginError,
  LoginPayload,
  SignupPayload
} from '../../providers/AuthProvider/types';
import { AuthResponse } from '../../services/auth-service/types';
import { authService } from '../../services/auth-service/AuthService';

export const useLoginMutation = (
  setAccessToken: React.Dispatch<React.SetStateAction<string>>,
  setError: React.Dispatch<React.SetStateAction<LoginError>>
) => {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: async ({
      email,
      password
    }: LoginPayload): Promise<AuthResponse> => {
      const res = await authService.login(email, password);
      if (!res || !res.data) {
        throw new Error('Login failed');
      }
      return res.data;
    },

    onSuccess: (data: AuthResponse) => {
      const { access_token } = data;
      setAccessToken(access_token);
    },
    onError: (_err: Error) => {
      setError(LoginError.ERROR);
    }
  });
};

export const useSignupMutation = (
  setAccessToken: React.Dispatch<React.SetStateAction<string>>,
  setError: React.Dispatch<React.SetStateAction<LoginError>>
) => {
  return useMutation({
    mutationKey: ['signup'],
    mutationFn: async ({
      email,
      password,
      firstName,
      lastName
    }: SignupPayload): Promise<AuthResponse> => {
      const res = await authService.signup(
        email,
        password,
        firstName,
        lastName
      );
      if (!res || !res.data) {
        throw new Error('Signup failed');
      }
      return res.data;
    },

    onSuccess: (data: AuthResponse) => {
      const { access_token } = data;
      setAccessToken(access_token);
    },
    onError: (_err: Error) => {
      setError(LoginError.ERROR);
    }
  });
};

export const useLogoutMutation = (
  setAccessToken: React.Dispatch<React.SetStateAction<string>>,
  setError: React.Dispatch<React.SetStateAction<LoginError>>
) => {
  return useMutation({
    mutationKey: ['logout'],
    mutationFn: async (): Promise<void> => {
      const res = await authService.logout();
      if (res.status !== 200) {
        throw new Error('Logout failed');
      }

      return;
    },
    onSuccess: () => {
      setAccessToken('');
    },
    onError: (_err: Error) => {
      setError(LoginError.ERROR);
    }
  });
};
