import { View} from 'react-native'
import React from 'react'
import SplashScreenMain from '../../../components/svg/splashScreenMain';
import HomeBackgroundImg from '../../../components/svg/homebackgroundImg';
import { VStack, Center, Box, Button, Text, Hidden} from 'native-base';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from '../../home/HomeScreen';
import { STACK_BOTTOM_TAB} from '../../../constants/routes'


const DeniedLocationScreen = ({navigation}) => {
  
    return (
        <>
        <VStack space={4} >
          <Center>
           <SplashScreenMain marginTop={70} marginBottom={10}/>
            <Text fontSize="2xl" bold marginTop={150}>  Darul masajid can't find you?</Text>
            <Text textAlign="center" fontSize={13} marginTop={7} marginRight={8} marginLeft={8}>You'll need to enable your location in order to use this app. Prayer Times & Qibla Direction requires your location to provide accurate results.</Text> 
            <Button shadow={2} marginTop={10} backgroundColor="#006622" size={10} w={'60%'} borderRadius={50}  onPress={() => navigation.navigate('')}>
      Enable Location
    </Button>
    <Pressable marginTop={20} onPress={() => navigation.navigate(STACK_BOTTOM_TAB)}>
  <Text fontSize={12}>Remind me later </Text>
</Pressable>
    
          
        
            <HomeBackgroundImg marginBottom={-10}  />
            </Center>
        </VStack>
        </>
      )
}

export default DeniedLocationScreen;