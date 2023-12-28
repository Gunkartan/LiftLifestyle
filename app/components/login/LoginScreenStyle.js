import { StyleSheet } from "react-native";
import { Fonts, Colors } from "../../../constants/Theme";
const Styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        flex: 1
    },
    TitleContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: '15%'
    },
    InnerTitleContainer: {
        marginRight: 3
    },
    FirstTitlePart: {
        fontFamily: Fonts.Bold,
        fontSize: 36
    },
    SecondTitlePartContainer: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    SecondTitlePart: {
        fontFamily: Fonts.Medium,
        fontSize: 24,
        marginRight: 3
    },
    UsernameText: {
        fontFamily: Fonts.Bold,
        fontSize: 15,
        marginTop: '15%'
    },
    PasswordText: {
        fontFamily: Fonts.Bold,
        fontSize: 15,
        marginTop: 15
    },
    InputField: {
        borderColor: Colors.Black,
        borderRadius: 8,
        borderWidth: 1,
        fontFamily: Fonts.Medium,
        fontSize: 15,
        height: 50,
        paddingHorizontal: 15,
        width: 360
    },
    PasswordInputFieldContainer: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    PasswordRevelationButton: {
        position: 'absolute',
        right: 15
    }
})
export default Styles