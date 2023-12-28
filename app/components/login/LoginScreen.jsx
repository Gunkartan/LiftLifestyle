import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Styles from "./LoginScreenStyle";
const LoginScreen = () => {
    return (
        <View
            style={Styles.Container}
        >
            <View
                style={Styles.TitleContainer}
            >
                <View
                    style={Styles.InnerTitleContainer}
                >
                    <Text
                        style={Styles.FirstTitlePart}
                    >Lift Lifestyle</Text>
                    <View
                        style={Styles.SecondTitlePartContainer}
                    >
                        <Text
                            style={Styles.SecondTitlePart}
                        >Hi there!</Text>
                        <Image
                            source={require('../../../assets/images/Hello.png')}
                        />
                    </View>
                </View>
                <Image
                    source={require('../../../assets/images/Icon.png')}
                />
            </View>
            <View>
                <Text
                    style={Styles.UsernameText}
                >Username</Text>
                <TextInput
                    placeholder="Type your username here"
                    style={Styles.InputField}
                />
                <Text
                    style={Styles.PasswordText}
                >Password</Text>
                <View
                    style={Styles.PasswordInputFieldContainer}
                >
                    <TextInput
                        placeholder="Type your password here"
                        secureTextEntry={true}
                        style={Styles.InputField}
                    />
                    <TouchableOpacity
                        style={Styles.PasswordRevelationButton}
                    >
                        <Ionicons
                            name="eye-outline"
                            size={24}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default LoginScreen