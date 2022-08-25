import { Link } from 'react-router-dom';
import s from './Header.module.scss';
import HeaderCart from './HeaderCart/HeaderCart';

function Header() {
  return (
    <header className={s.header}>
      <nav className={s.navbar}>
        <Link to="/" className={s.headerItem}>
          <img src="./assets/svg/site_logo.svg" alt="site logo" className={s.siteLogo} />
        </Link>
        <HeaderCart />
      </nav>
    </header>
  );
}

export default Header;
