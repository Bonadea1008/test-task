import axios from 'axios';

axios.defaults.baseURL = 'https://6457cd1e1a4c152cf98acf28.mockapi.io';

export async function getUsers(page) {
  try {
    const { data } = await axios.get(`/Users?page=${page}&limit=3`);
    return data;
  } catch (error) {
    return Promise.reject(new Error('There is no tweets'));
  }
}

export async function getAllUsers() {
  try {
    const { data } = await axios.get(`/Users`);
    return data;
  } catch (error) {
    return Promise.reject(new Error('There is no tweets'));
  }
}

export async function updateUser(userId, newFollowers) {
  try {
    const { data } = await axios.put(`/Users/${userId}`, {
      followers: newFollowers,
    });
    return data;
  } catch (error) {
    return Promise.reject(new Error('There is no tweets'));
  }
}
