import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DeniedLocationScreen from '../components/DeniedLocationScreen'
import { STACK_BOTTOM_TAB} from '../../../constants/routes'

import * as Location from 'expo-location';
import SplashscreenMain from '../../../components/svg/splashScreenMain';
import HomeBackgroundImg from '../../../components/svg/homebackgroundImg';
import { Center, VStack } from 'native-base';

export default function App({navigation}) {
  const [location, setLocation] = useState(null);
  

useEffect( () => {
  setTimeout(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
           navigation.navigate('DeniedLocationScreen')
            
      }
      else{
        let location = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Highest, maximumAge: 10000});
        setLocation(location)
        navigation.navigate(STACK_BOTTOM_TAB)
      }

      
    })();
  }, 300);
},[])
 

  
  return(
    <VStack>
      <Center>
    <SplashscreenMain marginTop={60}/>
    
    <HomeBackgroundImg marginTop={450}/>
    </Center>
    </VStack>
    );
}