import { LexendDeca_700Bold, LexendDeca_500Medium, useFonts as useLexend, LexendDeca_400Regular } from '@expo-google-fonts/lexend-deca';
import { useFonts as useRoboto, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { useFonts as useInter, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_400Regular } from '@expo-google-fonts/inter';
import { ActivityIndicator, Text, View } from 'react-native';
import Router from './app/routes/Router';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  const [lexendLoaded] = useLexend({
    LexendDeca_700Bold,
    LexendDeca_500Medium,
    LexendDeca_400Regular,
  });

  const [robotoLoaded] = useRoboto({
    Roboto_400Regular,
  });

  const [interLoaded] = useInter({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold
  })

  if (!lexendLoaded || !robotoLoaded || !interLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#000" />
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <PaperProvider>
      <Router />
    </PaperProvider>
  );
}
