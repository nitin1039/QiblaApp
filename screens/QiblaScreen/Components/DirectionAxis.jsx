import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Magnetometer } from 'expo-sensors';

const DirectionAxis = ({ numbers, radius }) => {
    
    const direction=["N","E","S","W"]
    const dradius=90
  const [positions, setPositions] = useState([]);   
  
  const [dposition, setDPosition] = useState([]);   
  const [subscription, setSubscription] = useState(null);
  const [magnetometer, setMagnetometer] = useState(0);

  
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
// console.log(_angle(magnetometer))
const _degree = (magnetometer) => {
    return magnetometer - 90 >= 0 ? magnetometer - 90 : magnetometer + 271;
  };



  let numberRotate=_degree(magnetometer)+90
  let SnumberRotate=numberRotate.toString()+"deg";

  useEffect(() => {
    const angle = 2 * Math.PI / numbers.length;
    const positions = [];

    for (let i = 0; i < numbers.length; i++) {
      const x = radius * Math.cos(i * angle);
      const y = radius * Math.sin(i * angle);
      positions.push({ x, y });
    }

    setPositions(positions);
  }, [numbers, radius]);



  useEffect(() => {
    const angle = 2 * Math.PI / 4;
    const positions = [];

    for (let i = 0; i < 4; i++) {
      const x = 80 * Math.cos(i * angle);
      const y = 80 * Math.sin(i * angle);
      positions.push({ x, y });
    }
setDPosition(positions)
    
  }, []);










  return (
    <View style={styles.container}>
      {numbers.map((number, index) => (
        <View key={index} style={[styles.number, { left: positions[index]?.x, top: positions[index]?.y  }]}>
            <View style={{
            transform: [{ rotate:  SnumberRotate  }]
            }}>
          <Text style={styles.numberText}>{number}</Text>
          </View>
        </View>
      ))}


<View >
   

{direction.map((number, index) => (
        <View key={index} style={[styles.number, { left: dposition[index]?.x, top: dposition[index]?.y  }]}>
            <View style={{
            transform: [{ rotate:  SnumberRotate  }]
            }}>
          <Text style={styles.numberText}>{number}</Text>
          </View>
        </View>
      ))}
      
 
      </View>
    </View>
  );
};

export default DirectionAxis;


const styles = StyleSheet.create({
    container: {
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
      top: -225,
      left: 184,

    },
    number: {
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
      left: -10
    },
    
    
    Dnumber:{

    },
    numberText: {
      fontSize: 16,
      fontWeight: 'bold',
      
    },
  });

