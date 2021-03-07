import * as React from 'react';
import { StyleSheet, TextInput, View} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

export default function MainSearchBar() {

  return(
    <View style={styles.container}>
    
     <TextInput style={styles.searchBar} placeholder="Search your pokemon"></TextInput>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 95,
    left: 50,
    right: 50
  },
  searchBar: {
    backgroundColor: "#ffffff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    elevation: 15
  },
  imagemSearch:{
    backgroundColor: 'transparent',
    height: 20,
    width: 20
  },
  containerHeader: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
})