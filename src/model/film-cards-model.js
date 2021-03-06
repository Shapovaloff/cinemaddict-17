import {generateFilm} from '../mock/film.js';

export default class FilmCardsModel {
  films = Array.from({length: 5}, generateFilm);

  getFilms = () => this.films;
}
