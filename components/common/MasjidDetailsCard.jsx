import { StyleSheet,Alert  } from 'react-native';
import { Box,HStack, VStack,View,Text,Pressable} from 'native-base'
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
import axios from 'axios';
import { BASE_URL, FOLLOW, UNFOLLOW } from '../../constants';
import { useEffect, useState } from 'react';




const showAlert = (msg,followOrUnFollow,id) =>
Alert.alert(
  msg+' Masjid',
  `Are you sure you want to ${msg} masjid ?`,
  [
    {
      text: 'Cancel',
      onPress: ()=>{},
      style: 'cancel',
    },
    {
        text: msg,
        onPress:()=>{
          console.log("Alert",id)
          followOrUnFollow(id)
        },
        style: 'cancel',
      },
  ],
  {
    cancelable: true,
    onDismiss: () =>
      Alert.alert(
        'This alert was dismissed by tapping outside of the alert dialog.',
      ),
  },
);

const MasjidDetailsCard = ({masjidId,followers,capacity}) => {
console.log("MasjidId",masjidId)
  const [status,setStatus] = useState('Follow')
  const [currentFollowedMasjidId,setCurrentFollowedMasjidId] = useState('')
  const UnFollwOrFollowMasjid = async () =>{
    console.log('kk',masjidId)
    const res = await axios.post(BASE_URL+FOLLOW,{
      "masjid_id":masjidId,
      "uid":"NFQMqSHHbLRSgGiYd3xB7dEwMbv2"
      })
      console.log("-->",res.data.masjid_id)
  
      if(res.data.masjid_id !== masjidId){
        console.log("NotMatch")
        setStatus('Follow') 
        setCurrentFollowedMasjidId(res.data.masjid_id)
      }else{
        console.log("Match")
        setStatus('UnFollow')
        setCurrentFollowedMasjidId(masjidId)
      }
  }

  const unFollowMasjid = async (id) =>{
    console.log("UnFolllllow",id)
    const res = await axios.post(BASE_URL+UNFOLLOW,{
      "masjid_id":id,
      "uid":"NFQMqSHHbLRSgGiYd3xB7dEwMbv2" 
    })
    console.log("unFollow",res.data)
    setStatus('Follow')
  }

  const followMasjid = async (id) =>{
    console.log("Folllllow",id)
    const res = await axios.post(BASE_URL+FOLLOW,{
      "masjid_id":id,
      "uid":"NFQMqSHHbLRSgGiYd3xB7dEwMbv2" 
    })
    console.log("follow",res.data)
    setStatus('UnFollow')
  }

   useEffect(()=>{
    try {
      if(masjidId!==undefined)
      UnFollwOrFollowMasjid()
    } catch (error) {
        console.log("MasjidDetailsCard",error)
    }
    
   },[])
   
    return (
            <LinearGradient colors={['#38DAAC','#0B936A']} style={{marginHorizontal:-15}} >
            <HStack justifyContent={'space-between'} mt={3}  alignItems={'center'} px={3} >
    
                <HStack space={3}>
                <VStack alignItems={'center'} >

                    <Text style={styles.textStyle}>{followers}</Text>
                    <Text style={styles.textStyle}>Followers</Text>
                </VStack>
                <VStack borderLeftWidth={2} borderLeftColor={'#FFFFFF'} alignItems={'center'} >
                    <Text style={styles.textStyle}>{capacity}</Text>
                    <Text style={styles.textStyle}>Capacity</Text>
                </VStack>
                <View justifyContent={'center'} alignItems={'center'} borderLeftWidth={2} borderLeftColor={'#FFFFFF'}>
                <Entypo name="share" size={24} color="#FFFFFF"/>
                </View>
                </HStack>
                <View mr={2} >
                    <Pressable onPress={()=>showAlert(status==='Follow' ?'Follow' :'UnFollow',status === 'Follow' ? followMasjid : unFollowMasjid,currentFollowedMasjidId)} >
                    <Box bgColor={'#FFFFFF'}borderRadius={20} p={1.5} h={8} mb={2} width={20} >
                    <Text color={'#0E7305'} fontSize={15} fontWeight={500} >{status}</Text>
                </Box>
                    </Pressable>
  
                </View>
            </HStack>
            </LinearGradient>
  )
}


export default MasjidDetailsCard

const styles = StyleSheet.create({
    textStyle:{
        color:'#FFFFFF'
    }
})