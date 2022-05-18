import {render} from '../render';
import FilmsListView from '../view/films-list-view';
import FilmsView from '../view/films-view';
import FilmsListContainerView from '../view/films-list-container-view';
import FilmCardView from './../view/film-card-view';
import LoadMoreButtonView from '../view/load-more-button-view';
import FilmDetailsView from '../view/film-details-view';

export default class FilmsPresenter {
  filmsComponent = new FilmsView();
  filmsListComponent = new FilmsListView();
  filmsListContainerComponent = new FilmsListContainerView();

  init = (filmsContainer, filmCardsModel) => {
    this.filmsContainer = filmsContainer;
    this.filmCardsModel = filmCardsModel;
    this.filmsCards = [...filmCardsModel.getFilms()];

    render(this.filmsComponent, this.filmsContainer);
    render(this.filmsListComponent, this.filmsComponent.getElement());
    render(this.filmsListContainerComponent, this.filmsListComponent.getElement());

    for (let i = 0; i < this.filmsCards.length; i++) {
      render(new FilmCardView(this.filmsCards[i]), this.filmsListContainerComponent.getElement());
    }

    render(new LoadMoreButtonView(), this.filmsListComponent.getElement());
    render(new FilmDetailsView(this.filmsCards[0]),this.filmsContainer);
  };
}
