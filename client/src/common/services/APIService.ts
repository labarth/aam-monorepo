import axios from 'axios';

export const APIService = axios.create({
  baseURL: 'http://localhost:3001/api/'
});