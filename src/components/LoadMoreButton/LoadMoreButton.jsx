import PropTypes from 'prop-types';
import css from '../BackButton/BackButton.module.css';

const LoadMoreButton = ({ page, onLoadMoreClick }) => {
  return (
    <div className={css.buttonContainer}>
      {' '}
      <button
        type="button"
        className={css.button}
        onClick={() => onLoadMoreClick(page)}
      >
        Load more
      </button>
    </div>
  );
};

LoadMoreButton.propTypes = {
  page: PropTypes.number,
  onLoadMoreClick: PropTypes.func,
};

export default LoadMoreButton;
