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
    },
    InputFieldNames: {
        fontFamily: Fonts.Bold,
        fontSize: 15,
        marginTop: 16
    },
    PasswordInputFieldsContainer: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    PasswordRevelationButton: {
        position: 'absolute',
        right: 15
    },
    ConfirmButton: (IsDisabled) => ({
        alignItems: 'center',
        borderRadius: 25,
        borderWidth: 1,
        height: 50,
        justifyContent: 'center',
        marginTop: 32,
        width: 360,
        backgroundColor: IsDisabled ? Colors.DisabledButtons : Colors.Buttons
    }),
    ConfirmText: {
        fontFamily: Fonts.Bold,
        fontSize: 15
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