import { createStackNavigator } from "@react-navigation/stack";
import SelectCategory from "../modules/metas/screens/SelectCategory";
import GoalDetails from "../modules/metas/screens/GoalDetails";
import ExcluirMetas from "../modules/metas/screens/DeleteGoals";

export default function MetasStack() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SelectCategory" component={SelectCategory} />
            <Stack.Screen name="GoalDetails" component={GoalDetails} />
            <Stack.Screen name="ExcluirMetas" component={ExcluirMetas} />
        </Stack.Navigator>
    );
}