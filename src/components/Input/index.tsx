import { TextInputProps } from "react-native";

import { Container } from "./styles";
import theme from "src/theme";

export function Input({...rest}: TextInputProps) {
  return (
    <Container 
      placeholderTextColor={theme.COLORS.GRAY_300}
      {...rest} 
    />
  )
}