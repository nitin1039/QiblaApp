import React  from "react";
import { View, Text,  Box, Center, Heading, VStack,Button } from 'native-base'
import { StyleSheet } from "react-native";
import SplashscreenMain from "../../../components/svg/splashScreenMain";
import SplashScreen3 from "../../../components/svg/splashScreen3";
import HomeBackgroundImg from "../../../components/svg/homebackgroundImg";
import { useNavigation } from '@react-navigation/native';
import LocationRequest1 from '../../locationscreen/components/LocationRequest1'
const OnBoardingScreen3 = ({navigation})=> {
   return(
<>
    <VStack>
      <Center>
         {/* Darul Masajid  */}
          <SplashscreenMain marginTop={60} marginBottom={20}/>
          {/* imam on live telecast */}
            <View marginTop={5}>
              <SplashScreen3/>
            </View>
            {/* Text Lines starts here  */}
             <Text fontWeight={590} fontSize={24} marginTop={5}> Watch Live Streams  </Text>
             <Text  fontWeight={400}  fontSize={16}  marginTop={2} textAlign={'center'} > Watch LiveStream for events </Text>
             <Text  fontWeight={400}  fontSize={16}  textAlign={'center'} >straight from your Local Masjid.</Text>
             {/* Bacground masjid svg  */}
             <View marginTop={6}>
               <HomeBackgroundImg />
             </View>
              {/* Continue Button */}
               <Button shadow={2} marginTop={-120} backgroundColor="#006622" size={9} w={'40%'} borderRadius={50} onPress={() => navigation.navigate('LocationRequest1')}>
                 CONTINUE
               </Button>
    </Center>

    </VStack> 
</>
)
 
}
export default OnBoardingScreen3;