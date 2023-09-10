import React, {useState, useEffect,useRef} from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import { HStack,Stack,InputGroup,InputLeftAddon,Icon,Input } from 'native-base'
import {FontAwesome, AntDesign} from '@expo/vector-icons'

const screenDimensions = Dimensions.get('screen');

const SearchBar = ({setSearch}) => {
   const inputRef = useRef('')
  
  const [dimensions, setDimensions] = useState({
    screen: screenDimensions,
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({screen}) => {
        setDimensions({ screen});
      },
    );
    return () => subscription?.remove();
  });
  useEffect(()=>{
    inputRef.current.focus()
  },[])

  return (
    <View>
    <HStack  style={styles.container} >
    <Input variant="inline" placeholder="Search nearby mosque or an event" w={'100%'} fontSize={15}
      onChangeText ={text => setSearch(text)} 
    ref={inputRef}
    InputLeftElement={<View marginLeft={10}><FontAwesome name="search" size={24} color="#6D6D6D" /></View>}
    InputRightElement={<View marginRight={10}>{Object.keys(inputRef).length === 1 ?<AntDesign name="close" size={24} color="black" />:<FontAwesome name="microphone" size={24} color="#6D6D6D"/>}</View>} 
    // InputRightElement={<View marginRight={10}><AntDesign name="close" size={24} color="black" /></View>} 

    />
    </HStack>
    </View>
  )


}

const styles = StyleSheet.create({
container : {
  mx:4,
  borderWidth:1,
  borderRadius:10,
  borderColor:'#6D6D6D',
  marginTop:20,
  marginLeft:10,
  marginRight:10,

}
 
});
export default SearchBar











// const SearchBar = ({setSearch}) => {
  
// }