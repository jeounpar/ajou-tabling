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
