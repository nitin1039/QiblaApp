import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={190}
    height={192}
    viewBox="0 0 237 239"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M119.103 0.797985L127.091 119.443L109.504 119.323L119.103 0.797985Z"
      fill="url(#paint0_linear_837_1826)"
    />
    <Path
      d="M117.497 237.242L127.104 117.629L109.516 117.51L117.497 237.242Z"
      fill="black"
    />
    <Path
      d="M235.798 119.818L117.157 127.178L117.268 110.847L235.798 119.818Z"
      fill="black"
    />
    <Path
      d="M0.803133 118.222L119.333 127.193L119.444 110.862L0.803133 118.222Z"
      fill="black"
    />
    <Path
      d="M175.247 62.8421L122.15 123.066L114.307 115.116L175.247 62.8421Z"
      fill="black"
    />
    <Path
      d="M61.354 175.199L122.294 122.925L114.451 114.975L61.354 175.199Z"
      fill="black"
    />
    <Path
      d="M174.479 175.968L114.255 122.871L122.206 115.028L174.479 175.968Z"
      fill="black"
    />
    <Path
      d="M62.1219 62.0731L114.396 123.013L122.346 115.17L62.1219 62.0731Z"
      fill="black"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_837_1826"
        x1={110.468}
        y1={104.79}
        x2={126.859}
        y2={104.901}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#700000" />
        <Stop offset={1} stopColor="#D62D2D" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SVGComponent;
