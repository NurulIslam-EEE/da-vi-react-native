
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  Pressable
} from "react-native";

export default function home({navigation}) {
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container3}>
        <View style={styles.logo}>
          <Image
            style={styles.logoImg}
            source={require("../../assets/images/LOGO.png")}
          />
        </View>
      </View>
      <View style={styles.container2}>
        <View style={styles.tinyLogo}>
          <Image
            style={styles.tinyLogoImg}
            source={require("../../assets/images/Icon.png")}
          />
        </View>

        <Text style={styles.title}>Non-Contact{`\n`}Deliveries</Text>

        <Text style={styles.description}>
          When placing an order, select the option “Contactless delivery” and
          the courier will leave your order at the door.
        </Text>
        <Pressable style={styles.buttonStyle} 
        onPress={() => {
          navigation.navigate("Item");
        }}
        >
      <Text style={styles.buttonText}>ORDER NOW</Text>
    </Pressable>
        {/* <Button
          title="ORDER NOW"
          color="#0BCE83"
          style={styles.buttonStyle}
          accessibilityLabel="Learn more about this purple button"
        /> */}
        <Text style={styles.description}>
          Dismiss
        </Text>
      </View>
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A259FF",
    // alignItems: "center",
    // justifyContent: "center",
  },
  container2: {
    flex: 0.6,

    backgroundColor: "#F6F5F5",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  container3: {
    flex: 0.4,
  },
  logo: {
    marginTop: 64,
    marginLeft: 20,
  },
  logoImg: {
    height: 63,
    width: 63,
  },
  tinyLogo: {
   
    alignItems: "center",
    marginTop: 64,
    marginBottom:24
  },
  tinyLogoImg: {
    width: 104,
    height: 104,
  },
  title: {
    fontSize: 34,
    fontWeight:'700',
    textAlign: "center",
    
  },
  description:{
    color:'#9586A8',
    fontSize:17,
    marginRight: 20,
    marginLeft: 20,
    textAlign:'center',
    marginBottom:48,
    marginTop:25

  },
  buttonStyle: {
    backgroundColor: "#0BCE83",
   
    marginRight: 20,
    marginLeft: 20,
    height: 56,
    borderRadius:8
  },
  buttonText:{
    color:'#FFFFFF',
    fontSize:15,
    fontWeight:'600',
    textAlign:'center',
   marginTop:16
  }
});