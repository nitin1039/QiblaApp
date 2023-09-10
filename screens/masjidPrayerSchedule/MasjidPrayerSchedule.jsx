import { StyleSheet, Dimensions } from "react-native";
import {
  Text,
  Box,
  Heading,
  Center,
  VStack,
  HStack,
  View,
  Button,
  Stack,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import MasjidScheduleImage from "../../components/svg/MasjidScheduleImage";
import MasjidDetailsCard from "../../components/common/MasjidDetailsCard";
import Header from "../header/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, DETAILS } from "../../constants";
import { useNavigation, useRoute } from "@react-navigation/native";
import { BOTTOM_PRAYER } from "../../constants/routes";

const MasjidPrayerSchedule = () => {
  const route = useRoute();
  const navigation = useNavigation();
  if (route.params === undefined) {
    navigation.navigate(BOTTOM_PRAYER);
    return;
  }

  const [fajr, setFajr] = useState({
    adhan: "",
    iqamah: "",
  });
  const [dhur, setDhur] = useState({
    adhan: "",
    iqamah: "",
  });
  const [asr, setAsr] = useState({
    adhan: "",
    iqamah: "",
  });
  const [maghrib, setMaghrib] = useState({
    adhan: "",
    iqamah: "",
  });
  const [isha, setIsha] = useState({
    adhan: "",
    iqamah: "",
  });

  const [jummahPrayer1, setJummahPrayer1] = useState({
    khutbah: "",
    iqamah: "",
  });
  const [jummahPrayer2, setJummahPrayer2] = useState({
    khutbah: "",
    iqamah: "",
  });
  const [masjidName, setMasjidName] = useState("");
  const [followers, setFollowers] = useState("");
  const [capacity, setCapacity] = useState("");
  const [masjid, setMasjidId] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");

  useEffect(() => {
    async function getPrayerTime() {
      console.log("id", route.params.masjidId);
      const response = await axios.get(
        BASE_URL + DETAILS + route.params.masjidId
      );
      console.log("kkk", response.data);
      setFajr({
        adhan: response.data.prayer_time.fajr_adhan,
        iqamah: response.data.prayer_time.fajr_iqamah,
      });
      setDhur({
        adhan: response.data.prayer_time.dhuhr_adhan,
        iqamah: response.data.prayer_time.dhuhr_iqamah,
      });
      setAsr({
        adhan: response.data.prayer_time.asr_adhan,
        iqamah: response.data.prayer_time.asr_iqamah,
      });
      setMaghrib({
        adhan: response.data.prayer_time.maghrib_adhan,
        iqamah: response.data.prayer_time.maghrib_iqamah,
      });
      setIsha({
        adhan: response.data.prayer_time.isha_adhan,
        iqamah: response.data.prayer_time.isha_iqamah,
      });
      setJummahPrayer1({
        khutbah: response.data.prayer_time.juma_khutbah_1,
        iqamah: response.data.prayer_time.juma_iqamah_1,
      });
      setJummahPrayer2({
        khutbah: response.data.prayer_time.juma_khutbah_2,
        iqamah: response.data.prayer_time.juma_iqamah_2,
      });
      setFollowers(response.data.follower_count);
      setCapacity(response.data.capacity);
      setMasjidId(response.data.id);
      setMasjidName(response.data.masjid_name);
      setAddressLine1(response.data.address_line_1);
      setAddressLine2(response.data.address_line_2);
    }
    getPrayerTime();
  }, []);

  return (
    <>
      {/* <Header isBack={true}/>        */}
      <View mt={-10}>
        <MasjidScheduleImage />
      </View>
      <Center>
        <Box
          p={5}
          borderRadius={10}
          bgColor={"#FFFFFF"}
          style={[styles.innerContainer, { marginTop: -210 }]}
        >
          <Heading>{masjidName}</Heading>
          <HStack>
            <Ionicons name="location-outline" size={24} color="black" />
            <VStack>
              <Heading size={"xs"}>{addressLine1}</Heading>
              <Heading size={"xs"}>{addressLine2}</Heading>
            </VStack>
          </HStack>
          <MasjidDetailsCard
            followers={followers}
            capacity={capacity}
            masjidId={route.params.masjidId}
          />
          <Center>
            <Heading size={"md"}>Prayer Times</Heading>
            <Text>14 Shaban, 1443 AH</Text>
            <Text>March 18, 2022</Text>

            <HStack
              borderColor={"#00000033"}
              borderTopWidth={1}
              borderBottomWidth={1}
              space={10}
            >
              <Text style={styles.headingStyle}>Daily Prayers</Text>
              <View
                borderColor={"#00000033"}
                borderLeftWidth={1}
                borderRightWidth={1}
              >
                <Text style={styles.headingStyle}>Adhan</Text>
              </View>
              <Text style={styles.headingStyle}>Iqamah</Text>
            </HStack>
            <HStack
              borderColor={"#00000033"}
              borderTopWidth={1}
              borderBottomWidth={1}
              space={10}
            >
              <View justifyContent={"center"} alignItems={"center"} flex={1}>
                <Text style={styles.headingStyle}>Fajr</Text>
              </View>
              <View
                borderColor={"#00000033"}
                borderLeftWidth={1}
                borderRightWidth={1}
                justifyContent={"center"}
                alignItems={"center"}
                flex={1}
              >
                <Text>{fajr.adhan || "Null"}</Text>
              </View>
              <View justifyContent={"center"} alignItems={"center"} flex={1}>
                <Text>{fajr.iqamah || "Null"}</Text>
              </View>
            </HStack>
            <HStack
              borderColor={"#00000033"}
              borderTopWidth={1}
              borderBottomWidth={1}
              space={10}
            >
              <View justifyContent={"center"} alignItems={"center"} flex={1}>
                <Text style={styles.headingStyle}>Dhuhr</Text>
              </View>
              <View
                borderColor={"#00000033"}
                borderLeftWidth={1}
                borderRightWidth={1}
                justifyContent={"center"}
                alignItems={"center"}
                flex={1}
              >
                <Text>{dhur.adhan || "Null"}</Text>
              </View>
              <View flex={1} justifyContent={"center"} alignItems={"center"}>
                <Text>{dhur.iqamah || "Null"}</Text>
              </View>
            </HStack>
            <HStack
              borderColor={"#00000033"}
              borderTopWidth={1}
              borderBottomWidth={1}
              space={10}
            >
              <View justifyContent={"center"} alignItems={"center"} flex={1}>
                <Text style={styles.headingStyle}>Asr</Text>
              </View>
              <View
                borderColor={"#00000033"}
                borderLeftWidth={1}
                borderRightWidth={1}
                justifyContent={"center"}
                alignItems={"center"}
                flex={1}
              >
                <Text>{asr.adhan || "Null"}</Text>
              </View>
              <View justifyContent={"center"} alignItems={"center"} flex={1}>
                <Text>{asr.iqamah || "Null"}</Text>
              </View>
            </HStack>
            <HStack
              borderColor={"#00000033"}
              borderTopWidth={1}
              borderBottomWidth={1}
              space={10}
            >
              <View justifyContent={"center"} alignItems={"center"} flex={1}>
                <Text style={styles.headingStyle}>Maghrib</Text>
              </View>
              <View
                borderColor={"#00000033"}
                borderLeftWidth={1}
                borderRightWidth={1}
                justifyContent={"center"}
                alignItems={"center"}
                flex={1}
              >
                <Text>{maghrib.adhan || "Null"}</Text>
              </View>
              <View justifyContent={"center"} alignItems={"center"} flex={1}>
                <Text>{maghrib.iqamah || "Null"}</Text>
              </View>
            </HStack>
            <HStack
              borderColor={"#00000033"}
              borderTopWidth={1}
              borderBottomWidth={1}
              space={10}
            >
              <View justifyContent={"center"} alignItems={"center"} flex={1}>
                <Text style={styles.headingStyle}>Isha</Text>
              </View>
              <View
                borderColor={"#00000033"}
                borderLeftWidth={1}
                borderRightWidth={1}
                justifyContent={"center"}
                alignItems={"center"}
                flex={1}
              >
                <Text>{isha.adhan || "Null"}</Text>
              </View>
              <View justifyContent={"center"} alignItems={"center"} flex={1}>
                <Text>{isha.iqamah || "Null"}</Text>
              </View>
            </HStack>
            <Stack mt={2}>
              <Button.Group
                isAttached
                colorScheme="gray"
                mx={{
                  base: "auto",
                  md: 0,
                }}
                size="sm"
                mb={4}
              >
                <Button>LIVE</Button>
                <Button
                  variant="outline"
                  bgColor={"#808080"}
                  _text={{
                    color: "#FFFFFF",
                  }}
                >
                  ADHAN
                </Button>
              </Button.Group>
            </Stack>
            <HStack
              borderColor={"#00000033"}
              borderTopWidth={1}
              borderBottomWidth={1}
              space={10}
            >
              <View justifyContent={"center"} alignItems={"center"} flex={3}>
                <Text style={styles.headingStyle}>Friday Prayer</Text>
              </View>
              <View
                borderColor={"#00000033"}
                borderLeftWidth={1}
                borderRightWidth={1}
                justifyContent={"center"}
                alignItems={"center"}
                flex={2}
              >
                <Text style={styles.headingStyle}>Khutbah</Text>
              </View>
              <View justifyContent={"center"} alignItems={"center"} flex={2}>
                <Text style={styles.headingStyle}>Iqamah</Text>
              </View>
            </HStack>
            <HStack
              borderColor={"#00000033"}
              borderTopWidth={1}
              borderBottomWidth={1}
              space={10}
            >
              <View justifyContent={"center"} alignItems={"center"} flex={2}>
                <Text style={styles.headingStyle}>Jumu`ah - 1</Text>
              </View>
              <View
                borderColor={"#00000033"}
                borderLeftWidth={1}
                borderRightWidth={1}
                flex={1}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text>{jummahPrayer1.khutbah || "Null"}</Text>
              </View>
              <View justifyContent={"center"} alignItems={"center"} flex={1}>
                <Text flex={1}>{jummahPrayer1.iqamah || "Null"}</Text>
              </View>
            </HStack>
            <HStack
              borderColor={"#00000033"}
              borderTopWidth={1}
              borderBottomWidth={1}
              space={10}
            >
              <View flex={2} justifyContent={"center"} alignItems={"center"}>
                <Text style={styles.headingStyle}>Jumu`ah - 2</Text>
              </View>

              <View
                borderColor={"#00000033"}
                borderLeftWidth={1}
                borderRightWidth={1}
                flex={1}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text>{jummahPrayer2.khutbah || "Null"}</Text>
              </View>
              <View flex={1} justifyContent={"center"} alignItems={"center"}>
                <Text>{jummahPrayer2.iqamah || "Null"}</Text>
              </View>
            </HStack>
          </Center>
        </Box>
      </Center>
    </>
  );
};

export default MasjidPrayerSchedule;

const styles = StyleSheet.create({
  innerContainer: {
    height: Dimensions.get("window").height / 1.4,
    width: Dimensions.get("window").width / 1.2,
  },
  headingStyle: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "13",
    color: "#000000",
    textAlign: "center",
  },
});
