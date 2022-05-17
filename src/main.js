import {render} from './render';
import ProfileView from './view/profile-view';

const header = document.querySelector('.header');

render(new ProfileView(), header);
