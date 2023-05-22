import React, { Component } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
  Text,
  ImageBackground

} from "react-native";


const appIcon = require("../assets/love.png");


export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      userSignedIn: false
    };
  }
  

  signIn = async (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.replace("Home");
      })
      .catch(error => {
        Alert.alert(error.message);
      });
  };


  render() {
      const { email, password } = this.state;

      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />

        
          <Text style={styles.appTitleText}>Emotional Stabilizer</Text>
          <Image source={appIcon} style={styles.appIcon} />
      

          <TextInput
            style={styles.textinput}
            onChangeText={text => this.setState({ email: text })}
            placeholder={"Mood Detected" }
            placeholderTextColor={"#301934"}
            autoFocus
          />
          <TextInput
            style={[styles.textinput, { marginTop: 20 }]}
            onChangeText={text => this.setState({ password: text })}
            placeholder={"           Sad"}
            placeholderTextColor={"#301934"}
           // secureTextEntry
          />
          <TouchableOpacity
            style={[styles.button, { marginTop: 40 }]}
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Text style={styles.buttonText}>Find Yourself</Text>
            
          </TouchableOpacity>
          
          
          
        </View>
      );
    }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bfa3fb",
    alignItems: "center",
    justifyContent: "center"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight :  (35)
  },
  appIcon: {
    width:  (200),
    height:  (300),
    resizeMode: "contain",
    marginBottom: (20)
  },
  appTitleText: {
    fontWeight:"bold",
    color: "Purple",
    textAlign: "center",
    fontSize:  (70),
    fontFamily: "Bubblegum-Sans",
    marginBottom:  (20)
  },
  textinput: {
    width:  (300),
    height:  (80),
    padding:  (10),
    borderColor: "#FFFFFF",
    borderWidth:  (4),
    borderRadius:  (10),
    fontSize:  (40),
    color: "Purple",
    backgroundColor: "#ff7b79",
    fontFamily: "Bubblegum-Sans"
  },
  button: {
    width:  (400),
    height:  (80),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius:  (30),
    backgroundColor: "#301934",
    marginBottom:  (50)
  },
  buttonText: {
    fontSize:  (40),
    color: "#ff7b79",
    fontFamily: "Bubblegum-Sans"
  },
  buttonTextNewUser: {
    fontSize:  (12),
    color: "#FFFFFF",
    fontFamily: "Bubblegum-Sans",
    textDecorationLine: 'underline'
  }
});

