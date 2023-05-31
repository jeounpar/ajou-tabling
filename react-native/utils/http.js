import axios from 'axios';

const BACKEND_URL = 'http://localhost:3000';

export async function getNotice() {
  const result = await axios.get('http://localhost:3000' + '/notice');
  const rst = [];
  // console.log(result['data']);
  for (const data of result['data']) {
    // console.log(data);
    rst.push({
      id: data['numId'],
      title: data['title'],
      url: data['url'],
      createdAt: data['createdAt'],
    });
  }
  // console.log(rst);
  return rst;
}

export async function postReservation(data) {
  const result = await axios.post('http://localhost:3000' + '/reservation', {
    data,
  });
  return result;
}

export async function updateReservation(data) {
  const result = await axios.post(
    'http://localhost:3000' + '/reservation/status',
    {
      data,
    },
  );
  return result;
}

export async function getReservation() {
  const result = await axios.get('http://localhost:3000' + '/reservation');
  const rst = [];
  for (const data of result['data']) {
    let status;
    if (data['status'] === 0) {
      status = '대기중';
    } else if (data['status'] === 1) {
      status = '승인';
    } else {
      status = '거절';
    }
    rst.push({
      id: data['_id'],
      date: data['date'],
      startTime: data['startTime'],
      endTime: data['endTime'],
      number: data['number'],
      status: status,
    });
  }
  return rst;
}
