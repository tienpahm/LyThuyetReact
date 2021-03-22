import React, {useState} from "react";
import {useTrail, animated} from "react-spring";

const items = [
  {title: "FrontEndOnline", content: "cyberlearn"},
  {title: "FrontStartOnline", content: "cybersoft"},
  {title: "BackEndOnline", content: "cyber"},
];

export default function Ex4UseTrail() {
  const [status, setStatus] = useState(true);
  console.log(status);

  const [propsUseTrail, set, stop] = useTrail(items.length, () => ({
    opacity: status ? 1 : 0,
    x: status ? 0 : 20,
    height: status ? 110 : 0,
    color: "red",
    from: {opacity: 0, x: 20, height: 0, color: "green"},
    config: {
      duration: 1000,
    },
  }));
  console.log(propsUseTrail);
  set({
    opacity: status ? 1 : 0,
    x: status ? 0 : 20,
    height: status ? 110 : 0,
    color: "red",
    from: {opacity: 0, x: 20, height: 0, color: "green"},
    config: {
      duration: 1000,
    },
  });
  return (
    <div>
      <button
        className="btn btn-success"
        onClick={() => {
          setStatus(!status);
        }}>
        Set status
      </button>
      <button
        className="btn btn-danger"
        onClick={() => {
          set({color: "pink"});
        }}>
        Set color
      </button>
      {propsUseTrail.map((propsUseSpring, index) => {
        return (
          <animated.h1 ket={index} style={propsUseSpring}>
            {items[index].title}
          </animated.h1>
        );
      })}
    </div>
  );
}
