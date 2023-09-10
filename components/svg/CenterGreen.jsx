import * as React from "react";
import Svg, { Circle } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={75}
    height={75}
    viewBox="0 0 75 75"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={37.5} cy={37.5} r={37.5} fill="#34C759" />
  </Svg>
);
export default SVGComponent;
