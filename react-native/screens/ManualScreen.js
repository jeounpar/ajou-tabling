import {
  FlatList,
  Linking,
  View,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
  ScrollView,
} from 'react-native';

function ManualScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Text style={styles.subtitle}>예약 및 이용</Text>
          <Text style={styles.inText}>
            1. 예약은 '아주대학교 테이블링 어플리케이션' 으로만 가능합니다.{' '}
            {'\n'}
            2. 강의실 내의 시설물을 무단으로 이전하거나 철거 내지 변경할 수
            없음.
            {'\n'}
            3. 각 강의실은 21:00시 이후에는 전원 퇴실하여야 함.{'\n'}4. 각종
            전열기(컴퓨터 포함)를 별도로 사용할 시는 학교의 허가를 받아야 함.
            {'\n'}5. 퇴실 시 재해방지를 위해 소등 및 각종 전열기의 소등여부를
            확인하여 전원을 완전히 차단하여야 함.{'\n'}6. 사용 후 정리정돈을
            철저히 해야 함.{'\n'}7. 수업 및 학교 공식행사를 우선순위로 하며,
            장소사용이 승인된 후에도 부득이한 사유 발생 시에는 취소될 수 있음.
            {'\n'}8. 상업적인 목적을 가진 행사 및 우리학교 교육이념에
            부적절하다고 판단되는 행사는 사용을 승인하지 아니함.{'\n'}9.
            사용자의 고의나 과실로 인한 시설물의 훼손이 발생하였을 경우
            손해배상을 해야 함.{'\n'}10. 춤, 노래 등 소음이 발생되는 동아리
            활동은 방음시설이 되어 있는 신학생회관(B03, B04) 이용을 원칙으로
            하며, 일반강의실을 대여하여 동아리 활동을 할 경우, 수업(G교시)에
            방해를 주지 않는 범위 내에서 강의실을 사용해야 함.{'\n'}11. 위의
            사실을 철저히 준수할 것이며 이를 준수치 않아 발생하는 모든 사항에
            대해서는 전적으로 신청인이 책임을 짐.
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.subtitle}>이용 수칙</Text>
          <Text style={styles.inText}>
            1. 이용권한은 타인에게 양도할 수 없으며 적발 시 이용자격을 취소할 수
            있습니다. {'\n'}
            2. 음식물 반입을 금지합니다.{'\n'}
            3. 모든 기물은 파손할 경우 파손자에게 비용을 청구할 수 있습니다.
            {'\n'}
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
    </ScrollView>
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
    backgroundColor: 'white',
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
