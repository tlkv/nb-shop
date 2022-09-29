import { useNavigate, useParams } from 'react-router-dom';
import productsMock from '../../data/productsMock';
import { useAppDispatch } from '../../store/hooks';
import { addToBasket } from '../../store/reducers/basketSlice';
import Button from '../../components/Button/Button';
import s from './DetailsPage.module.scss';

const DetailsPage = () => {
  const { model } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const currentData = productsMock.find((i) => i.model === model);

  const addCurrentProducts = () =>
    dispatch(
      addToBasket({
        imageUrlSmall: currentData?.imageUrlSmall,
        title: currentData?.title as string,
        price: currentData?.price as number,
        model: currentData?.model,
      })
    );

  const toMainPage = () => {
    navigate('/');
  };

  return (
    <section className={s.DetailsPage}>
      {!currentData ? (
        <div className={s.notFound}>Item not found</div>
      ) : (
        <>
          <Button
            label="Back to catalog"
            cNames={[s.backToMain]}
            callback={toMainPage}
            text="Back to catalog"
          />
          <div className={s.productImgWrapper}>
            <img src={currentData?.imageUrlBig} alt="product" className={s.productImgBig} />
          </div>
          <h2 className={s.DetailsPageTitle}>{currentData?.title}</h2>
          <span>Item model number: {currentData?.model}</span>
          <div className={s.productPrice}>
            <Button
              label="Add to basket"
              cNames={[s.productButton]}
              callback={addCurrentProducts}
            />
            <span className={s.productSign}>$ {currentData?.price.toLocaleString('ru')}</span>
          </div>
        </>
      )}
    </section>
  );
};

export default DetailsPage;
