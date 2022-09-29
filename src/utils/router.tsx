import { Navigate } from 'react-router-dom';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import DetailsPage from '../pages/DetailsPage/DetailsPage';
import CatalogPage from '../pages/CatalogPage/CatalogPage';

const ROUTES_LIST = [
  { path: '/catalog/:model', component: <DetailsPage /> },
  { path: '/', component: <CatalogPage /> },
  { path: '/404', component: <NotFoundPage /> },
  { path: '*', component: <Navigate to="/404" /> },
];

export default ROUTES_LIST;
