const a=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}};a();function c(i){const e=document.createElement("div");e.className="dialog",e.innerHTML=i,document.body.appendChild(e);const n=()=>{e.parentElement===document.body&&(e.removeEventListener("click",n),document.body.removeChild(e))};return e.addEventListener("click",n),e}const l="url";class u{constructor(e){var n;e.value=(n=this.value)!=null?n:""}get value(){var e;return decodeURIComponent((e=new URLSearchParams(location.search).get(l))!=null?e:"")}set value(e){const n=this.value;if(e===null||n===e)return;const s=new URLSearchParams(location.search);s.set(l,encodeURIComponent(e)),location.search=`?${s.toString()}`}}const d=document.querySelector("#app");if((navigator.userAgent.indexOf("iPhone")!=-1||navigator.userAgent.indexOf("Mac OS")!=-1)&&!window.navigator.standalone){d.innerHTML=`
    <span class="col"><span class="name">applize url: </span><input id="url-input" /><button id="url-button">set</button></span>
    <span class="col"><span class="name">icon url: </span><input id="icon-input" /><button id="icon-button">set</button></span>
    <span class="col"><span class="name">icon bgColor: </span><input id="icon-bgcolor-input" /><button id="question-button">?</button></span>
    `;const i=document.getElementById("url-input"),e=new u(i);document.getElementById("url-button").addEventListener("click",()=>{e.value=i.value}),document.getElementById("main-frame").src=i.value,document.getElementById("icon-button").addEventListener("click",()=>{const n=document.getElementById("icon-input").value,s=c(`<img class="icon-img" src=${n}></img>`);s.style.backgroundColor=document.getElementById("icon-bgcolor-input").value}),document.getElementById("question-button").addEventListener("click",()=>{c(`
        <div>
        <ul>
          <li>
            <p>What is this ?</p>
            <p>this is a static website to making other website behaves like PWA<p>
          </li>
          <li>
            <p>How to use ?</p>
            <p>input the url you want to add to you home screen to the "applise url" input field<p>
            <p>input the icon url you want to set to the "icon url" input field<p>
            <p>input the icon background color you want to set to the "icon bgColor" input field<p>
            <p>then click "share" button on the safari bottom bar,choose "add to home screen", then you can use it like other PWAs<p>
          </li>
          <li>
            <p>Why it doesn't work on some website ?</p>
            <p>because some website set the X-Frame-Option to forbbiden other sites to embed them, which can not be showed correctly<p>
          </li>
        <ul>
        </div>`)})}
