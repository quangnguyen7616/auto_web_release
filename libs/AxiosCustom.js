const axios = require('axios');
const CancelToken = axios.CancelToken;
createAxiosInstance = (REQUEST_TIME_OUT) => {
    return axios.create({
        timeout: REQUEST_TIME_OUT,
        withCredentials: true
    });
};
class AxiosCustom {
    constructor(REQUEST_TIME_OUT) {
        this.instance = createAxiosInstance(REQUEST_TIME_OUT);
        this.REQUEST_TIME_OUT = REQUEST_TIME_OUT;
    }
    Request(config) {
        let self = this;
        let promise = new Promise((resolve, reject) => {
            const source = CancelToken.source();
            const promiseTimeout = setTimeout(() => {
                source.cancel();
                reject({ code: 0, message: 'REQUEST_TIME_OUT ' + self.REQUEST_TIME_OUT + " ms" });
            }, self.REQUEST_TIME_OUT);
            config.cancelToken = source.token;
            self.instance.request(config).then(async (response) => {
                clearTimeout(promiseTimeout);
                resolve(response);
            }).catch(async (error) => {
                clearTimeout(promiseTimeout);
                reject(error);
            });
        });
        return promise;
    }
}
module.exports = {
    AxiosCustom
};