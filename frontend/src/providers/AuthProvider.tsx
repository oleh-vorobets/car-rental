import { createContext, ReactNode, useContext, useState } from 'react';
import { IUser } from '../types/user.types';

interface AuthContextType {
  accessToken: string;
  setAccessToken: React.Dispatch<React.SetStateAction<string>>;
  userData: IUser | null;
  setUserData: React.Dispatch<React.SetStateAction<IUser | null>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [accessToken, setAccessToken] = useState('');
  const [userData, setUserData] = useState<IUser | null>(null);

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        setAccessToken,
        userData,
        setUserData
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
