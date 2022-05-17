import {getRandomInteger} from '../util.js';

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

const generateGenre = () => {
  const genres = [
    'Drama',
    'Comedy',
    'Thriller',
    'Action movie',
    'Horror movie',
    'Fantasy',
    'Sci-fi'
  ];

  const randomIndex = getRandomInteger(0, genres.length - 1);

  return genres[randomIndex];
};

const generateRating = () => `${getRandomInteger(4, 9)}.${getRandomInteger(0, 9)}`;
const generateYear = () => getRandomInteger(1950, 2020);

export const generateFilm = () => ({
  title: generateTitle(),
  rating: generateRating(),
  year: generateYear(),
  genre: generateGenre(),
});
