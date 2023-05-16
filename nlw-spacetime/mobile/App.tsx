import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-zinc-950">
      <Text className="text-center text-2xl text-gray-50">
        Bora Programar em React Native Novamente! ^^
      </Text>
      <StatusBar style="light" translucent />
    </View>
  )
}
