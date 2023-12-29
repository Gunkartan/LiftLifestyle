import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Styles from "./Style";
import LoginScreen from "./components/login/LoginScreen";
const App = () => {
    const Stack = createStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    component={LoginScreen}
                    name="Login"
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App