
import React from 'react'
import { View, Text, Box, Center, Heading, HStack, VStack } from 'native-base'
import {   StyleSheet } from 'react-native'
import { getIsalmicMonth, getMonthName } from '../../../utils/date'


const DateHome = ({date}) => {
  
  const ismalicDate =  date!==undefined ? getIsalmicMonth(date?.split("-")[1]) :null

  return (
 <View style={Styles.container}>
    <Text fontSize={21} fontWeight={500}>{date?.split("-")[0]} {ismalicDate}, 1443 AH  </Text>
    <Text fontSize={17} fontWeight={500} marginTop={-1}>{getMonthName(new Date().getUTCMonth()+1)} {new Date().getDate()}, {new Date().getUTCFullYear()} </Text>
 </View>
  )
}

export default DateHome

const Styles = StyleSheet.create (
{
    container: {
        marginTop:20,
        marginBottom:-100,
        
    }
}
)