import { useAppSelector } from '../../../store/hooks';
import { selectBasket } from '../../../store/reducers/cartSlice';
import BasketItem from './BasketItem/BasketItem';
import s from './BasketItemList.module.scss';

function BasketItemList() {
  const cart = useAppSelector(selectBasket);
  return (
    <div className={s.basketListContainer}>
      <h2 className={s.basketTitle}>My basket</h2>
      {cart.items.length === 0 && <div className={s.emptyBasket}>Your Basket is Empty</div>}
      <div className={s.basketItemsWrapper}>
        {cart.items.map((i) => (
          <BasketItem
            title={i.title}
            price={i.price}
            amount={i.amount}
            imageUrlSmall={i.imageUrlSmall}
            model={i.model}
            key={`cart_${i.model}`}
          />
        ))}
      </div>
    </div>
  );
}

export default BasketItemList;
