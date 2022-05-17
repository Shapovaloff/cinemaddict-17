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

  const randomIndex = getRandomInteger(0, titles.length);

  return titles[randomIndex];
};

export const generateFilm = () => ({
  title: generateTitle(),
  rating: '0.0',
  year: '1929',
  genre: 'Musical',
});
