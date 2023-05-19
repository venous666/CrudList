import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      backgroundColor: '#1a1a1a',
      padding: 24,
      justifyContent:'center',
      alignItems: 'center',
    },
    eventName: {
        color: '#FDFCFE',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48,
    },
    eventDate: {
        color: '#6B6B6B',
        fontSize: 16,
    },
    input: {
        flex: 1,/*ocupar todo o espaço */
        height: 56,
        backgroundColor: '#262626',
        borderRadius: 5,
        color: 'white',
        padding: 16,
        fontSize: 16,
        marginRight: 12,
        borderWidth: 1,
        borderColor:'black',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor:'#1f709f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form:{
        width: '100%',
        flexDirection: 'row',
        marginTop: '35%', 
        marginBottom: 42,
    },
    listEmptyText: {
        color: '#6F6F6F',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: '700',
    },
    TextTasks:{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#4eaae2',
        marginRight: 150,
        marginBottom:3,

    },
    TextTasks2:{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#7d7ff0',
        marginBottom:3,
    },
    completedText: {
        textDecorationLine: 'line-through',
        color: '#5f60ce',
        opacity: 0.1
      },
      
      
  });