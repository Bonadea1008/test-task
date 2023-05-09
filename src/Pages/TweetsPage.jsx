import BackButton from 'components/BackButton/BackButton';
import CardList from 'components/CardsList/CardsList';
import LoadMoreButton from 'components/LoadMoreButton/LoadMoreButton';
import Loader from 'components/Loader';
import { useLocalStorage } from 'hooks/useLocalStorage';

const { useEffect, useState } = require('react');
const { getUsers, getAllUsers, updateUser } = require('services/fetchAPI');

const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoad, setIsLoad] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [error, setError] = useState(false);
  const [followings, setFollowings] = useLocalStorage('followings', []);

  const usersPerPage = 3;
  const totalHits = getAllUsers().then(data => {
    return data.length;
  });
  const totalPages = Math.ceil(totalHits / usersPerPage);

  useEffect(() => {
    if (page === 1) {
      console.log(page);
      setIsLoad(true);
      setLoadMore(true);
      getUsers(page)
        .then(data => setUsers(data))
        .catch(error => setError(true))
        .finally(() => setIsLoad(false));
    } else {
      getUsers(page).then(data => {
        if (data.length === 0) {
          setLoadMore(false);
          return alert('No tweets found');
        }
        setUsers(prevUsers => [...prevUsers, ...data]);
      });
    }
  }, [page]);

  useEffect(() => {
    if (page < totalPages / usersPerPage) {
      setLoadMore(true);
    }
  }, [page, totalPages]);

  const updateUserFollowers = async (id, followers, followings) => {
    setUsers(users =>
      users.map(user => {
        if (user.id !== id) return user;
        return {
          ...user,
          followers: !followings
            ? (user.followers += 1)
            : (user.followers -= 1),
        };
      })
    );
    if (!followings) {
      setFollowings(prev => [...prev, id]);
      await updateUser(id, (followers += 1));
    } else {
      setFollowings(prev => prev.filter(el => el !== id));
      await updateUser(id, (followers -= 1));
    }
  };

  const loadMoreHandler = () => {
    setPage(page + 1);
  };
  console.log(page);
  return (
    <>
      {isLoad ? (
        <Loader />
      ) : (
        <>
          {' '}
          <BackButton />{' '}
          <CardList
            users={users}
            followings={followings}
            isFollowing={updateUserFollowers}
          />
        </>
      )}
      {error && <h1>{error.message}</h1>}

      {loadMore && (
        <LoadMoreButton page={page} onLoadMoreClick={loadMoreHandler} />
      )}
    </>
  );
};

export default TweetsPage;
