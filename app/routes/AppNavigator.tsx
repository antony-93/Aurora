import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GoalNavigator } from "@modules/goal/routes/GoalNavigator";
import Tabs from "./Tabs";

const Stack = createNativeStackNavigator();

export function AppNavigator() {
    return (
        <Stack.Navigator 
            initialRouteName="Tabs" 
            screenOptions={{ 
                headerShown: false
            }}
        >
            <Stack.Screen name="Goal" component={GoalNavigator} />
            <Stack.Screen name="Tabs" component={Tabs} />
        </Stack.Navigator>
    )
}