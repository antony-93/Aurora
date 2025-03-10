import { useFonts as useInter, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_400Regular } from '@expo-google-fonts/inter';
import { ActivityIndicator, Text, View } from 'react-native';
import Router from './app/routes/Router';
import { Provider as PaperProvider } from 'react-native-paper';
import { useEffect, useState } from 'react';
import Database from './app/database/Db';

export default function App() {
  const [interLoaded] = useInter({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold
  })

  const [dbLoaded, setDbLoaded] = useState(false);

  useEffect(() => {
    async function initDatabase() {
      await Database.init();
      setDbLoaded(true);
    }

    initDatabase();
  }, []);

  if (!interLoaded || !dbLoaded) {
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
