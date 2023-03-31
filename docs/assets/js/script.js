document.addEventListener("DOMContentLoaded",(function(){let e=document.querySelector("body"),t=document.querySelectorAll(".color-picker"),r=document.getElementById("color-picker-container1"),n=document.getElementById("color-picker-container2"),a=r?r.firstElementChild:null,o=n?n.firstElementChild:null,l=document.querySelector(".js-angle"),c=document.querySelectorAll(".js-gradient-code"),d=document.querySelectorAll(".js-rgb-code"),s=document.querySelector(".js-background-copy"),i=document.querySelector(".js-copy"),u=document.querySelectorAll(".code-editor-tab"),g=document.querySelector(".rgb-code"),m=document.querySelector(".gradient-code"),h=document.querySelector(".svg-random"),v=document.querySelector(".angle-picker-circle"),y=document.querySelector(".angle-picker-rectangle");const f=()=>"linear-gradient("+(l.value+"deg")+", "+a.value+", "+o.value+")",p=e=>{e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,r,n){return t+t+r+r+n+n}));let t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null},E=()=>{t.forEach((e=>e.parentElement.style.backgroundColor=e.value))},L=()=>{e.style.background=f()},M=()=>{c.forEach((e=>e.innerHTML=f()+";")),s.style.background=f()},q=()=>{let e=(()=>{let e=p(a.value),t=p(o.value);return["rgb("+e.r+", "+e.g+", "+e.b+");\n","rgb("+t.r+", "+t.g+", "+t.b+");\n"]})();for(let t=0;t<d.length;t++)d[t].innerHTML=e[t]},b=()=>{E(),L(),M(),q()};t.forEach((e=>e.addEventListener("input",b)));h.addEventListener("click",(()=>{let t=(()=>{let e=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"],t=t=>{for(let r=0;r<6;r++){let r=Math.round(14*Math.random());t+=e[r]}return t},r=t("#"),n=t("#"),a=Math.round(360*Math.random());return{newColor1:r,newColor2:n,gradient:"linear-gradient("+a+"deg, "+r+", "+n+")",angle:a}})();var r,n,c;e.style.background=t.gradient,r=t.newColor1,n=t.newColor2,a.value=r,o.value=n,E(),c=t.angle,l.value=c;let d=j(t.angle);w(d),M(),q()}));l.addEventListener("input",(e=>(e=>{if(e.target.value.match(/^[0-9]*$/)){l.value=e.target.value;let t=j(e.target.value);w(t),L(),M()}else l.value=NaN})(e)));const S=e=>{let t=e.target.getBoundingClientRect(),r=window.pageXOffset,n=window.pageYOffset,a=e.pageX,o=e.pageY,l=a-(t.left+r+t.width/2),c=t.top+n+t.height/2-o,d=((e,t)=>0!==e||0!==t&&1!==Math.sign(t)?0===t&&1===Math.sign(e)?90:0===e&&-1===Math.sign(t)?180:0===t&&-1===Math.sign(e)&&270:0)(l,c);return!1!==d?d:{x:l,y:c}},k=e=>{let t=S(e);if(isNaN(t)){let e,a=(r=t.x,n=t.y,1===Math.sign(r)&&1===Math.sign(n)?{x:r,y:n,quarter:1}:1===Math.sign(r)&&-1===Math.sign(n)?{x:r,y:n,quarter:2}:-1===Math.sign(r)&&-1===Math.sign(n)?{x:r,y:n,quarter:3}:-1===Math.sign(r)&&1===Math.sign(n)?{x:r,y:n,quarter:4}:void console.log("error: parameters of the function are not valid coordinates"));return e=((e,t)=>Math.round(180*Math.atan2(t,e)/Math.PI))(a.y,a.x),1===a.quarter||2===a.quarter?e:360+e}return t;var r,n},j=e=>90<e<270?e-90:-e-90,w=e=>{let t="rotate("+e+"deg);",r=document.createElement("style");r.type="text/css",r.innerHTML=".rotate-rect { transform:"+t+"}",document.getElementsByTagName("head")[0].appendChild(r),y.classList.add("rotate-rect")},C=e=>{let t=k(e);(e=>{l.value=e})(t),L(),M();let r=j(t);w(r)};v.addEventListener("click",(e=>C(e)));const x=e=>{u.forEach((e=>e.classList.remove("is-active"))),e.classList.add("is-active"),(e=>{e.classList.contains("rgb")?(m.classList.remove("js-code-active"),g.classList.add("js-code-active")):(g.classList.remove("js-code-active"),m.classList.add("js-code-active"))})(e)};u.forEach((e=>e.addEventListener("click",(e=>x(e.target)))));const T=e=>{let t=[];if(e)for(let r=e.childNodes,n=r.length;n--;){let e=r[n],a=e.nodeType;3===a?t.push(e):1!==a&&9!==a&&11!==a||(t=t.concat(T(e)))}return t};i.addEventListener("click",(()=>(e=>{const t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)})((()=>{let e,t=document.querySelector(".js-code-active"),r=T(t),n=[],a=[];for(let e=0;e<r.length;e++)0!==r[e].wholeText.trim().length&&(n.push(r[e].wholeText.replace(/\s+/g," ")),a=[].concat(n).reverse());return e=a.join("").replace(/;/g,";\n"),e})())));window.addEventListener("DOMContentLoaded",(()=>setTimeout((()=>{document.querySelectorAll(".color-picker-container").forEach((e=>e.classList.add("js-translate-done"))),document.querySelectorAll(".js-angle-picker").forEach((e=>e.classList.add("js-translate-done"))),document.querySelectorAll(".info-container").forEach((e=>e.classList.add("info-container--showed")))}),700)))}));