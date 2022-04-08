import React from 'react';
import { View, Text,StyleSheet,Image } from 'react-native';
import Drag2 from './Drag2';
import Dragdrop from './Dragdrop';
import Question from './Question';
import Drag3 from './Drag3';
import Drag4 from './Drag4';
import Drag5 from './Drag5';
import Navbar from './Navbar';

const Fillup = () => {
  return (
    
    <View style={styles.maincontainer}>
    <Navbar/>
      <View style={styles.container1}>
      <Text style={styles.fill}>Fill in the blanks</Text>
      <View style={styles.container2}>
          <Image style={styles.timerimg} source={require('../assets/timer.png')}/>
          <Text style={styles.timertext}>10 : 00</Text>
      </View>
      </View>
      <Question/>
      <View style={styles.cont1}>
      <Dragdrop/>
      <Drag2/>
      <Drag3/>
      </View>
      <View style={styles.cont2}>
        <Drag4/>
        <Drag5/>
      </View>
      
    </View>
  );
}

export default Fillup;

const styles = StyleSheet.create({
    maincontainer:{
        height:'100%',
        backgroundColor:'#e4e4e4'
    },
    container1:{
        display:'flex',
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
        padding:15
    },
    fill:{
        color:"#000000",
        fontSize:15
    },
    container2:{
      display:'flex',
        flexDirection:'row',
        justifyContent:"flex-start",
        alignItems:'center'
    },
    timerimg:{
      height:20,
      width:20,

    },
    timertext:{
      color:"#000000",
      fontSize:15,
      paddingHorizontal:5
    },
    cont1:{
      display:"flex",
      flexDirection:'row',
      justifyContent:'space-evenly',
      alignItems:'center'
    },
    cont2:{
      display:"flex",
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    }
})