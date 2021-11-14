import AuthApi from './apis/authApi';
import UsersApi from './apis/usersApi';
import { createAxiosApiClient } from './client';

const getApiBaseURL = (): string => {
  return process.env.APP_API_URL ?? '/';
};

const baseURL = getApiBaseURL();
const client = createAxiosApiClient({ baseURL, withCredentials: true });

export const authApi = new AuthApi(client, '/api/auth');
export const usersApi = new UsersApi(client, '/api/users');
