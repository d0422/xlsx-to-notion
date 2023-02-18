module.exports = function getText(question, answer) {
  return [
    {
      object: 'block',
      type: 'paragraph',
      paragraph: {
        text: [
          {
            type: 'text',
            text: {
              content: question,
            },
            annotations: {
              bold: true,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
            },
          },
        ],
      },
    },
    {
      object: 'block',
      type: 'paragraph',
      paragraph: {
        text: [
          {
            type: 'text',
            text: {
              content: String(answer) + '\n',
            },
          },
        ],
      },
    },
  ];
};
