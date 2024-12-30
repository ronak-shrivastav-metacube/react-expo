import { Entypo, FontAwesome, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Link, Tabs, useNavigation } from "expo-router";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

export default function TabRoot() {
  const navigation = useNavigation();
  return (
    <Tabs screenOptions={({ route }) =>
    ({
      headerStyle: {
        backgroundColor: "rgba(121,9,71,1)",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontSize: 30
      },
      headerLeft: () => <DrawerToggleButton {...{ "tintColor": "#fff" }} />,
      headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('index')} style={{ marginRight: 20 }}><MaterialIcons color={'#fff'} size={24} name={'logout'} /></TouchableOpacity>,
      tabBarActiveTintColor: '#fff',
      tabBarActiveBackgroundColor: 'rgba(121,9,71,1)',
      tabBarInactiveBackgroundColor: '#fff',
      tabBarInactiveTintColor: 'rgba(121,9,71,1)'
    })
    }>
      <Tabs.Screen name="index" options={{
        title: 'Home',
        tabBarIcon: ({ color, focused }) => <FontAwesome size={28} name="home" color={focused ? '#fff' : 'rgba(121, 9, 71, 1)'} />
      }} />
      <Tabs.Screen name="videos" options={{
        title: 'Videos',
        tabBarIcon: ({ color, focused }) => <Entypo size={28} name="youtube" color={focused ? '#fff' : 'rgba(121, 9, 71, 1)'} />
      }} />
      <Tabs.Screen name="mynetwork" options={{
        title: 'My Network',
        tabBarIcon: ({ color, focused }) => <Entypo size={28} name="network" color={focused ? '#fff' : 'rgba(121, 9, 71, 1)'} />
      }} />
      <Tabs.Screen name="myprojects" options={{
        title: 'My Projects',
        tabBarIcon: ({ color, focused }) => <FontAwesome6 size={28} name="diagram-project" color={focused ? '#fff' : 'rgba(121, 9, 71, 1)'} />
      }} />
    </Tabs>
  );
}

const style = StyleSheet.create({
  tintColor: "rgba(121,9,71,1)"
})