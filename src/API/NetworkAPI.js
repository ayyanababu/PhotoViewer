import axios from 'axios';
import configs from '../Configs/Configurations';

const { apiTimeOut } = configs;

const API = {

  getDefaultHeaders: () => {
    const defaultHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    return defaultHeaders;
  },

  get: (route, callback) => {
      const headers = API.getDefaultHeaders();
      return API.prepareConfig(route, null, 'get', headers, callback);
  },

  post: (route, params, headers, callback) => API.prepareConfig(route, params, 'post',
   headers, callback),

  prepareConfig: async (routeUrl, params, methodType, headers, callback) => {
    const config = {
      method: methodType,
      url: routeUrl,
      data: params,
      headers: headers || API.getDefaultHeaders(),
      timeout: apiTimeOut,
    };
    API.call(config, callback);
  },

  call: (config, callback) => {
    axios(config)
      .then((response) => {
        const { data = {}} = response;
        const { hits = [] } = data;
        callback(null, hits);
      })
      .catch((error) => {
        callback(error, null);
      });
  },
};
module.exports = API;
