import { StyleSheet } from "react-native";

const css = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },

    container_checkout: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f5f5f5',
      paddingHorizontal: 20,
  },
    
    map: {
        height: '60%',
    },

    search: {
        height: '40%',
    },

    distance:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10
    },

    distance_text:{
      fontSize: 20,
      fontWeight: 'bold'
    },

    price:{
      backgroundColor: 'black',
      padding: 7,
      borderRadius: 4,
      marginTop: 30,
      justifyContent: 'center',
      alignItems: 'center'
    },

    price_text:{
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 20
    },
    checkout_text:{
      fontSize: 18,
        textAlign: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },

    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
  },
  
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
  value: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
  },

    card: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 20,
      marginBottom: 20,
      elevation: 3, // Sombra para Android
      shadowColor: '#000', // Sombra para iOS
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      width: '100%',
  }
});
  
  export {css};