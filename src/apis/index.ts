import { createAxiosHTTPClient } from '@/utils/httpClient';

import AuthApi from './authApi';
import ServiceApi from './serviceApi';
import UserApi from './userApi';

const getApiBaseURL = (): string => {
  return process.env.APP_API_URL ?? '/';
};

const baseURL = getApiBaseURL();
const client = createAxiosHTTPClient({ baseURL, withCredentials: true });

export const authApi = new AuthApi(client, '/api/auth');
export const userApi = new UserApi(client, '/api/users');
export const serviceApi = new ServiceApi(client, '/api/projects');
