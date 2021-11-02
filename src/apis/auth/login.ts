import client from '../client';
import { AuthResponseBody, LoginRequestBody } from '../types';

export const login = async (
  reqData: LoginRequestBody,
): Promise<AuthResponseBody> => {
  const apiUrl = '/api/auth/login';
  const response = await client.post<AuthResponseBody>(apiUrl, reqData);

  const { access } = response.data;
  client.defaults.headers.common.Authorization = `Bearer ${access}`;

  return response.data;
};
