import React, {useState, useMemo} from "react";
import ChildUseMeno from "./ChildUseMeno";

export default function DemoHookUseMemo() {
  let [like, setLike] = useState(1);
  let cart = [
    {id: 1, name: "iphone", price: 1000},
    {id: 2, name: "htc phone", price: 2000},
    {id: 3, name: "lg phone", price: 3000},
  ];

  const cartMemo = useMemo(() => cart, []);
  return (
    <div className="mr-5">
      123 Like : {like} ♥
      <br />
      <p
        className="text-danger"
        style={{cursor: "pointer"}}
        onClick={() => {
          setLike(like + 1);
        }}>
        ♥
      </p>
      <br />
      <br />
      <ChildUseMeno cart={cartMemo} />
    </div>
  );
}
