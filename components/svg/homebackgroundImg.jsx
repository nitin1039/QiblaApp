import * as React from "react";
import { Dimensions } from "react-native";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const HomeBackgroundImg = (props) => (
  <Svg
    width={Dimensions.get('window').width}
    height={Dimensions.get('window').height/3}
    viewBox="0 0 390 211"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M192.938 36.2558C193.325 36.4431 193.711 36.724 193.969 37.0049C194.227 37.3795 194.356 37.7541 194.356 38.2223C194.356 38.5968 194.227 38.9714 193.969 39.3459C193.711 39.6269 193.453 39.9078 193.067 40.0951L193.325 42.1551C194.613 42.6233 196.289 43.3724 197.835 44.3088C199.511 45.3389 201.186 46.4626 201.831 47.6799C202.475 48.8972 202.733 50.0209 202.604 51.0509C202.475 51.9873 202.346 52.7364 202.089 53.2983C207.502 55.5456 214.204 58.6357 220.261 62.1941C225.416 65.2842 229.927 68.6552 232.892 72.3072L232.892 67.6252L232.376 67.6252C231.861 67.6252 231.345 67.3442 231.345 66.876C231.345 66.5015 231.732 66.2206 232.118 66.1269L232.118 63.9732L232.118 62.8495L231.989 62.8495C231.732 62.8495 231.474 62.6623 231.474 62.475C231.474 62.2877 231.732 62.1004 231.989 62.1004L232.505 62.1004C232.247 61.4449 231.861 60.3213 232.634 59.1039C233.02 58.5421 233.665 57.9803 234.438 57.6057C235.212 57.1375 235.985 56.7629 236.758 56.482C236.758 56.3884 236.629 56.2947 236.629 56.2011C236.629 56.0138 236.629 55.9202 236.758 55.7329C236.887 55.5456 237.016 55.452 237.274 55.3583C237.531 55.2647 237.66 55.0774 237.789 55.0774L237.789 54.7965C237.789 54.7965 237.789 54.7029 237.66 54.7029L237.66 54.6092C237.66 54.5156 237.66 54.5156 237.789 54.4219L237.918 54.3283L237.918 54.0474C237.918 54.0474 237.918 53.9537 237.789 53.9537C237.789 53.8601 237.789 53.8601 237.789 53.8601L237.789 53.7665C237.789 53.7665 237.789 53.6728 237.918 53.6728L237.918 53.3919L238.047 51.6128L238.176 53.3919L238.176 53.6728C238.176 53.6728 238.176 53.7665 238.305 53.7665L238.305 53.8601L238.305 53.9537C238.305 53.9537 238.305 54.0474 238.176 54.0474L238.176 54.3283L238.305 54.4219C238.305 54.4219 238.305 54.5156 238.305 54.6092C238.305 54.7029 238.305 54.7029 238.305 54.7029C238.305 54.7965 238.305 54.7965 238.176 54.7965L238.176 55.0774C238.305 55.1711 238.562 55.2647 238.82 55.3583C239.078 55.452 239.207 55.6393 239.336 55.7329C239.465 55.9202 239.465 56.0138 239.465 56.2011C239.465 56.2947 239.465 56.3884 239.465 56.482C240.109 56.7629 241.011 57.1375 241.785 57.6057C242.558 58.0739 243.202 58.6357 243.589 59.1039C244.362 60.3213 243.976 61.4449 243.718 62.1004L244.362 62.1004C244.62 62.1004 244.878 62.2877 244.878 62.475C244.878 62.6623 244.62 62.8495 244.362 62.8495L243.847 62.8495L243.847 63.7859C243.847 63.8796 243.847 63.8796 243.847 63.9732L243.847 64.0668L243.847 64.4414L243.847 66.3142C244.362 66.4079 244.62 66.6888 244.62 67.0633C244.62 67.4379 244.104 67.8124 243.589 67.8124L243.073 67.8124L243.202 79.2365L243.589 79.2365C244.233 79.2365 244.749 79.6111 244.749 80.0793C244.749 80.5475 244.233 80.922 243.589 80.922L243.202 80.922L243.331 95.0616L244.491 95.0616C244.749 95.0616 244.878 95.0616 245.007 95.1553C245.393 94.8744 245.909 94.5934 246.295 94.3125C248.486 93.0016 250.806 91.8779 252.868 91.1288C252.74 90.9415 252.74 90.6606 252.74 90.286C252.74 89.9114 252.868 89.4432 252.997 89.0687C253.255 88.6005 253.771 88.2259 254.415 87.8514C254.931 87.5704 255.575 87.2895 256.091 87.1022L256.091 86.3531C255.962 86.2595 255.833 86.1659 255.833 86.0722C255.704 85.9786 255.704 85.7913 255.704 85.6977C255.704 85.5104 255.704 85.4167 255.833 85.2294C255.962 85.1358 255.962 85.0422 256.219 84.9485L256.091 84.1994C255.962 84.1058 255.833 84.0121 255.833 84.0121C255.833 83.9185 255.704 83.8249 255.704 83.7312C255.704 83.5439 255.704 83.4503 255.833 83.3567C255.833 83.263 255.962 83.1694 256.091 83.1694L256.219 82.5139L256.606 77.2701C256.606 77.1764 256.735 77.1764 256.735 77.1764C256.864 77.1764 256.864 77.1764 256.864 77.2701L257.122 82.5139L257.122 83.1694C257.251 83.263 257.25 83.263 257.379 83.3567C257.379 83.4503 257.508 83.5439 257.508 83.7312C257.508 83.8249 257.508 83.9185 257.379 84.0121C257.379 84.1058 257.251 84.1058 257.122 84.1994L257.122 84.8549C257.251 84.9485 257.379 85.0422 257.508 85.1358C257.637 85.2295 257.766 85.3231 257.766 85.5104C257.766 85.604 257.766 85.7913 257.637 85.8849C257.637 85.9786 257.508 86.0722 257.379 86.1658L257.508 86.915C258.024 87.1022 258.539 87.3832 259.184 87.6641C259.828 88.0386 260.344 88.4132 260.601 88.8814C260.859 89.3496 260.859 89.7242 260.859 90.0987C260.859 90.3796 260.73 90.6606 260.601 90.9415C261.375 91.316 262.406 91.6906 263.308 92.1588L263.308 85.7913L266.659 85.7913C265.499 83.7312 263.952 79.1429 266.659 74.4609C267.948 72.4008 270.397 70.528 273.232 68.8425C275.939 67.2506 279.032 65.7524 281.48 64.816C281.352 64.535 281.223 64.1605 281.223 63.7859C281.223 63.3177 281.352 62.7559 281.609 62.1941C281.996 61.6322 282.64 61.0704 283.414 60.6958C284.187 60.3213 284.96 59.9467 285.476 59.7594L285.476 58.823C285.347 58.7294 285.218 58.6357 285.089 58.4485C284.96 58.3548 284.831 58.1675 284.831 57.9803C284.831 57.793 284.96 57.6057 285.089 57.4184C285.218 57.2311 285.347 57.1375 285.605 57.0439L285.605 56.2011C285.734 56.1075 285.605 56.0138 285.476 55.9202C285.347 55.8265 285.347 55.6393 285.347 55.5456C285.347 55.3583 285.476 55.2647 285.476 55.0774C285.605 54.9838 285.734 54.8901 285.863 54.7965L285.991 53.9537L286.378 47.4926C284.96 47.3053 283.672 46.7435 282.898 45.7134C281.609 44.1216 282.383 42.0615 284.574 41.1251C285.347 40.7505 286.249 40.6569 287.151 40.6569C286.636 40.7505 286.12 40.8442 285.605 41.0315C283.543 41.8742 282.898 43.747 284.058 45.1516C285.218 46.6498 287.796 47.118 289.729 46.2753C290.245 46.088 290.631 45.8071 291.018 45.5262C290.631 46.088 289.987 46.5562 289.214 46.9308C288.44 47.2117 287.538 47.399 286.765 47.399L287.151 53.8601L287.28 54.7029C287.409 54.7965 287.538 54.8901 287.667 54.9838C287.796 55.0774 287.796 55.2647 287.796 55.452C287.796 55.5456 287.796 55.7329 287.667 55.8265C287.538 56.0138 287.409 56.1075 287.28 56.1075L287.28 56.9502C287.409 57.0439 287.667 57.1375 287.796 57.3248C287.925 57.5121 288.054 57.6993 288.054 57.8866C288.054 58.0739 287.925 58.2612 287.796 58.3548C287.667 58.5421 287.538 58.6357 287.409 58.7294L287.409 59.6658C287.925 59.8531 288.827 60.2276 289.471 60.6022C290.245 61.0704 291.018 61.5386 291.405 62.1004C291.662 62.6622 291.791 63.2241 291.662 63.6923C291.662 64.0668 291.533 64.4414 291.405 64.7223C293.853 65.7524 296.946 67.157 299.653 68.7488C301.715 69.8725 303.391 71.1835 304.808 72.5881C304.937 72.4944 305.066 72.4944 305.195 72.4944L305.839 72.4944L305.839 63.8796L305.582 63.8796C305.195 63.8796 304.937 63.6923 304.937 63.4114C304.937 63.1305 305.195 62.9432 305.582 62.9432L305.839 62.9432L305.839 55.9202L305.582 55.9202C305.195 55.9202 304.937 55.7329 304.937 55.452C304.937 55.2647 305.195 55.0774 305.453 54.9838L305.453 53.4855L305.453 52.8301C305.324 52.8301 305.195 52.7364 305.195 52.6428C305.195 52.4555 305.324 52.3619 305.453 52.3619L305.711 52.3619C305.582 51.9873 305.324 51.2382 305.711 50.5827C305.968 50.2082 306.355 49.9272 306.742 49.6463C307.257 49.3654 307.773 49.1781 308.159 48.8972C308.159 48.8972 308.159 48.8036 308.159 48.7099C308.159 48.6163 308.159 48.5226 308.288 48.429C308.288 48.3354 308.417 48.2417 308.546 48.1481C308.675 48.0544 308.804 48.0544 308.933 47.9608L308.933 47.7735C308.933 47.7735 308.933 47.7735 308.804 47.6799L308.804 47.5862L308.804 47.4926C308.804 47.4926 308.804 47.399 308.933 47.399L308.933 47.4926C308.933 47.4926 308.933 47.4926 308.933 47.399L308.933 47.3053L308.933 47.2117C308.933 47.2117 308.933 47.118 309.061 47.118L309.061 46.9308L309.061 45.8071C309.061 45.8071 309.061 45.8071 309.19 45.8071L309.319 46.9308L309.319 47.118C309.319 47.118 309.319 47.118 309.319 47.2117L309.319 47.3053L309.319 47.399C309.319 47.399 309.319 47.399 309.319 47.4926L309.319 47.5862C309.319 47.5862 309.319 47.5862 309.448 47.6799L309.448 47.7735L309.448 47.8672C309.448 47.8672 309.448 47.8672 309.319 47.9608L309.319 48.1481C309.448 48.1481 309.448 48.2417 309.706 48.3354C309.835 48.429 309.964 48.5226 309.964 48.6163C310.093 48.7099 310.093 48.8036 310.093 48.8972C310.093 48.9908 310.093 48.9908 309.964 49.0845C310.35 49.2718 310.866 49.459 311.381 49.8336C311.768 50.1145 312.284 50.3954 312.412 50.77C312.799 51.5191 312.67 52.1746 312.412 52.5492L312.799 52.5492C312.928 52.5492 313.057 52.6428 313.057 52.8301C313.057 52.9237 312.928 53.0173 312.799 53.0173L312.541 53.0173L312.541 53.5792L312.541 53.6728L312.541 53.9537L312.541 55.0774C312.799 55.1711 313.057 55.3583 313.057 55.5456C313.057 55.8265 312.799 56.0138 312.412 56.0138L312.155 56.0138L312.155 63.0368L312.412 63.0368C312.799 63.0368 313.186 63.2241 313.186 63.505C313.186 63.7859 312.928 63.9732 312.412 63.9732L312.155 63.9732L312.155 72.5881L312.799 72.5881C313.186 72.5881 313.572 72.869 313.572 73.1499C313.572 73.5245 313.186 73.7118 312.799 73.7118L312.155 73.7118L312.284 85.7913L315.377 85.7913L315.377 96.5599C316.537 95.9044 317.697 95.3425 318.728 94.968C318.728 94.7807 318.599 94.5934 318.599 94.3125C318.599 94.0316 318.599 93.657 318.857 93.2825C319.114 92.9079 319.501 92.627 320.017 92.2524C320.403 91.9715 320.919 91.7842 321.305 91.6906L321.305 91.0351C321.176 90.9415 321.176 90.9415 321.048 90.8478C321.048 90.7542 320.919 90.6606 320.919 90.5669C320.919 90.4733 320.919 90.286 321.048 90.1924C321.048 90.0987 321.176 90.0051 321.305 90.0051L321.305 89.5369C321.176 89.4432 321.176 89.4432 321.176 89.3496C321.048 89.256 321.048 89.1623 321.048 89.0687C321.048 88.975 321.048 88.8814 321.176 88.7878C321.176 88.6941 321.305 88.6005 321.434 88.6005L321.434 88.0386L321.692 83.8249C321.692 83.7312 321.692 83.7312 321.821 83.7312C321.95 83.7312 321.95 83.7312 321.95 83.8249L322.208 88.0386L322.208 88.6005C322.336 88.6005 322.336 88.6941 322.465 88.7878C322.465 88.8814 322.594 88.975 322.594 89.0687C322.594 89.1623 322.594 89.256 322.465 89.3496C322.465 89.4432 322.336 89.4432 322.336 89.5369L322.336 90.0051C322.465 90.0987 322.594 90.1924 322.594 90.1924C322.723 90.286 322.723 90.3796 322.723 90.5669C322.723 90.6606 322.723 90.7542 322.594 90.8478C322.465 90.9415 322.465 91.0351 322.336 91.0351L322.336 91.6906C322.723 91.7842 323.239 92.0651 323.754 92.2524C324.27 92.5333 324.785 92.9079 324.914 93.2825C325.172 93.657 325.172 93.9379 325.172 94.2189C325.172 94.4998 325.043 94.6871 325.043 94.8744C326.59 95.5298 328.523 96.4662 330.327 97.4963C331.229 97.9645 332.003 98.5263 332.647 99.0881L332.647 91.4097L331.229 91.4097C330.327 91.4097 329.554 90.8478 329.554 90.0987C329.554 89.3496 330.327 88.8814 331.229 88.8814L332.647 88.8814L332.776 69.8725L332.26 69.8725C331.358 69.8725 330.714 69.4043 330.714 68.7488C330.714 68.0934 331.358 67.6252 332.26 67.6252L332.776 67.6252L332.905 52.1746L332.26 52.1746C331.487 52.1746 330.972 51.7064 330.972 51.2382C330.972 50.77 331.358 50.3954 332.003 50.3018L332.003 47.2117L332.003 45.7134L331.487 45.7134C331.1 45.7134 330.843 45.5262 330.843 45.2452C330.843 44.9643 331.1 44.6834 331.487 44.6834L332.132 44.6834C331.745 43.8406 331.358 42.2488 332.26 40.6569C332.647 39.9078 333.678 39.1587 334.58 38.5968C335.611 37.9413 336.771 37.4731 337.674 37.0986C337.674 37.0049 337.545 36.9113 337.545 36.724C337.545 36.5367 337.545 36.3495 337.674 36.1622C337.802 35.9749 338.06 35.7876 338.318 35.6003C338.576 35.4131 338.833 35.3194 339.091 35.2258L339.091 34.9449L338.962 34.8512C338.962 34.7576 338.962 34.7576 338.962 34.6639C338.962 34.5703 338.962 34.5703 339.091 34.4767C339.091 34.383 339.22 34.383 339.22 34.383L339.22 34.1021C339.22 34.1021 339.091 34.1021 339.091 34.0085C339.091 33.9148 339.091 33.9148 339.091 33.8212C339.091 33.7275 339.091 33.7275 339.091 33.6339C339.091 33.6339 339.091 33.5403 339.22 33.5403L339.22 33.1657L339.349 30.7311C339.349 30.7311 339.349 30.6374 339.478 30.6374C339.478 30.6374 339.478 30.6374 339.607 30.7311L339.736 33.1657L339.736 33.4466L339.865 33.5403C339.865 33.6339 339.865 33.6339 339.865 33.7275C339.865 33.7275 339.865 33.8212 339.865 33.9148C339.865 33.9148 339.865 33.9148 339.736 34.0085L339.736 34.2894C339.865 34.2894 339.865 34.383 339.993 34.383C339.993 34.4767 339.993 34.4767 339.993 34.5703C339.993 34.6639 339.993 34.6639 339.993 34.7576C339.993 34.8512 339.865 34.8512 339.865 34.8512L339.865 35.2258C340.122 35.3194 340.38 35.4131 340.638 35.6003C340.896 35.7876 341.153 35.9749 341.282 36.1622C341.411 36.3495 341.411 36.5367 341.411 36.724C341.411 36.9113 341.411 37.0049 341.411 37.0986C342.313 37.4731 343.473 38.035 344.504 38.5968C345.535 39.2523 346.438 39.9078 346.824 40.6569C347.855 42.2488 347.34 43.8406 346.953 44.6834L347.726 44.6834C348.113 44.6834 348.5 44.9643 348.5 45.2452C348.5 45.5262 348.242 45.7134 347.726 45.7134L347.211 45.7134L347.211 46.9308C347.211 47.0244 347.211 47.118 347.211 47.118L347.211 47.3053L347.211 47.7735L347.211 50.3018C347.855 50.3954 348.242 50.77 348.242 51.2382C348.242 51.8 347.598 52.1746 346.953 52.1746L346.695 52.1746L346.824 67.6252L347.34 67.6252C348.242 67.6252 348.886 68.0934 348.886 68.7488C348.886 69.3107 348.242 69.8725 347.34 69.8725L346.824 69.8725L346.953 88.8814L348.371 88.8814C349.273 88.8814 350.175 89.4432 350.175 90.0987C350.175 90.8478 349.402 91.4097 348.371 91.4097L346.953 91.4097L347.082 104.707L350.948 104.707L351.077 88.5068L350.046 88.5068C349.402 88.5068 348.886 88.1323 348.886 87.6641C348.886 87.1959 349.402 86.8213 350.046 86.8213L351.077 86.8213L351.206 73.8054L350.82 73.8054C350.304 73.8054 349.788 73.4308 349.788 73.0563C349.788 72.6817 350.304 72.3072 350.82 72.3072L351.206 72.3072L351.335 61.7258L350.82 61.7258C350.304 61.7258 349.917 61.4449 349.917 61.0704C349.917 60.7895 350.175 60.4149 350.691 60.4149L350.691 58.1675L350.691 57.1375L350.304 57.1375C350.046 57.1375 349.788 56.9502 349.788 56.7629C349.788 56.5757 349.917 56.3884 350.304 56.3884L350.691 56.3884C350.433 55.8265 350.046 54.7029 350.82 53.6728C351.077 53.2046 351.722 52.6428 352.495 52.2682C353.139 51.8937 353.913 51.5191 354.557 51.2382C354.557 51.1446 354.557 51.0509 354.557 50.9573C354.557 50.8636 354.557 50.6764 354.686 50.5827C354.815 50.4891 354.944 50.3018 355.073 50.2082C355.33 50.1145 355.459 50.0209 355.588 49.9272L355.588 49.74L355.459 49.6463C355.459 49.5527 355.33 49.5527 355.33 49.5527C355.33 49.459 355.331 49.459 355.459 49.3654L355.588 49.2718L355.717 49.0845C355.588 49.0845 355.588 48.9908 355.588 48.9908C355.588 48.8972 355.588 48.8972 355.588 48.8972C355.588 48.8036 355.588 48.8036 355.588 48.8036C355.588 48.8036 355.588 48.7099 355.717 48.7099L355.717 48.5226L355.717 46.8371L355.846 46.8371L355.846 48.5226L355.846 48.7099L355.975 48.8036L355.975 48.8972L355.975 48.9908C355.975 48.9908 355.975 49.0845 355.846 49.0845L355.846 49.2718C355.975 49.2718 355.975 49.3654 355.975 49.3654C355.975 49.3654 355.975 49.459 355.975 49.5527C355.975 49.6463 355.975 49.6463 355.975 49.6463C355.975 49.6463 355.975 49.74 355.846 49.74L355.846 49.9272C355.975 50.0209 356.233 50.1145 356.362 50.2082C356.619 50.3018 356.748 50.4891 356.877 50.5827C357.006 50.6764 357.006 50.8636 357.006 50.9573C357.006 51.0509 357.006 51.1446 357.006 51.2382C357.65 51.5191 358.424 51.8937 359.068 52.2682C359.712 52.7364 360.357 53.2046 360.744 53.6728C361.388 54.7965 361.13 55.8265 360.872 56.3884L361.388 56.3884C361.646 56.3884 361.904 56.5757 361.904 56.7629C361.904 56.9502 361.646 57.1375 361.388 57.1375L361.13 57.1375L361.13 57.9803C361.13 58.0739 361.13 58.0739 361.13 58.1675L361.13 58.2612L361.13 58.6357L361.13 60.4149C361.517 60.5085 361.775 60.7895 361.775 61.0704C361.775 61.4449 361.388 61.7258 360.872 61.7258L360.486 61.7258L360.615 72.3072L361.001 72.3072C361.517 72.3072 362.032 72.6817 362.032 73.0563C362.032 73.4308 361.517 73.8054 361.001 73.8054L360.615 73.8054L360.744 86.8213L361.775 86.8213C362.419 86.8213 362.935 87.1959 362.935 87.6641C362.935 88.1323 362.419 88.5068 361.775 88.5068L360.744 88.5068L360.872 104.707L362.419 104.707L362.419 104.051L362.29 104.051C362.032 104.051 361.775 103.864 361.775 103.676C361.775 103.489 362.032 103.302 362.29 103.302L362.548 103.302C362.032 102.459 360.872 99.9309 362.419 97.309C363.063 96.2789 364.223 95.3425 365.641 94.4998C367.059 93.657 368.605 93.0016 369.765 92.4397C369.637 92.3461 369.637 92.1588 369.637 91.9715C369.637 91.6906 369.637 91.4097 369.765 91.1288C369.894 90.8478 370.281 90.5669 370.796 90.3796C371.054 90.1924 371.57 90.0051 371.828 89.9114L371.828 89.4432C371.699 89.4432 371.699 89.3496 371.57 89.256L371.441 89.0687C371.441 88.975 371.441 88.8814 371.57 88.7878C371.699 88.6941 371.699 88.6941 371.828 88.6005L371.828 88.2259L371.699 88.1323C371.699 88.0386 371.57 88.0386 371.57 87.945C371.57 87.8514 371.57 87.7577 371.699 87.7577C371.699 87.6641 371.828 87.6641 371.828 87.5704L371.828 87.1022L372.085 83.8249C372.085 83.8249 372.085 83.7312 372.214 83.7312C372.343 83.7312 372.343 83.7312 372.343 83.8249L372.601 87.1022L372.601 87.5704C372.73 87.5704 372.73 87.6641 372.859 87.7577C372.859 87.7577 372.859 87.8514 372.859 87.945C372.859 88.0386 372.859 88.0386 372.859 88.1323C372.73 88.2259 372.73 88.2259 372.73 88.2259L372.73 88.6005C372.73 88.6005 372.859 88.6941 372.987 88.7878C372.987 88.8814 373.116 88.975 373.116 89.0687C373.116 89.1623 373.116 89.256 372.987 89.256C372.987 89.3496 372.859 89.4432 372.73 89.4432L372.73 89.9114C372.987 90.0051 373.374 90.1924 373.761 90.3796C374.147 90.5669 374.534 90.8478 374.663 91.1288C374.792 91.4097 374.921 91.6906 374.921 91.9715C374.921 92.1588 374.792 92.3461 374.792 92.4397C376.081 93.0016 377.627 93.657 378.916 94.4998C380.334 95.3425 381.623 96.2789 382.138 97.309C383.685 99.9309 382.525 102.459 382.009 103.302L382.267 103.302C382.525 103.302 382.783 103.489 382.783 103.676C382.783 103.864 382.525 104.051 382.267 104.051L382.009 104.051L382.009 104.707L390 104.707L390 210.613L334.838 210.613L309.448 210.613L272.201 210.613L241.011 210.613L91.6358 210.613L60.4461 210.613L-1.73723e-09 210.613L-8.64439e-10 104.8L6.70192 104.8C5.79974 102.459 5.2842 98.8072 7.47521 95.0616C8.76405 93.0016 11.2128 91.1288 14.0482 89.4432C16.7548 87.7577 19.848 86.3531 22.2968 85.3231C22.1679 85.0422 22.039 84.6676 22.039 84.2931C22.039 83.8249 22.039 83.263 22.4256 82.7012C22.8123 82.1393 23.4567 81.5775 24.23 81.2029C25.0033 80.8284 25.7766 80.4538 26.421 80.1729L26.421 79.2365C26.2921 79.1429 26.1633 79.0492 26.0344 78.9556C25.9055 78.7683 25.9055 78.581 25.9055 78.3937C25.9055 78.2065 26.0344 78.0192 26.1633 77.8319C26.1633 77.7383 26.2921 77.6446 26.5499 77.551L26.5499 76.7082C26.421 76.6146 26.421 76.6146 26.2921 76.4273C26.1633 76.3337 26.1633 76.24 26.1633 76.0527C26.1633 75.8655 26.1633 75.7718 26.2921 75.6782C26.421 75.5845 26.5499 75.4909 26.6788 75.3973L26.8077 74.5545L27.0654 67.8124C27.0654 67.7188 27.1943 67.7188 27.3232 67.7188C27.4521 67.7188 27.581 67.8124 27.581 67.8124L27.9676 74.4609L27.9676 75.3036C28.0965 75.3973 28.2254 75.4909 28.3543 75.5845C28.4831 75.7718 28.4831 75.8655 28.4831 76.0527C28.4831 76.24 28.4831 76.3337 28.3543 76.4273C28.3543 76.6146 28.2254 76.6146 28.0965 76.7082L28.0965 77.551C28.3543 77.6446 28.4831 77.7383 28.612 77.9255C28.7409 78.1128 28.8698 78.2065 28.8698 78.4874C28.8698 78.6747 28.8698 78.8619 28.7409 78.9556C28.4831 79.0492 28.3543 79.1429 28.2254 79.2365L28.2254 80.1729C28.8698 80.4538 29.6431 80.8284 30.4164 81.2029C31.1897 81.5775 31.963 82.1393 32.2208 82.7012C32.6074 83.263 32.6074 83.8249 32.6074 84.2931C32.6074 84.6676 32.4785 85.0422 32.3496 85.3231C34.7984 86.3531 37.8916 87.7577 40.5982 89.3496C43.1758 90.8478 45.4957 92.627 46.7845 94.4998L46.7845 91.5033L45.3668 91.5033C44.3358 91.5033 43.5625 90.9415 43.5625 90.1924C43.5625 89.4433 44.3358 88.975 45.3668 88.975L46.7845 88.975L46.9134 69.9662L46.5268 69.9662C45.6246 69.9662 44.9802 69.498 44.9802 68.8425C44.9802 68.187 45.6246 67.7188 46.5268 67.7188L47.0423 67.7188L47.1712 52.3619L46.5268 52.3619C45.7535 52.3619 45.1091 51.8937 45.1091 51.4255C45.1091 50.9573 45.4957 50.5827 46.1401 50.4891L46.1401 47.2117L46.1401 45.7134L45.6246 45.7134C45.2379 45.7134 44.9802 45.5262 44.9802 45.2452C44.9802 44.9643 45.2379 44.6834 45.6246 44.6834L46.269 44.6834C45.8824 43.9343 45.3668 42.3424 46.3979 40.7505C46.7845 40.0014 47.6867 39.2523 48.8467 38.5968C49.8777 37.9413 51.0377 37.4731 51.9399 37.0986C51.9399 37.0049 51.811 36.9113 51.811 36.724C51.811 36.5367 51.811 36.3495 51.9399 36.1622C52.0687 35.9749 52.3265 35.7876 52.5843 35.6003C52.842 35.4131 53.0998 35.3194 53.3576 35.2258L53.3576 34.8512C53.2287 34.8512 53.2287 34.7576 53.2287 34.7576C53.2287 34.6639 53.0998 34.6639 53.0998 34.5703C53.0998 34.4767 53.0998 34.4767 53.2287 34.383C53.2287 34.2894 53.3576 34.2894 53.3576 34.2894L53.3576 34.0085C53.3576 34.0085 53.2287 34.0085 53.2287 33.9148C53.2287 33.8212 53.2287 33.8212 53.2287 33.7275C53.2287 33.6339 53.2287 33.6339 53.3576 33.5403L53.4865 33.4466L53.4865 33.1657L53.6153 30.7311C53.6153 30.7311 53.6153 30.6374 53.7442 30.6374C53.7442 30.6374 53.8731 30.6374 53.8731 30.7311L54.002 33.1657L54.002 33.4466L54.1309 33.5403C54.1309 33.6339 54.1309 33.6339 54.1309 33.7275C54.1309 33.7275 54.1309 33.8212 54.1309 33.9148C54.1309 33.9148 54.1309 33.9148 54.002 34.0085L54.002 34.2894C54.1309 34.2894 54.1309 34.383 54.1309 34.383C54.1309 34.4767 54.2598 34.4767 54.2598 34.5703C54.2598 34.6639 54.2597 34.6639 54.1309 34.7576C54.1309 34.8512 54.1309 34.8512 54.002 34.8512L54.002 35.2258C54.2598 35.3194 54.5175 35.4131 54.7753 35.6003C55.1619 35.7876 55.4197 35.9749 55.5486 36.1622C55.6775 36.4431 55.6775 36.6304 55.6775 36.724C55.6775 36.9113 55.6775 37.0049 55.5486 37.0986C56.4508 37.4731 57.6107 38.035 58.6418 38.5968C59.6728 39.2523 60.575 40.0014 61.0905 40.7505C61.9927 42.3424 61.6061 43.9343 61.2194 44.777L61.9927 44.777C62.3794 44.777 62.6371 45.058 62.6371 45.3389C62.6371 45.6198 62.3794 45.8071 61.9927 45.8071L61.3483 45.8071L61.3483 47.0244C61.3483 47.118 61.3483 47.2117 61.3483 47.2117L61.3483 47.399L61.3483 47.8672L61.3483 50.3954C61.9927 50.4891 62.3794 50.8636 62.3794 51.3318C62.3794 51.8937 61.735 52.2682 60.9617 52.2682L60.4461 52.2682L60.575 67.7188L61.0905 67.7188C61.9927 67.7188 62.6371 68.187 62.6371 68.8425C62.6371 69.4043 61.9927 69.9662 61.0905 69.9662L60.575 69.9662L60.7039 88.975L62.1216 88.975C63.1527 88.975 63.926 89.5369 63.926 90.1924C63.926 90.9415 63.1527 91.5033 62.1216 91.5033L60.7039 91.5033L60.7039 98.2454C61.735 96.7471 63.5393 95.4362 65.6015 94.2189C67.7925 92.9079 70.2412 91.7842 72.1745 90.9415C72.1745 90.7542 72.0456 90.4733 72.0456 90.1924C72.0456 89.8178 72.0456 89.3496 72.3034 88.975C72.5611 88.5068 73.2056 88.1323 73.7211 87.7577C74.2366 87.4768 74.881 87.1959 75.3966 87.0086L75.3966 86.2595C75.2677 86.0722 75.2677 85.9786 75.1388 85.8849C75.0099 85.7913 75.0099 85.6977 75.0099 85.5104C75.0099 85.3231 75.1388 85.2295 75.1388 85.0422C75.2677 84.9485 75.3966 84.8549 75.5255 84.7613L75.5255 84.1058C75.5255 84.1058 75.3966 84.0121 75.3966 83.9185C75.2677 83.8249 75.2677 83.7312 75.2677 83.6376C75.2677 83.4503 75.2677 83.3567 75.3966 83.263C75.5254 83.1694 75.5255 83.0757 75.6543 83.0757L75.6543 82.4203L76.041 77.1764C76.041 77.0828 76.1699 77.0828 76.1699 77.0828C76.2988 77.0828 76.2988 77.0828 76.2988 77.1764L76.5565 82.4203L76.5565 83.0757C76.8143 83.1694 76.9432 83.1694 76.9432 83.263C77.072 83.3567 77.072 83.4503 77.072 83.6376C77.072 83.7312 77.072 83.8249 76.9432 83.9185C76.9432 84.0121 76.8143 84.1058 76.8143 84.1994L76.8143 84.8549C76.9432 84.8549 77.072 84.9485 77.2009 85.1358C77.3298 85.2295 77.3298 85.3231 77.3298 85.5104C77.3298 85.6977 77.3298 85.7913 77.2009 85.8849C77.072 85.9786 77.072 86.0722 76.9432 86.1658L76.9432 86.915C77.4587 87.1022 77.9742 87.3832 78.6186 87.6641C79.2631 88.0386 79.7786 88.5069 80.0364 88.8814C80.2941 89.3496 80.423 89.8178 80.2941 90.1924C80.2941 90.4733 80.1652 90.7542 80.0364 91.0351C81.8407 91.7842 84.0317 92.8143 86.0939 94.0316L86.0939 83.263L85.965 83.263C85.4494 83.263 84.9339 82.9821 84.9339 82.5139C84.9339 82.1393 85.4494 81.7648 85.965 81.7648L86.3516 81.7648L86.4805 71.1835L85.965 71.1835C85.4494 71.1835 85.0628 70.9026 85.0628 70.528C85.0628 70.2471 85.3206 69.9662 85.8361 69.8725L85.8361 67.5315L85.8361 66.5015L85.3206 66.5015C85.0628 66.5015 84.805 66.3142 84.805 66.1269C84.805 65.9397 85.0628 65.7524 85.3206 65.7524L85.8361 65.7524C85.5783 65.2842 85.3206 64.1605 85.965 63.0368C86.2227 62.5686 86.8672 62.0068 87.6405 61.6322C88.2849 61.2577 89.0582 60.8831 89.7026 60.6022C89.7026 60.5085 89.7026 60.4149 89.7026 60.3213C89.7026 60.2276 89.7026 60.0403 89.8315 59.9467C89.8315 59.7594 89.9603 59.6658 90.2181 59.5721C90.347 59.4785 90.6048 59.3849 90.7336 59.2912L90.7336 59.0103L90.6048 58.9167L90.6048 58.823C90.6048 58.823 90.6048 58.7294 90.6048 58.6357L90.7336 58.5421L90.7336 58.3548L90.6048 58.3548L90.6048 58.2612L90.6048 58.1675C90.6048 58.1675 90.7336 58.1675 90.7336 58.0739L90.7336 57.8866L90.8625 56.1075C90.8625 56.1075 90.8625 56.0138 90.9914 56.1075L91.1203 57.793L91.1203 57.9803C91.1203 57.9803 91.1203 58.0739 91.2492 58.0739C91.2492 58.1675 91.2492 58.1675 91.2492 58.1675L91.2492 58.2612C91.2492 58.2612 91.2492 58.2612 91.1203 58.2612L91.1203 58.4485L91.2492 58.5421C91.2492 58.5421 91.3781 58.6357 91.3781 58.7294C91.3781 58.823 91.3781 58.823 91.3781 58.823L91.2492 58.9167L91.2492 59.1976C91.3781 59.3849 91.5069 59.3849 91.7647 59.5721C92.0225 59.6658 92.1514 59.8531 92.2802 59.9467C92.4091 60.134 92.4091 60.2276 92.4091 60.3213C92.4091 60.4149 92.4091 60.5085 92.2802 60.6022C92.9247 60.8831 93.698 61.2577 94.3424 61.6322C94.9868 62.0068 95.6312 62.5686 96.0179 63.0368C96.6623 64.1605 96.4045 65.2842 96.1467 65.846L96.6623 65.846C96.92 65.846 97.1778 66.0333 97.1778 66.2206C97.1778 66.4078 96.92 66.5951 96.6623 66.5951L96.2756 66.5951L96.2756 67.3442C96.2756 67.4379 96.2756 67.4379 96.2756 67.5315L96.2756 67.6252L96.2756 67.9997L96.2756 69.7789C96.6623 69.7789 96.92 70.0598 96.92 70.3407C96.92 70.7153 96.5334 70.9962 96.0179 70.9962L95.6312 70.9962L95.7601 81.5775L96.1467 81.5775C96.7912 81.5775 97.1778 81.9521 97.1778 82.3266C97.1778 82.7948 96.6623 83.0757 96.1467 83.0757L95.6312 83.0757L95.6312 90.3796C96.1467 90.0051 96.7912 89.6305 97.3067 89.3496C100.142 87.7577 103.235 86.3531 105.684 85.3231C105.555 85.0422 105.426 84.6676 105.426 84.2931C105.426 83.8249 105.426 83.263 105.813 82.7012C106.2 82.1393 106.844 81.5775 107.617 81.2029C108.391 80.8284 109.164 80.4538 109.679 80.1729L109.679 79.2365C109.679 79.1429 109.551 79.0492 109.422 78.9556C109.293 78.7683 109.164 78.581 109.164 78.3937C109.164 78.2065 109.293 78.0192 109.422 77.8319C109.551 77.7383 109.679 77.6446 109.937 77.551L109.937 76.7082C109.808 76.6146 109.679 76.6146 109.679 76.4273C109.551 76.3337 109.551 76.24 109.551 76.0527C109.551 75.8655 109.679 75.7718 109.679 75.6782C109.808 75.5845 109.937 75.4909 110.066 75.3973L110.195 74.5545L110.582 67.9061C110.582 67.8124 110.711 67.8124 110.839 67.8124C110.968 67.8124 111.097 67.9061 111.097 67.9061L111.484 74.5545L111.484 75.3973C111.613 75.4909 111.742 75.5845 111.87 75.6782C111.87 75.7718 111.87 75.8655 111.87 76.0527C111.87 76.24 111.87 76.3337 111.742 76.4273C111.613 76.6146 111.613 76.6146 111.484 76.7082L111.484 77.551C111.742 77.6446 111.87 77.7383 111.999 77.9255C112.128 78.0192 112.128 78.2065 112.128 78.3937C112.128 78.581 112.128 78.7683 111.999 78.8619C111.87 79.0492 111.742 79.1429 111.613 79.2365L111.742 80.1729C112.257 80.4538 113.03 80.8284 113.804 81.2029C114.577 81.5775 115.35 82.1393 115.608 82.7012C115.995 83.263 115.995 83.8249 115.995 84.2931C115.995 84.6676 115.866 85.0422 115.737 85.3231C118.186 86.3531 121.279 87.7577 123.985 89.3496C126.176 90.6606 128.11 92.0652 129.399 93.5634L129.527 83.7312L127.465 83.7312C126.176 83.7312 125.017 82.8885 125.017 81.9521C125.017 81.0157 126.176 80.1729 127.465 80.1729L129.527 80.1729L129.785 54.0474L129.012 54.0474C127.852 54.0474 126.95 53.3919 126.95 52.5492C126.95 51.7064 127.852 51.0509 129.012 51.0509L129.785 51.0509L129.914 29.8883L129.012 29.8883C127.981 29.8883 127.079 29.2328 127.079 28.4837C127.079 27.8282 127.723 27.36 128.496 27.1728L128.496 22.8653L128.496 20.8989L127.852 20.8989C127.336 20.8989 126.95 20.618 126.95 20.2434C126.95 19.8689 127.336 19.5879 127.852 19.5879L128.754 19.5879C128.239 18.3706 127.594 16.1233 128.883 13.9695C129.527 12.9395 130.816 11.9095 132.234 11.0667C133.652 10.2239 135.198 9.47483 136.487 9.00663C136.487 8.81935 136.358 8.63207 136.358 8.53843C136.358 8.25751 136.358 7.97659 136.616 7.69567C136.745 7.41475 137.132 7.13383 137.518 6.94656C137.905 6.75928 138.291 6.572 138.549 6.47836L138.549 6.01016C138.42 5.91652 138.42 5.91652 138.291 5.82288C138.163 5.72924 138.163 5.6356 138.163 5.54196C138.163 5.44832 138.163 5.35468 138.291 5.26104C138.291 5.1674 138.42 5.1674 138.549 5.07376L138.549 4.6992C138.42 4.60556 138.42 4.60556 138.42 4.60556C138.42 4.51192 138.291 4.51192 138.291 4.41828C138.291 4.32464 138.291 4.231 138.42 4.231C138.42 4.13736 138.549 4.13736 138.549 4.13736L138.549 3.66916L138.807 0.298127C138.807 0.298127 138.807 0.204488 138.936 0.204488L139.065 0.298127L139.323 3.66916L139.323 4.13736C139.451 4.13736 139.451 4.231 139.451 4.231C139.451 4.32464 139.58 4.32464 139.58 4.41828C139.58 4.51192 139.58 4.51192 139.451 4.60556C139.451 4.6992 139.323 4.6992 139.323 4.6992L139.323 5.07376C139.451 5.07376 139.451 5.1674 139.58 5.26104C139.709 5.35468 139.709 5.44832 139.709 5.54196C139.709 5.6356 139.709 5.72924 139.58 5.82288C139.58 5.82288 139.451 5.91652 139.451 6.01016L139.451 6.47836C139.709 6.572 140.096 6.75928 140.482 6.94656C140.869 7.13383 141.256 7.41475 141.385 7.69567C141.514 7.97659 141.642 8.25751 141.642 8.53843C141.642 8.72571 141.514 8.91299 141.514 9.00663C142.802 9.56847 144.349 10.2239 145.767 11.0667C147.184 11.9095 148.473 12.9395 149.118 13.9695C150.406 16.2169 149.762 18.3706 149.247 19.4943L150.278 19.4943C150.793 19.4943 151.18 19.7752 151.18 20.1498C151.18 20.5243 150.793 20.8053 150.278 20.8053L149.504 20.8053L149.504 22.4908C149.504 22.5844 149.504 22.678 149.504 22.7717L149.504 22.959L149.504 23.6144L149.504 27.1728C150.278 27.2664 150.922 27.8282 150.922 28.4837C150.922 29.2328 150.02 29.8883 148.989 29.8883L148.215 29.8883L148.344 51.0509L149.118 51.0509C150.278 51.0509 151.18 51.7064 151.18 52.5492C151.18 53.3919 150.278 54.0474 149.118 54.0474L148.344 54.0474L148.473 73.3372C151.309 69.3107 156.335 65.4715 162.006 62.1941C168.063 58.6357 174.637 55.5456 180.05 53.2983C179.792 52.7364 179.534 51.9873 179.534 51.0509C179.534 50.1145 179.663 48.8972 180.436 47.6799C181.21 46.4626 182.756 45.3389 184.432 44.3088C185.978 43.3724 187.783 42.6233 189.071 42.1551L189.2 40.0951C188.814 39.9078 188.556 39.6269 188.298 39.3459C188.04 39.065 187.911 38.6905 187.911 38.2223C187.911 37.7541 188.04 37.3795 188.427 37.0049C188.685 36.724 188.943 36.4431 189.458 36.2558L189.587 34.4767C189.329 34.2894 189.071 34.1021 188.943 33.9148C188.685 33.6339 188.685 33.353 188.685 33.0721C188.685 32.6975 188.814 32.4166 189.071 32.1357C189.329 31.8548 189.587 31.6675 189.845 31.5738L189.974 29.701L190.747 16.3105C187.267 16.0296 184.174 14.625 182.241 12.284C179.147 8.35115 180.952 3.2946 186.365 1.04725C188.427 0.204487 190.618 -0.076432 192.68 0.0172078C191.391 0.110848 190.102 0.485407 188.943 0.953606C184.045 3.01368 182.369 7.50839 185.205 11.0667C188.04 14.625 194.227 15.8423 199.124 13.7823C200.284 13.3141 201.315 12.6586 202.089 11.8158C201.186 13.2204 199.64 14.4377 197.578 15.2805C195.773 16.1233 193.711 16.4042 191.649 16.4042L192.422 29.701L192.551 31.5738C192.809 31.7611 193.067 31.9484 193.325 32.1357C193.582 32.4166 193.711 32.6975 193.711 33.0721C193.711 33.4466 193.582 33.7276 193.453 33.9148C193.325 34.1957 193.067 34.383 192.809 34.4767L192.938 36.2558ZM305.968 73.899L305.968 73.7118L305.839 73.7118C305.839 73.8054 305.968 73.8054 305.968 73.899ZM305.839 54.8901L306.87 54.8901L306.87 54.141C306.87 54.141 306.87 54.0474 306.87 53.9537C306.742 53.8601 306.742 53.8601 306.87 53.7665C307.128 53.3919 306.484 53.2983 306.097 53.111C305.839 53.2983 305.968 53.4856 306.097 53.7665C306.097 53.8601 306.097 53.9537 306.097 53.9537C305.968 54.0474 305.968 54.141 305.968 54.141L305.968 54.8901L305.839 54.8901ZM308.03 54.8901L310.221 54.8901L310.221 54.141C310.221 54.141 310.221 54.0474 310.221 53.9537C310.093 53.8601 310.221 53.8601 310.221 53.7665C310.479 53.2983 309.319 53.2983 309.19 52.8301C309.061 53.2046 307.902 53.2046 308.03 53.7665C308.03 53.8601 308.159 53.9537 308.03 53.9537C307.902 54.0474 308.03 54.141 308.03 54.141L308.03 54.8901ZM311.51 54.8901L312.541 54.8901L312.541 54.141C312.541 54.141 312.541 54.0474 312.541 53.9537C312.412 53.8601 312.541 53.8601 312.541 53.7665C312.67 53.4856 312.799 53.2046 312.541 53.111C312.155 53.2983 311.51 53.3919 311.768 53.7665C311.768 53.8601 311.768 53.9537 311.768 53.9537C311.639 54.0474 311.639 54.141 311.639 54.141L311.639 54.8901L311.51 54.8901ZM350.82 60.3213L352.237 60.3213L352.237 59.1039C352.237 59.1039 352.366 59.0103 352.108 58.9167C351.98 58.7294 352.108 58.7294 352.108 58.5421C352.366 57.8866 351.464 57.793 350.82 57.5121C350.562 57.793 350.562 58.0739 350.82 58.5421C350.82 58.6357 350.948 58.7294 350.82 58.9167C350.691 59.0103 350.691 59.1039 350.691 59.1039L350.691 60.3213L350.82 60.3213ZM354.042 60.3213L357.522 60.3213L357.522 59.1039C357.522 59.1039 357.521 59.0103 357.393 58.9167C357.264 58.7294 357.393 58.7294 357.393 58.5421C357.779 57.6993 355.975 57.793 355.717 57.1375C355.588 57.6993 353.784 57.6993 354.171 58.5421C354.171 58.6357 354.299 58.7294 354.171 58.9167C354.042 59.0103 354.042 59.1039 354.042 59.1039L354.042 60.3213ZM359.326 60.3213L360.872 60.3213L360.872 59.1039C360.872 59.1039 360.872 59.0103 360.744 58.9167C360.615 58.7294 360.744 58.7294 360.744 58.5421C361.001 58.0739 361.001 57.6993 360.744 57.5121C360.228 57.8866 359.197 57.9803 359.455 58.5421C359.584 58.6357 359.584 58.7294 359.455 58.9167C359.326 59.0103 359.326 59.1039 359.326 59.1039L359.326 60.3213ZM332.776 50.3954L334.967 50.3954L334.967 48.5226C334.967 48.5226 334.967 48.429 334.838 48.2417C334.709 48.0544 334.709 47.8672 334.838 47.7735C335.225 46.8371 333.807 46.7435 333.034 46.2753C332.518 46.6498 332.776 47.118 333.034 47.7735C333.163 47.9608 333.163 48.0544 333.034 48.2417C332.776 48.429 332.905 48.5226 332.905 48.5226L332.905 50.3954L332.776 50.3954ZM337.545 50.3954L342.571 50.3954L342.571 48.5226C342.571 48.5226 342.571 48.429 342.442 48.2417C342.313 48.0544 342.313 47.8672 342.442 47.7735C342.958 46.6498 340.38 46.6498 340.122 45.8071C339.865 46.6498 337.158 46.6498 337.802 47.7735C337.931 47.9608 337.931 48.0544 337.802 48.2417C337.674 48.429 337.674 48.5226 337.674 48.5226L337.674 50.3954L337.545 50.3954ZM345.149 50.3954L347.34 50.3954L347.34 48.5226C347.34 48.5226 347.34 48.429 347.211 48.2417C347.082 48.0544 347.082 47.8672 347.211 47.7735C347.469 47.118 347.726 46.6498 347.211 46.2753C346.438 46.7435 344.891 46.9308 345.406 47.7735C345.535 47.9608 345.535 48.0544 345.406 48.2417C345.278 48.429 345.278 48.5226 345.278 48.5226L345.278 50.3954L345.149 50.3954ZM232.634 66.3142L234.18 66.3142L234.18 64.9096C234.18 64.9096 234.18 64.816 234.052 64.7223C233.923 64.6287 233.923 64.4414 234.052 64.3478C234.438 63.6923 233.278 63.5987 232.763 63.2241C232.376 63.505 232.505 63.8796 232.763 64.3478C232.892 64.4414 232.892 64.6287 232.763 64.7223C232.634 64.816 232.634 64.9096 232.634 64.9096L232.634 66.3142ZM236.114 66.3142L239.851 66.3142L239.851 64.9096C239.851 64.9096 239.851 64.816 239.722 64.7223C239.594 64.6287 239.594 64.4414 239.722 64.3478C240.109 63.505 238.176 63.505 238.047 62.8495C237.789 63.505 235.856 63.4114 236.371 64.3478C236.5 64.4414 236.5 64.6287 236.371 64.7223C236.243 64.816 236.243 64.9096 236.243 64.9096L236.243 66.3142L236.114 66.3142ZM241.785 66.3142L243.331 66.3142L243.331 64.9096C243.331 64.9096 243.331 64.816 243.202 64.7223C243.073 64.6287 243.073 64.4414 243.202 64.3478C243.46 63.8796 243.589 63.505 243.202 63.2241C242.558 63.5987 241.527 63.6923 241.785 64.3478C241.913 64.4414 241.913 64.6287 241.785 64.7223C241.656 64.816 241.656 64.9096 241.656 64.9096L241.656 66.3142L241.785 66.3142ZM85.965 69.6852L87.5116 69.6852L87.5116 68.3743C87.5116 68.3743 87.5116 68.2806 87.3827 68.187C87.2538 68.0934 87.2538 67.9997 87.3827 67.8124C87.6405 67.2506 86.7383 67.0633 86.0939 66.7824C85.8361 67.0633 85.8361 67.3442 86.0939 67.8124C86.2227 67.9061 86.2227 67.9997 86.0939 68.187C85.965 68.2806 85.965 68.3743 85.965 68.3743L85.965 69.6852ZM89.3159 69.6852L92.7958 69.6852L92.7958 68.3743C92.7958 68.3743 92.7958 68.2806 92.6669 68.187C92.538 68.0934 92.538 67.9997 92.6669 67.8124C93.0535 66.9697 91.2492 67.0633 91.1203 66.4078C90.7337 67.157 89.0582 67.0633 89.4448 67.9061C89.4448 67.9997 89.5737 68.0934 89.4448 68.2806C89.3159 68.2806 89.3159 68.3743 89.3159 68.3743L89.3159 69.6852ZM94.4713 69.6852L96.0179 69.6852L96.0179 68.3743C96.0179 68.3743 96.0179 68.2806 95.889 68.187C95.7601 68.0934 95.7601 67.9997 95.889 67.8124C96.1467 67.3442 96.1467 66.9697 95.889 66.7824C95.3734 67.157 94.3424 67.2506 94.6001 67.9061C94.729 67.9997 94.729 68.0934 94.6001 68.2806C94.4713 68.2806 94.4713 68.3743 94.4713 68.3743L94.4713 69.6852ZM46.5268 50.3954L48.7178 50.3954L48.7178 48.5226C48.7178 48.5226 48.7178 48.429 48.5889 48.2417C48.46 48.0544 48.46 47.8672 48.5889 47.7735C48.9756 46.8371 47.5578 46.7435 46.7845 46.2753C46.3979 46.6498 46.5268 47.118 46.7845 47.7735C46.9134 47.9608 46.9134 48.0544 46.7845 48.2417C46.3979 48.429 46.5268 48.5226 46.5268 48.5226L46.5268 50.3954ZM51.2954 50.3954L56.3219 50.3954L56.3219 48.5226C56.3219 48.5226 56.3219 48.429 56.193 48.2417C55.9352 48.0544 56.0641 47.8672 56.193 47.7735C56.7085 46.5562 54.1309 46.6498 53.7442 45.7134C53.4865 46.6498 50.9088 46.5562 51.4243 47.7735C51.5532 47.8672 51.5532 48.0544 51.4243 48.2417C51.1666 48.429 51.2954 48.5226 51.2954 48.5226L51.2954 50.3954ZM58.8995 50.3954L61.0905 50.3954L61.0905 48.5226C61.0905 48.5226 61.0905 48.429 60.9617 48.2417C60.7039 48.0544 60.8328 47.8672 60.9617 47.7735C61.2194 47.118 61.4772 46.6498 60.9617 46.2753C60.0595 46.6498 58.6418 46.8371 59.0284 47.7735C59.1573 47.9608 59.1573 48.0544 59.0284 48.2417C58.7707 48.429 58.8995 48.5226 58.8995 48.5226L58.8995 50.3954ZM129.012 27.1728L131.976 27.1728L131.976 24.7381C131.976 24.7381 131.976 24.5508 131.718 24.2699C131.461 23.989 131.59 23.8017 131.718 23.6144C132.234 22.3971 130.301 22.2098 129.141 21.5544C128.496 22.0226 128.754 22.7717 129.141 23.6144C129.27 23.8954 129.399 24.0826 129.141 24.2699C128.883 24.5508 128.883 24.7381 128.883 24.7381L128.883 27.1728L129.012 27.1728ZM135.585 27.1728L142.545 27.1728L142.545 24.7381C142.545 24.7381 142.545 24.5508 142.287 24.2699C142.029 23.989 142.158 23.8017 142.287 23.6144C143.06 22.0226 139.451 22.1162 139.065 20.8989C138.678 22.1162 135.069 22.0226 135.843 23.6144C135.972 23.8954 136.1 24.0826 135.843 24.2699C135.585 24.5508 135.585 24.7381 135.585 24.7381L135.585 27.1728ZM146.024 27.1728L148.989 27.1728L148.989 24.7381C148.989 24.7381 149.118 24.5508 148.731 24.2699C148.473 23.989 148.602 23.8017 148.731 23.6144C149.118 22.7717 149.375 22.0226 148.731 21.5544C147.571 22.2098 145.638 22.3971 146.153 23.6144C146.282 23.8954 146.411 24.0826 146.153 24.2699C145.896 24.5508 145.896 24.7381 145.896 24.7381L145.896 27.1728L146.024 27.1728Z"
      fill="url(#paint0_linear_61_1184)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_61_1184"
        x1={195.509}
        y1={72.2264}
        x2={195.509}
        y2={190}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#3B526F" />
        <Stop offset={0.53125} stopColor="#34C759" stopOpacity={0.4} />
        <Stop offset={0.773958} stopColor="#99E2AB" stopOpacity={0.710666} />
        <Stop offset={1} stopColor="#E5FBE4" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default HomeBackgroundImg;
