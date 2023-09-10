
import { Box, Center,Heading, HStack, VStack,View,Text, Pressable } from 'native-base'
import {Dimensions, StyleSheet} from 'react-native'
import MasjidImg from '../../components/svg/masjidImg'
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import MasjidDetailsCard from '../../components/common/MasjidDetailsCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL, DETAILS, REGISTRATION } from '../../constants';
import Header from '../header/Header';
import {addData} from '../../utils/store.js'
import { BOTTOM_PRAYER, BOTTOM_QIBLA } from '../../constants/routes';
import CheckBox from '../../components/svg/CheckBox';
import HomeBackgroundImg from '../../components/svg/homebackgroundImg';
import MasjidScreenImg from '../../components/svg/MasjidScreenImg';

const MasjidScreen = ({navigation,route}) => {
        console.log("Routing",route)
        if(route.params  ===undefined){
            navigation.navigate(BOTTOM_PRAYER)
            return;
        }  
        const [masjid,setMasjidId] = useState(route.params.masjidId !==undefined ? route.params.masjidId:undefined)
        console.log("masjidId",masjid)
        const [masjidName,setMasjidName] = useState('')
        const [followers,setFollowers] = useState('')
        const [capacity,setCapacity] = useState('')
        const [addressLine1,setAddressLine1] = useState('')
        const [addressLine2,setAddressLine2] = useState('')
    // console.log("paramsId",route.params.masjidId)

        const registerMasjid = async () =>{
            const res =        await axios.post(BASE_URL+REGISTRATION,{
                                latitude:route.params.details.geometry.location.lat,
                                longitude:route.params.details.geometry.location.lng,
                                place_id:route.params.details.place_id,
                                address:route.params.details.addressLine1 || route.params.details.addressLine2 || route.params.details.vicinity,
                                masjid_name:route.params.details.name
            })
            if(res.data.message === "Created"){
                console.log("TEST1")
                getMasjidDetails(res.data.masjid_id)
                addData(res.data.masjid_id)   
                setMasjidId(res.data.masjid_id)
            }
            
        }
    


    const onPressHandler = () =>{
        navigation.navigate(BOTTOM_QIBLA,{masjidId:route.params.masjidId})
    }

    const getMasjidDetails = async (id) =>{
            console.log("GETMASJID",id)
        try {
            if(id!==undefined){
                const response = await axios.get(BASE_URL+DETAILS+id)
                // console.log(response.data)
                setMasjidName(response.data.masjid_name)
                setFollowers(response.data.follower_count)
                setCapacity(response.data.capacity)
                setAddressLine1(response.data.address_line_1)
                setAddressLine2(response.data.address_line_2)       
            }else{
                console.log("undefindid",id)
            }
          
        } catch (error) {
            console.log("error",error)
        }
  
    }

    useEffect(()=>{
        try {
            if(route.params.masjidId!==undefined)
            getMasjidDetails(route.params.masjidId)      
            
            if(route.params.details.id===undefined){
                registerMasjid()

            }      
        } catch (error) {
                console.log("MasjidScreenError",error)
        }

    },[route?.params?.masjidId])

  return (
    <LinearGradient colors={['#f0ffef','#E5FBE4']} style={styles.outerContainer}>
        <Header/>
        <Center>
        <MasjidScreenImg/>
        <Box  p={5} borderRadius={10} bgColor={'#FFFFFF'} mx={5} style={styles.innerContainer} mb={-10}>
            <Text fontSize={24} fontWeight={700}>
            {masjidName}
            </Text>
            <HStack alignItems={'center'} >
            <Ionicons name="location-outline" size={24} color="black"  />
            <View mt={0}>
                {/* {console.log("hi",addressLine1?.length,addressLine2?.length)} */}
                {(addressLine1===undefined || addressLine2 === undefined) ?  <>
                    <Text fontSize={14} fontWeight={500} >{addressLine2}</Text>
                <Text fontSize={14} fontWeight={500} >{addressLine1}</Text>
                </>:
                <>
                 {/* <Text fontSize={14} fontWeight={500} >{addressLine2}</Text> */}
                <Text fontSize={14} fontWeight={500} >{addressLine1}</Text>
                </>
                }
               
            </View>    
            </HStack>
            <View mt={2} >
            <MasjidDetailsCard followers={followers} capacity={capacity} masjidId={masjid}/>
            </View>

            <VStack>
                    <View marginTop={10}>
                <Center>
                <Heading fontSize={18} fontWeight={400} >
                We’re actively working with Masjid’s across the globe to bring them online.
                </Heading>
                <Heading fontSize={18} fontWeight={400} mt={5}>
                Please Follow this page to help motivating this Masjid’s team.
                </Heading>
                </Center>
                </View>
                
 
            </VStack>
        </Box>
        </Center>
    </LinearGradient>
       


  )
}

export default MasjidScreen

const styles = StyleSheet.create({
   innerContainer:{
        height:Dimensions.get('window').height/2,
    },
    outerContainer:{
        height:Dimensions.get('window').height,
       
    }

})