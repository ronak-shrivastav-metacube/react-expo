import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { router } from 'expo-router';

const CustomeDrawerContent = (props) => {
    return <DrawerContentScrollView {...props}>
        <DrawerItem label={"Home"} icon={({ color }) => <FontAwesome color={'#000'} size={24} name={'home'} />
        } onPress={() => {
          router.push('/(tabs)');
        }}
        labelStyle={{marginLeft:-20, fontSize:20}}
        />
        <DrawerItem label={'Notifications'} onPress={() => router.push('/notification')}/>
    </DrawerContentScrollView>
}

export default function DrawerRoot() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={(props) => <CustomeDrawerContent {...props}/>} screenOptions={
        {
          headerShown:false,
        }
      }>
        <Drawer.Screen name="notification" options={{headerShown:true}}/>
      </Drawer>
    </GestureHandlerRootView>
  );
}