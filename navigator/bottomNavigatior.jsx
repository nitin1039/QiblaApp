import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import PrayerIcon from '../components/svg/prayerIcon';
import MasjidIcon from '../components/svg/masjidIcon';
import QiblaIcon from '../components/svg/qiblaIcon';
import SearchScreen from '../screens/search/SearchScreen';
import MasjidPrayerSchedule from '../screens/masjidPrayerSchedule/MasjidPrayerSchedule';
import HomeScreen from '../screens/home/HomeScreen';
import PrayerTimeScreen from '../screens/PrayerTimeScreen/PrayerTimeScreen';
import { BOTTOM_HOME, BOTTOM_MASJID, BOTTOM_MORE, BOTTOM_PRAYER, BOTTOM_QIBLA } from '../constants/routes';
import { Platform } from 'react-native';
import MasjidScreen from '../screens/masjid/MasjidScreen';
import QiblaCardScreen from "../screens/QiblaScreen/QiblaCardScreen"
import Login from '../screens/LoginScreen/Login';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <BottomTab.Navigator screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            // height: Platform.OS === 'android' ? 120:90,??
            paddingHorizontal: 5,
            paddingVertical:10,
            backgroundColor: 'rgba(44, 203, 137, 1)',
            position: 'absolute',
            borderTopWidth: 0,
            
            //  marginBottom:-20 
          
        },
        tabBarActiveTintColor:'black',
        tabBarInactiveTintColor:'#FFFFFF',
      })} >
          <BottomTab.Screen name={BOTTOM_HOME} component={HomeScreen} options={{tabBarIcon:({tintColor,focused})=><Entypo name="home" size={24} color={focused?"#000000":"#FFFFFF"} />}} />
          <BottomTab.Screen name={BOTTOM_PRAYER} component={PrayerTimeScreen} options={{tabBarIcon:({tintColor,focused})=><PrayerIcon color={focused?"#000000":"#FFFFFF"} />}} />
          <BottomTab.Screen name={BOTTOM_MASJID} component={MasjidScreen} options={{tabBarIcon:({tintColor,focused})=><MasjidIcon  color={focused?"#000000":"#FFFFFF"} />}}/>
          <BottomTab.Screen name={BOTTOM_QIBLA} component={QiblaCardScreen} options={{tabBarIcon:({tintColor,focused})=><QiblaIcon color={focused?"#000000":"#FFFFFF"} />}}/>
          <BottomTab.Screen name={BOTTOM_MORE} component={Login} options={{tabBarIcon:({tintColor,focused})=><Entypo name="menu" size={24} color={focused?"#000000":"#FFFFFF"}  />}}/>
          
        </BottomTab.Navigator>
      );
}

export default BottomTabNavigator