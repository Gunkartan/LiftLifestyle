import { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { Auth } from "../../../constants/FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import Styles from "./LoginScreenStyle";
const LoginScreen = () => {
    const AuthVariable = Auth
    const [Email, SetEmail] = useState('')
    const [Password, SetPassword] = useState('')
    const [PasswordVisibility, SetPasswordVisibility] = useState(true)
    const [IsDisabled, SetIsDisabled] = useState(true)
    const HandleEmailChange = (Text) => {
        SetEmail(Text)

        if (Email !== '' && Password !== '') {
            SetIsDisabled(false)
        } else {
            SetIsDisabled(true)
        }

    }
    const HandlePasswordChange = (Text) => {
        SetPassword(Text)

        if (Email !== '' && Password !== '') {
            SetIsDisabled(false)
        } else {
            SetIsDisabled(true)
        }

    }
    const Login = async () => {
        try {
            const Response = await signInWithEmailAndPassword(AuthVariable, Email, Password)

            if (Response) {
                router.replace('components/details/DetailsScreen')
            }

        } catch (Error) {
            console.log(Error)
            alert('Incorrect email or password')
        }
    }
    return (
        <View
            style={Styles.Container}
        >
            <Stack.Screen
                options={{
                    headerShown: false
                }}
            />
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
                >Email</Text>
                <TextInput
                    onChangeText={(Text) => HandleEmailChange(Text)}
                    placeholder="Type your email here"
                    style={Styles.InputFields}
                    value={Email}
                />
                <Text
                    style={Styles.PasswordText}
                >Password</Text>
                <View
                    style={Styles.PasswordInputFieldContainer}
                >
                    <TextInput
                        onChangeText={(Text) => HandlePasswordChange(Text)}
                        placeholder="Type your password here"
                        secureTextEntry={PasswordVisibility}
                        style={Styles.InputFields}
                        value={Password}
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
                disabled={IsDisabled}
                onPress={Login}
                style={Styles.LoginButton(IsDisabled)}
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
                    onPress={() => router.replace('components/login/SignupScreen')}
                >
                    <Text
                        style={Styles.SignupText}
                    >Signup</Text>
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