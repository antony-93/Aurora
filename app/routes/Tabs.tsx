import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ListTodo, CheckCircle, BarChart3 } from "lucide-react-native";
import Metas from "../modules/metas/screens/Metas";
import Rotina from "../modules/rotina/screens/Rotina";
import Desempenho from "../modules/desempenho/screens/Desempenho";

export default function Tabs() {
    const Tab = createBottomTabNavigator(),
        iconSize = 20;

    const tabConfig = {
        headerShown: false,
        tabBarActiveTintColor: "#4f46e5",
        tabBarInactiveTintColor: "#9ca3af",
        tabBarStyle: {
            height: 60,
        },
        tabBarIconStyle: {
            marginBottom: 3,
            marginTop: 2
        },
        tabBarLabelStyle: {
            fontFamily: "Inter_600SemiBold",
            fontSize: 12
        },
    };

    return (
        <Tab.Navigator screenOptions={tabConfig} initialRouteName="Metas">
            <Tab.Screen name="Metas" component={Metas} options={{ tabBarIcon: ({ color }) => (<CheckCircle color={color} size={iconSize} />) }} />
            <Tab.Screen name="Rotina" component={Rotina} options={{ tabBarIcon: ({ color }) => (<ListTodo color={color} size={iconSize} />) }} />
            <Tab.Screen name="Desempenho" component={Desempenho} options={{ tabBarIcon: ({ color }) => (<BarChart3 color={color} size={iconSize} />) }} />
        </Tab.Navigator>
    );
}