import {IAction, ICartItem, IState} from "@/types/cartTypes";
import {createContext, useReducer} from "react";

interface ContextProps {
  state: IState;
  dispatch: React.Dispatch<IAction>;
}

const initialState: IState = {cart: {cartItems: []}};
export const Store = createContext<ContextProps>({
  state: initialState,
  dispatch: () => {},
});

function reducer(state: IState, action: IAction): any {
  switch (action.type) {
    case "CART_ADD_PRODUCT": {
      const new_item = action.payload as ICartItem;
      const existing_item = state.cart.cartItems.find(
        (item) => item.slug === new_item.slug
      );
      const cartItems = existing_item
        ? state.cart.cartItems.map((item) =>
            item.name === existing_item.name ? new_item : item
          )
        : [...state.cart.cartItems, new_item];

      return {...state, cart: {cartItems}};
    }
    default:
      return state;
  }
}

export function StoreProvider({children}: {children: React.ReactNode}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {state, dispatch};
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
