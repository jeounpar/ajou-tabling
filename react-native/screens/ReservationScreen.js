import {
  View,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';
import { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { postReservation } from '../utils/http';
import Modal from 'react-native-modal';

function ReservationScreen(props) {
  const roomId = props.route.params.roomId;
  let date = new Date();
  let year = date.getFullYear();
  let month = ('0' + (1 + date.getMonth())).slice(-2);
  let day = ('0' + date.getDate()).slice(-2);
  const today = year + '-' + month + '-' + day;
  const [selected, setSelected] = useState(today);
  const [startTime, startTimeSelected] = useState(new Date());
  const [endTime, endTimeSelected] = useState(new Date());
  const [number, onChangeText] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  function numberInputHandler(inputNumber) {
    onChangeText(inputNumber);
  }

  function startTimeHandler(inputTime) {
    startTimeSelected(inputTime);
  }
  function endTimeHandler(inputTime) {
    endTimeSelected(inputTime);
  }
  function postReservationHandler() {
    const data = {
      date: selected,
      startTime: getFormatTime(startTime),
      endTime: getFormatTime(endTime),
      number: number,
    };
    async function postRoom(t) {
      await postReservation(t);
    }
    postRoom(data);
    toggleModal();
    // onChangeText(inputNumber);
  }
  function toggleModal() {
    setModalVisible(!isModalVisible);
  }

  function getFormatTime(inputDate) {
    let hh = inputDate.getHours();
    hh = hh >= 10 ? hh : '0' + hh;
    let mm = inputDate.getMinutes();
    mm = mm >= 10 ? mm : '0' + mm;
    return hh + ':' + mm;
  }

  return (
    <View style={styles.container}>
      <Calendar
        style={{
          marginBottom: 10,
        }}
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: 'orange',
          },
        }}
      />
      <ScrollView>
        <View style={styles.reservationContainer}>
          <Text style={styles.inText}>날짜 {'  '}</Text>
          <Text style={styles.inText}>{selected}</Text>
        </View>
        <View style={styles.reservationContainer}>
          <Text style={styles.inText}>시간</Text>
          <RNDateTimePicker
            mode="time"
            minuteInterval={10}
            value={startTime}
            onChange={(event, value) => startTimeHandler(value)}
          />
          <Text style={styles.inText}> ~</Text>
          <RNDateTimePicker
            mode="time"
            minuteInterval={10}
            value={endTime}
            onChange={(event, value) => endTimeHandler(value)}
          />
        </View>
        <View style={styles.reservationContainer}>
          <Text style={styles.inText}>사용인원 {'  '}</Text>
          <TextInput
            style={styles.input}
            onChangeText={numberInputHandler}
            value={number}
          />
          <Text style={styles.inText}>명</Text>
        </View>
        <View style={styles.itemContainer}>
          <Pressable
            style={({ pressed }) => [pressed ? styles.pressed : styles.button]}
            onPress={postReservationHandler}
          >
            <Text style={styles.button}>예약 신청</Text>
          </Pressable>
        </View>
      </ScrollView>
      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View style={styles.modal}>
          <Text style={styles.modalText}>Success</Text>
          <Button title="close" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
  // return <Text>{roomId}</Text>;
}

export default ReservationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  reservationContainer: {
    borderWidth: 2,
    borderRadius: 8,
    alignItems: 'baseline',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 3,
    padding: 8,
  },
  itemContainer: {
    alignItems: 'flex-end',
    margin: 10,
    borderRadius: 8,
    // backgroundColor: '#27BEF5',
    fontWeight: 'bold',
    overflow: 'hidden',
  },
  subtitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  inText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  input: {
    width: '10%',
    height: 40,
    marginRight: 10,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: '#27BEF5',
    padding: 5,
    borderRadius: 8,
    overflow: 'hidden',
  },
  pressed: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: '#27BEF5',
    padding: 5,
    borderRadius: 8,
    overflow: 'hidden',
    opacity: 0.5,
  },
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
