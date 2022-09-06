import { useAppSelector } from 'store/hooks';
import { useEffect, useState } from 'react';
import getWindowSize from 'utils/windowSize';
import { TABLET_BREAKPOINT } from 'data/constants';
import { selectBasket } from 'store/reducers/basketSlice';
import productsMock from '../../data/productsMock';
import ProductCard from '../../components/ProductCard/ProductCard';
import s from './CatalogPage.module.scss';

const CatalogPage = () => {
  const basket = useAppSelector(selectBasket);

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(getWindowSize());
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <section className={s.CatalogPage}>
      {(!basket.showBasket || windowSize.innerWidth >= TABLET_BREAKPOINT) &&
        productsMock.map((i) => (
          <ProductCard
            key={`product_${i.model}`}
            title={i.title}
            price={i.price}
            imageUrlSmall={i.imageUrlSmall}
            model={i.model}
          />
        ))}
    </section>
  );
};

export default CatalogPage;
