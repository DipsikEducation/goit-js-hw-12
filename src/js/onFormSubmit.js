import { refs } from './refs';
import { loaderOn } from './loader';
import { loaderOff } from './loader';
import { makeGalleryItem } from './render-functions';
import { onError } from './iziToasts';
import axios from 'axios';
import { MESSAGE } from './iziToasts';
import { totalHits } from './render-functions';
import { LIMIT } from './iziToasts';
import { CORRECT } from './iziToasts';
import { lightbox } from './render-functions';

export const perPage = 15;
let page;
let userSearch;

export async function onFormSubmit(event) {
  event.preventDefault();
  refs.btnLoad.classList.add('hidden');

  refs.galleryList.innerHTML = '';
  page = 1;
  userSearch = event.target.elements.input.value.trim();
  if (userSearch) {
    try {
      const response = await fetchImg(userSearch);
      const item = makeGalleryItem(response);
      return item;
    } catch (error) {
      onError(MESSAGE);
    } finally {
      loaderOff();
      refs.form.reset();
    }
  } else {
    refs.form.elements.input.value = '';
    onError(CORRECT);
  }
}



export async function onLoadClick() {
  page += 1;
  const totalPages = Math.ceil(totalHits / perPage);
  if (page >= totalPages) {
    refs.btnLoad.classList.add('hidden');
    onError(LIMIT);
  } else {
    const result = await fetchImg(userSearch);
    const element = makeGalleryItem(result);
    scrollPage();
    loaderOff();
    lightbox.refresh();
    return element;
  }
}

function scrollPage() {
  const rect = refs.galleryList.firstElementChild.getBoundingClientRect();
  const size = rect.height * 2;
  window.scrollBy({ top: size, left: 0, behavior: 'smooth' });
}