import { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import Styles from "./LoginScreenStyle";
const LoginScreen = () => {
    const [PasswordVisibility, SetPasswordVisibility] = useState(true)
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
                    style={Styles.InputFields}
                />
                <Text
                    style={Styles.PasswordText}
                >Password</Text>
                <View
                    style={Styles.PasswordInputFieldContainer}
                >
                    <TextInput
                        placeholder="Type your password here"
                        secureTextEntry={PasswordVisibility}
                        style={Styles.InputFields}
                    />
                    <TouchableOpacity
                        onPress={() => SetPasswordVisibility(!PasswordVisibility)}
                        style={Styles.PasswordRevelationButton}
                    >
                        <Ionicons
                            name="eye-outline"
                            size={24}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity
                style={Styles.LoginButton}
            >
                <Text
                    style={Styles.LoginText}
                >Login</Text>
            </TouchableOpacity>
            <View
                style={Styles.SignupContainer}
            >
                <Text
                    style={Styles.AccountPossessionAskingText}
                >Don't have an account? </Text>
                <TouchableOpacity
                    onPress={() => router.push('components/login/SignupScreen')}
                >
                    <Text
                        style={Styles.SignupText}
                    >Sign Up</Text>
                </TouchableOpacity>
            </View>
            <View
                style={Styles.OrContainer}
            >
                <View
                    style={Styles.Lines}
                ></View>
                <Text
                    style={Styles.OrText}
                >Or</Text>
                <View
                    style={Styles.Lines}
                ></View>
            </View>
            <Text
                style={Styles.LoginWithText}
            >Login with</Text>
            <View
                style={Styles.LoginOptionContainer}
            >
                <TouchableOpacity
                    style={Styles.LoginOptionButtons}
                >
                    <Image
                        source={require('../../../assets/images/Google.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={Styles.LoginOptionButtons}
                >
                    <Image
                        source={require('../../../assets/images/Facebook.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={Styles.LoginOptionButtons}
                >
                    <Image
                        source={require('../../../assets/images/Apple.png')}
                    />
                </TouchableOpacity>
            </View>
            <View
                style={Styles.FooterContainer}
            >
                <Text
                    style={Styles.Footer}
                >© Lift Lifestyle 2023</Text>
            </View>
        </View>
    )
}
export default LoginScreen