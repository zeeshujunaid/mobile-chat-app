// import { useEffect } from "react"
import { View, Image,Text } from "react-native"
// import AsyncStorage from '@react-native-async-storage/async-storage';
function Loader({navigation}) {
    // useEffect(()=>{
    //     checkUser()
    // },[])

    // const checkUser = async ()=>{
    //     const userId = await AsyncStorage.getItem('userID')
    //     if (userId !== null) {
    //         navigation.navigate('Home')
    // console.log("user found going home");
    //     }else(
    //         navigation.navigate('Login')
            
    //     )
    // }
    // console.log(checkUser);
    

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center",backgroundColor:"white", }}>
            <Image
                source={{ uri: 'https://cdn.dribbble.com/users/940782/screenshots/2715943/pandadribbble.gif' }} // Replace with your image URL
                style={{ height: "50%", width: "100%", objectFit: "contain", }}
            />
            <Text style={{fontSize: 24,  color:"black",}}>loading...</Text>
        </View>
    )
}
export default Loader