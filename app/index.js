import { Stack } from "expo-router";
import { View, Text } from "react-native";
import Styles from "./Style";
import LoginScreen from "./components/login/LoginScreen";
const Home = () => {
    return (
        <View
            style={Styles.Container}
        >
            <Stack.Screen
                options={{
                    headerShown: false
                }}
            />
            <LoginScreen />
        </View>
    )
}
export default Home