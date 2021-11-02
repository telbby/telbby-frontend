import client from '../client';
import { LoginRequestBody, UpdateInfoResponseBody } from '../types';

export const signup = async (
  reqData: LoginRequestBody,
): Promise<UpdateInfoResponseBody> => {
  const apiUrl = '/api/users';
  const response = await client.post<UpdateInfoResponseBody>(apiUrl, reqData);

  return response.data;
};
