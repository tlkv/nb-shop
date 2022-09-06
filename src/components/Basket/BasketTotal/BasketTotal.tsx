import { SHIPPING_PRICE, TAX_PRICE } from '../../../data/constants';
import { useAppSelector } from '../../../store/hooks';
import { selectBasket } from '../../../store/reducers/basketSlice';
import s from './BasketTotal.module.scss';
import BasketTotalItem from './BasketTotalItem/BasketTotalItem';

const BasketTotal = () => {
  const basket = useAppSelector(selectBasket);

  return (
    <div className={s.basketTotal}>
      <BasketTotalItem title="Subtotal" value={basket?.subTotal} cNames={[s.basketTotalItem]} />
      <BasketTotalItem title="Tax" value={TAX_PRICE} cNames={[s.basketTotalItem]} />
      <BasketTotalItem title="Shipping" value={SHIPPING_PRICE} cNames={[s.basketTotalItem]} />
      <BasketTotalItem
        title="Total"
        value={basket?.total}
        cNames={[s.basketTotalItem, s.basketTotalPrice]}
      />
    </div>
  );
};

export default BasketTotal;
