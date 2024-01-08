import { View, Text } from "react-native";
import { Stack } from "expo-router";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const CreationScreen = () => {
    return(
        <View>
            <Stack.Screen
                options={{
                    headerShown: false
                }}
            />
            <Text>Creation</Text>
        </View>
    )
}
export default CreationScreen