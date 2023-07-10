import React ,{Component} from "react";
import { View, Text, StyleSheet} from "react-native";



export default class App extends Component{
  render(){
  return (
    <View>
      <Text>Curriculo</Text>
      </View>
  );
  }
}

const estilos = StyleSheet.create({
  container:{
    flex: 1,
    justfyContent: 'center',
    aligItems: 'center',
  },
  
  fonte:{
    fontSize: 50,
  },
});