import { useFonts as useInter, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_400Regular } from '@expo-google-fonts/inter';
import { ActivityIndicator, SafeAreaView, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Router from 'src/app/routes/Router';

export default function App() {
  const [interLoaded] = useInter({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold
  })

  if (!interLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#000" />
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <PaperProvider>
      <View style={[{ flex: 1, backgroundColor: 'white' }]}>
        <SafeAreaView style={{ flex: 1 }}>
          <Router />
        </SafeAreaView>
      </View>
    </PaperProvider>
  );
}
