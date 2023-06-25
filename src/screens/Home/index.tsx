import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export default function Home() {

  const [participants, setParticipants] = useState<string[]>([]);
  const [participantsName, setParticipantsName] = useState('');

  function handleParticipantAdd() {
    if (participants.includes(participantsName)) {
      return Alert.alert('Participante existente', 'Já existe um participante na lista com esse nome.')
    }
    setParticipants(prevState => [...prevState, participantsName]);
    setParticipantsName('');
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover participante', `Deseja remover ${name} da lista de participantes?`, [{
      text: 'Sim',
      onPress: () => setParticipants(participants.filter(participant => participant !== name))
    },
    {
      text: 'Não',
      style: 'cancel'
    }
    ])
    console.log(`Você removeu ${name} da lista de participantes`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento!</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>
      <View style={styles.form}>
        <TextInput
          placeholder='Nome do participante'
          placeholderTextColor={'#6b6b6b'}
          style={styles.input}
          keyboardType='default'
          onChangeText={setParticipantsName}
          value={participantsName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        keyExtractor={item => item}
        data={participants}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Não há participantes cadastrados, seja o primeiro a adicionar um participante
          </Text>
        )}
      />

    </View>
  );
}