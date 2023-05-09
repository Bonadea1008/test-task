import { RiArrowGoBackFill } from 'react-icons/ri';
import { useLocation, useNavigate } from 'react-router-dom';
import css from './BackButton.module.css';

const BackButton = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className={css.buttonContainer}>
      <button
        type="button"
        className={css.button}
        onClick={() => {
          navigate(location?.state?.from ?? '/');
        }}
      >
        Go back <RiArrowGoBackFill className={css.icon} />
      </button>
    </div>
  );
};
export default BackButton;
