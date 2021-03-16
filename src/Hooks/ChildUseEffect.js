import React, {useState, useEffect} from "react";

export default function ChildUseEffect() {
  let [number, setNumber] = useState(1);
  console.log("render Child");
  useEffect(() => {
    //viết cho didupdate
    console.log("didupdate");
    return () => {
      console.log("willUnmount");
    };
  }, [number]);
  return (
    <div>
      <p>Chi map u</p>
    </div>
  );
}
