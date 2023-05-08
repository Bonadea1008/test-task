import css from './CardItem.module.css';
import logo from '../../img/logo.png';
import picture from '../../img/picture21.png';

const CardItem = () => {
  return (
    <div className={css.cardContainer}>
      <a
        href="https://goit.global/ua/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src={logo} alt="GoIT" className={css.cardLogo} />
      </a>
      <img src={picture} alt="Something" className={css.cardImg} />
      <p className={css.cardTweets}>777 tweets</p>
      <p className={css.cardFollowers}>100,500 followers</p>
      <button className={css.cardBtn}>FOLLOW</button>
    </div>
  );
};

export default CardItem;
