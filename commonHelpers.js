import{i as b,S as v,a as f}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const s={form:document.querySelector(".user-form"),formInput:document.querySelector(".form-input"),btn:document.querySelector(".form-button"),galleryList:document.querySelector(".gallery"),container:document.querySelector(".container"),loader:document.querySelector(".loader"),btnLoad:document.querySelector(".btn-load")};function S(){s.loader.classList.remove("hidden")}function p(){s.loader.classList.add("hidden")}const y="Sorry, there are no images matching your search query. Please try again!",w="We're sorry, but you've reached the end of search results.",P="Please enter correct information.";function l(e){b.error({message:e,position:"topRight"})}let u,h=new v(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function g(e){const o=e.hits.map(q).join("");u=e.totalHits,u>m&&s.btnLoad.classList.remove("hidden"),e.hits.length?s.galleryList.insertAdjacentHTML("beforeend",o):l(y),h.refresh()}function q(e){return`<li class="gallery-item">
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
      </li>`}const m=15;let c,i;async function $(e){if(e.preventDefault(),s.btnLoad.classList.add("hidden"),s.galleryList.innerHTML="",c=1,i=e.target.elements.input.value.trim(),i)try{const o=await L(i);return g(o)}catch{l(y)}finally{p(),s.form.reset()}else s.form.elements.input.value="",l(P)}async function L(e){S();const o="42307906-965d9e91a86d7f624badfb082";f.defaults.baseURL="https://pixabay.com/api/";const n=`q=${e}&image_type=photo&orientation=horizontal&safesearch=true`,a=`?key=${o}&${n}`,t={params:{per_page:m,page:c}};return(await f.get(a,t)).data}async function E(){c+=1;const e=Math.ceil(u/m);if(c>e)s.btnLoad.classList.add("hidden"),l(w);else{const o=await L(i),n=g(o);return O(),p(),h.refresh(),n}}function O(){const o=s.galleryList.firstElementChild.getBoundingClientRect().height*2;window.scrollBy({top:o,left:0,behavior:"smooth"})}s.form.addEventListener("submit",$);s.btnLoad.addEventListener("click",E);
//# sourceMappingURL=commonHelpers.js.map
