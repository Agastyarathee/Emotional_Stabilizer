import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Alert,
    FlatList,
    Image,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    Linking
} from "react-native";
import axios from "axios";
let ment_data =require("./ment.json");



export default class MentalHealthScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {   
            url:"" 
        };
    }

    componentDidMount() {
       
    }

    renderItem = ({ item }) => { 
        let ment = item
       const {url}=this.state
        let bg 
        if (ment.id === 1){
            bg=require("../assets/h1.jpg")
        }
        else{
            bg=require("../assets/MHN.jpg")
        }
       

        return (
            <View>
                      <ImageBackground   source={bg} style={styles.backgroundImage} >
                      <Image source={require("../assets/mhhh.png")}style={styles.titleImage}></Image>
                      
                        <View style={styles.infoContainer}>
                        <TouchableOpacity onPress= { () => Linking.openURL(item.Link)}> 
                            <Text style={styles.infoText}>{item.Title}</Text>
                            <Text style={[styles.infoText, { marginTop: 20, marginLeft: 50 }]}>Resource Link - {item.Link}</Text>  
                       </TouchableOpacity>  
                       </View>
                        </ImageBackground>
                    </View>
                
           
        );
    };

    keyExtractor = (item, index) => index.toString();

    render() {
      {
            return (
                <View style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea} />
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={ment_data}
                        renderItem={this.renderItem}
                        horizontal={true}
                    />
                </View >
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
        
    },
    titleImage: {
        position: "absolute",
        height: 530,
        width: 530,
        resizeMode: "contain",
        alignSelf:"center"
        
    
    },
    titleText: {
        fontSize: 80,
        fontWeight: "bold",
        color: "Black",
        marginLeft:350,
        marginTop:80,
    },
    meteorContainer: {
        flex: 0.85
    },
    listContainer: {
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        justifyContent: "center",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        borderRadius: 10,
        padding: 10
    },
    cardTitle: {
        fontSize: 20,
        marginBottom: 10,
        fontWeight: "bold",
        color: "black"
    },
    cardText: {
        color: "black"
    },
    threatDetector: {
        height: 10,
        marginBottom: 10
    },
    gifContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    meteorDataContainer: {
        justifyContent: "center",
        alignItems: "center",

    },
    iconImage: {
        position: "absolute",
        height: 400,
        width: 400,
        resizeMode: "contain",
        right: 20,
        top: -120
    },
    infoContainer: {
        flex: 0.35,
        backgroundColor: "#a5b5c5",
        marginTop: 800,
        
        borderRadius: 30,
        padding: 30
    },
    infoText: {
        fontSize: 40,
        marginLeft:20,
        color: "#550203",
        fontWeight: "bold"
    }
});