import { View, Image } from 'react-native'
import React,{useCallback,useState,useEffect} from 'react'
import * as SplashScreen from 'expo-splash-screen';
// SplashScreen.preventAutoHideAsync();

const MySplashScreen = ({setStatus}) => {

    const [appIsReady, setAppIsReady] = useState(false);
    useEffect(() => {
      async function prepare() {
        try {
          await new Promise(resolve => setTimeout(resolve, 1000));
          setStatus(true)
        } catch (e) {
          console.warn(e);
        } finally {
          // Tell the application to render
          setAppIsReady(true);
        
        }
      }
  
      prepare(); 
    }, []);
  
  
    // if (!appIsReady) {
    //   return null;
    // }
  return (
    <View
    style={{flex:1,justifyContent:"center",alignItems:'center'}}
    >
        <Image source={require('../../assets/Icon2.png')} /> 
  </View>
  )
}

export default MySplashScreen