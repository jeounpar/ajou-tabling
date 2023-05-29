import { FlatList, Image, View, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/CategoryData';
import GridTile from '../components/GridTile';

function AdminScreen() {
  function renderCategoryItem(itemData) {
    return <GridTile title={itemData.item.title} icon={itemData.item.icon} />;
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

export default AdminScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 250,
  },
});
