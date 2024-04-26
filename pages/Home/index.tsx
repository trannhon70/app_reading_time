import React from "react";
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SCREEN_WIDTH, scalePoint } from "@/utils/common";
import { COlORS } from "@/constants/Colors";
import Header from "@/Layouts/Header";
import WhyReading from "@/Layouts/WhyReading";
import ReadingReview from "@/Layouts/ReadingReview";

const Styles = StyleSheet.create({
  sliderContainer: {
    width: "90%",
    height: scalePoint(250),
    backgroundColor: COlORS.white,
    borderBottomEndRadius: scalePoint(80),
    borderTopLeftRadius: scalePoint(80),
    overflow: "hidden",
  },
  centerContainer: {
    alignItems: "center",
  },
  container: {
    backgroundColor: "rgb(233 219 235)",
    paddingTop: 10,
  },
  sliderImageItem: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  textSlider: {
    backgroundColor: COlORS.white,
    color: COlORS.blue,
    padding: scalePoint(13),
    width: SCREEN_WIDTH * 0.65,
    textAlign: "center",
    fontSize: scalePoint(14),
    borderRadius: 100,
    fontWeight: "700",
    shadowColor: COlORS.gray[100],
    elevation: 6,
  },
  buttonSlider: {
    width: SCREEN_WIDTH * 0.4,
    textAlign: "center",
    borderRadius: 100,
    height: scalePoint(30),
    borderColor: "transparent",
    fontWeight: "700",
    shadowColor: COlORS.gray[100],
    backgroundColor: COlORS.blue,
    elevation: 6,
  },
  absoluteContent: {
    position: "absolute",
    zIndex: 999,
    bottom: scalePoint(30),
    left: 0,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: scalePoint(8),
  },
  heading: {
    fontSize: scalePoint(20),
    paddingHorizontal: scalePoint(20),
    paddingVertical: scalePoint(4),
    fontWeight: "700",
    color: COlORS.black,
    marginTop: scalePoint(20),
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  textBreakContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: scalePoint(20),
  },
  textDesc: {
    fontSize: scalePoint(14),
    color: COlORS.gray[100],
    textAlign: "center",
  },
  stepConatiner: {
    width: scalePoint(180),
    height: scalePoint(180),
    borderColor: COlORS.blue,
    borderWidth: scalePoint(3),
    borderRadius: scalePoint(100),
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  stepImage: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    position: "absolute",
    top: 0,
  },
  textStep: {
    fontWeight: "800",
    textAlign: "center",
    color: COlORS.white,
    fontSize: scalePoint(18),
    shadowColor: COlORS.gray[100],
    elevation: 6,
  },
  guideContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: scalePoint(10),
  },
  plus: {
    width: scalePoint(30),
    height: scalePoint(30),
  },
  sliderContainerImg: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  sliderContainerbody: {
    position: "absolute",
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "10%",
  },
  sliderContainerText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
});
const Home = (props: any) => {
  const { navigation } = props;
  const plus = require("@/assets/images/plus.svg");
  return (
    <>
      <Header navigation={navigation} />
      <SafeAreaView style={{ flex: 1, height: "100%" }}>
        <ScrollView style={{ height: "100%" }}>
          <View style={Styles.container}>
            <View style={Styles.centerContainer}>
              <View style={Styles.sliderContainer}>
                <Image
                  style={Styles.sliderContainerImg}
                  source={{
                    uri: "https://www.readingtime.vn/assets/slide_1-BRpENqDw.jpg",
                  }}
                />
                <View style={Styles.sliderContainerbody}>
                  <Text style={Styles.sliderContainerText}>
                    Cultivating the habit of reading in our children. Video
                    English Reading Lessons, Reading Time
                  </Text>
                  <Button color={"#5353ac"} title="Try it now for free" />
                </View>
              </View>
            </View>

            <WhyReading />
            <ReadingReview />

            <View style={Styles.guideContainer}>
              <Text style={Styles.heading}>
                Create an English reading habit!
              </Text>
              <View style={Styles.stepConatiner}>
                <Image
                  source={{
                    uri: "https://reading-time.co.kr/resources/img/main/sec4_1.jpg",
                  }}
                  style={Styles.stepImage}
                />
                <Text style={Styles.textStep}>
                  {" "}
                  1:1 foreign teacher coaching
                </Text>
              </View>
              <View style={Styles.plus}>
                <Image style={{ width: 35 }} source={plus} />
              </View>
              <View style={Styles.stepConatiner}>
                <Image
                  source={{
                    uri: "https://reading-time.co.kr/resources/img/main/sec4_2.jpg",
                  }}
                  style={Styles.stepImage}
                />
                <Text style={Styles.textStep}> 25 minutes</Text>
              </View>
              <View style={Styles.plus}>
                <Image style={{ width: 35 }} source={plus} />
              </View>
              <View style={Styles.stepConatiner}>
                <Image
                  source={{
                    uri: "https://reading-time.co.kr/resources/img/main/sec4_3.jpg",
                  }}
                  style={Styles.stepImage}
                />
                <Text style={Styles.textStep}> 1:1 with foreign teacher</Text>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                height: "auto",
                flex: 1,
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  backgroundColor: "#f4a5c7",
                  color: "white",
                  width: 280,
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 5,
                  paddingVertical: 15,
                  fontSize: 16,
                  fontWeight: "600",
                  borderRadius: 6,
                }}
              >
                Apply now for a 3-day free trial
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;
