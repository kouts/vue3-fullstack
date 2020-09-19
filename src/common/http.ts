import axios from 'axios';

// Create an axios instance
const http = axios.create({
  baseURL: 'api',
  timeout: 5000 // Request timeout
});

// Request interceptor
http.interceptors.request.use(
  config => {
    config.params = config.params || {};
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

// Response interceptor
http.interceptors.response.use(
  response => {
    const res = response.data;
    return res;
  },
  error => {
    // Global api response error handling here...
    console.log(error);
    return Promise.reject(error);
  }
);

export { http };
