import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Pressable,
  Button,
} from 'react-native';
import { useEffect, useState } from 'react';
import { getReservation, updateReservation } from '../utils/http';

function ReservationAdmin() {
  const [reservation, setReservation] = useState([]);
  useEffect(() => {
    async function getReservationData() {
      const data = await getReservation();
      setReservation(data);
    }
    getReservationData();
  }, [setReservation]);
  function pressOk(id) {
    const data = {
      id: id,
      status: 1,
    };
    async function updateStatus(data) {
      await updateReservation(data);
      const rst = await getReservation();
      setReservation(rst);
    }
    updateStatus(data);
  }
  function pressNo(id) {
    const data = {
      id: id,
      status: 2,
    };
    async function updateStatus(data) {
      await updateReservation(data);
      const rst = await getReservation();
      setReservation(rst);
    }
    updateStatus(data);
  }
  function renderReservation(data) {
    return (
      <>
        <View style={styles.listContainer}>
          <Text style={styles.item}>
            시간 : [{data.item.date} {data.item.startTime}
            {' ~ '}
            {data.item.endTime}]{'\n'}
            장소 : 팔달관 334 {'\n'}
            사용 인원 : {data.item.number}
            {'\n'}
            신청 상태 : {data.item.status}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Button
            title="승인"
            color={'blue'}
            onPress={() => {
              pressOk(data.item.id);
            }}
          />
          <Button
            title="거절"
            color={'red'}
            onPress={() => {
              pressNo(data.item.id);
            }}
          />
        </View>
      </>
    );
  }
  return (
    <View style={[{ flex: 1, flexDirection: 'row' }, styles.container]}>
      <View style={styles.listOuterContainer}>
        <FlatList
          data={reservation}
          keyExtractor={data => data.id}
          renderItem={renderReservation}
        />
        <View style={{ marginBottom: 30 }}></View>
      </View>
    </View>
  );
}

export default ReservationAdmin;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  listOuterContainer: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: 'white',
  },
  listContainer: {
    flex: 1,
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.5,
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
  },
  item: {
    width: '90%',
    margin: 6,
    borderRadius: 8,
    borderWidth: 1,
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
});
