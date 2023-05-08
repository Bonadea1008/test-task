import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink className={css.navLink} to="/">Home</NavLink>
      <NavLink className={css.navLink} to="/tweets">Tweets</NavLink>
    </nav>
  );
};

export default Navigation;