import {
  FlatList,
  Linking,
  View,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
  Button,
} from 'react-native';
import { useEffect, useState } from 'react';
import { getNotice } from '../utils/http';
import { Feather } from '@expo/vector-icons';
import Modal from 'react-native-modal';

let noticeCopy = [];
function AdminNotice() {
  const [notice, setNotice] = useState([]);
  const [text, onChangeText] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    async function getNoticeData() {
      const data = await getNotice();
      setNotice(data);
      noticeCopy = JSON.parse(JSON.stringify(data));
    }
    getNoticeData();
  }, [setNotice]);
  function toggleModal() {
    setModalVisible(!isModalVisible);
  }
  function renderNoticeItem(data) {
    return (
      <View style={styles.listContainer}>
        <Pressable
          style={({ pressed }) => [pressed ? styles.pressed : null]}
          onPress={() => Linking.openURL(data.item.url)}
        >
          <Text style={styles.item}>
            [{data.item.createdAt}]{'\n'}
            {data.item.title}
          </Text>
        </Pressable>
      </View>
    );
  }
  function searchInputHandler(inputText) {
    inputText = inputText.toLowerCase();
    onChangeText(inputText);
  }

  function searchHandler() {
    let rst = [];
    for (const data of noticeCopy) {
      const title = data.title.toLowerCase();
      if (data.createdAt.indexOf(text) > 0 || title.indexOf(text) > 0)
        rst.push(data);
    }
    setNotice(rst);
  }

  function refreshHandler() {
    setNotice(noticeCopy);
  }
  return (
    <>
      <Button title="New Notice" onPress={toggleModal} />
      <View style={[{ flexDirection: 'row' }, styles.container]}>
        <TextInput
          style={styles.input}
          onChangeText={searchInputHandler}
          value={text}
        />
        <Pressable
          style={({ pressed }) => [pressed ? styles.pressed : null]}
          onPress={searchHandler}
        >
          <Feather name="search" size={28} style={styles.icon} />
        </Pressable>
        <Pressable
          style={({ pressed }) => [pressed ? styles.pressed : null]}
          onPress={refreshHandler}
        >
          <Feather name="refresh-cw" size={28} style={styles.icon} />
        </Pressable>
      </View>
      <View style={styles.listOuterContainer}>
        <FlatList
          data={notice}
          keyExtractor={data => data.id}
          renderItem={renderNoticeItem}
        />
        <View style={{ marginBottom: 30 }}></View>
      </View>
      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View style={styles.modal}>
          <Text style={styles.modalText}>TEST</Text>
          <Button title="close" onPress={toggleModal} />
        </View>
      </Modal>
    </>
  );
}

export default AdminNotice;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E3F4F4',
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
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
  },
  item: {
    margin: 6,
    borderRadius: 8,
    backgroundColor: '#27BEF5',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    overflow: 'hidden',
  },
  input: {
    flex: 20,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  icon: { marginTop: 20, marginRight: 15 },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
});
