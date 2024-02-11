import{i as y,S as h}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){const g=document.querySelector(".form"),s=document.querySelector(".gallery"),c=document.querySelector(".loader");g.addEventListener("submit",a);function a(r){r.preventDefault();const i=r.target.elements.query.value;if(i.trim()==="")return y.error({message:"Введіть вірне значення!",position:"topRight"});c.style.display="inline-block",e(i),r.target.reset()}function e(r){const i="https://pixabay.com/api/",u="?key=42272316-28c697ce0580eb37211383c7d",m=`&q=${r}`,n="&image_type=photo",f="&orientation=horizontal",d="&safesearch=true",p=i+u+m+n+f+d;return fetch(p).then(o=>{if(!o.ok)throw new Error("Network response was not ok");return o.json()}).then(o=>{o&&o.hits&&o.hits.length>0?t(o):y.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(o=>{console.error("Error:",o)}).finally(()=>{c.style.display="none"})}function t(r){const i=r.hits.map(l).join("");s.innerHTML=i,document.querySelectorAll(".gallery-link").forEach(n=>{n.setAttribute("href",n.querySelector("img").getAttribute("src"))}),new h(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function l({largeImageURL:r,webformatURL:i,tags:u,likes:m,views:n,comments:f,downloads:d}){return`<li class="gallery-item" >
      <a class="gallery-link" href="${r}">
        <img
          class="gallery-image"
          src="${i}"
          alt="${u}"
        />
      </a>
      <div class="item-text">
        <ul>Likes<li>${m}</li></ul>
        <ul>Views<li>${n}</li></ul>
        <ul>Comments<li>${f}</li></ul>
        <ul>Downloads<li>${d}</li></ul>
      </div>
    </li>`}});
//# sourceMappingURL=commonHelpers.js.map
