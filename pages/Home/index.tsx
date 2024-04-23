import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SCREEN_WIDTH, scalePoint } from "@/utils/common";
// import { Button } from '~components/atoms'
// import { ArticleList, ProductList, Slider } from '~components/organisms'
import { COlORS } from "@/constants/Colors";
// import LayoutWithHeading from "@/layouts/LayoutWithHeading";
// import { Plus } from '@/images/index'
// import { AppScreenNavigationProp } from '~routes/index'

const Styles = StyleSheet.create({
  sliderContainer: {
    width: "90%",
    height: scalePoint(250),
    backgroundColor: COlORS.white,
    borderBottomEndRadius: scalePoint(100),
    borderTopLeftRadius: scalePoint(100),
    overflow: "hidden",
  },
  centerContainer: {
    alignItems: "center",
  },
  container: {},
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
});
const Home = () => {
    return  <>
    <View style={Styles.container}>
      <View style={Styles.centerContainer}>
        <View style={Styles.sliderContainer}>
          {/* <Slider data={dataSliders} /> */}
        </View>
      </View>

      {/* ArticleList */}
      <Text style={Styles.heading}>
        Why is reading English books important!
      </Text>
      {/* <ArticleList /> */}
      {/* ArticleList end */}

      {/* ArticleList isVideo */}
      <Text style={Styles.heading}>Reading time review from Korean</Text>
      {/* <ArticleList isVideo /> */}
      {/* ArticleList isVideo end */}

      <View style={Styles.textBreakContainer}>
        <Text style={Styles.heading}>Reading time review from Korean</Text>
        <Text style={Styles.textDesc}>
          25 minutes every day, with the guidance of the foreign teacher, you
          will develop the habit of reading English and naturally improve your
          English language skills
        </Text>
      </View>

      {/* ProductList */}
      <Text style={Styles.heading}>Reading time products</Text>
      {/* <ProductList /> */}
      {/* ProductList end */}

      <View style={Styles.guideContainer}>
        <Text style={Styles.heading}>Reading time review from Korean</Text>
        <View style={Styles.stepConatiner}>
          {/* <Image source={slider} style={Styles.stepImage} /> */}
          <Text style={Styles.textStep}> 1:1 with foreign teacher</Text>
        </View>
        <View style={Styles.plus}>{/* <Plus /> */}</View>
        <View style={Styles.stepConatiner}>
          {/* <Image source={slider} style={Styles.stepImage} /> */}
          <Text style={Styles.textStep}> 25 minutes</Text>
        </View>
        <View style={Styles.plus}>{/* <Plus /> */}</View>
        <View style={Styles.stepConatiner}>
          {/* <Image source={slider} style={Styles.stepImage} /> */}
          <Text style={Styles.textStep}> 1:1 with foreign teacher</Text>
        </View>
      </View>
    </View>
  </>
}

export default Home