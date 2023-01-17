import { ActivityIndicator, View, Text } from "react-native";

export default function Loading() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#09090A"}}>  
      <ActivityIndicator color="#7C3AED" />
      <View style={{marginTop: 10}}>
        <Text style={{ color: "#7C3AED", textAlign: "center" }}> Estamos carregando as fontes da aplicação! Tome um cafézinho enquanto isso! :) </Text>
      </View>
    </View>
  )
}