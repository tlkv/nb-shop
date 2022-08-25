import sneakersMock from '../../data/sneakersMock';
import SneakerCard from './SneakerCard/SneakerCard';
import s from './SneakerCatalog.module.scss';

function SneakerCatalog() {
  return (
    <section className={s.sneakerCatalog}>
      {sneakersMock.map((i) => (
        <SneakerCard
          key={`sneaker_${i.model}`}
          title={i.title}
          price={i.price}
          imageUrlSmall={i.imageUrlSmall}
          model={i.model}
        />
      ))}
    </section>
  );
}

export default SneakerCatalog;
