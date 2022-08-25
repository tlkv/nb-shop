import { useNavigate, useParams } from 'react-router-dom';
import sneakersMock from '../../data/sneakersMock';
import { useAppDispatch } from '../../store/hooks';
import { addToBasket } from '../../store/reducers/cartSlice';
import s from './SneakerDetails.module.scss';

function SneakerDetails() {
  const { model } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const currentData = sneakersMock.find((i) => i.model === model);

  const addSneakers = () =>
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
    <section className={s.sneakerDetails}>
      {!currentData ? (
        <p>Not Found</p>
      ) : (
        <>
          <button
            type="button"
            aria-label="Back in catalog"
            onClick={toMainPage}
            className={s.backToMain}
          >
            Back in catalog
          </button>
          <div className={s.sneakerImgWrapper}>
            <img src={currentData?.imageUrlBig} alt="sneaker" className={s.sneakerImgBig} />
          </div>
          <h3 className={s.sneakerDetailsTitle}>{currentData?.title}</h3>
          <p>Item model number: {currentData?.model}</p>
          <div className={s.sneakerPrice}>
            <button
              type="button"
              aria-label="Add to cart"
              className={s.sneakerButton}
              onClick={addSneakers}
            />
            <span className={s.sneakerSign}>$</span>
            {currentData?.price.toLocaleString('ru')}
          </div>
        </>
      )}
    </section>
  );
}

export default SneakerDetails;
