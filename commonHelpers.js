import{i as g,S as L}from"./assets/vendor-5b791d57.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){const y=document.querySelector(".form"),n=document.querySelector(".gallery"),a=document.querySelector(".loader");let l;y.addEventListener("submit",e);function e(r){r.preventDefault();const i=r.target.elements.query.value;if(i.trim()==="")return g.error({message:"Введіть вірне значення!",position:"topRight"});a.style.display="inline-block",n.innerHTML="",t(i),r.target.reset()}function t(r){const i="https://pixabay.com/api/",u="?key=42272316-28c697ce0580eb37211383c7d",s=`&q=${r}`,m="&image_type=photo",f="&orientation=horizontal",d="&safesearch=true",h=i+u+s+m+f+d;fetch(h).then(o=>{if(!o.ok)throw new Error("Network response was not ok");return o.json()}).then(o=>{o&&o.hits&&o.hits.length>0?c(o):g.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(o=>{console.error("Error:",o)}).finally(()=>{a.style.display="none"})}function c(r){const i=r.hits.map(p).join("");n.innerHTML=i,document.querySelectorAll(".gallery-link").forEach(s=>{s.setAttribute("href",s.querySelector("img").getAttribute("src"))}),l=new L(".gallery a",{captionsData:"alt",captionDelay:250}),l.refresh()}function p({largeImageURL:r,webformatURL:i,tags:u,likes:s,views:m,comments:f,downloads:d}){return`<li class="gallery-item" >
      <a class="gallery-link" href="${r}">
        <img
          class="gallery-image"
          src="${i}"
          alt="${u}"
        />
      </a>
      <div class="item-text">
        <ul>Likes<li>${s}</li></ul>
        <ul>Views<li>${m}</li></ul>
        <ul>Comments<li>${f}</li></ul>
        <ul>Downloads<li>${d}</li></ul>
      </div>
    </li>`}});
//# sourceMappingURL=commonHelpers.js.map
