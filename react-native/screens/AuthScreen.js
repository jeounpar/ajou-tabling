import { Pressable, Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LoginContext } from '../store/login';
import { useContext } from 'react';

function AuthScreen() {
  const loginContext = useContext(LoginContext);
  const navigation = useNavigation();

  function authHandler(auth) {
    if (auth === 'User') {
      loginContext.loginUser();
    } else {
      loginContext.loginAdmin();
    }
    navigation.reset({
      index: 0,
      routes: [{ name: auth + 'Screen' }],
    });
  }

  return (
    <>
      <View style={styles.container}>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? '#E893CF' : '#9376E0',
            },
            styles.button,
          ]}
          onPress={() => authHandler('User')}
        >
          <Text style={styles.buttonText}>USER</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? '#E893CF' : '#9376E0',
            },
            styles.button,
          ]}
          onPress={() => authHandler('Admin')}
        >
          <Text style={styles.buttonText}>ADMIN</Text>
        </Pressable>
      </View>
    </>
  );
}

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F4F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 8,
    padding: 6,
    margin: 8,
    height: 50,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});
