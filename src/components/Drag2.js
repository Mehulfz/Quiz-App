import React, { Component } from 'react';
import { Text, View,Animated,PanResponder,StyleSheet } from 'react-native';


export default class Drag2 extends Component {
    textPosition={x:0,y:0};
    constructor(props) {
        super(props);
        this.position.addListener(latestPosition => {
            this.textPosition = latestPosition;
        })
    }
    position = new Animated.ValueXY();
    panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (e, gestureState) => {
            const newPosition ={x:gestureState.dx,y:gestureState.dy};
            this.position.setValue(newPosition);
        },
        onPanResponderGrant:()=>{
            this.position.setOffset({x:this.textPosition.x,y:this.textPosition.y}); 
            this.position.setValue({x:0,y:0});
        },
        onPanResponderEnd: ()=> {
            this.position.flattenOffset();
        }
    })
  render() {
    return (
        <View>
      
      <Animated.View style={[this.position.getLayout()]} {...this.panResponder.panHandlers}>

         <Text style={styles.name}>Antartica</Text>
          
      </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    name:{
        backgroundColor:"#b3399e",
        textAlign:'center',
        height:40,
        borderRadius:5,
        width:70,
        paddingVertical:10,
        top:450,
        marginLeft:50
        

    }
})
