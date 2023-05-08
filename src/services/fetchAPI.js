import axios from 'axios';

axios.default.baseURL = 'https://6457cd1e1a4c152cf98acf28.mockapi.io';

export async function getUsers() {
  try {
    const response = await axios.get('/Users');
    return response;
  } catch (error) {
    return Promise.reject(new Error('There is no movies'));
  }
}
