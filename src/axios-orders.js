import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-ddda7.firebaseio.com/'
});

export default instance;