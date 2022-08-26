import { SHIPPING_PRICE, TAX_PRICE } from '../../../data/constants';
import { useAppSelector } from '../../../store/hooks';
import { selectBasket } from '../../../store/reducers/cartSlice';
import s from './BasketTotal.module.scss';

function BasketTotal() {
  const cart = useAppSelector(selectBasket);

  return (
    <div className={s.cartTotal}>
      <div className={s.cartTotalItem}>
        <div>Subtotal</div>
        <div>${cart?.subTotal?.toLocaleString('ru')}</div>
      </div>
      <div className={s.cartTotalItem}>
        <div>Tax</div>
        <div>${TAX_PRICE.toLocaleString('ru')}</div>
      </div>
      <div className={s.cartTotalItem}>
        <div>Shipping</div>
        <div>${SHIPPING_PRICE.toLocaleString('ru')}</div>
      </div>
      <div className={`${s.cartTotalItem} ${s.cartTotalPrice}`}>
        <div>
          <strong>Total</strong>
        </div>
        <div>
          <strong>${cart?.total?.toLocaleString('ru')}</strong>
        </div>
      </div>
    </div>
  );
}

export default BasketTotal;
