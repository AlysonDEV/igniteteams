import { useState } from 'react';
import { FlatList } from 'react-native'

import { Input } from "@components/Input";
import { Header } from "@components/Header";
import { Filter } from "@components/Filter";
import { Highlight } from "@components/Highlight";
import { ListEmpty } from '@components/ListEmpty';
import { PlayerCard } from '@components/PlayerCard';
import { ButtonIcon } from "@components/ButtonIcon";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { Button } from '@components/Button';

export function Players() {
  const [team, setTeam] = useState<string>('Time A')
  const [players, setPlayers] = useState<string[]>([])

  return (
    <Container>
      <Header showBackButton />

      <Highlight 
        title="Nome da turma"
        subtitle="adcione a galera e separe os times"
      />

      <Form>
        <Input 
          placeholder="Nome da pessoa"
          autoCorrect={false}
        />

        <ButtonIcon icon="add" />
      </Form>

      <HeaderList>

      <FlatList
        data={['Time A', 'Time B']}
        keyExtractor={item => item}
        horizontal
        renderItem={({ item }) => (
          <Filter
            title={item}
            isActived={team === item}
            onPress={() => setTeam(item)}
          />
        )}
      />
      <NumberOfPlayers>
        {players.length}
      </NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} icon="person" onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time." />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          {paddingBottom: 100},
          players.length === 0 && {flex: 1}
        ]}
      />

      <Button 
        title='Remover Turma' 
        type='SECONDARY'
      />

    </Container>
  );
}