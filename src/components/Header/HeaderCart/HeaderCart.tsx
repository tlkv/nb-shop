import { useAppSelector } from '../../../store/hooks';
import { selectBasket } from '../../../store/reducers/cartSlice';
import s from './HeaderCart.module.scss';

function HeaderCart() {
  const cart = useAppSelector(selectBasket);
  return (
    <div className={s.headerBasketContainer}>
      {cart.count > 0 && <div className={s.headerBasketCount}>{cart.count}</div>}
      <button type="button" aria-label="Shopping cart" className={s.headerBasket} />
    </div>
  );
}

export default HeaderCart;
