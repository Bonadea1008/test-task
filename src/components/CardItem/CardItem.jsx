import css from './CardItem.module.css';
import logo from '../../img/logo.png';
import picture from '../../img/picture21.png';
import { useState } from 'react';

export const CardItem = ({ item, followings, isFollowing }) => {
  const { tweets, followers, user, avatar, id } = item;
  const [ifFollowings, setIfFollowings] = useState(followings.includes(id));

  const handleFollowButtonClick = () => {
    isFollowing(id, followers, ifFollowings);
    setIfFollowings(prev => !prev);
  };

  return (
    <div className={css.cardContainer}>
      <a
        href="https://goit.global/ua/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src={logo} alt="GoIT" className={css.cardLogo} />
      </a>
      <img src={picture} alt={`${user} avatar`} className={css.cardImg} />
      <div className={css.avatarContainer}>
        <img alt="avatar" src={avatar} className={css.avatarImg}></img>
      </div>
      <p className={css.cardTweets}>{tweets} tweets</p>
      <p className={css.cardFollowers}>
        {followers.toLocaleString('en-US')} followers
      </p>
      <button
        type="button"
        className={css.cardBtn}
        style={{ backgroundColor: ifFollowings ? '#5CD3A8' : '#EBD8FF' }}
        onClick={() => handleFollowButtonClick(id)}
      >
        {ifFollowings ? 'following' : 'follow'}
      </button>
    </div>
  );
};
