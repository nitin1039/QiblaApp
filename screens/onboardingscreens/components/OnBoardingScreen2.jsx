import React  from "react";
import { View, Text,  Box, Center, Heading, VStack,Button } from 'native-base'
import { StyleSheet } from "react-native";
import SplashscreenMain from "../../../components/svg/splashScreenMain";
import SplashScreen2 from "../../../components/svg/splashScreen2";
import HomeBackgroundImg from "../../../components/svg/homebackgroundImg";
import OnBoardingScreen3 from "./OnBoardingScreen3";
import { useNavigation } from '@react-navigation/native';
const OnBoardingScreen2 = ({navigation})=> {
   return(
<>
    <VStack >
      <Center>
        {/* Darul Masajid  */}
         <SplashscreenMain marginTop={60} marginBottom={20}/>
         {/* boy poraying on mat svg */}
          <View marginTop={5}>
           <SplashScreen2/>
          </View>
          {/* Text Lines Starts from here */}
        <Text fontWeight={590} fontSize={24} marginTop={5} > Live Adhan Alerts   </Text>
         <Text  fontWeight={400}  fontSize={16}  marginTop={2} textAlign={'center'} > Listen to live Adhan from your local </Text>
         <Text  fontWeight={400}  fontSize={16}  textAlign={'center'} >masjid & customize alerts as per </Text>
         <Text  fontWeight={400}  fontSize={16}   textAlign={'center'} >your need</Text>
         {/* Background masjid svg  */}
        <HomeBackgroundImg/>
        {/* Next Button */}
          <Button shadow={2} marginTop={-120} backgroundColor="#006622" size={9} w={'40%'} borderRadius={50}  onPress={() => navigation.navigate('OnBoardingScreen3')}>
            NEXT
          </Button>
    </Center>

    </VStack> 
</>
)
 
}
export default OnBoardingScreen2
