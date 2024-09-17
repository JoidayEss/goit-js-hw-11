import{S as d,i as c}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const u="45185158-717bb7f7583789050cac5d72f",f="https://pixabay.com/api/";function m(s){const o=`${f}?key=${u}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(r=>{if(!r.ok)throw new Error("Error fetching data");return r.json()}).then(r=>r.hits).catch(r=>{console.error(r)})}let a;function h(s,o){o.innerHTML="";const r=s.map(t=>`
    <a href="${t.largeImageURL}" class="gallery-item">
      <img src="${t.webformatURL}" alt="${t.tags}" />
      <div class="info">
        <p><b>Likes:</b> ${t.likes}</p>
        <p><b>Views:</b> ${t.views}</p>
        <p><b>Comments:</b> ${t.comments}</p>
        <p><b>Downloads:</b> ${t.downloads}</p>
      </div>
    </a>
  `).join("");o.innerHTML=r,a?a.refresh():a=new d(".gallery-item")}const p=document.getElementById("search-form"),l=document.getElementById("gallery");p.addEventListener("submit",function(s){s.preventDefault();const o=document.getElementById("search-input").value.trim();function r(){document.getElementById("loader").classList.remove("hidden")}function t(){document.getElementById("loader").classList.add("hidden")}if(!o){c.error({title:"Error",message:"Please enter a search term!"});return}l.innerHTML="",r(),m(o).then(e=>{t(),e.length===0?c.error({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):h(e,l)}).catch(e=>{t(),c.error({title:"Error",message:"Something went wrong. Please try again later."}),console.error("Error:",e)})});
//# sourceMappingURL=index.js.map
