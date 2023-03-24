import axios from 'axios';

// TimeTree APIのエンドポイント
const endpoint = 'https://timetreeapis.com/calendars/{calendarId}/upcoming_events?days=7';

// APIリクエストを送信する関数
async function fetchEvents(calendarId, accessToken) {
  const response = await axios.get(endpoint.replace('{calendarId}', calendarId), {
    headers: {
      'Accept': 'application/vnd.timetree.v1+json',
      'Authorization': `Bearer ${accessToken}`,
    },
  });
  return response.data.data;
}

// APIリクエストを実行する
const events = await fetchEvents('mqDgcs8noUKy', '2e4CvM5Q2hGPPAVM-2fevuNU5cmVrGnyA9F4qq2rFBQnrz1T');
console.log(events);

import Papa from 'papaparse';

// PapaParseを使ってCSV形式に変換する
const csv = Papa.unparse(events);
console.log(csv);
