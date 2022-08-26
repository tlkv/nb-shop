import { Link } from 'react-router-dom';
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
      <Link to={`/sneakers/${model}`} className={s.basketImgWrapper}>
        <img src={imageUrlSmall} alt="basket item preview" />
      </Link>
      <div className={s.basketContWrapper}>
        <Link to={`/sneakers/${model}`} className={s.basketItemTitle}>
          {title}
        </Link>
        <div className={s.basketContButtons}>
          <button
            type="button"
            aria-label="Remove"
            className={`${s.cartCount} ${s.removeOne}`}
            onClick={removeSneakers}
          />
          <span className={s.basketContAmount}>{amount}</span>
          <button
            type="button"
            aria-label="Remove"
            className={`${s.cartCount} ${s.addOne}`}
            onClick={addSneakers}
          />
          <span className={s.basketContPrice}>$ {(price * amount).toLocaleString('ru')}</span>
        </div>
      </div>
      <button
        type="button"
        aria-label="Remove"
        className={s.removeFromBasket}
        onClick={removeSnTypeFromBasket}
      />
    </div>
  );
}

export default BasketItem;
