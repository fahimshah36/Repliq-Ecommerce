export interface ICartItem {
  name: string;
  price: number;
  quantity: number;
  slug: String;
}

export interface ICartState {
  cartItems: ICartItem[];
  //   total: number;
}

export interface IState {
  cart: ICartState;
  //   cartItems: ICartItem[];
}

export interface IStateLayout {
  cart: ICartState;
  cartItems: ICartState[];
}

export interface IAction {
  type: "CART_ADD_PRODUCT" | "REMOVE_ITEM" | "CLEAR_CART";
  payload?: ICartItem | number;
}
