import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Input } from "@components/Input";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";

import { Container, Content, Icon } from "./styles";

export function NewGroup() {
  const [group, setGroup] = useState<string>('')

  const navigation = useNavigation()

  function handleNew() {
    navigation.navigate('players', { group })
  }
  
  return (
    <Container>
      <Header showBackButton  /> 
      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adcionar as pessoas"
        />

        <Input 
          placeholder="Nome da turma"
          value={group}
          onChangeText={setGroup}
        />

        <Button 
          title="Criar" 
          style={{marginTop:20}} 
          onPress={handleNew}
        />

      </Content>
    </Container>
  )
}