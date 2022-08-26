import { BasketState } from './types';

export const TAX_PRICE = 100;
export const SHIPPING_PRICE = 150;

export const LS_KEY = 'loc-storage-state';

export const DEF_STATE: BasketState = {
  items: [],
  count: 0,
  subTotal: 0,
  total: TAX_PRICE + SHIPPING_PRICE,
};
