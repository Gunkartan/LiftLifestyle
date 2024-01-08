import { useRef } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { onGestureEvent, withSpring } from "react-native-reanimated";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Styles from "./DetailScreenStyle";
const DetailsScreen = () => {
    const Id = 1
    const NumberOfTasks = 3
    const NumberOfArchivedTasks = 1
    const ImportanceAndUrgency = Id == 1 ? 'important & urgent' : (Id == 2 ? 'important & not urgent' : (Id == 3 ? 'unimportant & urgent' : 'unimportant & not urgent'))
    const TranslateX = useRef(new Animated.Value(0)).current
    const OnGestureEventX = onGestureEvent({ translationX: TranslateX })
    const HandleTabChangingAnimation = () => {
        Animated.timing(TranslateX, {
            toValue: 300,
            duration: 1000,
            useNativeDriver: false
        }).start()
    }
    return (
        <View
            style={Styles.Container}
        >
            <Stack.Screen
                options={{
                    animation: 'none',
                    headerShown: false
                }}
            />
            <View
                style={Styles.HeaderContainer}
            >
                <TouchableOpacity>
                    <Ionicons
                        name="arrow-back-circle-outline"
                        size={30}
                    />
                </TouchableOpacity>
                <Text
                    style={Styles.Title}
                >Quadrant {Id}</Text>
                <TouchableOpacity>
                    <Ionicons
                        name="bar-chart-outline"
                        size={30}
                    />
                </TouchableOpacity>
            </View>
            <Text
                style={Styles.TaskOverviewText}
            >{NumberOfTasks} {ImportanceAndUrgency} task(s)</Text>
            <View
                style={Styles.TabContainer}
            >
                <View
                    style={Styles.InnerTabContainer}
                >
                    <View
                        style={Styles.EachTabContainer}
                    >
                        <TouchableOpacity>
                            <Text
                                style={Styles.OngoingText}
                            >Ongoing</Text>
                        </TouchableOpacity>
                        <View
                            style={Styles.NumberOfTaskContainer}
                        >
                            <Text
                                style={Styles.NumberOfTasks}
                            >{NumberOfTasks}</Text>
                        </View>
                    </View>
                    <View
                        style={Styles.EachTabContainer}
                    >
                        <TouchableOpacity>
                            <Text
                                style={Styles.OngoingText}
                            >Archived</Text>
                        </TouchableOpacity>
                        <View
                            style={Styles.NumberOfTaskContainer}
                        >
                            <Text
                                style={Styles.NumberOfTasks}
                            >{NumberOfArchivedTasks}</Text>
                        </View>
                    </View>
                </View>
                <PanGestureHandler
                    {...OnGestureEventX}
                >
                    <Animated.View
                        style={[Styles.ActiveTabIndicator, { transform: [{ translateX: TranslateX }] }]}
                    />
                </PanGestureHandler>
            </View>
        </View>
    )
}
export default DetailsScreen