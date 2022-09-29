import { Link } from 'react-router-dom';
import { ProductData } from '../../data/types';
import { useAppDispatch } from '../../store/hooks';
import { addToBasket, hideBasket } from '../../store/reducers/basketSlice';
import Button from '../Button/Button';
import s from './ProductCard.module.scss';

const ProductCard = ({ imageUrlSmall, title, price, model }: ProductData) => {
  const dispatch = useAppDispatch();

  const basketHide = () => dispatch(hideBasket());
  const addProducts = () => dispatch(addToBasket({ imageUrlSmall, title, price, model }));

  return (
    <div className={s.productCard}>
      <Link to={`/catalog/${model}`} className={s.productImageWrapper} onClick={basketHide}>
        <img src={imageUrlSmall} alt="product preview" className={s.productCardImage} />
      </Link>
      <Link to={`/catalog/${model}`} className={s.productCardTitle} onClick={basketHide}>
        {title}
      </Link>
      <div className={s.productCardPrice}>
        <Button label="Add to basket" cNames={[s.productCardButton]} callback={addProducts} />
        <span className={s.productCardSign}>$ {price.toLocaleString('ru')}</span>
      </div>
    </div>
  );
};

export default ProductCard;
