import React from "react";
import {animated, useSpring} from "react-spring";

export default function Ex2UseString() {
  let propsUseSpring = useSpring({
    color: [131, 111, 255], //màu đich đến
    from: {
      color: [238, 99, 99], //màu bắt đầu
    },
    config: {
      duration: 2000, //chỉnh sửa các thuộc tính về thời gian
      delay: 0,
    },
  });

  let propAnimation = useSpring({
    from: {
      width: "0%",
      height: "0%",
      fontSize: "10px",
    },
    to: async (next, cancel) => {
      await next({width: "100%", height: "100%", fontSize: "50px"});
      await next({width: "50%", height: "50%", fontSize: "10px"});

      await next({width: "100%", height: "100%", fontSize: "50px"});
    },
    config: {duration: 1000},
  });

  return (
    <div>
      <animated.h1
        style={{
          color: propsUseSpring.color.interpolate((r, g, b) => {
            return `rgb(${r},${g},${b})`;
          }),
        }}>
        123
      </animated.h1>
      <animated.h1 style={propAnimation}>Chi Map U</animated.h1>
    </div>
  );
}
