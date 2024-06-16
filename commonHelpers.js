import{a as h,s as v,i as A}from"./assets/vendor-7edee35e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}})();async function b(e){const s={key:"44327397-ede54b0a70b202831c7c411c5",q:`${e}`,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await h.get("https://pixabay.com/api/",{params:s})).data}async function w(e,s){const o={key:"44327397-ede54b0a70b202831c7c411c5",q:`${s}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e};return(await h.get("https://pixabay.com/api/",{params:o})).data}const d=document.querySelector(".img-list");function S(e){return`<li class="list-item">
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
        </li>`}function y(e){return e.map(S).join("")}const g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEaSURBVHgBrZZhDoIwDIUL0fjXo3gUb7R5Er0BHsXD7A+bASlhYeC6V4WXGCHr3reNtkAkqG2D9T70mh/HSj4HybyqyPQ9PeuaXlRQ19GFY4c5dDodLSHNK3/fSam29Q+0k7/N1ZAt5hCyh7kIKZl77y/IMBezgEwXTW4ienBxcc65DCQ0PDYCQghGMDASJJpzTG4ue0KABEHmKeBAQEPx3LiIhmKy/M+aitDyGJoPAWsI32vNWTXpVQnXRal2kPQmO7pPx6XpPRCQmsdjSZ8JhIA0FbOllMKsRZqCQoMpXCy0GJRrFc7hVpGLSVqFWaxk52ZnVgPbIaL5HhBovgVSMv+qg7kt9JznZ+VL//pL+5hWFXei+mwRj+UDSHQ9vnHBEYAAAAAASUVORK5CYII=",f=new v(".img-list a",{captionDelay:500,captionPosition:"bottom"}),P={iconUrl:g,backgroundColor:"#ef4040",position:"topRight",message:"Sorry, there are no images matching your search query. Please, try again!"},E={iconUrl:g,backgroundColor:"#8fe5d980",position:"topRight",message:"We're sorry, but you've reached the end of search results."},p=document.querySelector(".search-form"),r=document.querySelector(".loader"),l=document.querySelector(".loader-more-photos"),u=document.querySelector(".js-next-page-btn");let L,c=1,m;p.addEventListener("submit",B);u.addEventListener("click",R);function R(){if(l.classList.remove("visually-hidden"),c+=1,c>Math.ceil(m/15)){A.show(E),u.classList.add("visually-hidden"),l.classList.add("visually-hidden");return}w(c,L).then(e=>{m=e.totalHits,l.classList.add("visually-hidden"),d.insertAdjacentHTML("beforeend",y(e.hits)),f.refresh();let o=document.querySelector(".list-item").getBoundingClientRect();window.scrollBy({top:-o.y*5,behavior:"smooth"})})}function B(e){e.preventDefault(),d.innerHTML="",r.classList.remove("visually-hidden");const s=p.elements.searchText.value.trim();if(s===""){r.classList.add("visually-hidden");return}L=s,b(s).then(o=>{if(o.hits.length===0){A.show(P),r.classList.add("visually-hidden");return}r.classList.add("visually-hidden"),d.innerHTML=y(o.hits),f.refresh(),u.classList.remove("visually-hidden")}).catch(o=>{throw new Error(o)}),p.reset()}
//# sourceMappingURL=commonHelpers.js.map
