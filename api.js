require('dotenv').config();
const axios = require('axios');
module.exports = function apiCall(name, track, answerArray) {
  axios.post(
    'https://api.notion.com/v1/pages',
    {
      parent: {
        database_id: process.env.DATABASE_ID,
      },
      properties: {
        지원자: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        '지원 파트': {
          select: {
            name: track,
          },
        },
      },
      children: answerArray,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2021-05-13',
      },
    }
  );
};
