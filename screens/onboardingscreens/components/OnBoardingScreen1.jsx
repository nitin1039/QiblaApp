import React  from "react";
import { View, Text,  Box, Center, Heading, VStack,Button } from 'native-base'
import { StyleSheet, Dimensions } from "react-native";
import SplashscreenMain from "../../../components/svg/splashScreenMain";
import SplashScreen1 from "../../../components/svg/splashScreen1";
import HomeBackgroundImg from "../../../components/svg/homebackgroundImg";
import OnBoardingScreen2 from './OnBoardingScreen2';
import { useNavigation } from '@react-navigation/native';



const OnBoardingScreen1 = ({navigation})=> {
   return(
<>
    <VStack >
      <Center>
         {/* darul masajid  */}
          <SplashscreenMain marginTop={60} marginBottom={20}/> 
           {/* girls svg image  */}
         <View marginTop={5}>
          <SplashScreen1/>
         </View>
         {/* Text Lines Starts here  */}
            <Text fontWeight={590} fontSize={24} marginTop={5} > Learn About Islam   </Text>     
              <Text  fontWeight={400}  fontSize={16}  marginTop={2} textAlign={'center'} >Follow your local masjid, stay updated with  </Text>
              <Text  fontWeight={400}  fontSize={16}  textAlign={'center'} >actual Prayer Times, Upcoming Events &</Text>
              <Text  fontWeight={400}  fontSize={16}   textAlign={'center'} >more</Text>
              {/* background masjid svg  */}
              <HomeBackgroundImg/>
              {/* Next Button  */}
              <Button shadow={2} marginTop={-120} backgroundColor="#006622" size={9} w={'40%'} borderRadius={50} onPress={() =>navigation.navigate('OnBoardingScreen2')}>
                 NEXT
              </Button>
    </Center>

    </VStack> 
</>
)
 
}
export default OnBoardingScreen1
