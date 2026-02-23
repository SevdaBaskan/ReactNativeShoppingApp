import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import KategorilerScreen from './src/screens/Kategoriler';
import KategoriDetayScreen from './src/screens/KategoriDetay';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Giriş' }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Kayıt Ol' }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Ana Sayfa' }} />
        <Stack.Screen name="Kategori" component={KategorilerScreen} options={{ title: 'Kategoriler' }} />
        <Stack.Screen name="KategoriDetay" component={KategoriDetayScreen} options={{ title: 'Kategori Detayı' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


/*üsteki headı istemiyorsam <Stack.Screen 
  name="Login" 
  component={LoginScreen} 
  options={{ headerShown: false }}  Başlığı tamamen gizler
/> şeklinde yapabilirim
veya sadece geri butonunu kaldırmak istiyorsam options={{ headerLeft: () => null }} kullanabilirim. Bu, başlığı gösterir ancak geri butonunu kaldırır.


<Stack.Navigator 
  initialRouteName="Login"
  screenOptions={{ headerShown: false }}  Tüm ekranlarda başlığı gizler
>
  { ... ekranlar ... }
</Stack.Navigator>*/