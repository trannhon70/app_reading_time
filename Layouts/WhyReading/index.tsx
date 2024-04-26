import { COlORS } from "@/constants/Colors";
import { scalePoint } from "@/utils/common";
import { Image, Text, View } from "react-native";
import { StyleSheet } from "react-native";

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
  },
  why: {
    flex: 1,
    marginTop: 20,
  },
  whyView: {
    backgroundColor: COlORS.white,
    borderBottomEndRadius: scalePoint(80),
    borderTopLeftRadius: scalePoint(80),
  },
  whyViewImage: {
    height: 200,
    width: "100%",
    borderBottomEndRadius: scalePoint(30),
    borderTopLeftRadius: scalePoint(30),
  },
  whyText: {
    fontSize: scalePoint(14),
    color: COlORS.gray[100],
    textAlign: "center",
  },
});

const WhyReading = () => {
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <View style={Styles.heading}>
        <Text style={Styles.headingText}>Why is reading!</Text>
      </View>
      <View style={Styles.why}>
        <View style={Styles.whyView}>
          <Image
            style={Styles.whyViewImage}
            source={{
              uri: "https://reading-time.co.kr/resources/img/main/why1.png",
            }}
          />
        </View>
        <View>
          <Text style={Styles.whyText}>
            Reading books is essential when learning a foreign language. In
            particular, younger children learn language faster, so even if they
            have not mastered all of English, they can improve their Reading
            Comprehension Skill by inferring content through pictures.
          </Text>
        </View>
      </View>
      <View style={Styles.why}>
        <View style={Styles.whyView}>
          <Image
            style={Styles.whyViewImage}
            source={{
              uri: "https://reading-time.co.kr/resources/img/main/why2.png",
            }}
          />
        </View>
        <View>
          <Text style={Styles.whyText}>
            Reading Time uses Razkids and Epic books used in public education in
            the U.S. and Canada, and only content suitable for learning has been
            carefully selected. Experience becoming familiar with English
            naturally by reading and discussing books with a reading teacher!
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WhyReading;
