import { endpoints } from '../../constants/endpoints';
import { authAxios } from '../../providers/AxiosProvider';
import { IGetMeResponse } from './types';

export const userService = {
  getMe: async () => {
    const { data } = await authAxios.get<IGetMeResponse>(endpoints.getMeUrl());
    return data;
  }
};
