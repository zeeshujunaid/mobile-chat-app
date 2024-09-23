import { PaperProvider } from "react-native-paper";
import Home from "./Home";
import Signup from "./screens/singup"; 
import Login from "./screens/login";
import Loader from "./screens/loader";
import Userlist from "./screens/userlist"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="signup" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Loader" component={Loader} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="signup" component={Signup} />
          <Stack.Screen name="Userlist" component={Userlist} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
