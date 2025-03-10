import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./AppStack";
import SafeView from "../utils/components/components/SafeView";

export default function Router() {
    return (
        <NavigationContainer>
            <SafeView style={{ flex: 1 }} backgroundColor='white'>
                <AppStack />
            </SafeView>
        </NavigationContainer>
    );
}