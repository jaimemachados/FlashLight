import React from "react";
import {View, StyleSheet} from 'react-native';

const App () => {
  return <View style={style.container}/>;
};

export default App;

const style=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'red',
  },
});