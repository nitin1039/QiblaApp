
import React from 'react'
import { View, Text, Box, Center, Heading, HStack, VStack } from 'native-base'
import { Dimensions } from 'react-native'
import PrayerIconCard from '../../../components/svg/PrayerIconCard'
import CheckBox from '../../../components/svg/CheckBox'


const AdCard = () => {
  return (
    <Box  bg={'#FFFFFF'} mx={2.5} height={Dimensions.get('screen').height/6} borderRadius={10} marginTop={-90} marginBottom={1}>
    <Center>
        <Heading marginTop={3.5} marginRight={1.5}>
            AD Space 
        </Heading>
    </Center>

</Box>
  )
}

export default AdCard