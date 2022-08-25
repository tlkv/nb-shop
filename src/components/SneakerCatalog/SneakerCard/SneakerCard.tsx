import { Link } from 'react-router-dom';
import { SneakerData } from '../../../data/types';
import { useAppDispatch } from '../../../store/hooks';
import { addToBasket } from '../../../store/reducers/cartSlice';
import s from './SneakerCard.module.scss';

function SneakerCard({ imageUrlSmall, title, price, model }: SneakerData) {
  const dispatch = useAppDispatch();

  const addSneakers = () => dispatch(addToBasket({ imageUrlSmall, title, price, model }));

  return (
    <div className={s.sneakerCard}>
      <Link to={`/sneakers/${model}`} className={s.sneakerImageWrapper}>
        <img src={imageUrlSmall} alt="sneaker preview" className={s.sneakerCardImage} />
      </Link>
      <Link to={`/sneakers/${model}`} className={s.sneakerCardTitle}>
        {title}
      </Link>
      <div className={s.sneakerCardPrice}>
        <button
          type="button"
          aria-label="Add to cart"
          className={s.sneakerCardButton}
          onClick={addSneakers}
        />
        <span className={s.sneakerCardSign}>$</span>
        {price.toLocaleString('ru')}
      </div>
    </div>
  );
}

export default SneakerCard;
