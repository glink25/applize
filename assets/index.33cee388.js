const p=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}};p();function l(i){const e=document.createElement("div");e.className="dialog",e.innerHTML=i,document.body.appendChild(e);const o=()=>{e.parentElement===document.body&&(e.removeEventListener("click",o),document.body.removeChild(e))};return e.addEventListener("click",o),e}const a="url";class m{get value(){var e;return decodeURIComponent((e=new URLSearchParams(location.search).get(a))!=null?e:"")}set value(e){const o=this.value;if(e===null||o===e)return;const s=new URLSearchParams(location.search);s.set(a,encodeURIComponent(e)),location.search=`?${s.toString()}`}}const h=document.querySelector("#app"),c=new m;var u;document.getElementById("main-frame").src=(u=c.value)!=null?u:"";var d;if((navigator.userAgent.indexOf("iPhone")!=-1||navigator.userAgent.indexOf("Mac OS")!=-1)&&!window.navigator.standalone){h.innerHTML=`
    <span class="col"><span class="name">applize url: </span><input id="url-input" /><button id="url-button">set</button></span>
    <span class="col"><span class="name">icon url: </span><input id="icon-input" /><button id="icon-button">set</button></span>
    <span class="col"><span class="name">icon bgColor: </span><input id="icon-bgcolor-input" /><button id="question-button">?</button></span>
    `;const i=document.getElementById("url-input");i.value=(d=c.value)!=null?d:"",document.getElementById("url-button").addEventListener("click",()=>{c.value=i.value}),document.getElementById("main-frame").src=i.value,document.getElementById("icon-button").addEventListener("click",()=>{const e=document.getElementById("icon-input").value,o=l(`<img class="icon-img" src=${e}></img>`);o.style.backgroundColor=document.getElementById("icon-bgcolor-input").value}),document.getElementById("question-button").addEventListener("click",()=>{l(`
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
