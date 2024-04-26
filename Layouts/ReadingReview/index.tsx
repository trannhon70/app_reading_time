import { COlORS } from "@/constants/Colors";
import { scalePoint } from "@/utils/common";
import { Dimensions, Image, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { FaCirclePlay } from "react-icons/fa6";
import Carousel from "react-native-reanimated-carousel";
import { useState } from "react";

const Styles = StyleSheet.create({
  heading: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  headingText: {
    fontSize: scalePoint(20),
    paddingHorizontal: scalePoint(20),
    paddingVertical: scalePoint(4),
    fontWeight: "700",
    color: COlORS.black,
    marginTop: scalePoint(20),
    textAlign: "center",
  },
  why: {
    flex: 1,
    marginTop: 20,
  },
  whyView: {
    // backgroundColor: COlORS.white,
    // borderBottomEndRadius: scalePoint(80),
    // borderTopLeftRadius: scalePoint(80),
  },
  whyViewImage: {
    height: 200,
    width: "100%",
    borderRadius: scalePoint(30),
  },
  whyText: {
    fontSize: scalePoint(14),
    color: COlORS.orange,
    textAlign: "center",
  },
  icon: {
    position: "absolute",

    top: "36%",
    left: "44%",
  },
});

const data = [
  {
    id: 1,
    text: "I was worried if my child would be able to take online English classes since he was young, but thanks to the kind teacher, I was able to have fun.",
    image: "https://img.youtube.com/vi/fwUvp2lEtn0/sddefault.jpg",
  },
  {
    id: 2,
    text: "“I’m really happy that my child developed the habit of reading through reading time.”",
    image: "https://img.youtube.com/vi/ul33Z36fyf0/sddefault.jpg",
  },
  {
    id: 3,
    text: "“Reading should be done in a comfortable place, but I think it’s good to be able to do it at home every day with a reading teacher.”",
    image: "https://img.youtube.com/vi/R8tVc0BDM54/sddefault.jpg",
  },
];
const ReadingReview = () => {
  const width = Dimensions.get("window").width;
  const [current, setCurrent] = useState<number>(0);

  //   console.log(current, "current");

  return (
    <View style={{ paddingHorizontal: 20 }}>
      <View style={Styles.heading}>
        <Text style={Styles.headingText}>Reading Time Experience Review</Text>
      </View>
      <View style={{ flex: 1, paddingRight: 30, height: 600 }}>
        <Carousel
          loop
          //   vertical={true}
          width={width - 50}
          height={width - 200}
          autoPlay={true}
          data={data}
          scrollAnimationDuration={1000}
          onSnapToItem={(index) => setCurrent(index)}
          key={"aa"}
          mode="parallax"
          renderItem={({ item, index }) => {
            return (
              <View style={Styles.why} key={index}>
                <View style={Styles.whyView}>
                  <Image
                    style={Styles.whyViewImage}
                    source={{
                      uri: `${item.image}`,
                    }}
                  />
                  <Text style={Styles.icon}>
                    <FaCirclePlay size={50} color="#5353ac " />
                  </Text>
                </View>
                <View>
                  <Text style={Styles.whyText}>{item.text}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
      {/* <View style={Styles.why}>
        <View style={Styles.whyView}>
          <Image
            style={Styles.whyViewImage}
            source={{
              uri: "https://img.youtube.com/vi/fwUvp2lEtn0/sddefault.jpg",
            }}
          />
          <Text style={Styles.icon}>
            <FaCirclePlay size={50} color="#5353ac " />
          </Text>
        </View>
        <View>
          <Text style={Styles.whyText}>
            “I was worried if my child would be able to take online English
            classes since he was young, but thanks to the kind teacher, I was
            able to have fun.”
          </Text>
        </View>
      </View> */}
    </View>
  );
};

export default ReadingReview;
