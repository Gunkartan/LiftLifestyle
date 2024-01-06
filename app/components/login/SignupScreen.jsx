import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import { router, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Auth } from "../../../constants/FirebaseConfig";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { collection, getDoc, doc, setDoc } from "firebase/firestore";
import { Database } from "../../../constants/FirebaseConfig";
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
                const DocumentReference = doc(Database, 'Data', Username)
                await setDoc(DocumentReference, {
                    Email: Email,
                    Username: Username
                })
                router.replace('components/login/LoginScreen')
            }

        } catch (Error) {
            console.log(Error)
            alert('Something went wrong. The email might already be in use.')
        }
    }
    const UsernameValidityCheck = async () => {
        try {
            const UsernameDoc = await getDoc(doc(Database, 'Data', Username))

            if (UsernameDoc.exists()) {
                alert('The username is already taken. Please change.')
                return
            } else {
                EmailValidityCheck()
            }

        } catch (Error) {
            console.error(Error)
        }
    }
    const EmailValidityCheck = async () => {
        const EmailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i

        if (!EmailPattern.test(Email)) {
            alert('Please enter your email in a valid form.')
            return
        } else {
            PasswordValidityCheck()
        }

    }
    const PasswordValidityCheck = () => {
        const PasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\s).{8,}$/

        if (!PasswordPattern.test(Password)) {
            alert('A password must have at least an uppercase, a lowercase, a space, and a number and must be at least 8 characters long.')
            return
        } else {

            if (Password !== PasswordConfirmation) {
                alert('The password in the input and confirmation fields is different.')
                return
            } else {
                Signup()
            }

        }

    }
    const HandleUsernameChange = (Text) => {
        SetUsername(Text)

        if (Username !== '' && Email !== '' && Password !== '' && PasswordConfirmation !== '') {
            SetIsDisabled(false)
        } else {
            SetIsDisabled(true)
        }

    }

    const HandleEmailChange = (Text) => {
        SetEmail(Text)

        if (Username !== '' && Email !== '' && Password !== '' && PasswordConfirmation !== '') {
            SetIsDisabled(false)
        } else {
            SetIsDisabled(true)
        }

    }
    const HandlePasswordChange = (Text) => {
        SetPassword(Text)

        if (Username !== '' && Email !== '' && Password !== '' && PasswordConfirmation !== '') {
            SetIsDisabled(false)
        } else {
            SetIsDisabled(true)
        }

    }
    const HandlePasswordConfirmationChange = (Text) => {
        SetPasswordConfirmation(Text)

        if (Username !== '' && Email !== '' && Password !== '' && PasswordConfirmation !== '') {
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
                onPress={UsernameValidityCheck}
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