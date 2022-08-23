import sneakersMock from '../../data/sneakersMock';
import SneakerCard from '../SneakerCard/SneakerCard';
import s from './SneakerCardList.module.scss';

function SneakerCardList() {
  return (
    <div className={s.Catalog}>
      {sneakersMock.map((i) => (
        <SneakerCard key={i.id} title={i.title} price={i.price} imageUrlSmall={i.imageUrlSmall} />
      ))}
    </div>
  );
}

export default SneakerCardList;
