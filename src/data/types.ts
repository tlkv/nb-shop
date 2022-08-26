export interface SneakerData {
  title: string;
  price: number;
  imageUrlSmall?: string;
  imageUrlBig?: string;
  model?: string;
}

export interface SneakerBasketData extends SneakerData {
  amount: number;
}

export interface BasketState {
  items: SneakerBasketData[];
  count: number;
  subTotal: number;
  total: number;
}

export interface BasketStore {
  cart: BasketState;
}
