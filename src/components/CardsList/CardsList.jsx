import { CardItem } from 'components/CardItem/CardItem';
import css from './CardList.module.css';
import PropTypes from 'prop-types';

const CardList = ({ users, followings, isFollowing }) => {
  return (
    <>
      {users.length !== 0 && (
        <ul className={css.cardList}>
          {users.map(item => (
            <li key={item.id}>
              <CardItem
                item={item}
                followings={followings}
                isFollowing={isFollowing}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CardList;

CardList.propTypes = {
  users: PropTypes.array,
  // followings: PropTypes.array,
  // isFollowing: PropTypes.func,
};
