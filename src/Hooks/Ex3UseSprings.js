import React from "react";
import {animated, useSpring, useSprings} from "react-spring";

export default function Ex3UseSprings() {
  let arrOpacity = [
    {opacity: 0.1, color: "red", content: "fullstack", num: 100},
    {opacity: 0.3, color: "green", content: "fullstack", num: 100},
    {opacity: 0.5, color: "blue", content: "fullstack", num: 100},
    {opacity: 0.7, color: "pink", content: "fullstack", num: 100},
    {opacity: 1, color: "limegreen", content: "fullstack", num: 100},
  ];

  let propsAnimation = useSprings(
    arrOpacity.length,
    arrOpacity.map((item) => {
      return {
        opacity: item.opacity,
        color: item.color,
        content: item.content,
        num: item.num,
        from: {
          opacity: 0,
          num: 0,
        },
        config: {
          duration: 3000,
        },
      };
    })
  );
  const renderContent = (item) => {
    let resultArrAnimation = [];
    for (let key in item) {
      if (key === "content" || key === "num") {
        resultArrAnimation.push(
          <animated.div style={item}>{item[key]}</animated.div>
        );
      }
    }
    return resultArrAnimation;
  };
  return (
    <div>
      {propsAnimation.map((item, index) => {
        console.log(item);
        return (
          <div>
            {/* <animated.div style={item}>{item.num}</animated.div>
            <animated.div style={item}>{item.content}</animated.div> */}
            {renderContent(item)}
          </div>
        );
      })}
    </div>
  );
}
