import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Animated, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { collection, query, where, getDocs, doc } from "firebase/firestore";
import { Database } from "../../../constants/FirebaseConfig";
import Styles from "./DetailScreenStyle";
const DetailsScreen = () => {
    useEffect(() => {
        const FetchUserAndTasks = async () => {
            try {
                const Value = await AsyncStorage.getItem('Email')

                if (Value !== null) {
                    const ParsedValue = JSON.parse(Value)
                    const UserCollection = collection(Database, 'Data')
                    const UserQuery = query(UserCollection, where('Email', '==', ParsedValue))
                    const UserSnapshot = await getDocs(UserQuery)

                    if (UserSnapshot.size === 1) {
                        const UserData = UserSnapshot.docs[0].data()
                        SetUser(UserData)
                        const TasksCollection = collection(Database, `Data/${UserData.Username}/Tasks`)
                        const TasksQuerySnapshot = await getDocs(TasksCollection)
                        const TaskData = []
                        TasksQuerySnapshot.forEach((Doc) => {
                            const TaskDueDate = Doc.data().Due
                            const TaskDuration = Doc.data().Duration
                            const TaskName = Doc.data().Name
                            const TaskParticipants = Doc.data().Participants
                            const TaskTags = Doc.data().Tags
                            TaskData.push({
                                Due: TaskDueDate,
                                Duration: TaskDuration,
                                Name: TaskName,
                                Participants: TaskParticipants,
                                Tags: TaskTags
                            })
                            SetTasks(TaskData)
                        })
                    } else {
                        alert('User not found.')
                    }

                } else {
                    alert('Unable to retrieve the email information.')
                }

            } catch (Error) {
                console.error(Error);
                alert('Something went wrong.')
            }
        }
        FetchUserAndTasks()
    }, [])
    const Id = 1
    const NumberOfTasks = 3
    const NumberOfArchivedTasks = 1
    const ImportanceAndUrgency = Id == 1 ? 'important & urgent' : (Id == 2 ? 'important & not urgent' : (Id == 3 ? 'unimportant & urgent' : 'unimportant & not urgent'))
    const [BoxPosition] = useState(new Animated.ValueXY({ x: 0, y: 0 }))
    const [User, SetUser] = useState(null)
    const [Tasks, SetTasks] = useState([])
    const [OptionVisibility, SetOptionVisibility] = useState(Array(Tasks.length).fill(false))
    const ToggleOptionVisibility = (Index) => {
        const NewVisibility = [...OptionVisibility]
        NewVisibility[Index] = !NewVisibility[Index]
        SetOptionVisibility(NewVisibility)
    }
    const MoveBox = () => {
        Animated.timing(BoxPosition, {
            toValue: { x: 180, y: 0 },
            duration: 500,
            useNativeDriver: false
        }).start()
    }
    const MoveBoxBack = () => {
        Animated.timing(BoxPosition, {
            toValue: { x: 0, y: 0 },
            duration: 500,
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
                        <TouchableOpacity
                            onPress={MoveBoxBack}
                        >
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
                        <TouchableOpacity
                            onPress={MoveBox}
                        >
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
                <Animated.View
                    style={[Styles.ActiveTabIndicator, { transform: BoxPosition.getTranslateTransform() }]}
                />
            </View>
            <FlatList
                data={Tasks}
                renderItem={({ item, index }) => (
                    <View
                        style={Styles.TaskContainer}
                    >
                        <View
                            style={Styles.TaskNameContainer}
                        >
                            <Text
                                style={Styles.TaskName}
                            >{item.Name}</Text>
                            <View
                                style={Styles.MoreOptionContainer}
                            >
                                <TouchableOpacity
                                    onPress={() => ToggleOptionVisibility(index)}
                                >
                                    <Ionicons
                                        name="ellipsis-horizontal"
                                        size={25}
                                    />
                                </TouchableOpacity>
                                <View
                                    style={Styles.OptionContainer(OptionVisibility[index])}
                                ></View>
                            </View>
                        </View>
                    </View>
                )}
                style={Styles.TaskList}
            />
        </View>
    )
}
export default DetailsScreen