import css from './CardItem.module.css';
import logo from '../../img/logo.png';
import picture from '../../img/picture21.png';

export const CardItem = ({ item }) => {
  const { tweets, followers, user, avatar } = item;
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
      {/* {isFollowing ? ( */}
      <button type="button" className={css.cardBtn}>
        Follow
      </button>
      {/* ) : (
        <button type="button" className={css.cardBtnFollowing}>
          Following
        </button>
      )} */}
    </div>
  );
};
