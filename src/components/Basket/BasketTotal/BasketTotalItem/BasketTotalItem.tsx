import { BasketItemTotal } from '../../../../data/types';

/* eslint-disable react/destructuring-assignment */
const BasketTotalItem = ({ title, value, cNames }: BasketItemTotal) => {
  return (
    <div className={cNames?.reduce((acc, i) => `${acc} ${i}`, '')}>
      <div>{title}</div>
      <div>$ {value.toLocaleString('ru')}</div>
    </div>
  );
};

export default BasketTotalItem;
