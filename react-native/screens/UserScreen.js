import { FlatList, Image, View, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/UserScreenData';
import GridTile from '../components/GridTile';
import { useNavigation } from '@react-navigation/native';

function UserScreen() {
  const navigation = useNavigation();
  function pressHandler(id) {
    if (id === 'a1') {
      navigation.navigate('MyReservation');
    } else if (id === 'a2') {
      navigation.navigate('RoomScreen');
    } else if (id === 'a3') {
      navigation.navigate('NoticeScreen');
    } else if (id === 'a4') {
      navigation.navigate('ManualScreen');
    }
  }
  function renderCategoryItem(itemData) {
    return (
      <GridTile
        title={itemData.item.title}
        icon={itemData.item.icon}
        onPress={() => pressHandler(itemData.item.id)}
      />
    );
  }
  return (
    <>
      <View style={styles.container}>
        <View>
          <Image
            source={require('../assets/images/ajou-main.jpg')}
            style={styles.image}
          />
        </View>
        <FlatList
          data={CATEGORIES}
          keyExtractor={item => item.id}
          renderItem={renderCategoryItem}
          numColumns={2}
        />
      </View>
    </>
  );
}

export default UserScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 250,
  },
  container: {
    backgroundColor: '#E3F4F4',
  },
});
