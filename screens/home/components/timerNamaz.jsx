import React from 'react'
import { View, Text, Box, HStack } from 'native-base'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { calculateDiffInTwoTime } from '../../../utils/date'

const TimerNamaz = ({nextPrayerName,nextPrayerTime}) => {
  console.log(nextPrayerTime)
  return (
    <View marginBottom={-150}  marginTop={3}>
   <AnimatedCircularProgress
  size={115}
  width={15}
  // fill={calculateDiffInTwoTime(new Date().getHours()+":"+new Date().getMinutes(),nextPrayerTime).minDiff}
  fill={80}
  tintColor="#FFB641"
  onAnimationComplete={() => console.log('onAnimationComplete')}
  backgroundColor="#E0E3EB"
  rotation={360}
    >
  
  {
    (fill) => (
      <Text fontWeight={400} fontSize={17}>
      -00:{calculateDiffInTwoTime(new Date().getHours()+":"+new Date().getMinutes(),nextPrayerTime).hoursDiff}:{calculateDiffInTwoTime(new Date().getHours()+":"+new Date().getMinutes(),nextPrayerTime).minDiff}
      {console.log(calculateDiffInTwoTime(new Date().getHours()+":"+new Date().getMinutes(),nextPrayerTime))}
      </Text>
    )
  }
  </AnimatedCircularProgress>
  
   <HStack marginTop={2.5} >
   <Text fontWeight={500} fontSize={17} > {nextPrayerName} </Text>
   <Text fontWeight={400} fontSize={16} marginLeft={-1}>  {nextPrayerTime}</Text>
   </HStack>

    </View>
  )
}

export default TimerNamaz