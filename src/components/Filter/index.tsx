import { TouchableOpacityProps } from "react-native";
import { Container, FilterStyledProps, Title } from "./styles";

type Props = TouchableOpacityProps & FilterStyledProps & {
  title: string;
}

export function Filter({title, isActived = false, ...rest}: Props) {
  return  (
    <Container isActived={isActived} {...rest}>
      <Title>
        {title}

      </Title>
    </Container>
  )
}