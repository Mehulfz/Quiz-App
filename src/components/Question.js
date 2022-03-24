import React from 'react';
import { View, Text,StyleSheet } from 'react-native';

const Question = () => {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.container1}>
      <Text style={styles.q1}>Q.1  Delhi is </Text>
      <View style={styles.line}></View>
      <Text style={styles.q1}> of India, India is</Text>
      
      </View>
      <View style={styles.container2}>
      <Text style={styles.q1}>located in</Text>
      <View style={styles.line}></View>
      <Text style={styles.q1}>continent</Text>
      </View>
    </View>
  );
}

export default Question;

const styles = StyleSheet.create({
    line:{
        height:1,
        width:100,
        backgroundColor:'#ffffff',
        marginTop:12
        
    },
    q1:{
        color:'#ffffff',
        fontSize:17
    },
    container1:{
        display:'flex',
        flexDirection:'row',
        justifyContent:"flex-start",
        alignItems:'center',
        paddingHorizontal:40
    },
    maincontainer:{
        top:200,
    },
    container2:{
        display:'flex',
        flexDirection:'row',
        justifyContent:"flex-start",
        alignItems:'center',
        paddingHorizontal:74,
        marginTop:10
    },
})