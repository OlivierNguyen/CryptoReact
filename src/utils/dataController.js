import axios from 'axios';
import { SETTINGS } from '../config';
import store from '../store/init_store';

axios.defaults.baseURL = SETTINGS.BACKEND_HOST_URL;

export const CryptoReactCaller = {
    callPromise(method, endpoint, options) {
        const token = store.getState().user.token;

        let headers = {};
        if (token) {
            headers = {
                Authorization: `Token ${token}`,
            };
        }

        return axios({
            method: method,
            url: endpoint,
            data: options,
            headers,
        });
    },
};
