import Basket from 'components/Basket/Basket';
import { ReactNode } from 'react';
import Header from '../Header/Header';
import s from './Layout.module.scss';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div className={s.mainContainer}>
        {children}
        <Basket />
      </div>
    </>
  );
};

export default Layout;
