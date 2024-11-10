import axios from 'axios';
import { createContext, ReactNode } from 'react';

const axiosContext = createContext(undefined);

export const hostname =
  window.location.hostname === 'localhost'
    ? 'http://localhost:3000/api/v1'
    : `https://${window.location.hostname}/api/v1`;

export const authAxios = axios.create({
  baseURL: hostname
});

export const publicAxios = axios.create({
  baseURL: hostname
});
export const AxiosProvider = ({ children }: { children: ReactNode }) => {};
