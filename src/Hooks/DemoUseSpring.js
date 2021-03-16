import React from "react";
import {useSpring, animated} from "react-spring";

export default function DemoUseSpring(props) {
  const propsAnimation = useSpring({
    color_text: "red",
    opacity: 1,
    from: {opacity: 0, color_text: "black"},
    config: {duration: 1000},
  });
  const propsScroll = useSpring({
    scroll: 100,
    from: {scroll: 0},
    config: {duration: 10000},
  });

  const propsAniNumbner = useSpring({
    num: 120,
    color: "red",
    from: {num: 1, color: "blue"},
  });
  return (
    <div>
      <h4>Change color</h4>
      <animated.div
        style={{
          color: propsAnimation.color_text,
        }}>
        I will fade in
      </animated.div>

      <hr />
      <h4>Change Number</h4>
      <animated.div style={{color: propsAniNumbner.color}}>
        {propsAniNumbner.num}
      </animated.div>
      <animated.h1
        style={{fontSize: propsAniNumbner.num, color: propsAniNumbner.color}}>
        1
      </animated.h1>

      <hr />
      <h4>Scroll</h4>
      <animated.div scrollTop={propsScroll.scroll}></animated.div>
    </div>
  );
}
