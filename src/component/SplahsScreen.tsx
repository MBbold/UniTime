import React from "react";
import { Image, StyleSheet, View } from "react-native";

const SplashScreen = () => {
  return (
    <View style={styles.animationContainer}>
      <Image style={{width:'100%', height:'100%', resizeMode:'contain'}} source={{uri:'https://cdn.greensoft.mn/uploads/site/1329/site_config/logo/d87e18e9dc9056f8d51eed1a85e0e95ed2630e5b.png'}} />
    </View>
  );
};
const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});
export default SplashScreen;