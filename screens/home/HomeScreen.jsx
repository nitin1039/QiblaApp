import {  Box, VStack, HStack, View } from 'native-base'
import React, { useState } from 'react'
import DirectionCard from './components/directionCard'
import MasjidCard from './components/masjidCard'
import PrayerCard from './components/prayerCard'
import QuarnMajeedCard from './components/quarnMajeedCard'
import { LinearGradient } from 'expo-linear-gradient';
import HomeBackgroundImg from '../../components/svg/homebackgroundImg'
import Header from '../header/Header'
import { ScrollView } from 'native-base'
import DateHome from './components/dateHome'
import TimerNamaz from './components/timerNamaz'

const HomeScreen = ({navigation}) => {
    const [ismalicdate,setIslamicDate] = useState('')
    const [nextPrayerName,setNextPrayerName] = useState(null)
    const [nextPrayerTime,setNextPrayerTime] = useState(null)

  return (
    <ScrollView>
        <VStack>
       <LinearGradient colors={['#f0ffef','#E5FBE4']} >
           <Header isBack={false}/>
           <HStack justifyContent={'space-around'}>
           <DateHome date={ismalicdate}/>
           <TimerNamaz nextPrayerName={nextPrayerName} nextPrayerTime={nextPrayerTime}/>
          
           </HStack>

          
            <HomeBackgroundImg style={{marginTop:95}}/>
            <VStack marginTop={-7}>
            <PrayerCard  setDate={setIslamicDate} setNextPrayerName={setNextPrayerName} navigation={navigation} setNextPrayerTime={setNextPrayerTime}/>
            <HStack space={1.5} marginBottom={1}>
            <MasjidCard navigation={navigation} nextPrayerName={nextPrayerName} nextPrayerTime={nextPrayerTime}/> 
            <DirectionCard navigation={navigation}/>
            </HStack>
          <QuarnMajeedCard navigation={navigation}/>
          <View marginTop={100}>
          {/* <AdCard/> */}
          </View>
          </VStack>
          
          
            </LinearGradient>
             
        </VStack>
        </ScrollView>
  


  )
}

export default HomeScreen