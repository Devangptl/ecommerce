import axios from 'axios';

export const request = axios.create({
  baseURL: process.env.REACT_APP_STRIPE_APP_URL,
  headers: {
    Authorization: 'bearer ' + process.env.REACT_APP_STRIPE_APP_KEY,
  },
});