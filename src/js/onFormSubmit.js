
import { refs } from './refs';
import { checkFunction} from './render-functions';
import { makeGalleryItem } from './render-functions';
import { fetchImg} from './pixabay-api';
import { loaderOn } from './loader';
import { loaderOff } from './loader';

export function onFormSubmit(event) {
  event.preventDefault();
  loaderOn();
  refs.galleryList.innerHTML = '';
  const userSearch = event.currentTarget.elements.input.value.trim();

  fetchImg(userSearch).then(makeGalleryItem).catch(checkFunction).finally(loaderOff);

  refs.form.reset();
}