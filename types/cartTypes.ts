export interface ICartItem {
  name: string;
  slug: string;
  category: string;
  image: string;
  price: number;
  brand: string;
  rating: number;
  numReviews: number;
  countInStock: number;
  description: string;
  isFeatured?: boolean;
  banner?: string;
  quantity: number;
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
