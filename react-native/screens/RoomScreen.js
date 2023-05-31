import {
  FlatList,
  Linking,
  View,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function RoomScreen() {
  const navigation = useNavigation();
  function pressHandler() {
    navigation.navigate('ReservationScreen', {
      roomId: 'paldal-334',
    });
  }
  return (
    <>
      <View style={styles.container}>
        <Pressable
          style={({ pressed }) => [pressed ? styles.pressed : styles.item]}
          onPress={pressHandler}
        >
          <Text style={styles.subtitle}>[소프트웨어 창작 스튜디오]</Text>
          <Text style={styles.inText}>팔달관 334호</Text>
        </Pressable>
        <View style={styles.item}>
          <Text style={styles.subtitle}>[소프트웨어 창작 스튜디오]</Text>
          <Text style={styles.inText}>팔달관 111호</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.subtitle}>[소프트웨어 창작 스튜디오]</Text>
          <Text style={styles.inText}>팔달관 222호</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.subtitle}>[소프트웨어 창작 스튜디오]</Text>
          <Text style={styles.inText}>팔달관 333호</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.subtitle}>[소프트웨어 창작 스튜디오]</Text>
          <Text style={styles.inText}>팔달관 444호</Text>
        </View>
      </View>
    </>
  );
}

export default RoomScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F4F4',
    alignItems: 'center',
  },
  listOuterContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E3F4F4',
  },
  listContainer: {
    flex: 1,
    borderRadius: 8,
    overflow: 'hidden',
  },
  pressed: {
    opacity: 0.5,
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#27BEF5',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    overflow: 'hidden',
    alignItems: 'center',
    width: '70%',
  },
  item: {
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#27BEF5',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    overflow: 'hidden',
    alignItems: 'center',
    width: '70%',
  },
  input: {
    flex: 20,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  icon: { marginTop: 20, marginRight: 15 },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  inText: { fontSize: 20, color: 'black' },
});
