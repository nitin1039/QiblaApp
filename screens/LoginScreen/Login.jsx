import React, { useEffect, useState } from "react";
import { View, Text, Box, Center, Heading, VStack, Button, HStack } from 'native-base'

import SplashscreenMain from "../../components/svg/splashScreenMain";
import HomeBackgroundImg from "../../components/svg/homebackgroundImg";
import SignUp from "../../components/svg/SignUp"
import { TextInput, PhoneInput, StyleSheet } from "react-native";
import PhoneNumber from "./Components/PhoneNumber";
import { useNavigation } from "@react-navigation/native";
import { firebaseConfig} from "../../config";
import firebase from "firebase/compat/app"



const Login = () => {
    const [phoneNumber, setPhoneNumber]=useState('+918218625586');
    const [code, setCode]=useState('');
    const [verificationId, setVerificationId]=useState(null);
    const sendVerification=()=>{
        const sendOTP = async () => {
            try {
              const phoneNumber = '+918218625586'; // Replace with user's phone number
                console.log("--",phoneNumber)
              const verificationId = await firebase.auth().signInWithPhoneNumber(phoneNumber);
              console.log('OTP sent!',verificationId);
              // Save verificationId for later use
            } catch (error) {
              console.log(error);
            }
          };
          sendOTP()
          
    };
    const confirmCode=()=>{
        const verifyOTP = async () => {
            try {
              const verificationId = '...'; // Replace with the saved verificationId
              const verificationCode = '123456'; // Replace with the code entered by the user
              const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, verificationCode);
              const user = await firebase.auth().signInWithCredential(credential);
              console.log('OTP verified!');
              // Do something with the user object
            } catch (error) {
              console.log(error);
            }
          };
          
    }
    return <>
        <VStack >
            <HStack marginLeft={320} top={10}>
                <Text style={{ fontSize: 16, color: "#2D7333" }}>Skip</Text>
            </HStack>
            <Center>
                {/* darul masajid  */}
                <SplashscreenMain marginTop={70} marginBottom={20} />

                <SignUp />
                <HStack top={10}>
                    <View style={{ elevation: 7, backgroundColor: "white", width: 308, height: 44, borderRadius: 6 }}>
                        <TextInput style={{ left: 15, top: 7 }}
                            placeholder="First name"
                        />
                    </View>
                </HStack>
                <HStack top={10}>
                    <View style={{ elevation: 7, backgroundColor: "white", width: 308, height: 44, borderRadius: 6, marginTop: 15 }}>
                        <TextInput style={{ left: 15, top: 7 }}
                            placeholder="Last name"
                        />

                    </View>

                </HStack>

     
                <View style={{top: 55, flexDirection: 'row', width: 305, elevation: 7, borderRadius: 7}}>
                

                    <Text style={styles.otpText}>
                        Login using Otp
                    </Text>
<TextInput 
placeholder="Phone Number with Country code"
onChangeText={setPhoneNumber}
keyboardType="phone-pad"
autoCompleteType="tel"
style={styles.textInput}
/>
                    
               
                </View>
                <View style={{top: 70}}>
               
                <Text style={{fontSize: 12,color: '#555454'}}>By signing up, you agree to the Darul Masajid's <Text style={{color: "#0E7305"}}>Terms of</Text></Text>

              
             
                <Text italic style={{fontSize: 12, left: 85, color: "#0E7305"}}>Service & Privacy Policy.</Text>
                </View>

                {/* Text Lines Starts here  */}
                <Button shadow={2} marginTop={110} backgroundColor="#006622" size={9} w={'80%'} borderRadius={50} onPress={sendVerification}>
                    Signup2
                </Button>


                <TextInput 
placeholder="Confirm Code"
onChangeText={setCode}
keyboardType="number-pad"
style={styles.textInput}
/>

<Button shadow={2} marginTop={110} backgroundColor="#006622" size={9} w={'80%'} borderRadius={50} onPress={confirmCode}>
                    Signup
                </Button>
    
                <View style={{marginTop: 30}}>

                
                <Text style={{fontSize: 16, color: '#555454'}}>Already have an account? <Text bold style={{fontSize: 16, color: "#0E7305"}}>Login</Text></Text>
                </View>
                {/* background masjid svg  */}
                <HomeBackgroundImg />


            </Center>

        </VStack>
    </>
}
export default Login

const styles=StyleSheet.create({
    // container:{
    //     flex: 1,
    //     backgroundColor: '#000',
    //     alignItems: 'center',
    //     justifyContent: 'center'
    // },
    textInput:{
paddingTop: 40,
paddingBottom: 20,
paddingHorizontal: 20,
fontSize: 24,
borderBottomColor: '#fff',
borderBottomWidth: 2,
marginBottom: 20,
textAlign: 'center',
color: 'red',
left: -100
    },
    sendVerification:{
        padding: 20,
        backgroundColor: '#3498db',
        borderRadius: 10,
    },
    sendCode:{
        padding: 20,
        backgroundColor: '#9b59b6',
        borderRadius: 10,
    },
    buttonText:{
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold'

    },
    otpText:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        margin: 20
    }
})







