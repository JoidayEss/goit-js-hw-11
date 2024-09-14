import{S as d,i}from"./assets/vendor-CNpq9t8i.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const u="45185158-717bb7f7583789050cac5d72f",m="https://pixabay.com/api/";async function p(n){const s=`${m}?key=${u}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`;try{const t=await fetch(s);if(!t.ok)throw new Error("Error fetching data");return(await t.json()).hits}catch(t){return console.error(t),[]}}let c;function h(n,s){const t=n.map(r=>`
    <a href="${r.largeImageURL}" class="gallery-item">
      <img src="${r.webformatURL}" alt="${r.tags}" />
      <div class="info">
        <p><b>Likes:</b> ${r.likes}</p>
        <p><b>Views:</b> ${r.views}</p>
        <p><b>Comments:</b> ${r.comments}</p>
        <p><b>Downloads:</b> ${r.downloads}</p>
      </div>
    </a>
  `).join("");s.innerHTML=t,c?c.refresh():c=new d(".gallery-item")}const g=document.getElementById("search-form"),f=document.getElementById("gallery");g.addEventListener("submit",async n=>{n.preventDefault();const s=document.getElementById("search-input").value.trim();if(!s){i.error({title:"Error",message:"Please enter a search term!"});return}f.innerHTML="",y();const t=await p(s);b(),t.length===0?i.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}):h(t,f)});let l;function y(){l=i.show({message:"Loading images...",timeout:!1,close:!1,class:"loader",position:"topRight"})}function b(){l&&i.hide({},l)}
//# sourceMappingURL=index.js.map
