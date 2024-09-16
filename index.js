import{S as f,i as c}from"./assets/vendor-BrddEoy-.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const u="45185158-717bb7f7583789050cac5d72f",m="https://pixabay.com/api/";async function d(n){const s=`${m}?key=${u}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`;try{const t=await fetch(s);if(!t.ok)throw new Error("Error fetching data");return(await t.json()).hits}catch(t){console.error(t);return}}let a;function p(n,s){const t=n.map(r=>`
    <a href="${r.largeImageURL}" class="gallery-item">
      <img src="${r.webformatURL}" alt="${r.tags}" />
      <div class="info">
        <p><b>Likes:</b> ${r.likes}</p>
        <p><b>Views:</b> ${r.views}</p>
        <p><b>Comments:</b> ${r.comments}</p>
        <p><b>Downloads:</b> ${r.downloads}</p>
      </div>
    </a>
  `).join("");s.innerHTML=t,a?a.refresh():a=new f(".gallery-item")}const h=document.getElementById("search-form"),l=document.getElementById("gallery");h.addEventListener("submit",async n=>{n.preventDefault();const s=document.getElementById("search-input").value.trim();if(!s){c.error({title:"Error",message:"Please enter a search term!"});return}l.innerHTML="";const t=await d(s);t.length===0?c.error({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):p(t,l)});
//# sourceMappingURL=index.js.map
