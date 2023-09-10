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
      cx={38.4794}
      cy={38.4794}
      r={37}
      transform="rotate(23.9062 38.4794 38.4794)"
      fill="#FFCC00"
      stroke="#FFCC00"
    />
  </Svg>
);
export default SVGComponent;
