/* eslint-disable jsx-a11y/anchor-is-valid */
import s from './Header.module.scss';

// TODO: images ad background
// TODO:concatenate several classes

function Header() {
  return (
    <div className={s.Header}>
      <nav className={s.Navbar}>
        <a href="#" className={s.HeaderItem}>
          <img src="./assets/svg/site_logo.svg" alt="site logo" className={s.SiteLogo} />
        </a>
        <a href="#" className={s.HeaderItem}>
          <img src="./assets/svg/shopping_cart.svg" alt="site logo" />
        </a>
      </nav>
    </div>
  );
}

export default Header;
