import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { router, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Styles from "./SignupScreenStyle";
const SignupScreen = () => {
    return (
        <View
            style={Styles.Container}
        >
            <Stack.Screen
                options={{
                    headerShown: false
                }}
            />
            <View
                style={Styles.InnerContainer}
            >
                <TouchableOpacity
                    onPress={() => router.replace('components/login/LoginScreen')}
                >
                    <Ionicons
                        name="arrow-back-circle-outline"
                        size={30}
                    />
                </TouchableOpacity>
                <Text
                    style={Styles.UsernameText}
                >Username</Text>
                <TextInput
                    placeholder="Type your username here"
                    style={Styles.InputFields}
                />
            </View>
        </View>
    )
}
export default SignupScreen