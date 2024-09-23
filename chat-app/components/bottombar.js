import { View } from "react-native"
import { TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Bottombar({navigation}) {
    return (
        <View style={{
            flex: 1, flexDirection: "row",alignItems:"center", justifyContent: "space-around", position: 'absolute',bottom: 0,left: 0,right: 0,height: 70,         
            width: '100%',  backgroundColor: "#008080",
            }}>
            <TouchableOpacity onPress={() => navigation.navigate("Userlist")}>
            <Icon name="cog" size={32} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Icon name="home" size={32} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Userlist")}>
            <Icon name="account-plus" size={32} color="white" />
            </TouchableOpacity>
        </View>
    )
}

export default Bottombar