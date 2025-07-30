import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BarChart3, CheckCircle, ListTodo, User, UserCircle } from 'lucide-react-native';
import GoalList from '@modules/goal/screens/goal/GoalList';
import Routine from '@modules/routine/screens/Routine';
import { SafeAreaView, View } from 'react-native';
import Profile from '@modules/profile/screens/Profile';
const Tab = createBottomTabNavigator();

export default function Tabs() {
    return (
        <View className="flex-1 bg-white">
            <SafeAreaView className="flex-1">
                <Tab.Navigator
                    initialRouteName="Goals"
                    screenOptions={{
                        headerShown: false,
                        tabBarActiveTintColor: '#4f46e5',
                        sceneStyle: { backgroundColor: 'white' },
                        tabBarStyle: { height: 60 },
                        tabBarIconStyle: { marginBottom: 3, marginTop: 2 },
                        tabBarLabelStyle: { fontFamily: 'Inter-SemiBold', fontSize: 12 }
                    }}
                >
                    <Tab.Screen
                        name="Goals"
                        component={GoalList}
                        options={{
                            title: 'Metas',
                            tabBarIcon: ({ color }) => <CheckCircle color={color} size={20} />,
                        }}
                    />
                    <Tab.Screen
                        name="Routine"
                        component={Routine}
                        options={{
                            title: 'Rotina',
                            tabBarIcon: ({ color }) => <ListTodo color={color} size={20} />,
                        }}
                    />
                    <Tab.Screen
                        name="Profile"
                        component={Profile}
                        options={{
                            title: 'Perfil',
                            tabBarIcon: ({ color }) => <UserCircle color={color} size={22} />,
                        }}
                    />
                </Tab.Navigator>
            </SafeAreaView>
        </View>
    )
}