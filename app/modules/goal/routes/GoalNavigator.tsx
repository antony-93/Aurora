import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateGoalNavigator } from "./CreateGoalNavigator";
import { DeleteGoalList } from "../screens/goal/delete/DeleteGoalList";
import DeleteGoalCategoryList from "../screens/goalcategory/delete/DeleteGoalCategoryList";
import CreateGoalCategory from "../screens/goalcategory/create/CreateGoalCategory";

const Stack = createNativeStackNavigator();

export function GoalNavigator() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="CreateGoal" component={CreateGoalNavigator} />
            <Stack.Screen name="DeleteGoalList" component={DeleteGoalList} />
            <Stack.Screen name="CreateGoalCategory" component={CreateGoalCategory} />
            <Stack.Screen name="DeleteGoalCategoryList" component={DeleteGoalCategoryList} />
        </Stack.Navigator>
    )
}