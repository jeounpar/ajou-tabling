import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserScreen from './screens/UserScreen';
import AuthScreen from './screens/AuthScreen';
import LoginScreen from './screens/LoginScreen';
import LoginContextProvider from './store/login';
import AdminScreen from './screens/AdminScreen';
import NoticeScreen from './screens/NoticeScreen';
import ManualScreen from './screens/ManualScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <LoginContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="AuthScreen" component={AuthScreen} />
            <Stack.Screen name="UserScreen" component={UserScreen} />
            <Stack.Screen name="AdminScreen" component={AdminScreen} />
            <Stack.Screen name="NoticeScreen" component={NoticeScreen} />
            <Stack.Screen name="ManualScreen" component={ManualScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </LoginContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F4F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
