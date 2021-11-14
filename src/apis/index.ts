import AuthApi from './apis/authApi';
import UsersApi from './apis/usersApi';
import { createAxiosHTTPClient } from '../utils/httpClient';

const getApiBaseURL = (): string => {
  return process.env.APP_API_URL ?? '/';
};

const baseURL = getApiBaseURL();
const client = createAxiosHTTPClient({ baseURL, withCredentials: true });

export const authApi = new AuthApi(client, '/api/auth');
export const usersApi = new UsersApi(client, '/api/users');
