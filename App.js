import React from 'react';
import { View, Text } from 'react-native';
import { Drag } from './src/components/Drag';
import Dragdrop from './src/components/Dragdrop';
import Navbar from './src/components/Navbar';
import Drag2 from './src/components/Drag2'
import Fillup from './src/components/Fillup';
import Question from './src/components/Question';

const App = () => {
  return (
    <View style={{backgroundColor:'#fff',height:'100%'}}>
     <Navbar/>
     <Fillup/>
     
    </View>
  );
}

export default App;
