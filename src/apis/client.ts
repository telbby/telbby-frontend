import axios from 'axios';

export const apiBaseURL =
  process.env.NODE_ENV === 'development'
    ? `${process.env.APP_API_URL}/`
    : process.env.APP_API_URL;

const client = axios.create();
client.defaults.baseURL = apiBaseURL;
client.defaults.withCredentials = true;

export default client;
