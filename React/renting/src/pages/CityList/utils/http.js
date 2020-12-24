import Axios from 'axios';
import { BASE_URL } from './url'

const http = Axios.create({
    baseURL:BASE_URL
});
export {http}
