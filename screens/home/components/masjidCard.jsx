
import { View, Text, Heading,Box, HStack, Pressable,Center, VStack, AlertDialog, Button } from 'native-base'
import React from 'react'
import { Dimensions } from 'react-native'
import MasjidImg from '../../../components/svg/masjidImg'
import { BOTTOM_PRAYER } from '../../../constants/routes'
import LiveImg from '../../../components/svg/Live'
import { formatTime } from '../../../utils/date'
import {STACK_SEARCH} from '../../../constants/routes'


const MasjidCard = ({navigation,nextPrayerName,nextPrayerTime}) => {

  const onPressHandler = () =>{
    navigation.navigate(STACK_SEARCH)
  }

  return (
    <Pressable onPress={onPressHandler}>
    <Box bg={'#FFFFFF'} borderRadius={10}  height={Dimensions.get('screen').height/6.5} width={Dimensions.get('screen').width/2.3} marginLeft={2.5} p={2.5} mt={2} mb={2} marginRight={4} >
      <Center>


        <Heading marginBottom={4} marginTop={.5}  fontSize={20} fontWeight={500}>Your Masjid</Heading>
         {/* Homescreen if user following masjid and masjid is live */}

         <View marginTop={-2}>
          <LiveImg/>
        </View>
        <HStack alignItems={'center'} marginBottom={-30} space={.5} justifyContent={'space-between'}>
        <MasjidImg/>

        {/* Homescreen if user not follow any masjid */}
        {/* <View bgColor={'#c70000'} width={2} height={2} borderRadius={100} />
        <Text color={'#CE0000'} underline fontSize={11} fontWeight={3000}>Start Following</Text>   */}

       

        {/* Homescreen if user follow masjid */}
        <VStack marginLeft={2} alignItems={'center'}>
        
          <Text fontSize={12} fontWeight={400}>NEXT</Text>
          <Text fontSize={16} fontWeight={500}>{nextPrayerName}</Text>
          <Text fontSize={12} fontWeight={400}>Adhan { formatTime(nextPrayerTime)}</Text> 
        </VStack>

        </HStack>
      </Center>
    </Box>
    </Pressable>
  )
}

export default MasjidCard