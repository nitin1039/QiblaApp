import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from "react-native";
import { Box, Container } from "native-base";

import React from "react";
import ImageZoom from "react-native-image-pan-zoom";
import PreviewBack from "../../../assets/PreviewBackground.png";
import ZoomIcon from "../../../components/svg/ZoomIcon";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useState } from "react";
const PreviewModal = ({props, modalVisible, handleModalClose }) => {
  
 
  return (
    <Modal visible={modalVisible} onRequestClose={handleModalClose}>
      
      <Box>
        <ImageZoom
          cropWidth={Dimensions.get("window").width}
          cropHeight={Dimensions.get("window").height}
          imageWidth={390}
          imageHeight={820}
        >
          <Image source={PreviewBack} style={{ width: 395, height: 820 }} />
        </ImageZoom>

        <Pressable  onPress={handleModalClose}>
          <Container zIndex={1} marginTop={-9} marginLeft={345}>
            <ZoomIcon />
          </Container>
        </Pressable>

      </Box>
    </Modal>
  );
};

export default PreviewModal;
