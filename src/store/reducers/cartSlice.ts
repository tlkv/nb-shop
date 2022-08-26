import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEF_STATE } from '../../data/constants';
import { BasketState, BasketStore, SneakerData } from '../../data/types';
import { RootState } from '../store';

const initialState: BasketState = DEF_STATE;

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    hydrate: (state, action: PayloadAction<BasketStore>) => {
      return action.payload.cart;
    },
    addToBasket: (state, action: PayloadAction<SneakerData>) => {
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
    removeFromBasket: (state, action: PayloadAction<SneakerData>) => {
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
    removeSneakersTypeFromBasket: (state, action: PayloadAction<SneakerData>) => {
      const ind = state.items.findIndex((i) => i.model === action.payload.model);

      if (ind !== -1) {
        state.count -= state.items[ind].amount;
        state.subTotal -= action.payload.price * state.items[ind].amount;
        state.total -= action.payload.price * state.items[ind].amount;
        state.items.splice(ind, 1);
      }
    },
  },
});

export const { addToBasket, removeFromBasket, removeSneakersTypeFromBasket, hydrate } =
  cartSlice.actions;

export const selectBasket = (state: RootState) => state.cart;

export default cartSlice.reducer;
