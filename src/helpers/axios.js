import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://masrad-backend.deplanagency.com/api/',
    headers: {}
  });
  export default instance