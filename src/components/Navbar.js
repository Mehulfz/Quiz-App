import React from 'react';
import { View, Text, Image,StyleSheet,Pressable } from 'react-native';

const Navbar = () => {
  return (
    <View style={styles.maincontainer}>
      <View>
      <Image style={styles.img} source={require('../assets/left.png')}/>
      </View>
      <View>
        <Pressable style={styles.btncontainer}>
          <Text style={styles.btntext}>SUBMIT</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Navbar;


const styles = StyleSheet.create({
    img:{
        height:30,
        width:30
        
    },
    btntext:{
      color:'#ffffff',
     

    },
    maincontainer:{
      display:"flex",
      flexDirection:"row",
      justifyContent:'space-between',
      alignItems:'center',
      height:60,
      
      paddingHorizontal:10
    },
   btncontainer:{
    backgroundColor:"#046382",
    borderRadius:15,
    width:80,
    padding:5,
    height:30,
    alignItems:"center"
   }
})