import { FlatList, Image, View, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/CategoryData';
import GridTile from '../components/GridTile';
import { useNavigation } from '@react-navigation/native';

function UserScreen() {
  const navigation = useNavigation();
  function pressHandler(id) {
    if (id === 'a3') {
      navigation.navigate('NoticeScreen');
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
    </>
  );
}

export default UserScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 250,
  },
});
