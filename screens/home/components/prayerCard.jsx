import { View, Text, Box, Center, Heading, HStack, VStack, Container, Pressable } from 'native-base'
import React,{useState,useEffect} from 'react'
import { Dimensions,StyleSheet } from 'react-native'
import PrayerIconCard from '../../../components/svg/PrayerIconCard'
import CheckBox from '../../../components/svg/CheckBox'
import axios from 'axios'
import { compareTwoTime, formatTime, getTodayDate } from '../../../utils/date'
import * as Location from 'expo-location';
import {BOTTOM_PRAYER} from "../../../constants/routes"


const PrayerCard = ({setDate,setNextPrayerName,setNextPrayerTime,navigation}) => {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [fajrTiming,setFajrTiming] = useState(null)
  const [dhuhrTiming,setDhurTiming] = useState(null)
  const [asrTiming,setAsrTiming] = useState(null)
  const [maghribTiming,setMaghribTiming] = useState(null)
  const [ishaTiming,setIshaTiming] = useState(null)
  

  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      let todayDate = getTodayDate()
      const res = await axios.get(`http://api.aladhan.com/v1/timings/${todayDate}?latitude=${location.coords.latitude}&longitude=${location.coords.longitude}&method=2`)
      // console.log(res.data.data.timings.Asr)
      setDate(res.data.data.date.hijri.date)
      setFajrTiming(res.data.data.timings.Fajr)
      setDhurTiming(res.data.data.timings.Dhuhr)
      setAsrTiming(res.data.data.timings.Asr)
      setMaghribTiming(res.data.data.timings.Maghrib)
      setIshaTiming(res.data.data.timings.Isha)
    if(compareTwoTime(new Date().getHours()+":"+new Date().getMinutes(),fajrTiming) === false){
      setNextPrayerName("Fajr")
    
      setNextPrayerTime(fajrTiming)
      return;
    }else  if(compareTwoTime(new Date().getHours()+":"+new Date().getMinutes(),dhuhrTiming) === false){
      setNextPrayerName("Dhuhr")
      setNextPrayerTime(dhuhrTiming)
      return;
    }else  if(compareTwoTime(new Date().getHours()+":"+new Date().getMinutes(),asrTiming) === false){
      setNextPrayerName("Asr")
      setNextPrayerTime(asrTiming)
      return;
    }else  if(compareTwoTime(new Date().getHours()+":"+new Date().getMinutes(),maghribTiming) === false){
      setNextPrayerName("Maghrib")
      setNextPrayerTime(maghribTiming)
      return;
    }else  if(compareTwoTime(new Date().getHours()+":"+new Date().getMinutes(),ishaTiming) === false){
      setNextPrayerName("Isha")
      setNextPrayerTime(ishaTiming)
      return;
    }
      
    })();
  }, [fajrTiming,dhuhrTiming,asrTiming,maghribTiming,ishaTiming])

  return (
    <Pressable onPress={()=>navigation.navigate(BOTTOM_PRAYER)}>
    
    <Box  bg={'#FFFFFF'}   height={Dimensions.get('screen').height/6} borderRadius={10} marginTop={-90} marginBottom={1}mx={2.5}>
        <Center>
          <HStack alignItems={'center'} space={1}>
            <Heading marginTop={3.5} marginRight={1.5} fontSize={20} fontWeight={450} >
              Prayer
            </Heading>
            
            <PrayerIconCard marginTop={20}/>
            <Heading marginTop={4} marginLeft={-1} fontSize={20} fontWeight={450}>
              Times
            </Heading>
          </HStack>
    
          <HStack space={7} marginTop={4} justifyContent={'space-evenly'}  >
            <VStack justifyContent={'center'} alignItems={'center'}>
            <Text fontSize={17} fontWeight={400} >Fajr</Text>
            <Text fontSize={10} fontWeight={300}>{formatTime(fajrTiming)}</Text>              
            </VStack>

            <VStack justifyContent={'center'} alignItems={'center'}>
            <Text fontSize={17} fontWeight={400} >Dhuhr</Text>
            <Text fontSize={10} fontWeight={300}>{formatTime(dhuhrTiming)}</Text>              
            </VStack>
            <VStack justifyContent={'center'} alignItems={'center'}>
            <Text fontSize={17} fontWeight={400} >Asr</Text>
            <Text fontSize={10} fontWeight={300} >{formatTime(asrTiming)}</Text>              
            </VStack>
            <VStack justifyContent={'center'} alignItems={'center'}>
            <Text fontSize={17} fontWeight={400} >Maghrib</Text>
            <Text fontSize={10} fontWeight={300} >{formatTime(maghribTiming)}</Text>              
            </VStack>
            <VStack justifyContent={'center'} alignItems={'center'}>
            <Text fontSize={17} fontWeight={400}>Isha</Text>
            <Text fontSize={10}fontWeight={300} >{formatTime(ishaTiming)}</Text>              
            </VStack>
          </HStack>
          <HStack marginX={5} marginTop={2}  justifyContent={'space-evenly'} mx={9}>
            <HStack justifyContent={'center'} alignItems={'center'} marginLeft={5}>
            {compareTwoTime(new Date().getHours()+":"+new Date().getMinutes(),fajrTiming) ? <CheckBox/>:<View style={styles.circle}/>}
            <View style={styles.lineStyle}/>
            </HStack>
            <HStack justifyContent={'center'} alignItems={'center'} marginLeft={2}>

            {compareTwoTime(new Date().getHours()+":"+new Date().getMinutes(),dhuhrTiming) ? <CheckBox/>:<View style={styles.circle}/>}
            <View style={styles.lineStyle}/>
            </HStack>
            <HStack justifyContent={'center'} alignItems={'center'} marginLeft={2}>
            {compareTwoTime(new Date().getHours()+":"+new Date().getMinutes(),asrTiming) ? <CheckBox/>:<View style={styles.circle}/>}
            <View style={styles.lineStyle}/>
            </HStack>
            <HStack justifyContent={'center'} alignItems={'center'} marginLeft={2}>
            {compareTwoTime(new Date().getHours()+":"+new Date().getMinutes(),maghribTiming) ? <CheckBox/>:<View style={styles.circle}/>}
            <View style={styles.lineStyle}/>
            </HStack>
            <HStack justifyContent={'center'} alignItems={'center'} marginLeft={2}>
              
            {compareTwoTime(new Date().getHours()+":"+new Date().getMinutes(),ishaTiming) ? <CheckBox/>:<View style={styles.circle}/>}
            <View style={[styles.lineStyle,{width:1}]}/>
            </HStack>

          </HStack>
 
        </Center>
      
    </Box>
    </Pressable>
  )
}

export default PrayerCard

const styles = StyleSheet.create({
  lineStyle:{
    backgroundColor: '#9D9D9D',
    height: 2,
    width: 57,

   },
   circle: {
    width: 16,
    height: 16,
    borderRadius: 16 / 2,
    backgroundColor: 'gray',
  }
 });

//  width={Dimensions.get('screen').width/1.1}  59