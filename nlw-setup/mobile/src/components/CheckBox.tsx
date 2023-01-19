import { Feather } from "@expo/vector-icons"
import { TouchableOpacity, TouchableOpacityProps, View, Text } from "react-native";
import colors from "tailwindcss/colors"

interface CheckBoxProps extends TouchableOpacityProps  {
  checked?: boolean,
  title: string
}

export function CheckBox({title, checked = false, ...rest }: CheckBoxProps ) {
  return (
    <TouchableOpacity activeOpacity={0.7} className="flex-row mb-2 items-center" {...rest}>
      {
        checked 
        ?
          <View className="h-8 w-8 bg-green-500 rounded-lg items-center justify-center">
            <Feather name="check" size={20} color={colors.white} />
          </View>
        :
          <View className="h-8 w-8 bg-zinc-900 rounded-lg items-center justify-center" />
      }

      <Text className="text-white ml-3 text-lg"> {title}  </Text>

    </TouchableOpacity>
  )
}