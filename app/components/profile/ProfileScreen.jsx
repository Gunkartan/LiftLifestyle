import { View, Text } from "react-native";
import { Stack } from "expo-router";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const ProfileScreen = () => {
    return(
        <View>
            <Stack.Screen
                options={{
                    headerShown: false
                }}
            />
            <Text>Profile screen</Text>
        </View>
    )
}
export default ProfileScreen