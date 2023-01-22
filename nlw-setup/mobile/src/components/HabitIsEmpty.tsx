import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";

export function HabitIsEmpty() {
  const { navigate } = useNavigation()

  return (
    <Text className="text-zinc-400 text-base">
      Você ainda não registrou nenhum hábito para este dia. {" "}

      <Text 
        className="text-violet-400 text-base underline active:text-violet-500"
        onPress={() => navigate("new")}
      >   
        Clique aqui para cadastrar um novo hábito.
      </Text>

    </Text>
  )
}