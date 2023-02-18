const 지원자들 = require('./python/지원자.json');
const 프론트질문 = require('./질문/프론트질문.json');
const 기획질문 = require('./질문/기획질문.json');
const 백엔드질문 = require('./질문/백엔드질문.json');
const 디자인질문 = require('./질문/디자인질문.json');
const 공통질문 = require('./질문/공통질문.json');

const apiCall = require('./api.js');
const getText = require('./getText.js');

지원자들.map((지원자) => {
  const track = 지원자[공통질문[0]];
  const name = 지원자[공통질문[1]];
  const commonAnswer = [];
  공통질문.forEach((question) => {
    [questionObject, AnswerObject] = getText(question, 지원자[question]);
    commonAnswer.push(questionObject);
    commonAnswer.push(AnswerObject);
  });
  console.log(commonAnswer[1].paragraph.text);
  trackAnswer = [];
  if (track === '프론트엔드') {
    프론트질문.forEach((question) => {
      [questionObject, AnswerObject] = getText(question, 지원자[question]);
      trackAnswer.push(questionObject);
      trackAnswer.push(AnswerObject);
    });
  }
  if (track === '백엔드') {
    백엔드질문.forEach((question) => {
      [questionObject, AnswerObject] = getText(question, 지원자[question]);
      trackAnswer.push(questionObject);
      trackAnswer.push(AnswerObject);
    });
  }
  if (track === '기획') {
    기획질문.forEach((question) => {
      [questionObject, AnswerObject] = getText(question, 지원자[question]);
      trackAnswer.push(questionObject);
      trackAnswer.push(AnswerObject);
    });
  }
  if (track === '디자인') {
    디자인질문.forEach((question) => {
      [questionObject, AnswerObject] = getText(question, 지원자[question]);
      trackAnswer.push(questionObject);
      trackAnswer.push(AnswerObject);
    });
  }

  const result = [...commonAnswer, ...trackAnswer];
  apiCall(name, track, result);
});
