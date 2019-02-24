import axios from 'axios';

const API = {

  getDefaultHeaders: () => {
    const defaultHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': '563492ad6f917000010000010ae1fbd897654dbd8064af7f596e6451'
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
      timeout: 20000,
    };
    API.call(config, callback);
  },

  call: (config, callback) => {
    axios(config)
      .then((response) => {
        const { data = {}} = response;
        callback(null, data);
      })
      .catch((error) => {
        callback(error, null);
      });
  },
};
module.exports = API;
