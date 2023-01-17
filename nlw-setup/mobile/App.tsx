import { StyleSheet, Text, View, StatusBar } from 'react-native';
// Importação das Fontes Externas
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold } from "@expo-google-fonts/inter"
import Loading from "./src/components/Loading"

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
    <View style={styles.container}>
      <Text style={styles.text}> Minha primeira aplicação React-Native! ^^ </Text>
      <StatusBar barStyle={'light-content'} backgroundColor="transparent" translucent />
    </View>
  );
}
// Estilizações Internas do App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
    color: "white",
    fontFamily: "Inter_800ExtraBold",
    fontSize: 15,
    borderColor: "white",
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
    marginVertical: 10,
    textAlign: "center"
  },
});
