import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateGoalProvider } from "../context/CreateGoalContext";
import SelectGoalType from "../screens/goal/create/SelectGoalType";
import GoalDetails from "../screens/goal/create/GoalDetails";

const Stack = createNativeStackNavigator();

export function CreateGoalNavigator() {
    return (
        <CreateGoalProvider>
            <Stack.Navigator
                initialRouteName="SelectGoalType"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="SelectGoalType" component={SelectGoalType} />
                <Stack.Screen name="GoalDetails" component={GoalDetails} />
            </Stack.Navigator>
        </CreateGoalProvider>
    )
}
