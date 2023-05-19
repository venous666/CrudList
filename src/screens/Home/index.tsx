import { styles } from './styles';
import { Text, TextInput, View, TouchableOpacity, FlatList, Alert, Image} from 'react-native';
import { Participant } from '../../components/Participant';
import { useState } from 'react';

export default function Home() {
    
    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState('');
    const [participantsCount, setParticipantsCount] = useState(0);
    const [isPressed, setIsPressed] = useState(false);
  const [selectedCount, setSelectedCount] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  
  const handlePress = () => {
    setIsPressed(!isPressed);
    setIsChecked(!isChecked);
  
    if (!isChecked) {
      setSelectedCount(prevCount => prevCount + 1);
    } else {
      setSelectedCount(prevCount => prevCount - 1);
    }
  };
 

 


    function handleParticipantAdd(){
        if (participants.includes(participantName)) {
          return Alert.alert('Participante existe', 'Já existe o participante cadastrado!');
        }
      
        setParticipants(prevState => [...prevState, participantName]);
        setParticipantsCount(prevCount => prevCount + 1);
      
        // Limpar o campo - precisa alterar no value do TextInput
        setParticipantName('');
      }
    
    function handleParticipantRemove(name: string){
        //return console.log(participants.filter(participant => participant !== name));
        
        
        return Alert.alert("Remover",`Deseja remover o ${name}?`,[
            {
                text: 'Sim',
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
            },{
                text: 'Não',
                style: 'cancel'
            }
        ]);

        //console.warn(`Vc removeu o participante ${name}`);
    }

    return (
      <View style={styles.container}>
        <View style={{width:'150%', backgroundColor:'#0d0d0d', display:'flex', justifyContent:'center',alignItems:'center', paddingTop:20, paddingBottom:20, top: 0, position: 'absolute'}}>
        <Image source={require('../../../img/Logo.png')} style={{width:150, height: 90, resizeMode:'contain', justifyContent:'center', marginTop: 30,}}/>
        </View>
        <View style={styles.form}>
            <TextInput 
                style={styles.input}
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor="#6B6B6B"
                //onChangeText={text => setParticipantName(text)}//evento para quando alterar algo no componente
                onChangeText={setParticipantName}
                value={participantName}
            />
            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text style={styles.buttonText}> +  </Text>
            </TouchableOpacity>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 8, justifyContent: 'space-evenly', alignItems: 'flex-start' }}>
             <Text style={styles.TextTasks}>Criadas: {participantsCount}</Text>
             <Text style={styles.TextTasks2}>Concluídas: {selectedCount}</Text>

            </View>

        <View style={{ borderColor: '#6F6F6F', borderWidth: 1, width: '98%', marginBottom: 30, opacity: 0.8, borderRadius: 100,}}></View>

        <FlatList
            data={participants}
            keyExtractor={item => item}
            renderItem={({ item }) => (
                <Participant 
                key={item}
                name= {item}
                onRemove={() => handleParticipantRemove(item)}
            />
            )}
            showsVerticalScrollIndicator= {false}
            ListEmptyComponent={() => (
                <Text style={styles.listEmptyText}>
                   Você ainda não tem tarefas cadastradas {'\n'}
                   <Text style={{fontWeight: '400'}}>Crie tarefas e organize seus itens a fazer</Text>
                </Text>   
             
            )}
        />
    
        
        {/*<ScrollView showsVerticalScrollIndicator={false}>
            {
                participants.map(participant => (
                    <Participant 
                        key={participant}
                        name= {participant}
                        onRemove={() => handleParticipantRemove("Ana Maria")}
                    />
                ))
            }
        </ScrollView>*/}

        
       
      </View>
    )
  }
  