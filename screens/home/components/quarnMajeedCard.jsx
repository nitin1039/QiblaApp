import { View, Text, Heading,Box, Center, HStack, VStack, InputLeftAddon } from 'native-base'
import React from 'react'
import { Dimensions } from 'react-native'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import QuranMajeedVector from '../../../components/svg/QuranMajeedVector'
import QuranIndex from '../../quran/QuranIndex'
import QuranListenAndRead from '../../quran/QuranListenAndRead'
import { useNavigation } from '@react-navigation/native';


const QuarnMajeedCard = ({navigation}) => {

  return (
    <Pressable onPress={() =>navigation.navigate('QuranIndex')}>
    <Box bg={'#FFFFFF'} borderRadius={10}  height={Dimensions.get('screen').height/7 } mx={2.5}>
     <Center> <Heading marginTop={-2}fontSize={20} fontWeight={500}  >Quran Majeed</Heading></Center>
     <HStack marginTop={2} >
     <QuranMajeedVector marginLeft={2}/>
     <VStack marginLeft={10}>
     <Text fontSize={18} fontWeight={400} >    اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ  </Text>
     <Text   fontSize={12} fontWeight={400}>Recite in the name of your Lord </Text>
     <Text fontSize={12} fontWeight={400}>who created.</Text>
     </VStack></HStack>
    </Box>
    </Pressable>
  )
}

export default QuarnMajeedCard  