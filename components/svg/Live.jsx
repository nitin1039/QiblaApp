import * as React from "react";
import Svg, { Rect, Path, Circle } from "react-native-svg";
const LiveImg = (props) => (
  <Svg
    width={33}
    height={17}
    viewBox="0 0 33 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      x={0.733333}
      y={0.733333}
      width={31.5333}
      height={14.6667}
      rx={2.2}
      fill="#FF0000"
      stroke="#FF0000"
      strokeWidth={1.46667}
    />
    <Path
      d="M4.45569 13.2001V5.20007H5.90491V11.9852H9.42834V13.2001H4.45569ZM12.1354 5.20007V13.2001H10.6862V5.20007H12.1354ZM14.775 5.20007L16.8571 11.4969H16.9391L19.0172 5.20007H20.611L17.7906 13.2001H16.0016L13.1852 5.20007H14.775ZM21.6647 13.2001V5.20007H26.8678V6.41492H23.1139V8.58679H26.5983V9.80164H23.1139V11.9852H26.899V13.2001H21.6647Z"
      fill="white"
    />
    <Circle cx={29.3333} cy={3.66674} r={1.46667} fill="white" />
  </Svg>
);
export default LiveImg;
