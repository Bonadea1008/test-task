import axios from 'axios';

axios.defaults.baseURL = 'https://6457cd1e1a4c152cf98acf28.mockapi.io';

export async function getUsers() {
  try {
    const {data} = await axios.get('/Users');
    return data;
  } catch (error) {
    return Promise.reject(new Error('There is no movies'));
  }
}
