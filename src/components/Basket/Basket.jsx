import BasketItemList from './BasketItemList/BasketItemList';
import BasketTotal from './BasketTotal/BasketTotal';
import s from './Basket.module.scss';

function Basket() {
  return (
    <aside className={s.cart}>
      <BasketItemList />
      <BasketTotal />
    </aside>
  );
}

export default Basket;
