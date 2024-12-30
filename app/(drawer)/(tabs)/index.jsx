import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from "react-native"
import HomeSlider from "../../../components/homeSlider";
import NewsList from "../../../components/NewsList";
import sliderData from "../../../data/sliderData/sliderData";
const Index = () => {
    const myItemSeparator = () => {
        return <View style={{ height: 1, backgroundColor: "grey",marginHorizontal:10}} />;
        };
    const data = [
        {
            id: "1",
            text: "How US president-elect Trump plans to end Russia-Ukraine war",
            image: require('@/assets/images/sliders/politics.webp')
        },
        {
            id: "2",
            text: "Gautam Gambhir and Suryakumar Yadav's 'phone calls': Sanju Samson reveals 'turning point' in his career",
            image: require('@/assets/images/sliders/sport.webp')
        },
        {
            id: "3",
            text: "Bhool Bhulaiyaa 3 box office collection day 9 early prediction",
            image: require('@/assets/images/sliders/movie.webp')
        },
        {
            id: "4",
            text: "How US president-elect Trump plans to end Russia-Ukraine war",
            image: require('@/assets/images/sliders/politics.webp')
        },
        {
            id: "5",
            text: "Gautam Gambhir and Suryakumar Yadav's 'phone calls': Sanju Samson reveals 'turning point' in his career",
            image: require('@/assets/images/sliders/sport.webp')
        },
        {
            id: "6",
            text: "Bhool Bhulaiyaa 3 box office collection day 9 early prediction",
            image: require('@/assets/images/sliders/movie.webp')
        },
        {
            id: "7",
            text: "How US president-elect Trump plans to end Russia-Ukraine war",
            image: require('@/assets/images/sliders/politics.webp')
        },
        {
            id: "8",
            text: "Gautam Gambhir and Suryakumar Yadav's 'phone calls': Sanju Samson reveals 'turning point' in his career",
            image: require('@/assets/images/sliders/sport.webp')
        },
        {
            id: "9",
            text: "Bhool Bhulaiyaa 3 box office collection day 9 early prediction",
            image: require('@/assets/images/sliders/movie.webp')
        }
    ]
    return (
        <>
        <View style={style.sliderContainer}>
            <FlatList data={sliderData} renderItem={({item}) => <HomeSlider prop={item} />} horizontal={true} ItemSeparatorComponent={myItemSeparator} keyExtractor={(item) => item.id}/>
        </View>
        <SafeAreaView style={{flex:1,backgroundColor:'#fff', }}>
            <FlatList data={data} renderItem={({item}) => <NewsList prop={item}/>} keyExtractor={(item) => item.id} horizontal={false}/>
        </SafeAreaView>
        </>
    )
}

export default Index;

const style = StyleSheet.create({
    sliderContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});