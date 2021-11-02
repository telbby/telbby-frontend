import axios from 'axios';

export const apiBaseURL =
  process.env.NODE_ENV === 'development'
    ? `${process.env.API_URL}/`
    : process.env.API_URL;

const client = axios.create();
client.defaults.baseURL = apiBaseURL;
client.defaults.withCredentials = true;

export default client;
