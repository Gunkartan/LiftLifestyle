import { StyleSheet } from "react-native";
import { Fonts, Colors } from "../../../constants/Theme"
const Styles = StyleSheet.create({
    Container: {
        flex: 1
    },
    HeaderContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '15%'
    },
    Title: {
        fontFamily: Fonts.Bold,
        fontSize: 30,
        marginHorizontal: 60
    },
    TaskOverviewText: {
        alignSelf: 'center',
        color: Colors.DisabledButtons,
        fontFamily: Fonts.Regular,
        fontSize: 15,
    },
    TabContainer: {
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 25,
        borderWidth: 1,
        height: 50,
        justifyContent: 'center',
        marginTop: 30,
        paddingHorizontal: 15,
        width: 360
    },
    InnerTabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 360,
        zIndex: 2
    },
    EachTabContainer: {
        flexDirection: 'row',
    },
    OngoingText: {
        fontFamily: Fonts.Bold,
        fontSize: 15,
        marginRight: 3
    },
    NumberOfTaskContainer: {
        alignItems: 'center',
        borderColor: Colors.DisabledButtons,
        borderRadius: 50,
        borderWidth: 1,
        height: 23,
        justifyContent: 'center',
        width: 26
    },
    NumberOfTasks: {
        color: Colors.DisabledButtons,
        fontFamily: Fonts.Medium,
        fontSize: 15
    },
    ActiveTabIndicator: {
        alignSelf: 'flex-start',
        backgroundColor: Colors.ActiveTabIndicator,
        borderRadius: 50,
        height: 40,
        marginLeft: 5,
        opacity: 0.5,
        position: 'absolute',
        width: 170
    },
    TaskList: {
        alignSelf: 'center'
    },
    TaskContainer: {
        borderRadius: 15,
        borderWidth: 1,
        height: 143,
        marginTop: 15,
        padding: 15,
        width: 360
    },
    TaskNameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    TaskName: {
        fontFamily: Fonts.Bold,
        fontSize: 20
    },
    MoreOptionContainer: {
        alignItems: 'flex-end'
    },
    OptionContainer: (OptionVisibility) => ({
        backgroundColor: Colors.White,
        borderRadius: 15,
        borderWidth: 1,
        height: 98,
        paddingHorizontal: 6,
        width: 100,
        display: OptionVisibility ? 'flex' : 'none'
    })
})
export default Styles