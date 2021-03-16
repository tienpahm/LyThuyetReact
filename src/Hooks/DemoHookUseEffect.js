import React, {useState, useEffect} from "react";
import ChildUseEffect from "./ChildUseEffect";

export default function DemoHookUseEffect() {
  let [number, setNumber] = useState(1);
  //useEffect là hàm chạy sau render thay cho didupdate và didmount trong moi trường hợp
  useEffect(() => {
    // console.log("didmount");
  });
  //Cách viết thay thế cho compoentdidmount
  useEffect(() => {
    // console.log("didmount");
  }, []);

  //Cách viết thay thế component didupdate
  useEffect(() => {
    console.log("didupdate");
    return () => {
      console.log("willUnmount");
    };
  }, [number]); //number là giá trị nếu update thì useEffect sẽ chạy

  const handleIncrease = () => {
    let newNumber = number + 1;
    setNumber(newNumber);
  };

  return (
    <div>
      <p>{number}</p>

      <button className="btn btn-danger" onClick={handleIncrease}></button>

      {number < 2 ? <ChildUseEffect /> : ""}
    </div>
  );
}
