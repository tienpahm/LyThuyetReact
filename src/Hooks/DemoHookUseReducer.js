import React, {useReducer} from "react";

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

let arrProduct = [
  {id: 1, name: "iphone", price: 1000},
  {id: 2, name: "htcphone", price: 2000},
  {id: 3, name: "LGphone", price: 3000},
];

export default function DemoHookUseReducer(props) {
  let [cart, dispatch] = useReducer(cartReducer, initialCart);

  const addToCart = (itemClick) => {
    const action = {
      type: "addToCart",
      itemClick,
    };
    dispatch(action);
  };
  return (
    <div className="container">
      <div className="row">
        {arrProduct.map((item, index) => {
          return (
            <div className="col-4" key={index}>
              <div className="card ">
                <img
                  className="card-img-top"
                  src="https://static.wikia.nocookie.net/maplestory/images/9/9a/ClassArtwork_Pathfinder.png/revision/latest?cb=20190120040546"
                  alt=""
                />
                <div className="card-body">
                  <h4 className="card-title">{item.name}</h4>
                  <p className="card-text">{item.price}</p>
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      addToCart(item);
                    }}>
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h3>Giỏ hàng</h3>
      <table class="table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>
            <th>quantity</th>
            <th>total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product, index) => {
            return (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.quantity * product.price}</td>
                <td>
                  <button className="btn btn-danger">X</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
