import { authAxios, hostname } from '../../providers/AxiosProvider';
import { IGetMeResponse } from './types';

export const userService = {
  getMe: async () => {
    const { data } = await authAxios.get<IGetMeResponse>(
      hostname + '/user/getMe'
    );
    return data;
  }
};
