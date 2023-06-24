import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export default function Home() {

  const participants = ['William', 'Rodrigo', 'Diego', 'Vini', 'Biro', 'Ana', 'Isa', 
  'Jack', 'Mayk', 'Guilherme', 'João', 'Pedro', 'Lucas', 'Mateus']

    function handleParticipantAdd() {
      if(participants.includes('William')){
        return Alert.alert('Participante existente', 'Já existe um participante na lista com esse nome.')
      }
        console.log('Adicionou um participante!');
    }

    function handleParticipantRemove(name: string) {
      Alert.alert('Remover participante', `Deseja remover ${name} da lista de participantes?`, [{
        text: 'Sim',
        onPress: () => Alert.alert('Removido com sucesso!')
      },
      {
        text: 'Não',
        style: 'cancel',
        //onPress: () => Alert.alert('Remoção cancelada!')
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