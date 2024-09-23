import { useState } from "react";
import { Text, View, Image, TouchableOpacity, Alert,  } from "react-native";
import { TextInput } from "react-native-paper";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "../database/firebase.config";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Signup({ navigation }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async () => {
    setIsLoading(true); 
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      const uid = response.user.uid;
      const userData = { name, email, city, uid };
      AsyncStorage.setItem('userID', response.user.uid);
      await setDoc(doc(db, 'users', uid), userData);

      navigation.navigate("Home");
      Alert.alert("Signup successful");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsLoading(false); 
    }

    setName('');
    setCity('');
    setEmail('');
    setPassword('');
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
        <Image
          source={{ uri: 'https://cdn.dribbble.com/users/940782/screenshots/2715943/pandadribbble.gif' }} 
          style={{ height: "50%", width: "100%", resizeMode: "contain" }}
        />
      </View>
    );
  }

  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
      paddingTop: "20%",
      alignItems: 'center',
      backgroundColor: "#F7F7F7",
      height: "100%",
    }}>
      <View style={{ height: "25%", width: "100%", alignItems: "center" }}>
        <Image
          source={{ uri: 'https://i.pinimg.com/originals/9e/c0/02/9ec0026c5a03de6cf7d2bdd91a1b305d.gif' }}
          style={{ height: "100%", width: "100%", resizeMode: 'contain' }}
        />
      </View>
      <View style={{ height: "40%", width: "100%", gap: 14, alignItems: "center" }}>
        <TextInput
          style={{
            height: 50,
            backgroundColor: "#FFFFFF",
            width: '90%',
            padding: 10,
            borderWidth:2,
            borderRadius: 5,
            borderColor:"#008080",
          }}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
        />
        <TextInput
          style={{
            height: 50,
            backgroundColor: "#FFFFFF",
            width: '90%',
            borderWidth:2,
            padding: 10,
            borderRadius: 5,
            borderColor:"#008080",
          }}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
        />
        <TextInput
          style={{
            height: 50,
            backgroundColor: "#FFFFFF",
            width: '90%',
            borderWidth:2,
            padding: 10,
            borderRadius: 5,
            borderColor:"#008080",
          }}
          value={city}
          onChangeText={setCity}
          placeholder="Enter your city"
        />
        <TextInput
          style={{
            height: 50,
            backgroundColor: "#FFFFFF",
            width: '90%',
            padding: 10,
            borderWidth:2,
            borderRadius: 5,
            borderColor:"#008080",
          }}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
        />
        <View style={{ height: "60%", paddingTop:"5%", width: "100%", alignItems: "center", justifyContent: "center" }}>
          <TouchableOpacity
            style={{
              height: 50,
              width: "70%",
              paddingTop:4,
              borderRadius: 5,
              borderWidth: 2,
              borderColor:"#008080",
              backgroundColor: "#008080",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={handleSignup}
          >
            <Text style={{ color: 'white' }}>SIGNUP</Text>
          </TouchableOpacity>
          <View style={{ flex:1, alignItems:"center", height: "30%", width: "100%", paddingTop: 3, justifyContent: "center" }}>
            <Text style={{color:"#333333",}}>Already have an account?
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={{ color: "blue",paddingTop:"5%", }}> Login</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Signup;