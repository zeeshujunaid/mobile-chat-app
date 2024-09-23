import { Text, View } from "react-native";
import Bottombar from "./components/bottombar";
import SearchBar from "./components/searchbar";

function Home({ navigation }) {
  return (
    <View style={{ flex: 1 ,  backgroundColor: '#F7F7F7',}}>
      <View
        style={{
          height: "16%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: '#008080',
          zIndex: 1,
          gap:5,
          paddingTop:5,
        }}
      >
        <Text style={{ color: "white",   }}>PANDA CHAT</Text>
      <View style={{ width:"100%", backgroundColor:"none", paddingLeft:30,}}>
        <SearchBar />
      </View>
      </View>


      <View style={{ flex: 1, alignItems: "center", justifyContent: "center",backgroundColor:"#F7F7F7", }}>
        <Text style={{color:"#333333",}}>HELLO THIS IS HOME PAGE PLZ ADD USER TO CHAT</Text>
      </View>

      <Bottombar navigation={navigation} />
    </View>
  );
}

export default Home;
