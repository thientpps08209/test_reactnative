import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight, Image, Alert } from 'react-native';


export default function App(props) {

  
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [Message,setMessage] = useState("");
    const handlePress = () =>{
     // Login(email,password,Message);
     Alert.alert("Email"+email + "\n"+"Password"+password+"\n"+"Message"+Message);
    }
    
    

  return (

    <View style={styles.container}>
      <Image style={styles.logo} source={{ uri: 'https://png.icons8.com/google/color/120' }} />

      <View style={styles.inputContainer}>
        <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/user/ultraviolet/50/3498db'}}/>
        <TextInput style={styles.TextInput}
          placeholder="UseName"
          underlineColorAndroid='transparent'
          value ={email}
          onChangeText={(text) => setEmail(text)} />
      </View>

      <View style = {styles.inputContainer}>
        <TextInput style = {styles.TextInput}
         placeholder = "Password"
         underlineColorAndroid = 'transparent'
         value ={password}
         onChangeText={(text) => setPassword(text)}/>

        
      </View>


       
      <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.TextInput}
              placeholder="Message"
              underlineColorAndroid='transparent'
              value ={Message}
              onChangeText={(text) => setMessage(text)}/>
        </View>

      <TouchableHighlight style={[styles.buttonContainer, styles.sendButton]} onPress={handlePress}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableHighlight>
</View>

);

  }
  const styles = StyleSheet.create({

    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#DCDCDC',
    },
    logo:{
      width:120,
      height:120,
      justifyContent: 'center',
      marginBottom:20,
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    TextInput:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
      width:30,
      height:30,
      marginLeft:15,
      justifyContent: 'center'
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:100,
      borderRadius:30,
    },
    sendButton: {
      backgroundColor: "#FF4500",
    },
    buttonText: {
      color: 'white',
    }
  }); 
  



  
       






