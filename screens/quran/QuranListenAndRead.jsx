import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Dimensions, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HStack, VStack, Center, Box, Input } from 'native-base';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import BackArrow from '../../components/svg/back';
import {FontAwesome, AntDesign} from '@expo/vector-icons'
import HeadphonesQuran from '../../components/svg/HeadphonesQuran';
import ReadQuran from '../../components/svg/ReadQuran';
import HomeBackgroundImg from '../../components/svg/homebackgroundImg';



const QuranListenAndRead = () => {
  const navigation = useNavigation();

  const navigateToReciterList = () => {
    navigation.navigate('ReciterList');
  };

  const navigateToReadingNarrationSelection = () => {
    navigation.navigate('ReadingNarrationSelection');
  };

  const navigateToSearch = () => {
    navigation.navigate('Search');
  };

  return (
    <VStack style={{backgroundColor: '#e1f5e6'}}>
       <Pressable onPress={() => navigation.goBack()}>
        <View style={{ padding: 16, backgroundColor: '#fff' }}>
          <BackArrow/>
        </View>
      </Pressable>
     <Center>
      <View style={{top:-30}}>
        <Text style={{ fontSize: 18 }}>Quran Majeed </Text>
      </View>
      </Center>
      

      <View marginTop={-10}>
    <HStack  style={styles.container} >
    <Input variant="inline" placeholder="Search Surah" w={'100%'} fontSize={16}
     
    InputLeftElement={<View marginLeft={10}><FontAwesome name="search" size={24} color="#6D6D6D" /></View>}
    InputRightElement={<View marginRight={10}><FontAwesome name="microphone" size={24} color="#6D6D6D"/></View>} 
    // InputRightElement={<View marginRight={10}><AntDesign name="close" size={24} color="black" /></View>} 

    />
    </HStack>
    </View>
      <View marginTop={20}>
        <Center>
      <Pressable onPress={navigateToReciterList}>
        <Box bg={'#FFFFFF'} borderRadius={10}  height={Dimensions.get('screen').height/4 } width={Dimensions.get('screen').width/1.2}>
            <VStack marginTop={6}>
          <Center>
          <HeadphonesQuran/>
          <Text style={{ fontSize: 20, marginTop: 10  }}>Listen to Quran</Text>
          <Text style={{ fontSize: 14, marginTop: 10 }}>A carefully picked collection of the world's</Text>
          <Text style={{ fontSize: 14 }}>top reciters' voices.</Text>
          </Center>
          </VStack>
        </Box>
      </Pressable>

      <Pressable onPress={navigateToReadingNarrationSelection}>
      <Box bg={'#FFFFFF'} borderRadius={10}  height={Dimensions.get('screen').height/4 } width={Dimensions.get('screen').width/1.2} marginTop={4}>
            <VStack marginTop={6}>
          <Center>
          <ReadQuran/>
          <Text style={{ fontSize: 20, marginTop: 10  }}>Read Quran </Text>
          <Text style={{ fontSize: 14, marginTop: 10 }}>Read Quran in many Narration. Change </Text>
          <Text style={{ fontSize: 14 }}>style for better readability.</Text>
          </Center>
          </VStack>
        </Box>
      </Pressable>
      </Center>
      </View>

      <HomeBackgroundImg/>

    </VStack>
  );
};

const styles = StyleSheet.create({
  container : {
    mx:4,
    borderWidth:1,
    borderRadius:10,
    borderColor:'#6D6D6D',
    marginTop:20,
    marginLeft:20,
    marginRight:20,
  
  }
   
  });

export default QuranListenAndRead;
