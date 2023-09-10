import React, { useState, useEffect } from 'react';
import { Image, View, Text, Dimensions } from 'react-native';
import { Grid, Col, Row } from 'react-native-easy-grid';
import { Magnetometer } from 'expo-sensors';
const { height, width } = Dimensions.get('window');
import GreenCircle from "../../../assets/GreenColorEffect.png"
import RedCircle from "../../../assets/RedColorEffect.png"
import YellowCircle from "../../../assets/YellowColorEffect.png"
import DirectionAxis from './DirectionAxis';

import CenterRed from "../../../components/svg/CenterRed"
import CenterYellow from "../../../components/svg/CenterYellow"
import CenterGreen from "../../../components/svg/CenterGreen"

const QiblaCompass = ({ numbers, radius }) => {

    const [subscription, setSubscription] = useState(null);
    const [magnetometer, setMagnetometer] = useState(0);
const degreeheight=Dimensions.get("screen").height/200-250
const degreeheight2=Dimensions.get("screen").height/200-245
const degreeWidth=Dimensions.get('window').width/1.8
const degreeWidth2=Dimensions.get('window').width/2-80

    const side=Dimensions.get("window").width/2.46
  useEffect(() => {
    _toggle();
    return () => {
      _unsubscribe();
    };
  }, []);

  const _toggle = () => {
    if (subscription) {
      _unsubscribe();
    } else {
      _subscribe();
    }
  };

  const _subscribe = () => {
    setSubscription(
      Magnetometer.addListener((data) => {
        setMagnetometer(_angle(data));
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  const _angle = (magnetometer) => {
    let angle = 0;
    if (magnetometer) {
      let { x, y, z } = magnetometer;
      if (Math.atan2(y, x) >= 0) {
        angle = Math.atan2(y, x) * (180 / Math.PI);
      } else {
        angle = (Math.atan2(y, x) + 2 * Math.PI) * (180 / Math.PI);
      }
    }
    return Math.round(angle);
  };
  const _direction = (degree) => {
    if (degree >= 22.5 && degree < 67.5) {
      return 'NE';
    }
    else if (degree >= 67.5 && degree < 112.5) {
      return 'E';
    }
    else if (degree >= 112.5 && degree < 157.5) {
      return 'SE';
    }
    else if (degree >= 157.5 && degree < 202.5) {
      return 'S';
    }
    else if (degree >= 202.5 && degree < 247.5) {
      return 'SW';
    }
    else if (degree >= 247.5 && degree < 292.5) {
      return 'W';
    }
    else if (degree >= 292.5 && degree < 337.5) {
      return 'NW';
    }
    else {
      return 'N';
    }
  };

  // Match the device top with pointer 0° degree. (By default 0° starts from the right of the device.)
  const _degree = (magnetometer) => {
    return magnetometer - 90 >= 0 ? magnetometer - 90 : magnetometer + 271;
  };

  let image = (_degree(magnetometer) > 0 && _degree(magnetometer) < 90) ? RedCircle : ((_degree(magnetometer) > 91 && _degree(magnetometer) < 180) ? YellowCircle : ((_degree(magnetometer) > 181 && _degree(magnetometer) < 360) ? GreenCircle : "undefined"));
  let Centerimage = (_degree(magnetometer) > 0 && _degree(magnetometer) < 90) ? <CenterRed/> : ((_degree(magnetometer) > 91 && _degree(magnetometer) < 180) ? <CenterYellow/> :  <CenterGreen/>);
 
  return (<>    
    <Grid >
      <Row style={{ alignItems: 'center' , }} size={.9}>
        <Col style={{ alignItems: 'center' }}>
          <Text
            style={{
              color: 'black',
              fontSize: height / 26,
              fontWeight: 'bold',
              top: degreeheight2,
              left: degreeWidth,
              position: 'absolute',
            
            }}>
            {_direction(_degree(magnetometer))}
          </Text>
        </Col>
      </Row>

     
      <Row style={{ alignItems: 'center'}} size={2}>
      <Text style={{
          color: 'black',
          fontSize: height/20,
          top: degreeheight,
          left: degreeWidth2,
        //   width: width,
          position: 'absolute',
          textAlign: 'center',
        //   borderBottomColor: 'red'
        // marginTop: degreeheight
        }}>
          {_degree(magnetometer)}°
          </Text>
        <Col style={{ alignItems: 'center' ,
            transform: [{ rotate: 360 - magnetometer + 'deg' }]}}>

          <Image source={image} style={{
            height: 500,
            width:500,
            
            justifyContent: 'center',
            alignItems: 'center',
            resizeMode: 'contain',
          }} />
          <View style={{top: -33,left: -190}}>
          <DirectionAxis numbers={[0, 30, 60, 90, 120, 150, 180, 210, 240,270,300,330]} radius={145}  />
          </View>
        </Col>

      </Row>
      <Row left={side} top={-35}>
        {Centerimage}
      </Row>
      


     

    </Grid>
    </>
  );
};

export default QiblaCompass;





