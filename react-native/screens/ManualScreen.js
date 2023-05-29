import {
  FlatList,
  Linking,
  View,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
} from 'react-native';

function ManualScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.subtitle}>예약 및 이용</Text>
        <Text style={styles.inText}>
          1. 예약은 '아주대학교 테이블링 어플리케이션' 으로만 가능합니다. {'\n'}
          2. 1회 최대 2시간까지 예약 가능하며 동반자(학번, 이름)정보를 반드시
          입력해야 합니다.{'\n'}
          3. 예약 인원은 정원의 60% 이상을 충족해야 예약이 가능합니다.
        </Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.subtitle}>이용 수칙</Text>
        <Text style={styles.inText}>
          1. 이용권한은 타인에게 양도할 수 없으며 적발 시 이용자격을 취소할 수
          있습니다. {'\n'}
          2. 음식물 반입을 금지합니다.{'\n'}
          3. 모든 기물은 파손할 경우 파손자에게 비용을 청구할 수 있습니다.{'\n'}
          4. 개인 소지품 관리 책임은 이용자 본인에게 있으며 귀중품은 직접
          휴대하십시오.
        </Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.subtitle}>문의</Text>
        <Text style={styles.inText}>
          평일(09:00~22:00) / 주말 및 공휴일(09:00~17:00) 031-219-2032
        </Text>
      </View>
    </View>
  );
}

export default ManualScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F4F4',
    alignItems: 'center',
  },
  itemContainer: {
    width: '90%',
    alignItems: 'center',
    margin: 10,
    borderRadius: 8,
    backgroundColor: '#27BEF5',
    fontWeight: 'bold',
    overflow: 'hidden',
  },
  subtitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  inText: { fontSize: 20, color: 'black' },
});
