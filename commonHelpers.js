import{i as l,S as c}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const n={form:document.querySelector(".user-form"),formInput:document.querySelector(".form-input"),btn:document.querySelector(".form-button"),galleryList:document.querySelector(".gallery"),container:document.querySelector(".container"),loader:document.querySelector(".loader")};function u(e){const o=e.hits;o.length===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):renderFunction(o)}function d(e){return`<li class="gallery-item">
        <a href="${e.largeImageURL}" class="gallery-link">
          <img
            src="${e.webformatURL}"
            class="gallery-image"
            alt="${e.tags}"
          />
        </a>
        <div class="modat-text">
        
            <div class="modal-element"><p>Likes</p><span>${e.likes}</span></div>
            <div class="modal-element"><p>Views</p><span>${e.views}</span></div>
            <div class="modal-element"><p>Comments</p><span>${e.comments}</span></div>
            <div class="modal-element"><p>Downloads</p><span>${e.downloads}</span></div>
        </div>
      </li>`}function m(e){const o=e.hits.map(d).join("");e.hits.length?(n.galleryList.innerHTML=o,new c(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()):onError()}function f(e){const o="42307906-965d9e91a86d7f624badfb082",s="https://pixabay.com/api/",i=`q=${e}&image_type=photo&orientation=horizontal&safesearch=true`,t=`${s}?key=${o}&${i}`;return fetch(t).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function p(){n.loader.classList.remove("hidden")}function y(){n.loader.classList.add("hidden")}function h(e){e.preventDefault(),p(),n.galleryList.innerHTML="";const o=e.currentTarget.elements.input.value.trim();f(o).then(m).catch(u).finally(y),n.form.reset()}n.form.addEventListener("submit",h);
//# sourceMappingURL=commonHelpers.js.map
