var axios = require('axios');

var axiosInstance = axios.create({
  baseURL: 'http://192.168.233.128:8054/v1/accounts',
});

module.exports = axiosInstance;