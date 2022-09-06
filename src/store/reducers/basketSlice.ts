import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SHIPPING_PRICE, TAX_PRICE } from '../../data/constants';
import { BasketState, ProductData } from '../../data/types';
import { RootState } from '../store';

const initialState: BasketState = {
  items: [],
  count: 0,
  subTotal: 0,
  total: TAX_PRICE + SHIPPING_PRICE,
  showBasket: false,
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<ProductData>) => {
      const ind = state.items.findIndex((i) => i.model === action.payload.model);
      if (ind !== -1) {
        state.items[ind].amount += 1;
      } else {
        state.items.unshift({ ...action.payload, amount: 1 });
      }
      state.count += 1;
      state.subTotal += action.payload.price;
      state.total += action.payload.price;
    },
    removeFromBasket: (state, action: PayloadAction<ProductData>) => {
      const ind = state.items.findIndex((i) => i.model === action.payload.model);

      if (ind !== -1) {
        if (state.items[ind].amount === 1) {
          state.items.splice(ind, 1);
        } else {
          state.items[ind].amount -= 1;
        }
        state.count -= 1;
        state.subTotal -= action.payload.price;
        state.total -= action.payload.price;
      }
    },
    removeProductsTypeFromBasket: (state, action: PayloadAction<ProductData>) => {
      const ind = state.items.findIndex((i) => i.model === action.payload.model);

      if (ind !== -1) {
        state.count -= state.items[ind].amount;
        state.subTotal -= action.payload.price * state.items[ind].amount;
        state.total -= action.payload.price * state.items[ind].amount;
        state.items.splice(ind, 1);
      }
    },
    toggleBasket: (state) => {
      state.showBasket = !state.showBasket;
    },

    hideBasket: (state) => {
      state.showBasket = false;
    },
  },
});

export const {
  addToBasket,
  removeFromBasket,
  removeProductsTypeFromBasket,
  toggleBasket,
  hideBasket,
} = basketSlice.actions;

export const selectBasket = (state: RootState) => state.basket;

export default basketSlice.reducer;
