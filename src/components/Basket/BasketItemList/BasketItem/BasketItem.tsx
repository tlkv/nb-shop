import { Link } from 'react-router-dom';
import Button from 'components/Button/Button';
import { ProductBasketData } from 'data/types';
import { useAppDispatch } from 'store/hooks';
import {
  addToBasket,
  hideBasket,
  removeFromBasket,
  removeProductsTypeFromBasket,
} from '../../../../store/reducers/basketSlice';

import s from './BasketItem.module.scss';

const BasketItem = ({ title, imageUrlSmall, price, amount, model }: ProductBasketData) => {
  const dispatch = useAppDispatch();

  const basketHide = () => dispatch(hideBasket());
  const addProducts = () => dispatch(addToBasket({ imageUrlSmall, title, price, model }));
  const removeProducts = () => dispatch(removeFromBasket({ imageUrlSmall, title, price, model }));
  const removeBasketEntity = () =>
    dispatch(removeProductsTypeFromBasket({ imageUrlSmall, title, price, model }));

  return (
    <div className={s.basketItem}>
      <Link to={`/catalog/${model}`} className={s.basketImgWrapper} onClick={basketHide}>
        <img src={imageUrlSmall} alt="basket item preview" />
      </Link>
      <div className={s.basketContWrapper}>
        <Link to={`/catalog/${model}`} className={s.basketItemTitle} onClick={basketHide}>
          {title}
        </Link>
        <div className={s.basketContButtons}>
          <Button label="Remove" cNames={[s.basketCount, s.removeOne]} callback={removeProducts} />
          <span className={s.basketContAmount}>{amount}</span>
          <Button label="Add" cNames={[s.basketCount, s.addOne]} callback={addProducts} />
          <span className={s.basketContPrice}>$ {(price * amount).toLocaleString('ru')}</span>
        </div>
      </div>
      <Button label="Remove all" cNames={[s.removeFromBasket]} callback={removeBasketEntity} />
    </div>
  );
};

export default BasketItem;
