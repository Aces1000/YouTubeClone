import axios from 'axios';

import { config } from '../config';

const ApiServiceInstance = axios.create({
  baseURL: config.BASE_API_URL,
});

ApiServiceInstance.interceptors.request.use(async (cfg) => {
  // TODO: retrieve token from storage
  const token = '';

  if (token) {
    cfg.headers.Authorization = token;
  }

  return cfg;
});

export default ApiServiceInstance;
