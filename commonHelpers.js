import{s as p,i as d}from"./assets/vendor-eb334b56.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();function u(e){const r=`https://pixabay.com/api/?key=44327397-ede54b0a70b202831c7c411c5&q=${e}&image_type=photo
  &orientation=horizontal&safesearch=true`;return fetch(r).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}const a=document.querySelector(".img-list");function A(e){return`<li class="list-item">
          <div class="img-box">
            <a
              class="gallery-link"
              href="${e.largeImageURL}"
            >
              <img
                src="${e.previewURL}"
                alt="${e.tags}"
                title="${e.tags}"
              />
            </a>
          </div>
          <ul class="description-list">
            <li class="description-item">
              <p>Likes</p>
              <p>${e.likes}</p>
            </li>
            <li class="description-item">
              <p>Views</p>
              <p>${e.views}</p>
            </li>
            <li class="description-item">
              <p>Comments</p>
              <p>${e.comments}</p>
            </li>
            <li class="description-item">
              <p>Downloads</p>
              <p>${e.downloads}</p>
            </li>
          </ul>
        </li>`}function m(e){return a.innerHTML=e.map(A).join("")}const h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEaSURBVHgBrZZhDoIwDIUL0fjXo3gUb7R5Er0BHsXD7A+bASlhYeC6V4WXGCHr3reNtkAkqG2D9T70mh/HSj4HybyqyPQ9PeuaXlRQ19GFY4c5dDodLSHNK3/fSam29Q+0k7/N1ZAt5hCyh7kIKZl77y/IMBezgEwXTW4ienBxcc65DCQ0PDYCQghGMDASJJpzTG4ue0KABEHmKeBAQEPx3LiIhmKy/M+aitDyGJoPAWsI32vNWTXpVQnXRal2kPQmO7pPx6XpPRCQmsdjSZ8JhIA0FbOllMKsRZqCQoMpXCy0GJRrFc7hVpGLSVqFWaxk52ZnVgPbIaL5HhBovgVSMv+qg7kt9JznZ+VL//pL+5hWFXei+mwRj+UDSHQ9vnHBEYAAAAAASUVORK5CYII=",f=new p(".img-list a",{captionDelay:500,captionPosition:"bottom"}),g={iconUrl:h,backgroundColor:"#ef4040",position:"topRight",message:"Sorry, there are no images matching your search query. Please, try again!"},l=document.querySelector(".search-form"),o=document.querySelector(".loader");l.addEventListener("submit",e=>{e.preventDefault(),a.innerHTML="",o.classList.remove("visually-hidden");const r=l.elements.searchText.value.trim();if(r===""){o.classList.add("visually-hidden");return}u(r).then(s=>{if(s.hits.length===0){d.show(g),o.classList.add("visually-hidden");return}o.classList.add("visually-hidden"),m(s.hits),f.refresh()}).catch(s=>{throw new Error(s)}),l.reset()});
//# sourceMappingURL=commonHelpers.js.map
