import {getRandomInteger} from '../util.js';
import {EMOJI_LIST, FIRST_NAMES, LAST_NAMES, MOCK_TEXT} from '../const.js';

const generatePoster = () => {
  const posters = [
    'made-for-each-other.png',
    'popeye-meets-sinbad.png',
    'sagebrush-trail.jpg',
    'santa-claus-conquers-the-martians.jpg',
    'the-dance-of-life.jpg',
    'the-great-flamarion.jpg',
    'the-man-with-the-golden-arm.jpg'
  ];

  const randomIndex = getRandomInteger(0, posters.length - 1);

  return `./images/posters/${posters[randomIndex]}`;
};

const generateTitle = () => {
  const titles = [
    'Made for Each Other',
    'Popeye Meets Sinbad',
    'Sagebrush Trail',
    'Santa Claus Conquers the Martians',
    'The Dance of Life',
    'The Great Flamarion',
    'The Man with the Golden Arm'
  ];

  const randomIndex = getRandomInteger(0, titles.length - 1);

  return titles[randomIndex];
};

const generateGenres = () => {
  const genres = [
    'Drama',
    'Comedy',
    'Thriller',
    'Action movie',
    'Horror movie',
    'Fantasy',
    'Sci-fi'
  ];

  const randomLengthGenres = getRandomInteger(2, 3);
  const genreList = Array.from({length: randomLengthGenres}, () => {
    const randomIndex = getRandomInteger(0, genres.length - 1);
    return genres[randomIndex];
  });

  return genreList;
};

const generateActors = () => {
  const actors = [
    'Erich von Stroheim',
    'Mary Beth Hughes',
    'Mary von Stroheim',
    'Dan Hughes',
    'Dan Duryea',
    'Erich von Duryea',
  ];

  const randomLengthActor = getRandomInteger(2, 4);
  const actorList = Array.from({length: randomLengthActor}, () => {
    const randomIndex = getRandomInteger(0, actors.length - 1);
    return actors[randomIndex];
  });

  return actorList;
};

const generateOriginTitle = () => {
  const titles = [
    'Made for Each Other',
    'Popeye Meets Sinbad',
    'Sagebrush Trail',
    'Santa Claus Conquers the Martians',
    'The Dance of Life',
    'The Great Flamarion',
    'The Man with the Golden Arm'
  ];

  const randomIndex = getRandomInteger(0, titles.length - 1);

  return titles[randomIndex];
};

const generateCommentText = () => `${MOCK_TEXT.split('. ', getRandomInteger(1, 5)).join('. ')}.`;
const generateCommentAuthor = () => `${FIRST_NAMES[getRandomInteger(0, FIRST_NAMES.length - 1)]} ${LAST_NAMES[getRandomInteger(0, LAST_NAMES.length - 1)]}`;

const generateComment = () => ({
  text: generateCommentText(),
  emotion: EMOJI_LIST[getRandomInteger(0, EMOJI_LIST.length - 1)],
  author: generateCommentAuthor(),
  date: `${getRandomInteger(2016, 2022)}-${getRandomInteger(10, 12)}-${getRandomInteger(10, 28)}T${getRandomInteger(10, 12)}:${getRandomInteger(10, 59)}:05.770Z`,
});

const generateCommentList = () => {
  const randomLengthActor = getRandomInteger(2, 6);

  return Array.from({length: randomLengthActor}, generateComment);
};

const generateRating = () => `${getRandomInteger(4, 9)}.${getRandomInteger(0, 9)}`;
const generateYear = () => `${getRandomInteger(1960, 1999)}-${getRandomInteger(10, 12)}-${getRandomInteger(10, 28)}T09:24:05.770Z`;
const generateDuration = () => `${getRandomInteger(1, 2)}h ${getRandomInteger(0, 59)}m`;
const generateDescription = (text) => text.split('. ', getRandomInteger(1, 5)).join('. ');

export const generateFilm = () => ({
  poster: generatePoster(),
  title: generateTitle(),
  originTitle: generateOriginTitle(),
  rating: generateRating(),
  year: generateYear(),
  genres: generateGenres(),
  duration: generateDuration(),
  isAddToWatchList: Boolean(getRandomInteger(0, 1)),
  isWatched: Boolean(getRandomInteger(0, 1)),
  isFavorite: Boolean(getRandomInteger(0, 1)),
  comments: generateCommentList(),
  actors: generateActors(),
  country: 'USA',
  director: 'Anthony Mann',
  writers: ['Anne Wigton', 'Heinz Herald', 'Richard Weil'],
  description: generateDescription(MOCK_TEXT),
});
