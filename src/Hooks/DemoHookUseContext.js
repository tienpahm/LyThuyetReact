import React, {useContext} from "react";
import {context} from "./Context/ContextProvider";

export default function DemoHookUseContext() {
  //   let store = useContext(context);

  let {cartReducer} = useContext(context);
  let [cart, dispatch] = cartReducer;
  console.log({cartReducer, cart, dispatch});

  //   console.log(store);

  return <div></div>;
}
