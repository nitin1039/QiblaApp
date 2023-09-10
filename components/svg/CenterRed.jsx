import * as React from "react";
import Svg, { Circle } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={76}
    height={76}
    viewBox="0 0 76 76"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle
      cx={38.2989}
      cy={38.2988}
      r={37}
      transform="rotate(6.14521 38.2989 38.2988)"
      fill="#FF3B30"
      stroke="#FF3B30"
    />
  </Svg>
);
export default SVGComponent;
