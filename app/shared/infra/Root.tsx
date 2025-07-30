import 'react-native-gesture-handler';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from "@expo-google-fonts/inter";
import { AuthProvider } from "@shared/context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Provider as PaperProvider } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { View } from 'react-native';

export default function Root({ children }: { children: React.ReactNode }) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 1000 * 60 * 5
            }
        },
    });

    const [fontsLoaded] = useFonts({
        'Inter-Regular': Inter_400Regular,
        'Inter-Medium': Inter_500Medium,
        'Inter-SemiBold': Inter_600SemiBold,
        'Inter-Bold': Inter_700Bold,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View className="flex-1">
            <StatusBar style="dark" backgroundColor="white" />

            <QueryClientProvider client={queryClient}>
                <AuthProvider>
                    <PaperProvider>
                        <GestureHandlerRootView style={{ flex: 1 }}>
                            <BottomSheetModalProvider>
                                {children}  
                                <Toast />
                            </BottomSheetModalProvider>
                        </GestureHandlerRootView>
                    </PaperProvider>
                </AuthProvider>
            </QueryClientProvider>
        </View>
    )
}