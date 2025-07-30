import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginForm from '../screens/LoginForm';
import { SafeAreaView, View } from 'react-native';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
    return (
        <View className='flex-1 bg-white'>
            <SafeAreaView className='flex-1'>
                <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#fff'} }}>
                    <Stack.Screen name="LoginForm" component={LoginForm} />
                </Stack.Navigator>
            </SafeAreaView>
        </View>
    );
}