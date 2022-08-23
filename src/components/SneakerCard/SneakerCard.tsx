import { SneakerData } from '../../data/types';
import s from './Sneaker.module.scss';

function SneakerCard({ imageUrlSmall, title, price }: SneakerData) {
  return (
    <div>
      <div>
        <img src={imageUrlSmall} alt="sneaker preview" />
        <h3>{title}</h3>
        <div className={s.catalogPrice}>
          <button type="button" aria-label="Add to cart" className={s.catalogButton} />
          Price: {price.toLocaleString()}
        </div>
      </div>
    </div>
  );
}

export default SneakerCard;
