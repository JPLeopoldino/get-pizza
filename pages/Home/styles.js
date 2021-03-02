import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    content: {
      flex: 1,
      // alignItems: 'center',       // Alinhamento horizontal
      // justifyContent: 'center',   // Alinhamento vertical
    },
    headerBar: {
      paddingVertical: 50,
    },
    mainTitle: {
      fontSize: 80,
      color: '#FFF',
      textAlign: 'center',
      letterSpacing: 8,
      fontWeight: 'bold',
      backgroundColor: '#152333',
      padding: 40,
      borderBottomWidth: 2,
      borderColor: '#FFF',
    },
    header: {
      position: 'absolute',
      top: 0,
      backgroundColor: 'white',
      width: '100%',
      flex: 1,
      flexDirection: 'row',
      height: 80,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 30,
      paddingHorizontal: 40, 
    },
    headerNav:{
      fontSize: 17,
      marginTop: 20,
      color: '#FFF',
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 50,
      backgroundColor: '#000',
    },
    text: {
      color: 'white',
      fontSize: 25,
      fontWeight: 'bold',
      paddingVertical: 20,
      textAlign: 'center',
    },
    red: {
      color: 'red',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    green: {
      color: 'green',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingBottom: 40,
    },
    image: {
      height: 80,
      width: 80,
      borderRadius: 40,
    }
  });

  export default styles;