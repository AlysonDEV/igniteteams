import { ViewProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Container, Name, Icon } from "./styles";
import { ButtonIcon } from "@components/ButtonIcon";


type Props = ViewProps &   {
  name: string,
  icon: keyof typeof MaterialIcons.glyphMap,
  onRemove: () => void

}


export function PlayerCard({name, icon, onRemove, ...rest}: Props) {
  return (
    <Container {...rest}>
      <Icon name="person"  />
      <Name>{name}</Name>

      <ButtonIcon 
        icon="close" 
        type="SECONDARY" 
        onPress={onRemove}
      />
    </Container>
  )
}