import React from "react";
import { Dimensions, Modal, TouchableWithoutFeedback } from "react-native";
import {
  View,
  Text,
  Box,
  Center,
  Heading,
  HStack,
  VStack,
  Container,
  Pressable,
  ScrollView,
} from "native-base";
import { useState, useEffect } from "react";

import axios from "axios";
import {
  compareTwoTime,
  formatTime,
  getTodayDate,
  getIsalmicMonth,
  getMonthName,
} from "../../utils/date";
import * as Location from "expo-location";
import PrayerImage from "../../components/svg/PrayerImage";

import ZoomIcon from "../../components/svg/ZoomIcon";
import MasjidImage from "../../components/svg/MasjidImage";
import PreviewModal from "./Component/PreviewModal";
import Calander from "../../components/svg/Calender";
import Notify from "../../components/svg/Notify";
import NotifyAll from "../../components/svg/NotifyAll";
import NoBell from "../../components/svg/NoBell";
import * as Notifications from 'expo-notifications'
const PrayerTimeScreen = () => {
  const [isDate, setIsDate] = useState(null);

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [fajrTiming, setFajrTiming] = useState(null);
  const [sunriseTiming, setSunriseTiming] = useState(null);
  const [dhuhrTiming, setDhurTiming] = useState(null);
  const [asrTiming, setAsrTiming] = useState(null);
  const [maghribTiming, setMaghribTiming] = useState(null);
  const [ishaTiming, setIshaTiming] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [disable, setDisable] = useState(false);

  const [enablefajr, setEnablefajr] = useState(true);
  const [enableSunrise, setEnableSunrise] = useState(true);
  const [enableDhuhr, setEnableDhuhr] = useState(true);
  const [enableAsr, setEnableAsr] = useState(true);
  const [enableMaghrib, setEnableMaghrib] = useState(true);
  const [enableIsha, setEnableIsha] = useState(true);
  const [allCompnentsEnabled, setAllComponentsEnabled] = useState(true);
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });

  let currentMonth = month[date.getMonth()];
  const Currentdate = date.getDate();
  const Currentyear = date.getFullYear();

  const ismalicDate =
    isDate !== undefined ? getIsalmicMonth(isDate?.split("-")[1]) : null;

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      let todayDate = getTodayDate();
      const res = await axios.get(
        `http://api.aladhan.com/v1/timings/${todayDate}?latitude=${location.coords.latitude}&longitude=${location.coords.longitude}&method=2`
      );
      // console.log(res)

      setIsDate(res.data.data.date.hijri.date);
      setFajrTiming(res.data.data.timings.Fajr);
      setSunriseTiming(res.data.data.timings.Sunrise);
      setDhurTiming(res.data.data.timings.Dhuhr);
      setAsrTiming(res.data.data.timings.Asr);
      setMaghribTiming(res.data.data.timings.Maghrib);
      setIshaTiming(res.data.data.timings.Isha);

    })();
  }, [
    fajrTiming,
    sunriseTiming,
    dhuhrTiming,
    asrTiming,
    maghribTiming,
    ishaTiming,
  ]);

  const onPreviewHandler = () => {
    setModalVisible(true);
  };
  const handleModalClose = () => {
    setModalVisible(false);
  };

  // const oncutnotificationHandler = () => {
  //   setDisable(true);
  // };
  // const onNocutNotificationHandler = () => {
  //   setDisable(false);
  // };

  const handleFajrtoggle = async() => {
    setEnablefajr(!enablefajr);
    if(enablefajr===false){
      await Notifications.scheduleNotificationAsync({
        content: {
          title: 'My Notification Title',
          body: 'My Notification Message',
          data: { data: 'goes here' },
        },
        trigger: null,
      });
  
      console.log("Running app")
    }  
   
  };
  const handleSunriseToggle = async() => {
    setEnableSunrise(!enableSunrise);
    if(enableSunrise===false){
      await Notifications.scheduleNotificationAsync({
        content: {
          title: 'My Notification Title',
          body: 'My Notification Message',
          data: { data: 'goes here' },
        },
        trigger: null,
      });
  
      console.log("Running app")
    } 
  };

  const handleDhuhrToggle = async() => {
    setEnableDhuhr(!enableDhuhr);
    if(enableDhuhr===false){
      await Notifications.scheduleNotificationAsync({
        content: {
          title: 'My Notification Title',
          body: 'My Notification Message',
          data: { data: 'goes here' },
        },
        trigger: null,
      });
  
      console.log("Running app")
    } 
  };
  const handleAsrToggle = async() => {
    setEnableAsr(!enableAsr);
    if(enableAsr===false){
      await Notifications.scheduleNotificationAsync({
        content: {
          title: 'My Notification Title',
          body: 'My Notification Message',
          data: { data: 'goes here' },
        },
        trigger: null,
      });
  
      console.log("Running app")
    } 
  };
  const handleMaghribToggle = async() => {
    setEnableMaghrib(!enableMaghrib);
    if(enableMaghrib===false){
      await Notifications.scheduleNotificationAsync({
        content: {
          title: 'My Notification Title',
          body: 'My Notification Message',
          data: { data: 'goes here' },
        },
        trigger: null,
      });
  
      console.log("Running app")
    } 
  };
  const handleIshaToggle = async() => {
    setEnableIsha(!enableIsha);
    if(enableIsha===false){
      await Notifications.scheduleNotificationAsync({
        content: {
          title: 'My Notification Title',
          body: 'My Notification Message',
          data: { data: 'goes here' },
        },
        trigger: null,
      });
  
      console.log("Running app")
    } 
  };
  // let time = new Date().toLocaleString()
  
  const handleAllComponentToggle = async () => {
    let time = new Date().toLocaleString()
    let formattedTime=formatTime(time.split(" ")[time.split(" ").length-2])
    console.log(formattedTime)
    console.log(formatTime(time.split(" ")[time.split(" ").length-2]))
   

    setEnablefajr(!enablefajr)
    setEnableSunrise(!enableSunrise)
    setEnableDhuhr(!enableDhuhr)
    setEnableAsr(!enableAsr)
    setEnableMaghrib(!enableMaghrib)
    setEnableIsha(!enableIsha)
    setAllComponentsEnabled(!allCompnentsEnabled)
    setDisable(!disable)

    // if(disable===true&&formatTime(fajrTiming)===formattedTime){
      if(disable===true&&formatTime(fajrTiming)===formattedTime){
      await Notifications.scheduleNotificationAsync({
        content: {
          title: 'My Notification Title',
          body: 'My Notification Message',
          data: { data: 'goes here' },
        },
        trigger: null,
      });
  
      console.log("Running app")
    }  
  };


  // console.log(formatTime(fajrTiming))
 
 


  return (
    <>
      <ScrollView>
        <Container marginTop={10} left={-6}>
          <PrayerImage></PrayerImage>
        </Container>
        <Container zIndex={1} marginTop={-9} marginLeft={345}>
          <Pressable onPress={onPreviewHandler}>
            <ZoomIcon />
          </Pressable>
          <PreviewModal
            modalVisible={modalVisible}
            handleModalClose={handleModalClose}
          />
        </Container>
        <VStack marginTop={130}>
          <Box
            bg={"#FFFFFF"}
            height={Dimensions.get("screen").height / 2.5}
            width={Dimensions.get("screen").width / 1.1}
            borderRadius={10}
            marginTop={-90}
            marginBottom={1}
            mx={3.5}
          >
            <Center>
              <Text fontSize={21} fontWeight={500}>
                {isDate?.split("-")[0]} {ismalicDate}, {isDate?.split("-")[2]}{" "}
              </Text>
              <Text fontSize={17} fontWeight={500} marginTop={-1}>
                {" "}
                {currentMonth} {Currentdate}, {Currentyear}{" "}
              </Text>
            </Center>

            <VStack>
              <HStack style={{ justifyContent: "space-around" }}>
                <VStack>
                  <Calander />
                  <Text style={{ fontSize: 9 }}>Add</Text>
                </VStack>
                <VStack>
                  <Text></Text>
                </VStack>

                <VStack>
                  <TouchableWithoutFeedback onPress={handleAllComponentToggle}>
                    <View style={{ left: 16 }}>
                      <Text>
                        {allCompnentsEnabled ? <Notify /> : <Notify />}
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>

                  <TouchableWithoutFeedback onPress={handleAllComponentToggle}>
                    <View style={{left: 4.5}}>
                      <Text>
                        {allCompnentsEnabled ? (
                          <Text style={{ fontSize: 9, top: 10 }}>
                            Disable All
                          </Text>
                        ) : (
                          <Text style={{ fontSize: 9 }}>Notify All</Text>
                        )}
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                </VStack>
              </HStack>

              <HStack justifyContent={"space-around"} bottom={-12}>
                <Text style={{ fontSize: 18, left: -1 }}>Fajr</Text>
                <Text style={{ fontSize: 18, left: -6 }}>
                  {formatTime(fajrTiming)}
                </Text>
                <TouchableWithoutFeedback onPress={handleFajrtoggle}>
                  <View style={{ padding: 3, left: -12}}>
                    <Text>{enablefajr ? <NotifyAll /> : <NoBell />}</Text>
                  </View>
                </TouchableWithoutFeedback>
              </HStack>
              <HStack justifyContent={"space-around"} bottom={-23}>
                <Text style={{ fontSize: 18, left: 1 }}>Sunrise</Text>
                <Text style={{ fontSize: 18, left: -22 }}>
                  {formatTime(sunriseTiming)}
                </Text>

                <TouchableWithoutFeedback onPress={handleSunriseToggle}>
                  <View style={{ padding: 3 , left: -15}}>
                    <Text>
                      {enableSunrise ? (
                        <NotifyAll style={{ left: -20 }} />
                      ) : (
                        <NoBell style={{ left: -17 }} />
                      )}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </HStack>

              <HStack justifyContent={"space-around"} bottom={-35}>
                <Text style={{ fontSize: 18, left: 1 }}>Dhuhr</Text>
                <Text style={{ fontSize: 18, left: -10 }}>
                  {formatTime(dhuhrTiming)}
                </Text>

                <TouchableWithoutFeedback onPress={handleDhuhrToggle}>
                  <View style={{ padding: 3, left: -15}}>
                    <Text>{enableDhuhr ? <NotifyAll /> : <NoBell />}</Text>
                  </View>
                </TouchableWithoutFeedback>
              </HStack>
              <HStack justifyContent={"space-around"} bottom={-45}>
                <Text style={{ fontSize: 18, left: -1.5 }}>Asr</Text>
                <Text style={{ fontSize: 18, left: -4 }}>
                  {formatTime(asrTiming)}
                </Text>

                <TouchableWithoutFeedback onPress={handleAsrToggle}>
                  <View style={{ padding: 3, left: -12 }}>
                    <Text>{enableAsr ? <NotifyAll /> : <NoBell />}</Text>
                  </View>
                </TouchableWithoutFeedback>
              </HStack>
              <HStack justifyContent={"space-around"} bottom={-55}>
                <Text style={{ fontSize: 18, left: 2 }}>Maghrib</Text>
                <Text style={{ fontSize: 18, left: -23 }}>
                  {formatTime(maghribTiming)}
                </Text>

                <TouchableWithoutFeedback onPress={handleMaghribToggle}>
                  <View style={{ padding: 3, left: -15 }}>
                    <Text>{enableMaghrib ? <NotifyAll /> : <NoBell />}</Text>
                  </View>
                </TouchableWithoutFeedback>
              </HStack>
              <HStack justifyContent={"space-around"} bottom={-68}>
                <Text style={{ fontSize: 18 }}>Isha</Text>
                <Text style={{ fontSize: 18, left: -6 }}>
                  {formatTime(ishaTiming)}
                </Text>

                <TouchableWithoutFeedback onPress={handleIshaToggle}>
                  <View style={{ padding: 3, left: -12 }}>
                    <Text>{enableIsha ? <NotifyAll /> : <NoBell />}</Text>
                  </View>
                </TouchableWithoutFeedback>
              </HStack>
            </VStack>
          </Box>
        </VStack>
        <Container marginTop={10}>
          <MasjidImage />
        </Container>
      </ScrollView>
    </>
  );
};

export default PrayerTimeScreen;
