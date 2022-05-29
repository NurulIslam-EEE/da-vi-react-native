import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  Pressable,
  ImageBackground,
} from "react-native";
import React from "react";
const image = require('../../assets/images/Media.png');

export default function Item() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.bgText}></Text>
        </ImageBackground>
      </View>
      <View style={styles.container2}>
        <Text style={styles.title}>Boston Lettuce</Text>
        <Text style={styles.price}>1.10 € / piece</Text>
        <Text></Text>
        <Text style={styles.weight}>~ 150 gr / piece</Text>
        <Text style={styles.description}>
          Lettuce is an annual plant of the daisy family, Asteraceae. It is most
          often grown as a leaf vegetable, but sometimes for its stem and seeds.
          Lettuce is most often used for salads, although it is also seen in
          other kinds of food, such as soups, sandwiches and wraps; it can also
          be grilled.
        </Text>
        <Pressable style={styles.buttonStyle}>
          <Text style={styles.buttonText}>ADD TO CART</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: .4,
  },
  bgText:{
      height:358
  },

  container2: {
    flex: .6,
 marginTop:-20,
  borderTopRightRadius: 20,
  borderTopLeftRadius: 20,
  backgroundColor:'#FFF',
  padding:20

  },
  buttonStyle: {
    backgroundColor: "#0BCE83",

    marginRight: 20,
    marginLeft: 20,
    height: 56,
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 16,
  },
  image: {
    justifyContent: "center",
  },
  title:{
      fontSize:30,
      fontWeight:'700',
      color:'#2D0C57',
      marginTop:37
  },
  description:{
      color:'#9586A8',
      fontSize:17,
      fontWeight:'400',
      marginBottom:56,
      marginTop:16
  },
  price:{
      fontSize:32,
      fontWeight:'700',
      color:'#2D0C57',
      marginTop:16
  },
  weight:{
      color:'#06BE77',
      fontSize:17,
      fontWeight:'500'
  }
});
