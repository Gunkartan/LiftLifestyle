import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
const firebaseConfig = {
    apiKey: "AIzaSyCY0IuOv-XktjgvNQLbi0HJTZKHXgLSja0",
    authDomain: "lift-lifestyle-a8de2.firebaseapp.com",
    projectId: "lift-lifestyle-a8de2",
    storageBucket: "lift-lifestyle-a8de2.appspot.com",
    messagingSenderId: "877232286302",
    appId: "1:877232286302:web:d08b022d76e914c103e2cf"
}
export const App = initializeApp(firebaseConfig)
export const Auth = initializeAuth(App, {
    persistence: getReactNativePersistence(AsyncStorage)
})