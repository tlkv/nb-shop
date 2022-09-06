import Button from 'components/Button/Button';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { hideBasket, selectBasket } from '../../../store/reducers/basketSlice';
import BasketItem from './BasketItem/BasketItem';
import s from './BasketItemList.module.scss';

const BasketItemList = () => {
  const basket = useAppSelector(selectBasket);
  const dispatch = useAppDispatch();

  const basketHide = () => dispatch(hideBasket());

  return (
    <div className={s.basketListContainer}>
      <Button label="Hide basket" callback={basketHide} cNames={[s.basketCrossBtn]} />
      <h2 className={s.basketTitle}>My basket</h2>
      {basket.items.length === 0 && <div className={s.emptyBasket}>Your Basket is Empty</div>}
      <div className={s.basketItemsWrapper}>
        {basket.items.map((i) => (
          <BasketItem
            title={i.title}
            price={i.price}
            amount={i.amount}
            imageUrlSmall={i.imageUrlSmall}
            model={i.model}
            key={`basket_${i.model}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BasketItemList;
