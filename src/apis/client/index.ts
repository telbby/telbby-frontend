import axios, { AxiosRequestConfig } from 'axios';

import { AxiosApiClient } from './axiosApiClient';

export * from './types';
export { default as ApiClient } from './apiClient';

export const createAxiosApiClient = (
  defaultConfig: AxiosRequestConfig,
): AxiosApiClient => {
  const client = axios.create();
  const axiosApiClient = new AxiosApiClient(client, defaultConfig);
  return axiosApiClient;
};
