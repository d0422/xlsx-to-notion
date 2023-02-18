require('dotenv').config();
const axios = require('axios');
module.exports = function apiCall(name, track, commonQuestion, partQuestion) {
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
      children: [
        {
          object: 'block',
          type: 'paragraph',
          paragraph: {
            text: [
              {
                type: 'text',
                text: {
                  content: '내용테스트입니다\n',
                },
                annotations: {
                  bold: true,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                },
              },
              {
                type: 'text',
                text: {
                  content: '내용테스트입니다',
                },
              },
            ],
          },
        },
      ],
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
