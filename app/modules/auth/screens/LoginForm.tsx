import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "FirebaseConfig";

export default function LoginForm() {
    const [email, setEmail] = useState(""),
        [password, setPassword] = useState("");

    function handleLogin() {
        try {
            const user = signInWithEmailAndPassword(auth, email, password);
        } catch (error: any) {
            console.log(error);
        }
    }

    return (
        <View className="items-center justify-center pb-32 flex-1 px-6 bg-white">
            <Text className="text-5xl text-primary font-semibold mb-10">
                Aurora
            </Text>
            
            <TextInput
                className="w-full bg-gray-100 h-18 rounded-xl px-4 py-5 mb-6"
                placeholder="seu@email.com"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                className="w-full bg-gray-100 rounded-xl px-4 py-5 mb-10"
                placeholder="••••••"
                placeholderClassName="text-lg"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity className="w-full bg-primary rounded-xl py-3 items-center" onPress={handleLogin}>
                <Text className="text-white font-semibold text-lg">Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}