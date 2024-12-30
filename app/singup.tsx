import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Singup() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor:'#fff'
      }}
    >
      <Image source={require("@/assets/images/bird_2.jpg")}
        style={{
          width:"100%",
          height:200,
        }}
        resizeMode="cover"
      />
      <View style={{width:300, marginHorizontal:'auto', paddingBottom:20}}>
        <TextInput placeholder="Name" style={style.inputBox}/>
        <TextInput placeholder="Email" style={style.inputBox}/>
        <TextInput placeholder="Username/Email" style={style.inputBox}/>
        <TextInput placeholder="Password" style={style.inputBox}/>
      </View>
      <View style={style.buttonSection}>
        <TouchableOpacity onPress={() => router.push('/(drawer)')}>
            <LinearGradient style={style.buttons} start={{x:0, y:0}} end={{x:1, y:1}} colors={['rgba(121,9,71,1)','rgba(255,0,116,1)']}>
              <Text style={{color:'#fff', fontSize:20}}>Sign In</Text>
            </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={style.buttons}>
        <LinearGradient style={style.buttons} start={{x:1, y:1}} end={{x:0, y:0}} colors={['rgba(121,9,71,1)','rgba(255,0,116,1)']}>
              <Text style={{color:'#fff', fontSize:20}}>Sign Up</Text>
            </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  inputBox:{
    borderWidth:2,
    height:45,
    textAlign:'left',
    paddingHorizontal:30,
    borderRadius:25,
    marginBottom:10,
    borderColor:'#ada9a8'
  },
  buttonSection: {
    flex:1,
    marginHorizontal:'auto'
  },
  buttons: {
    width:300,
    height:45,
    backgroundColor:'#900C3F',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50,
    marginVertical:5
  }
});
