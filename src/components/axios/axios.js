import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
    "Access-Control-Allow-Origin": "*"
  }
});