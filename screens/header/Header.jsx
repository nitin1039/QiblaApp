import {HStack, Pressable} from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const Header = ({isBack}) => {
  const   navigation =  useNavigation()
  return (
    <Pressable onPress={()=>navigation.goBack()}>
    <HStack >
       {isBack ? <Ionicons name="arrow-back-outline" size={30} color="black" />:null} 
    </HStack>
    </Pressable>
  )
}

export default Header