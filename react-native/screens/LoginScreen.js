import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  GoogleSocialButton,
  FacebookSocialButton,
  GitHubSocialButton,
  InstagramSocialButton,
} from 'react-native-social-buttons';
import { LoginContext } from '../store/login';
import { useNavigation } from '@react-navigation/native';

function LoginScreen() {
  const loginContext = useContext(LoginContext);
  const navigation = useNavigation();
  function loginHandler() {
    loginContext.loginFunction();
    navigation.reset({
      index: 0,
      routes: [{ name: 'AuthScreen' }],
    });
  }
  // if (!loginContext.login)r
  return (
    <View style={styles.container}>
      <GitHubSocialButton />
      <FacebookSocialButton />
      <InstagramSocialButton />
      <GoogleSocialButton
        onPress={() => {
          loginHandler();
        }}
      />
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F4F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
