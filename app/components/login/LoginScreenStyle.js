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
        marginRight: 2
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
        marginTop: 87
    },
    PasswordText: {
        fontFamily: Fonts.Bold,
        fontSize: 15,
        marginTop: 16
    },
    InputFields: {
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
    },
    LoginButton: (IsDisabled) => ({
        alignItems: 'center',
        borderRadius: 25,
        borderWidth: 1,
        height: 50,
        marginTop: 32,
        justifyContent: 'center',
        width: 360,
        backgroundColor: IsDisabled ? Colors.DisabledButtons : Colors.Buttons
    }),
    LoginText: {
        fontFamily: Fonts.Bold,
        fontSize: 15
    },
    SignupContainer: {
        flexDirection: 'row',
        marginTop: 15
    },
    AccountPossessionAskingText: {
        fontFamily: Fonts.Regular,
        fontSize: 15,
        opacity: 0.4
    },
    SignupText: {
        color: Colors.Buttons,
        fontFamily: Fonts.Regular,
        fontSize: 15,
    },
    OrContainer: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    Lines: {
        backgroundColor: Colors.Black,
        height: 1,
        opacity: 0.4,
        width: 100
    },
    OrText: {
        color: Colors.Black,
        fontFamily: Fonts.Medium,
        fontSize: 15,
        marginHorizontal: 5,
        opacity: 0.4
    },
    LoginWithText: {
        fontFamily: Fonts.Bold,
        fontSize: 15,
        marginTop: 16
    },
    LoginOptionContainer: {
        flexDirection: 'row',
        marginTop: 10
    },
    LoginOptionButtons: {
        alignItems: 'center',
        borderRadius: 100,
        borderWidth: 1,
        height: 50,
        justifyContent: 'center',
        marginHorizontal: 17,
        width: 50
    },
    FooterContainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    Footer: {
        fontFamily: Fonts.Regular,
        fontSize: 15,
        marginBottom: 15,
        opacity: 0.4
    }
})
export default Styles