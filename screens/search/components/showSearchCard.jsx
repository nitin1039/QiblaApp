import { HStack, VStack,Text,View, Center, Pressable } from 'native-base'
import { AntDesign,Feather,Ionicons,FontAwesome } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import {addData,getData,clearAll,removeItem} from '../../../utils/store'
import { BOTTOM_MASJID } from '../../../constants/routes';
import ClockIcon from '../../../components/svg/ClockIcon';
   
const ShowSearchCard = ({navigation,recent,setDeleteOrNot,data:{id,masjid_name,name,distance,address_line_1,address_line_2,vicinity,latitude,longitude,geometry,place_id}}) => {
  // console.log(id)

  const onPressHandler = ()=>{
    // console.log("TESTMY",masjid_name)
    // console.log({id,masjid_name,address_line_1,address_line_2,vicinity})
    let requiredItem = {
      id:id,
      masjid_name:masjid_name,
      address: (address_line_1 !==undefined || address_line_2!==undefined)? address_line_1+","+address_line_2 :  vicinity
    }
    addData(requiredItem)     
    async function test(){
      const mytest =     await getData()
      return mytest
    }
    // test()  
    // clearAll()
    navigation.navigate(BOTTOM_MASJID,{masjidId:id,details:{id,masjid_name,name,distance,address_line_1,address_line_2,vicinity,latitude,longitude,geometry,place_id}})

    
  }

  const onRemoveHandler = async (id) =>{

    await removeItem(id)
    setDeleteOrNot(prev => !prev)
    console.log("🚀 ~ file: showSearchCard.jsx:36 ~ onRemoveHandler ~ id:", id)
  }


  return (
    <Pressable onPress={onPressHandler}>
    <HStack  alignItems={'center'} space={1}  mb={2} style={{marginHorizontal:20} } justifyContent={'center'}>
      <VStack flex={1}   >
      <View bgColor={'#C7C7C7'} borderRadius={Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2} p={1} justifyContent={'center'} alignItems={'center'} 
        height= {Dimensions.get('window').width * 0.08}
        width= {Dimensions.get('window').width * 0.08}
        
        >
        <View justifyContent={'center'} alignItems={'center'} >
          {recent ? <ClockIcon/> :<Ionicons name="location-outline" size={20} color="black" />}
        </View>
        </View>
        <Center>
        {recent ?   null: <Text fontSize={10}>{Math.round(distance>=1000?distance/1000:distance).toFixed(0)}{distance>=1000?"Km":"m"}</Text>}
        </Center>

      </VStack>
     
        <HStack borderBottomWidth={2} borderBottomColor='#C7C7C7' mt={3} flex={9} ml={2}>
        <VStack justifyContent={'center'} flex={1}>
            <Text fontSize={14} fontWeight={400}>{masjid_name || name}</Text>
            <Text fontSize={10} fontWeight={400} numberOfLines={1} marginBottom={2}>{address_line_1 || vicinity}</Text>
        </VStack>
        <View justifyContent={'center'} alignItems={'center'} mt={2} marginBottom={3}>
          {recent ? <Pressable onPress={()=>onRemoveHandler(id)}><AntDesign name="close" size={24} color="black" /></Pressable> :    <Feather name="arrow-up-left" size={24} color="black" />}
        
     
        </View>
        </HStack>
 

    </HStack>
    </Pressable> 
  )
}

export default ShowSearchCard