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
import ReservationScreen from './screens/ReservationScreen';
import RoomScreen from './screens/RoomScreen';
import MyReservation from './screens/MyReservation';
import ReservationAdmin from './screens/AdminReservation';
import AdminNotice from './screens/AdminNotice';

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
            <Stack.Screen
              name="ReservationScreen"
              component={ReservationScreen}
            />
            <Stack.Screen name="RoomScreen" component={RoomScreen} />
            <Stack.Screen name="MyReservation" component={MyReservation} />
            <Stack.Screen
              name="ReservationAdmin"
              component={ReservationAdmin}
            />
            <Stack.Screen name="AdminNotice" component={AdminNotice} />
          </Stack.Navigator>
        </NavigationContainer>
      </LoginContextProvider>
    </>
  );
}
