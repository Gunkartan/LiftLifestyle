import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { router, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Auth } from "../../../constants/FirebaseConfig";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import Styles from "./SignupScreenStyle";
const SignupScreen = () => {
    const AuthVariable = Auth
    const [Username, SetUsername] = useState('')
    const [Email, SetEmail] = useState('')
    const [Password, SetPassword] = useState('')
    const [PasswordConfirmation, SetPasswordConfirmation] = useState('')
    const [FirstPasswordVisibility, SetFirstPasswordVisibility] = useState(true)
    const [SecondPasswordVisibility, SetSecondPasswordVisibility] = useState(true)
    const [IsDisabled, SetIsDisabled] = useState(true)
    const Signup = async () => {
        try {
            const Response = await createUserWithEmailAndPassword(AuthVariable, Email, Password)

            if (Response) {
                router.replace('components/login/LoginScreen')
            }

        } catch (Error) {
            console.log(Error)
            alert('Something went wrong')
        }
    }
    const HandleUsernameChange = (Text) => {
        SetUsername(Text)

        if (Username != '' && Email != '' && Password != '' && PasswordConfirmation != '') {
            SetIsDisabled(false)
        } else {
            SetIsDisabled(true)
        }

    }
    const HandleEmailChange = (Text) => {
        SetEmail(Text)

        if (Username != '' && Email != '' && Password != '' && PasswordConfirmation != '') {
            SetIsDisabled(false)
        } else {
            SetIsDisabled(true)
        }

    }
    const HandlePasswordChange = (Text) => {
        SetPassword(Text)

        if (Username != '' && Email != '' && Password != '' && PasswordConfirmation != '') {
            SetIsDisabled(false)
        } else {
            SetIsDisabled(true)
        }

    }
    const HandlePasswordConfirmationChange = (Text) => {
        SetPasswordConfirmation(Text)

        if (Username != '' && Email != '' && Password != '' && PasswordConfirmation != '') {
            SetIsDisabled(false)
        } else {
            SetIsDisabled(true)
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
                style={Styles.InnerContainer}
            >
                <TouchableOpacity
                    onPress={() => router.replace('components/login/LoginScreen')}
                >
                    <Ionicons
                        name="arrow-back-circle-outline"
                        size={30}
                    />
                </TouchableOpacity>
                <Text
                    style={Styles.UsernameText}
                >Username</Text>
                <TextInput
                    onChangeText={(Text) => HandleUsernameChange(Text)}
                    placeholder="Type your username here"
                    style={Styles.InputFields}
                />
                <Text
                    style={Styles.InputFieldNames}
                >Email</Text>
                <TextInput
                    autoCapitalize='none'
                    onChangeText={(Text) => HandleEmailChange(Text)}
                    placeholder="Type your email here"
                    style={Styles.InputFields}
                />
                <Text
                    style={Styles.InputFieldNames}
                >Password</Text>
                <View
                    style={Styles.PasswordInputFieldsContainer}
                >
                    <TextInput
                        onChangeText={(Text) => HandlePasswordChange(Text)}
                        placeholder="Type your password here"
                        secureTextEntry={FirstPasswordVisibility}
                        style={Styles.InputFields}
                    />
                    <TouchableOpacity
                        onPress={() => SetFirstPasswordVisibility(!FirstPasswordVisibility)}
                        style={Styles.PasswordRevelationButton}
                    >
                        <Ionicons
                            name="eye-outline"
                            size={24}
                        />
                    </TouchableOpacity>
                </View>
                <Text
                    style={Styles.InputFieldNames}
                >Confirm Password</Text>
                <View
                    style={Styles.PasswordInputFieldsContainer}
                >
                    <TextInput
                        onChangeText={(Text) => HandlePasswordConfirmationChange(Text)}
                        placeholder="Type your password here"
                        secureTextEntry={SecondPasswordVisibility}
                        style={Styles.InputFields}
                    />
                    <TouchableOpacity
                        onPress={() => SetSecondPasswordVisibility(!SecondPasswordVisibility)}
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
                onPress={Signup}
                style={Styles.ConfirmButton(IsDisabled)}
            >
                <Text
                    style={Styles.ConfirmText}
                >Confirm</Text>
            </TouchableOpacity>
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
export default SignupScreen