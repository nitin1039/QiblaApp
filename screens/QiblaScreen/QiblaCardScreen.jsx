import React ,{useState, useEffect}from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import {VStack, HStack} from 'native-base'
import MasjidVector from "../../components/svg/masjidVector"
import KabaIcon from "../../components/svg/KabaIcon"
import DirectionArrow from "../../components/svg/DirectionArrow"
import QiblaCompass from './Components/QiblaCompass'
import * as Location from 'expo-location';
import axios from 'axios'
const QiblaCardScreen=()=>{

    const [location, setLocation] = useState(null);
    const [cityName, setCityName] = useState(null);
  
    useEffect(() => {
      getLocationAsync();
    }, []);
  
    const getLocationAsync = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }
  
      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      getCityNameAsync(location.coords.latitude, location.coords.longitude);
    };
  
    const getCityNameAsync = async (latitude, longitude) => {
      const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY';
      const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;
      const response = await axios.get(url);
      const city = response.data.results[0].address_components.find(component =>
        component.types.includes('locality')
      );
      setCityName(city.long_name);
    };
  
    
    
    return<>
    <VStack style={Styles.container}>
        <HStack >
            <Text style={{top: 15}}>Heading</Text>
        </HStack>
        <HStack marginTop={260} >
            <QiblaCompass/>
        </HStack>
        <HStack top={-95} zIndex={-1}>
            <DirectionArrow/>
        </HStack>
        {/* <HStack >
            {Centerimage}
        </HStack> */}
        <HStack top={-215}>
            <KabaIcon/>
        </HStack>
        <HStack top={-30}>
            <Text style={{fontSize: 48}}>23° NE</Text>
        </HStack>
        <HStack>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {location ? (
        <>
          <Text>   {cityName && <Text>City: {cityName}</Text>} {location.coords.latitude}, {location.coords.longitude}</Text>
       
        </>
      ) : (
        <Text>Loading location...</Text>
      )}
    </View>
        </HStack>
        <HStack top={10}>
        <MasjidVector/>
        </HStack>
        
    </VStack>
    </>
}
export default QiblaCardScreen
const Styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:"center",
        backgroundColor:'white',
    
    }
})