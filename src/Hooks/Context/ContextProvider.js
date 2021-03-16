import React, {useReducer} from "react";

export const context = React.createContext();
const initialCart = [];

const cartReducer = (state, action) => {
  switch (action.type) {
    case "addToCart":
      let cartUpdate = [...state];
      let index = cartUpdate.findIndex(
        (item) => item.id === action.itemClick.id
      );
      if (index !== -1) {
        cartUpdate[index].quantity += 1;
      } else {
        const itemcart = {...action.itemClick, quantity: 1};
        cartUpdate.push(itemcart);
      }
      return cartUpdate;

    default:
      return {...state};
  }
};

export default function ContextProvider(props) {
  let [cart, dispatch] = useReducer(cartReducer, initialCart);

  const store = {
    cartReducer: [cart, dispatch],
  };
  return <context.Provider value={store}>{props.children}</context.Provider>;
}
