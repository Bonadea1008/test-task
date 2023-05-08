import axios from 'axios';

const { useEffect, useState } = require('react');
const { getUsers } = require('services/fetchAPI');

const CardList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const response = await axios.get(
        'https://644425a9466f7c2b4b62de26.mockapi.io/Users'
      );
      return response;
    }
    getUsers().then(data => setUsers(data));
  }, []);
};

// console.log(users);
export default CardList;
