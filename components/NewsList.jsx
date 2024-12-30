import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

const NewsList = ({prop}) => {
    return (
        <SafeAreaView>
            <View style={style.newBox}>
                <View style={{flex:0.3,maxHeight:70, paddingHorizontal:10}} >
                    <Image source={prop.image} style={{height:'100%', width:'100%', borderRadius:5}} resizeMode="cover"/>
                </View>
                <View style={{flex:0.7, paddingHorizontal:10}}>
                    <Text>{prop.text}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default NewsList;

const style = StyleSheet.create({
    newBox:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'#fff',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1,
        marginVertical:10,
        paddingVertical:10
    }
})