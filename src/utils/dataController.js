import axios from 'axios';
import { SETTINGS } from '../config';

axios.defaults.baseURL = SETTINGS.BACKEND_HOST_URL;

export const CryptoReactCaller = {
    call(method, endpoint, options, success_callback, error_callback) {

        const headers = {};

        axios({
            method: method,
            url: endpoint,
            data: options,
            headers
        })
            .then(response => success_callback && success_callback(response))
            .catch(error => error_callback && error_callback(error));
    },
};
