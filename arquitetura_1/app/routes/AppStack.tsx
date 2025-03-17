import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./Tabs";
import MetasStack from "./MetasStack";

export default function AppStack() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Tabs">
            <Stack.Screen name="Tabs" component={Tabs} />
            <Stack.Screen name="MetasStack" component={MetasStack} />
        </Stack.Navigator>
    );
}