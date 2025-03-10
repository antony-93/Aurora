import { createStackNavigator } from "@react-navigation/stack";
import SelectCategory from "../modules/metas/screens/SelectCategory";
import DetalhesMeta from "../modules/metas/screens/DetalhesMeta";
import ExcluirMetas from "../modules/metas/screens/ExcluirMetas";

export default function MetasStack() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SelectCategory" component={SelectCategory} />
            <Stack.Screen name="DetalhesMeta" component={DetalhesMeta} />
            <Stack.Screen name="ExcluirMetas" component={ExcluirMetas} />
        </Stack.Navigator>
    );
}