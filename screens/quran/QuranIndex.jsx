import React, { useState, useEffect } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { Box, HStack, VStack,Center } from 'native-base';
import QuranListenAndRead from './QuranListenAndRead';
import Loading from '../../components/svg/Loading';
import { Dimensions } from 'react-native';
import HomeBackgroundImg from '../../components/svg/homebackgroundImg';
import BackArrow from '../../components/svg/back';

const API_URL = 'http://54.202.100.208/api/v1/master/quran/read/get_all_chapters_narration/';

const App = ({navigation}) => {
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    // Fetch data from API
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        // Store data in local storage
        AsyncStorage.setItem('chapters', JSON.stringify(data))
          .then(() => console.log('Data stored in local storage'), navigation.navigate('QuranListenAndRead')
          )
          .catch(error => console.log(error));
        // Update state with data
        setChapters(data);
      })
      .catch(error => console.log(error));
  }, []);

  console.log(chapters); // Log stored data to console

  return (
    <View style={{backgroundColor: '#e1f5e6'}}>
      <View style={{left:20,top:40}}>
       <BackArrow/>
       </View>
      <Center>

         
        {/* TEXT COMPONENT */}
        <View marginTop={30} style={{ opacity: 0.8 }}>
      <Text fontWeight={500} fontSize={18}> 
        Quran Majeed 
      </Text>
      </View>


      {/* MIDDLE  BOX COMPONENT */}
      <View marginTop={300}>
      <Box bg={'#FFFFFF'} borderRadius={10} justifyContent={'center'} alignItems={'center'} height={Dimensions.get('screen').height/9 }>
        <View marginLeft={20} marginRight={20}>
        <HStack>
          <VStack>
     < Text   fontSize={12} fontWeight={400}>Please wait while we're loading holy Qur'an </Text>
     <Text>for you. Jazakallah</Text>
     </VStack>
     <View marginLeft={30}>
     <Loading/>
     </View>

</HStack>
</View>
      </Box>
      </View>
      {/* BACKGROUND IMAGE  */}
      <View marginTop={100} style={{ opacity: 0.8}}>
      <HomeBackgroundImg/>
      </View>
      </Center>
    </View>
  );
};

export default App;
