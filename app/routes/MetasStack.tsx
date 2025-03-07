import { createStackNavigator } from "@react-navigation/stack";
import NovaMeta from "../modules/metas/screens/NovaMeta";
import DetalhesMeta from "../modules/metas/screens/DetalhesMeta";

export default function MetasStack() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="NovaMeta" component={NovaMeta} />
            <Stack.Screen name="DetalhesMeta" component={DetalhesMeta} />
        </Stack.Navigator>
    );
}