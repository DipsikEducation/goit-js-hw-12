import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { refs } from "./refs";


/*-------------------------------------FUNC ERORE--------------*/ 
export function checkFunction(userData) {
    const userArray = userData.hits;
    if (userArray.length === 0) {
        iziToast.error({
            message: "Sorry, there are no images matching your search query. Please try again!",
            position: "topRight",
        });
    } else {
        renderFunction(userArray);
    }
};




export function makeMarcup(image) {
  return `<li class="gallery-item">
        <a href="${image.largeImageURL}" class="gallery-link">
          <img
            src="${image.webformatURL}"
            class="gallery-image"
            alt="${image.tags}"
          />
        </a>
        <div class="modat-text">
        
            <div class="modal-element"><p>Likes</p><span>${image.likes}</span></div>
            <div class="modal-element"><p>Views</p><span>${image.views}</span></div>
            <div class="modal-element"><p>Comments</p><span>${image.comments}</span></div>
            <div class="modal-element"><p>Downloads</p><span>${image.downloads}</span></div>
        </div>
      </li>`;
}


export function makeGalleryItem(response) {
  const result = response.hits.map(makeMarcup).join('');

  if (response.hits.length) {
    refs.galleryList.innerHTML = result;
    let lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionDelay: 250,
    });
    lightbox.refresh();
  } else {
    onError();
  }
}