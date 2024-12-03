import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react';
import { LoginError, LoginPayload, SignupPayload } from './types';
import {
  useLoginMutation,
  useLogoutMutation,
  useSignupMutation
} from '../../hooks/auth/useAuthMutations';
import { authService } from '../../services/auth-service/AuthService';
import { IUser } from '../../types/user.types';

interface AuthContextType {
  loading: boolean;
  accessToken: string;
  error: LoginError;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  signup: (credentials: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }) => Promise<void>;
  logout: () => Promise<void>;
  refresh: () => Promise<void>;
}

// export enum ProviderEnum {
//   GOOGLE = 'google',
//   FACEBOOK = 'facebook',
//   LINKEDIN = 'linkedin',
//   LOCAL = 'local'
// }

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [accessToken, setAccessToken] = useState('');
  const [error, setError] = useState<LoginError>(LoginError.NONE);
  const [loading, isLoading] = useState<boolean>(false);
  const [accountData, setAccountData] = useState<IUser | null>(null);

  const {
    error: loginError,
    status: loginStatus,
    mutate: loginMutate
  } = useLoginMutation(setAccessToken, setError, setAccountData);

  const {
    error: signupError,
    status: signupStatus,
    mutate: signupMutate
  } = useSignupMutation(setAccessToken, setError, setAccountData);

  const {
    error: logoutError,
    status: logoutStatus,
    mutate: logoutMutate
  } = useLogoutMutation(setAccessToken, setError, setAccountData);

  const login = async (credentials: LoginPayload) => {
    loginMutate(credentials);
  };

  const signup = async (credentials: SignupPayload) => {
    signupMutate(credentials);
  };

  const refresh = async () => {
    try {
      const response = await authService.refresh();
      if (response && response.data) {
        setAccessToken(response.data.access_token);

        const isOnAuthPage =
          window.location.pathname === '/login' ||
          window.location.pathname === '/signup';
        if (isOnAuthPage) {
          window.location.href = '/';
        }
      }
    } catch (_err: any) {
      setError(LoginError.ERROR);
      setAccessToken('');
    }
  };

  const logout = async () => {
    logoutMutate();
  };

  useEffect(() => {
    refresh();
  }, []);

  useEffect(() => {
    isLoading(
      () =>
        loginStatus === 'pending' ||
        signupStatus === 'pending' ||
        logoutStatus === 'pending'
    );
    setError(
      (loginError ? LoginError.ERROR : LoginError.NONE) ||
        (signupError ? LoginError.ERROR : LoginError.NONE) ||
        (logoutError ? LoginError.ERROR : LoginError.NONE)
    );
  }, [
    loginStatus,
    isLoading,
    setError,
    loginError,
    signupStatus,
    signupError,
    logoutError,
    logoutStatus
  ]);

  return (
    <AuthContext.Provider
      value={{
        login,
        signup,
        logout,
        refresh,
        loading,
        accessToken,
        error
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
