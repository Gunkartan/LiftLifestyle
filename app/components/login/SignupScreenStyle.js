import { StyleSheet } from "react-native";
import { Fonts, Colors } from "../../../constants/Theme";
const Styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        flex: 1
    },
    InnerContainer: {
        marginTop: '15%'
    },
    UsernameText: {
        fontFamily: Fonts.Bold,
        fontSize: 15,
        marginTop: 51
    },
    InputFields: {
        borderRadius: 8,
        borderWidth: 1,
        fontFamily: Fonts.Medium,
        fontSize: 15,
        height: 50,
        paddingHorizontal: 15,
        width: 360
    }
})
export default Styles