import { Image, StyleSheet, Text, useWindowDimensions, View } from "react-native";


const HomeSlider = ({prop}) => {
    const width = useWindowDimensions();
// console.log(width);

    return (
        <View>
            <Image source={prop.image} style={{resizeMode:'cover', width:width.width}}/>
           {/*  <View style={style.title}>
                <Text style={{color:'#fff', fontSize:20, fontWeight:'700', textShadowColor:'#fff', textShadowOffset:{width:5, height:-1}, textShadowRadius:8}}>{prop.text}</Text>
            </View> */}
        </View>
    )
}

export default HomeSlider;

const style = StyleSheet.create({
    title:{
        
    }
});