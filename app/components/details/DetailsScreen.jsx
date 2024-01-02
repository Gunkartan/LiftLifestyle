import { View, Text } from "react-native";
import { Stack } from "expo-router";
const DetailsScreen = () => {
    return(
        <View>
            <Stack.Screen
                options={{
                    headerShown: false
                }}
            />
            <Text>This is the details screen.</Text>
        </View>
    )
}
export default DetailsScreen