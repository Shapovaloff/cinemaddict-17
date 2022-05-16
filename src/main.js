import {render} from './render';
import ProfileView from './view/profile';

const header = document.querySelector('header');

render(new ProfileView(), header);
