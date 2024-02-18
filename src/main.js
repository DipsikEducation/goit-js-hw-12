import { refs } from './js/refs';
import { onFormSubmit } from './js/pixabay-api';
import { onLoadClick } from './js/pixabay-api';

refs.form.addEventListener('submit', onFormSubmit);

refs.btnLoad.addEventListener('click', onLoadClick);
