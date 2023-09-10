import * as React from "react";
import Svg, { Path } from "react-native-svg";
const MasjidIcon = (props) => (
  <Svg
    width={25}
    height={23}
    viewBox="0 0 25 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M0.160156 21.5625C0.160156 22.3563 0.697531 23 1.36016 23L3.76016 23C4.42278 23 4.96016 22.3563 4.96016 21.5625L4.96016 7.1875L0.160156 7.1875L0.160156 21.5625ZM21.8787 12.9375C22.5484 12.1563 22.9602 11.2601 22.9602 10.2912C22.9602 7.91658 21.393 6.07793 19.6632 4.77025C18.0904 3.58117 16.6395 2.17512 15.4647 0.447871L15.1602 1.23727e-10L14.8557 0.447871C13.6808 2.17512 12.2303 3.58162 10.6572 4.77025C8.92728 6.07793 7.36016 7.91658 7.36016 10.2912C7.36016 11.2601 7.77191 12.1563 8.44166 12.9375L21.8787 12.9375ZM22.9602 14.375L7.36016 14.375C6.69753 14.375 6.16016 15.0187 6.16016 15.8125L6.16016 21.5625C6.16016 22.3563 6.69753 23 7.36016 23L8.56016 23L8.56016 20.125C8.56016 19.3312 9.09753 18.6875 9.76016 18.6875C10.4228 18.6875 10.9602 19.3312 10.9602 20.125L10.9602 23L13.3602 23L13.3602 19.7656C13.3602 17.6094 15.1602 16.5313 15.1602 16.5313C15.1602 16.5313 16.9602 17.6094 16.9602 19.7656L16.9602 23L19.3602 23L19.3602 20.125C19.3602 19.3312 19.8975 18.6875 20.5602 18.6875C21.2228 18.6875 21.7602 19.3312 21.7602 20.125L21.7602 23L22.9602 23C23.6228 23 24.1602 22.3563 24.1602 21.5625L24.1602 15.8125C24.1602 15.0187 23.6228 14.375 22.9602 14.375ZM2.56016 0C2.56016 0 0.160156 1.4375 0.160156 4.3125L0.160156 5.75L4.96016 5.75L4.96016 4.3125C4.96016 1.4375 2.56016 0 2.56016 0Z"
      fill={props.color}
    />
  </Svg>
);
export default MasjidIcon;
