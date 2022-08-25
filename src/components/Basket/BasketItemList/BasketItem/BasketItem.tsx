import { SneakerBasketData } from '../../../../data/types';
import { useAppDispatch } from '../../../../store/hooks';
import {
  addToBasket,
  removeFromBasket,
  removeSneakersTypeFromBasket,
} from '../../../../store/reducers/cartSlice';
import s from './BasketItem.module.scss';

function BasketItem({ title, imageUrlSmall, price, amount, model }: SneakerBasketData) {
  const dispatch = useAppDispatch();

  const addSneakers = () => dispatch(addToBasket({ imageUrlSmall, title, price, model }));

  const removeSneakers = () => dispatch(removeFromBasket({ imageUrlSmall, title, price, model }));

  const removeSnTypeFromBasket = () =>
    dispatch(removeSneakersTypeFromBasket({ imageUrlSmall, title, price, model }));

  return (
    <div className={s.basketItem}>
      <div className={s.basketImgWrapper}>
        <img src={imageUrlSmall} alt="cart preview" />
      </div>
      <div>
        <div>{title}</div>
        <div>
          <button
            type="button"
            aria-label="Remove"
            className={`${s.cartCount} ${s.removeOne}`}
            onClick={removeSneakers}
          />
          {amount}
          <button
            type="button"
            aria-label="Remove"
            className={`${s.cartCount} ${s.addOne}`}
            onClick={addSneakers}
          />
          ${price.toLocaleString()}
        </div>
      </div>
      <div>
        <button
          type="button"
          aria-label="Remove"
          className={s.removeFromBasket}
          onClick={removeSnTypeFromBasket}
        />
      </div>
    </div>
  );
}

/* <div>
      {title}, <br />
      price: {price}, <br />
      amount: {amount}
    </div> */

export default BasketItem;
