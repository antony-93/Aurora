import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '@shared/context/AuthContext';
import AuthNavigator from '@modules/auth/routes/AuthNavigator';
import { AppNavigator } from './AppNavigator';

const Stack = createNativeStackNavigator();

export default function Router() {
    const { isAuthenticated } = useAuth();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {isAuthenticated 
                    ? <Stack.Screen name='App' component={AppNavigator} />
                    : <Stack.Screen name='Auth' component={AuthNavigator} />
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}