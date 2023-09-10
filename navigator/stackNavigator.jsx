
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './bottomNavigatior';
import SearchScreen from '../screens/search/SearchScreen';
import MasjidScreen from '../screens/masjid/MasjidScreen';
import MasjidPrayerSchedule from '../screens/masjidPrayerSchedule/MasjidPrayerSchedule';
import PrayerTimeScreen from '../screens/PrayerTimeScreen/PrayerTimeScreen';

import {ONBOARDING_SCREEN3, ONBOARDING_SCREEN2, ONBOARDING_SCREEN1, STACK_BOTTOM_TAB, STACK_MASJID, STACK_SCHEDULE, STACK_SEARCH, LOCATION_REQUEST1, LOCATION_DENIED, ONBOARDING_MAIN, Prayer_Time_Screen, QURAN_INDEX, QURN_LISTEN_AND_READ,BOTTOM_QIBLA } from '../constants/routes';
import OnBoardingScreen1 from '../screens/onboardingscreens/components/OnBoardingScreen1';
import OnBoardingScreen2 from '../screens/onboardingscreens/components/OnBoardingScreen2';
import OnBoardingScreen3 from '../screens/onboardingscreens/components/OnBoardingScreen3';
import LocationRequest1 from '../screens/locationscreen/components/LocationRequest1';
import DeniedLocationScreen from '../screens/locationscreen/components/DeniedLocationScreen';
import QuranListenAndRead from '../screens/quran/QuranListenAndRead';
import QuranIndex from '../screens/quran/QuranIndex';
import QiblaCardScreen from '../screens/QiblaScreen/QiblaCardScreen';
const Stack = createStackNavigator();
const StackNavigator = () => {
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={OnBoardingScreen1}>
   <Stack.Screen name= {ONBOARDING_SCREEN1} component={OnBoardingScreen1}options={{
    transitionSpec: {
      open: config,
      close: config,
    },
  }}/>
    <Stack.Screen name= {ONBOARDING_SCREEN2} component={OnBoardingScreen2}options={{
    transitionSpec: {
      open: config,
      close: config,
    },
  }}/>
    <Stack.Screen name= {ONBOARDING_SCREEN3} component={OnBoardingScreen3}options={{
    transitionSpec: {
      open: config,
      close: config,
    },
  }}/>  
    <Stack.Screen name= {LOCATION_REQUEST1} component={LocationRequest1}options={{
    transitionSpec: {
      open: config,
      close: config,
    },
  }}/>  
    <Stack.Screen name= {LOCATION_DENIED} component={DeniedLocationScreen}options={{
    transitionSpec: {
      open: config,
      close: config,
    },
  }}/>  
    <Stack.Screen name={STACK_BOTTOM_TAB} component={BottomTabNavigator}/>
    <Stack.Screen name={STACK_SEARCH} component={SearchScreen}/>
    <Stack.Screen name={STACK_MASJID} component={MasjidScreen}/>
    <Stack.Screen name={STACK_SCHEDULE} component={MasjidPrayerSchedule}/>
    <Stack.Screen name={Prayer_Time_Screen} component={PrayerTimeScreen}/>
     <Stack.Screen name= {QURAN_INDEX} component={QuranIndex}/> 
     <Stack.Screen name= {QURN_LISTEN_AND_READ} component={QuranListenAndRead}/> 
     <Stack.Screen name={BOTTOM_QIBLA} component={QiblaCardScreen}/>
  </Stack.Navigator>
  )
}

export default StackNavigator