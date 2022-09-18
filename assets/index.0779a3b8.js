var y=(i,e,r)=>{if(!e.has(i))throw TypeError("Cannot "+r)};var t=(i,e,r)=>(y(i,e,"read from private field"),r?r.call(i):e.get(i)),l=(i,e,r)=>{if(e.has(i))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(i):e.set(i,r)},u=(i,e,r,n)=>(y(i,e,"write to private field"),n?n.call(i,r):e.set(i,r),r);var b=(i,e,r)=>(y(i,e,"access private method"),r);const v=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const h of a.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&n(h)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}};v();const S=`
<span class="control"></span>
<span class="control"></span>
<span class="control"></span>
`;var p,s,g,m,x,d,c,f;class k{constructor(e,{loop:r=!1,typingSpeed:n=50,deletingSpeed:o=50,title:a="Type Writer",isDarkTheme:h=!0,fontSize:w=18}){l(this,c);l(this,p,[]);l(this,s,void 0);l(this,g,void 0);l(this,m,void 0);l(this,x,void 0);l(this,d,void 0);u(this,d,document.createElement("div")),t(this,d).classList.add("code-editor",h?"dark-theme":"light-theme"),t(this,d).setAttribute("data-content",a),u(this,s,document.createElement("div")),t(this,s).classList.add("white-space",h?"dark-text":"light-text"),t(this,s).style.fontSize=w+"px",t(this,d).innerHTML=S,t(this,d).append(t(this,s)),e.append(t(this,d)),u(this,g,r),u(this,m,n),u(this,x,o)}typeString(e){return b(this,c,f).call(this,r=>{let n=0;const o=setInterval(()=>{t(this,s).append(e[n]),n++,n>=e.length&&(clearInterval(o),r())},t(this,m))}),this}pauseFor(e){return b(this,c,f).call(this,r=>{setTimeout(r,e)}),this}deleteChars(e){return b(this,c,f).call(this,r=>{let n=0;const o=setInterval(()=>{t(this,s).innerText=t(this,s).innerText.substring(0,t(this,s).innerText.length-1),n++,n>=e&&(clearInterval(o),r())},t(this,x))}),this}deleteAll(e=t(this,x)){return b(this,c,f).call(this,r=>{const n=setInterval(()=>{t(this,s).innerText=t(this,s).innerText.substring(0,t(this,s).innerText.length-1),t(this,s).innerText.length===0&&(clearInterval(n),r())},e)}),this}async start(){let e=t(this,p).shift();for(;e!=null;)await e(),t(this,g)&&t(this,p).push(e),e=t(this,p).shift();return this}}p=new WeakMap,s=new WeakMap,g=new WeakMap,m=new WeakMap,x=new WeakMap,d=new WeakMap,c=new WeakSet,f=function(e){t(this,p).push(()=>new Promise(e))};const z=new k(document.querySelector("#typeWriter"),{loop:!0,typingSpeed:60,deletingSpeed:100,title:"Web Developer",fontSize:20,isDarkTheme:!0});z.typeString("Hey Friends,").pauseFor(1e3).typeString(`

I'm Ashish Mule`).pauseFor(200).deleteChars(11).typeString("Full Stack Developer").pauseFor(200).deleteChars(20).typeString("Web Developer").pauseFor(200).deleteAll(10).typeString("Here I am introducing typescript typing library").pauseFor(200).deleteAll(10).start();
