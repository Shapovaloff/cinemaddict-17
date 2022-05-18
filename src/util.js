import dayjs from 'dayjs';

// Функция из интернета по генерации случайного числа из диапазона
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getTextClipping = (text) => text.length > 140 ? `${text.substring(0, 139)}...` : text;
const getDate = (date, format) => dayjs(date).format(format);

export {getRandomInteger, getTextClipping, getDate};
