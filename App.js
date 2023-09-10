import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import Navigation from "./navigator/navigation";

import { useState } from "react";
import MySplashScreen from "./screens/splash/splashScreen";
import { SafeAreaView } from "react-native";
import Header from "./screens/header/Header";
import SplashScreen1 from "./components/svg/splashScreen1";



const  App = ()=> {
  const [status,setStatus] = useState(false)
  return (
    <NativeBaseProvider>
      <NavigationContainer>
         <SafeAreaView style={{flex:1}}>
       {!status ? <MySplashScreen setStatus={setStatus}/> : <Navigation/>}
        </SafeAreaView>

      {/* <SplashScreen1/> */}
      </NavigationContainer>
      </NativeBaseProvider>
  );
}

export default App


