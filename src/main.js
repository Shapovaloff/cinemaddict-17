import {render} from './render';
import NavigationView from './view/navigation-view';
import ProfileView from './view/profile-view';
import SortView from './view/sort-view';
import FilmsPresenter from './presenter/films-presenter';

const header = document.querySelector('.header');
const main = document.querySelector('.main');
const filmsPresenter = new FilmsPresenter();

render(new ProfileView(), header);

render(new NavigationView(), main);
render(new SortView(), main);

filmsPresenter.init(main);
