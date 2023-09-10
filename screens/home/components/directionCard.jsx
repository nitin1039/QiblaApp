import { View, Text, Heading,Box, Center, HStack } from 'native-base'
import React from 'react'
import { Platform } from 'react-native'
import QiblaDirection from '../../../components/svg/QilblaDIrection'
import { Dimensions } from 'react-native'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import {BOTTOM_QIBLA} from "../../../constants/routes"

const DirectionCard = ({navigation}) => {
  return (
    <>
    <Pressable onPress={()=>navigation.navigate(BOTTOM_QIBLA)}>
    <Box bg={'#FFFFFF'}  height={Dimensions.get('screen').height/6.5} width={Dimensions.get('screen').width/2.2} borderRadius={10} p={2.5} mt={2} mb={2} mx={-1}  >
      <Center>
      <Heading fontSize={20} fontWeight={500} marginLeft={2} marginRight={3}  marginTop={.5}>Qibla Direction</Heading>
      <HStack alignItems={'center'} marginBottom={-30} space={.5}>
       
        <QiblaDirection marginTop={9} marginLeft={-1}/>
        <Text fontSize={22} marginTop={9} marginLeft={1} marginRight={3}> 23 NE {'\n'}   </Text>
        <Text marginLeft={-79} marginTop={3} marginBottom={ -10} fontSize={10}>Delhi, India </Text>
      </HStack>
      </Center>

    </Box>
    </Pressable>
    </>
    
  )
}

export default DirectionCard