import axios from 'axios';

// base url
const apiBaseUri = 'https://developer-lostark.game.onstove.com';
let client = axios.create({
  baseURL: apiBaseUri,
});
client.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

export default client;