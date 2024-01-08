import { View, Text } from "react-native";
import { Stack } from "expo-router";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const NotificationScreen = () => {
    return(
        <View>
            <Stack.Screen
                options={{
                    headerShown: false
                }}
            />
            <Text>Notification screen.</Text>
        </View>
    )
}
export default NotificationScreen