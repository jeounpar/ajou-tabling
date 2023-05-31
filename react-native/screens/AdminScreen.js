import { FlatList, Image, View, StyleSheet, Button } from 'react-native';
import GridTile from '../components/GridTile';
import { AdminCategories } from '../data/AdminScreenData';
import { useNavigation } from '@react-navigation/native';

function AdminScreen() {
  const navigation = useNavigation();
  function pressHandler(id) {
    if (id === 'a1') {
      navigation.navigate('ReservationAdmin');
    } else if (id === 'a2') {
      navigation.navigate('AdminNotice');
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
        data={AdminCategories}
        keyExtractor={item => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </>
  );
}

export default AdminScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 250,
  },
});
