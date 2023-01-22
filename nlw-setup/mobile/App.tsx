import "./src/lib/dayjs";
import { StatusBar } from 'react-native';
import { Loading } from "./src/components/Loading"
import { Routes } from "./src/routes";
// Importação das Fontes Externas
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold } from "@expo-google-fonts/inter"

export default function App() {
  // Verifica se as fontes foram carregadas
  const [fontsLoaded] = useFonts({
    Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold
  }) 
  // Se não forem carregadas, mostra-se uma tela de Loading
  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <>
      <Routes />
      <StatusBar barStyle={'light-content'} backgroundColor="transparent" translucent />
    </>
  );
}
