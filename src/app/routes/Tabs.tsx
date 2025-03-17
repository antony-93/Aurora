import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ListTodo, CheckCircle, BarChart3 } from "lucide-react-native";
import Goals from "../screens/goals/Goals";

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
        <Tab.Navigator screenOptions={tabConfig} initialRouteName="Goals">
            <Tab.Screen name="Goals" component={Goals} options={{ title: 'Metas', tabBarIcon: ({ color }) => (<CheckCircle color={color} size={iconSize} />) }} />
            <Tab.Screen name="Routine" component={Goals} options={{ title: 'Rotina', tabBarIcon: ({ color }) => (<ListTodo color={color} size={iconSize} />) }} />
            <Tab.Screen name="Performance" component={Goals} options={{ title: 'Desempenho', tabBarIcon: ({ color }) => (<BarChart3 color={color} size={iconSize} />) }} />
        </Tab.Navigator>
    );
}