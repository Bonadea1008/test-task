import { CardItem } from 'components/CardItem/CardItem';

const { useEffect, useState } = require('react');
const { getUsers } = require('services/fetchAPI');

const CardList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(data => setUsers(data));
  }, []);

  console.log(users);
  return (
    <ul>
      <CardItem items={users} />
    </ul>
  );
};

export default CardList;
