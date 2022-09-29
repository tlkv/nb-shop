import { CustomButton } from '../../data/types';
import s from './Button.module.scss';

const Button = ({ label, text, cNames, callback }: CustomButton) => {
  return (
    <button
      type="button"
      aria-label={label}
      className={cNames?.reduce((acc, i) => `${acc} ${i}`, s.customButton)}
      onClick={callback}
    >
      {text}
    </button>
  );
};

export default Button;
