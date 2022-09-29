export interface ProductData {
  title: string;
  price: number;
  imageUrlSmall?: string;
  imageUrlBig?: string;
  model?: string;
}

export interface ProductBasketData extends ProductData {
  amount: number;
}

export interface BasketState {
  items: ProductBasketData[];
  count: number;
  subTotal: number;
  total: number;
  showBasket: boolean;
}

export interface BasketStore {
  basket: BasketState;
}

export type clickCallbacks = () => void | {
  payload: ProductData | undefined;
  type: string;
};

export type CustomButton = {
  label: string;
  text?: string;
  cNames?: string[];
  callback?: clickCallbacks;
};

export type BasketItemTotal = {
  title: string;
  value: number;
  cNames: string[];
};
