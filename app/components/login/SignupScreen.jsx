import { Stack } from "expo-router";
import { View, Text } from "react-native";
const SignupScreen = () => {
    return(
        <View>
            <Stack.Screen
                options={{
                    headerShown: false
                }}
            />
            <Text>Sign up</Text>
        </View>
    )
}
export default SignupScreen