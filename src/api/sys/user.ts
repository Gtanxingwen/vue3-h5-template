import { GetLoginModel, GetUserInfoModel, LoginParams } from './model/userModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  Login = '/oauth/test/login',
}

export const loginApi = (params: LoginParams) => {
  return defHttp.get<GetLoginModel>({
    url: Api.Login,
    params,
  });
};

export const doLogout = () => {};

export const getUserInfo = (): GetUserInfoModel => {
  return {} as GetUserInfoModel;
};
