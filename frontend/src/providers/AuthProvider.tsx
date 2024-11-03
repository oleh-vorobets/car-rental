import { createContext, ReactNode, useContext, useState } from 'react';
import axios from 'axios';

interface AuthContextType {
  loading: boolean;
  accessToken: string;
  user: any;
  error: LoginError;
  refreshExpires: boolean;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  signup: (credentials: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }) => Promise<void>;
  logout: () => Promise<void>;
  refresh: () => Promise<void>;
  authenticated: boolean;
}

export enum LoginError {
  NONE = '',
  ERROR = 'Error'
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [loading, isLoading] = useState(false);
  const [accessToken, setAccessToken] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState<LoginError>(LoginError.NONE);
  const [refreshExpires, setRefreshExpires] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const login = async (credentials: { email: string; password: string }) => {
    console.log(credentials);
  };
  const refresh = async () => {};
  const signup = async (credentials: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }) => {
    console.log(credentials);
  };
  const logout = async () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        signup,
        logout,
        refresh,
        loading,
        accessToken,
        user,
        error,
        refreshExpires,
        authenticated
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
