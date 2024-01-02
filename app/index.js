import { View } from "react-native";
import { Stack } from "expo-router";
import LoginScreen from "./components/login/LoginScreen";
import Styles from "./Style";
const App = () => {
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
export default App