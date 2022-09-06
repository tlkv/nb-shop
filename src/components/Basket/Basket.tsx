import { useAppSelector } from 'store/hooks';
import { selectBasket } from 'store/reducers/basketSlice';
import BasketItemList from './BasketItemList/BasketItemList';
import BasketTotal from './BasketTotal/BasketTotal';
import s from './Basket.module.scss';

const Basket = () => {
  const basket = useAppSelector(selectBasket);

  return (
    <aside className={`${s.basket} ${basket.showBasket ? s.basketVisible : ''}`}>
      <BasketItemList />
      <BasketTotal />
    </aside>
  );
};

export default Basket;
