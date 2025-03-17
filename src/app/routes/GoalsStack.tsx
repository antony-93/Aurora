import { createStackNavigator } from "@react-navigation/stack";
import GoalDetails from "../screens/goals/GoalDetails";
import SelectCategory from "../screens/goals/SelectCategory";

export default function GoalsStack() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SelectCategory" component={SelectCategory} options={{ title: 'Selecionar categoria' }} />
            <Stack.Screen name="GoalDetails" component={GoalDetails} options={{ title: 'Detalhes meta' }} />
        </Stack.Navigator>
    );
}