import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function Home() {

    function handleParticipantAdd() {
        console.log("Adicionou um participante!");
    }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento!</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>
      <View style={styles.form}>
        <TextInput 
            placeholder="Nome do participante"
            placeholderTextColor={"#6b6b6b"}
            style={styles.input}
            keyboardType='default'
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}> 
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}