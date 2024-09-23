import { useState } from "react";
import { Text, View, Image, TouchableOpacity, Alert } from "react-native";
import { TextInput } from "react-native-paper";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../database/firebase.config";
import AsyncStorage from "@react-native-async-storage/async-storage";


function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignin = async () => {
    setIsLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const uid = response.user.uid;
      AsyncStorage.getItem('userID', uid);

      navigation.navigate("Home");
      Alert.alert("login successful");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsLoading(false);
    }

    setEmail('');
    setPassword('');
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
        <Image
          source={{ uri: 'https://cdn.dribbble.com/users/940782/screenshots/2715943/pandadribbble.gif' }} // Loader GIF
          style={{ height: "50%", width: "100%", resizeMode: "contain" }}
        />
      </View>
    );
  }

  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      // paddingTop:"15%",
      alignItems: 'center',
      backgroundColor: "#F7F7F7",
      height: "100%",
    }}>
      <View style={{ height: "25%", width: "100%", alignItems: "center", }}>
        <Image
          source={{ uri: 'https://i.pinimg.com/originals/9c/83/88/9c838839fcf2197a8d8007b27ba713a3.gif' }} // Replace with your image URL
          style={{ height: "100%", width: "100%", objectFit: "contain", }}
        />
      </View>
      <View style={{ height: "40%", width: "100%", gap: 15, alignItems: "center", }}>
        <TextInput
          style={{
            height: "15%",
            borderColor:"#008080",
            backgroundColor: "#FFFFFF",
            borderWidth: 2,
            width: '90%',
            padding: 10,
            borderRadius: 5,
          }}
          onChangeText={text => setEmail(text)}
          placeholder="enter your email"
          value={email} 
        />

        <TextInput
          style={{
            height: "15%",
            borderColor:"#008080",
            backgroundColor: "#FFFFFF",
            borderWidth: 2,
            width: '90%',
            padding: 10,
            borderRadius: 5,
          }}
          onChangeText={text => setPassword(text)}
          placeholder="enter your password"
          secureTextEntry 
          value={password} 
        />
        <View style={{ height: "50%", width: "100%", alignItems: "center", justifyContent: "center", }}>
          <TouchableOpacity style={{ height: "50%", width: "70%", borderRadius: 5, borderWidth: 2, borderColor: "#008080", backgroundColor: "#008080", alignItems: "center", justifyContent: "center", }}
            onPress={handleSignin}
          >
            <Text>
              LOGIN
            </Text>
          </TouchableOpacity>
          <View style={{ height: "30%", width: "100", paddingTop: "5%",}}>
            <Text style={{color:"#333333",}}>Dont have an account ? <TouchableOpacity onPress={() => navigation.navigate("signup")}><Text style={{ color: "blue", }}>signup</Text></TouchableOpacity></Text>
          </View>
        </View>
      </View>
    </View>

  )
}
export default Login