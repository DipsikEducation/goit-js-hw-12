import { refs } from './refs';

export function loaderOn() {
  refs.loader.classList.remove('hidden');
}

export function loaderOff() {
  refs.loader.classList.add('hidden');
}
