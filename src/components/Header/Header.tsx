import Button from 'components/Button/Button';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { hideBasket, selectBasket, toggleBasket } from 'store/reducers/basketSlice';
import s from './Header.module.scss';

const Header = () => {
  const dispatch = useAppDispatch();
  const basket = useAppSelector(selectBasket);

  const basketHide = () => dispatch(hideBasket());
  const basketToggle = () => dispatch(toggleBasket());

  return (
    <header className={s.header}>
      <nav className={s.navbar}>
        <Link to="/" className={s.headerItem} onClick={basketHide}>
          <img src="./assets/svg/site_logo.svg" alt="site logo" className={s.siteLogo} />
        </Link>
        <div className={s.headerButtons}>
          <div className={s.headerBasketContainer}>
            {basket.count > 0 && <div className={s.headerBasketCount}>{basket.count}</div>}
            <Button label="Shopping basket" cNames={[s.headerBasket]} />
          </div>
          <Button label="burger" cNames={[s.headerBurger]} callback={basketToggle} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
