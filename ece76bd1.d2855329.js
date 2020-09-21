/*! For license information please see ece76bd1.d2855329.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{129:function(e,t,a){"use strict";a.r(t);var r=a(1),o=a(0),n=a.n(o),i=a(132),l=a.n(i),c=a(136),s=a(134),d=a(131),u=a(133),h=a(126),f=a.n(h);o.PureComponent;var g=[{title:n.a.createElement(n.a.Fragment,null,"Intuitive API"),imageUrl:"img/feature-intuitive-api.svg",description:n.a.createElement(n.a.Fragment,null,"Handling buttons is a simple task on arduino, but the code can look very ugly, full of conditions and delays that are not safe at all. EasyButton not only saves you development time, it also provides an easy and intuitive API for handling buttons with callbacks.",n.a.createElement("div",{className:f.a.featureButtomLink},n.a.createElement(s.a,{to:"docs/on-single-press-api"},"API documentation")))},{title:n.a.createElement(n.a.Fragment,null,"Non-blocking"),imageUrl:"img/feature-non-blocking.svg",description:n.a.createElement(n.a.Fragment,null,"EasyButton is a non-blocking library, which means it won't affect the rest of your code with dangerous delays that impact the overall performance of your code.")},{title:n.a.createElement(n.a.Fragment,null,"Interrupts support"),imageUrl:"img/feature-interrupts-support.svg",description:n.a.createElement(n.a.Fragment,null,"In order to improve efficiency, the library is able to interface buttons through external interrupts. By doing this, it won't be necessary to continuously read the state of the buttons. This allows you to write a more efficient code.",n.a.createElement("div",{className:f.a.featureButtomLink},n.a.createElement(s.a,{to:"docs/poll-vs-external-interrupts"},"More on external interrupts")))},{title:n.a.createElement(n.a.Fragment,null,"Small footprint"),imageUrl:"img/feature-small-footprint.svg",description:n.a.createElement(n.a.Fragment,null,"EasyButton has a small footprint and does not depend on third party libraries, making it very easy to install and include in your project.")},{title:n.a.createElement(n.a.Fragment,null,"Well documented"),imageUrl:"img/feature-well-documented.svg",description:n.a.createElement(n.a.Fragment,null,"EasyButton has a step-by-step guide that lets you get started with the library in just a few minutes. Its API is well documented with a complete but easy to understand explanation.",n.a.createElement("div",{className:f.a.featureButtomLink},n.a.createElement(s.a,{to:"docs/introduction"},"Getting started")))},{title:n.a.createElement(n.a.Fragment,null,"Packed with examples"),imageUrl:"img/feature-packed-with-examples.svg",description:n.a.createElement(n.a.Fragment,null,"Okay! EasyButton its well documented, but we are all used to having examples in Arduino libraries and we always learn a lot from them, that's why EasyButton provides several fully functional examples and we will continue to add more. ",n.a.createElement("br",null),n.a.createElement("div",{className:f.a.featureButtomLink},n.a.createElement(s.a,{to:"docs/on-single-press-example"},"Check them out!")))}];function m(e){var t=e.imageUrl,a=e.title,r=e.description,o=Object(u.a)(t);return n.a.createElement("div",{className:l()("col col--4",f.a.feature)},o&&n.a.createElement("div",{className:"text--center"},n.a.createElement("img",{className:f.a.featureImage,src:o,alt:a})),n.a.createElement("h3",null,a),n.a.createElement("p",null,r))}t.default=function(){var e=Object(d.a)().siteConfig,t=void 0===e?{}:e;return n.a.createElement(c.a,{title:""+t.title,description:"The Arduino Library For Buttons"},n.a.createElement("header",{className:l()("hero",f.a.heroBanner)},n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"hero__title"},t.title),n.a.createElement("p",{className:"hero__subtitle"},t.tagline),n.a.createElement("div",{className:f.a.githubStarButton}),n.a.createElement("div",{className:f.a.heroLinks},n.a.createElement(s.a,{className:f.a.gettingStartedLink,to:"docs/introduction"},"Getting started"),n.a.createElement("div",{className:f.a.upythonLink},n.a.createElement("h4",null,"Using MicroPython? \ud83d\udc0d - Check out"," ",n.a.createElement("a",{href:"#"},"EasyButton for MicroPython")," (work in progress)."))))),n.a.createElement("main",null,g&&g.length&&n.a.createElement("section",{className:f.a.features},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},g.map((function(e,t){return n.a.createElement(m,Object(r.a)({key:t},e))})))))))}},172:function(e,t,a){"use strict";a.r(t),a.d(t,"render",(function(){return C}));var r=window.document,o=window.Math,n=window.HTMLElement,i=window.XMLHttpRequest,l=function(e){return function(t,a,r){var o=e.createElement(t);if(a)for(var n in a){var i=a[n];null!=i&&(null!=o[n]?o[n]=i:o.setAttribute(n,i))}if(r)for(var l=0,c=r.length;l<c;l++){var s=r[l];o.appendChild("string"==typeof s?e.createTextNode(s):s)}return o}},c=l(r),s=function(e,t){return{}.hasOwnProperty.call(e,t)},d=i&&i.prototype&&"withCredentials"in i.prototype,u=d&&n&&n.prototype.attachShadow&&!n.prototype.attachShadow.prototype,h=function(e,t,a){e.addEventListener?e.addEventListener(t,a,!1):e.attachEvent("on"+t,a)},f=function(e,t,a){e.removeEventListener?e.removeEventListener(t,a,!1):e.detachEvent("on"+t,a)},g={light:".btn{color:#24292e;background-color:#eff3f6;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23fafbfc'/%3e%3cstop offset='90%25' stop-color='%23eff3f6'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #fafbfc, #eff3f6 90%);background-image:linear-gradient(180deg, #fafbfc, #eff3f6 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFFAFBFC', endColorstr='#FFEEF2F5');border-color:#cdcfd1;border-color:rgba(27,31,35,.2)}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#e6ebf1;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f0f3f6'/%3e%3cstop offset='90%25' stop-color='%23e6ebf1'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f0f3f6, #e6ebf1 90%);background-image:linear-gradient(180deg, #f0f3f6, #e6ebf1 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF0F3F6', endColorstr='#FFE5EAF0');background-position:-0.5em;border-color:#acaeb0;border-color:rgba(27,31,35,.35)}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#e9ecef;background-image:none;border-color:#acaeb0;border-color:rgba(27,31,35,.35);box-shadow:inset 0 .15em .3em rgba(27,31,35,.15);filter:none}.social-count{color:#24292e;background-color:#fff;border-color:#d1d2d3;border-color:rgba(27,31,35,.2)}.social-count:focus,.social-count:hover{color:#0366d6}.octicon-heart{color:#ea4aaa}",dark:".btn{color:#fafbfc;background-color:#202428;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%232f363d'/%3e%3cstop offset='90%25' stop-color='%23202428'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #2f363d, #202428 90%);background-image:linear-gradient(180deg, #2f363d, #202428 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF2F363D', endColorstr='#FF1E2226');border-color:#2b3138;border-color:rgba(27,31,35,.2)}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#1b1f23;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%232b3137'/%3e%3cstop offset='90%25' stop-color='%231b1f23'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #2b3137, #1b1f23 90%);background-image:linear-gradient(180deg, #2b3137, #1b1f23 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF2B3137', endColorstr='#FF191D21');background-position:-0.5em;border-color:#252b30;border-color:rgba(27,31,35,.5)}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#181b1f;background-image:none;border-color:#252b30;border-color:rgba(27,31,35,.5);box-shadow:inset 0 .15em .3em rgba(27,31,35,.15);filter:none}.social-count{color:#fafbfc;background-color:#1b1f23;border-color:#1b1f23;border-color:rgba(27,31,35,.2)}.social-count:focus,.social-count:hover{color:#2188ff}.octicon-heart{color:#ec6cb9}"},m=function(e,t){return"@media(prefers-color-scheme:"+e+"){"+g[s(g,t)?t:e]+"}"},p=function(e){if(null==e)return g.light;var t=function(e,t,a,r){null==t&&(t="&"),null==a&&(a="="),null==r&&(r=window.decodeURIComponent);for(var o={},n=e.split(t),i=0,l=n.length;i<l;++i){var c=n[i];if(""!==c){var s=c.split(a);o[r(s[0])]=null!=s[1]?r(s.slice(1).join(a)):void 0}}return o}(e,";",":",(function(e){return e.replace(/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g,"")}));return g[s(g,t["no-preference"])?t["no-preference"]:"light"]+m("light",t.light)+m("dark",t.dark)},b={"mark-github":{width:16,height:16,path:'<path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>'},heart:{width:12,height:16,path:'<path fill-rule="evenodd" d="M8.727 3C7.091 3 6.001 4.65 6.001 4.65S4.909 3 3.273 3C1.636 3 0 4.1 0 6.3 0 9.6 6 14 6 14s6-4.4 6-7.7C12 4.1 10.364 3 8.727 3z"/>'},eye:{width:16,height:16,path:'<path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/>'},star:{width:14,height:16,path:'<path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/>'},"repo-forked":{width:10,height:16,path:'<path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/>'},"repo-template":{width:14,height:16,path:'<path fill-rule="evenodd" d="M12 8V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v12c0 .55.45 1 1 1h2v2l1.5-1.5L6 16v-4H3v1H1v-2h7v-1H2V1h9v7h1zM4 2H3v1h1V2zM3 4h1v1H3V4zm1 2H3v1h1V6zm0 3H3V8h1v1zm6 3H8v2h2v2h2v-2h2v-2h-2v-2h-2v2z"/>'},"issue-opened":{width:14,height:16,path:'<path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/>'},"cloud-download":{width:16,height:16,path:'<path fill-rule="evenodd" d="M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z"/>'}},v={},w=function(e,t){var a=v[e]||(v[e]=[]);if(!(a.push(t)>1)){var r=function(e){var t;return function(){t||(t=1,e.apply(this,arguments))}}((function(){for(delete v[e];t=a.shift();)t.apply(null,arguments)}));if(d){var o=new i;h(o,"abort",r),h(o,"error",r),h(o,"load",(function(){var e;try{e=JSON.parse(o.responseText)}catch(t){return void r(t)}r(200!==o.status,e)})),o.open("GET",e),o.send()}else{var n=this||window;n._=function(e){n._=null,r(200!==e.meta.status,e.data)};var c=l(n.document)("script",{async:!0,src:e+(/\?/.test(e)?"&":"?")+"callback=_"}),s=function(){n._&&n._({meta:{}})};h(c,"load",s),h(c,"error",s),c.readyState&&function(e,t,a){var r=function(o){if(t.test(e.readyState))return f(e,"readystatechange",r),a(o)};h(e,"readystatechange",r)}(c,/de|m/,s),n.document.getElementsByTagName("head")[0].appendChild(c)}}},y=function(e,t,a){var r=l(e.ownerDocument),o=e.appendChild(r("style",{type:"text/css"})),n="body{margin:0}a{text-decoration:none;outline:0}.widget{display:inline-block;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;font-size:0;white-space:nowrap}.btn,.social-count{position:relative;display:inline-block;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-repeat:repeat-x;background-position:-1px -1px;background-size:110% 110%;border:1px solid}.btn{border-radius:.25em}.btn:not(:last-child){border-radius:.25em 0 0 .25em}.social-count{border-left:0;border-radius:0 .25em .25em 0}.widget-lg .btn,.widget-lg .social-count{height:20px;padding:3px 10px;font-size:12px;line-height:20px}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor}"+p(t["data-color-scheme"]);o.styleSheet?o.styleSheet.cssText=n:o.appendChild(e.ownerDocument.createTextNode(n));var i,c,d=r("a",{className:"btn",href:t.href,target:"_blank",rel:"noopener",innerHTML:(i=t["data-icon"],c=/^large$/i.test(t["data-size"])?16:14,i=(""+i).toLowerCase().replace(/^octicon-/,""),s(b,i)||(i="mark-github"),'<svg viewBox="0 0 '+b[i].width+" "+b[i].height+'" class="octicon octicon-'+i+'" style="width: '+c*b[i].width/b[i].height+"px; height: "+c+'px;" aria-hidden="true">'+b[i].path+"</svg>"),"aria-label":t["aria-label"]||void 0},[" ",r("span",{},[t["data-text"]||""])]),u=e.appendChild(r("div",{className:"widget"+(/^large$/i.test(t["data-size"])?" widget-lg":"")},[d])),h=d.hostname.split(".").reverse();if(""===h[0]&&h.shift(),"com"!==h[0]||"github"!==h[1])return d.href="#",d.target="_self",void a(u);var f=h.length,g=(" /"+d.pathname).split(/\/+/);if(((2===f||3===f&&"gist"===h[2])&&"archive"===g[3]||2===f&&"releases"===g[3]&&"download"===g[4]||3===f&&"codeload"===h[2])&&(d.target="_top"),/^true$/i.test(t["data-show-count"])&&2===f){var m,v;if(!g[2]&&g[1])m=v="followers";else if(!g[3]&&g[2])v="stargazers_count",m="stargazers";else if(g[4]||"subscription"!==g[3])if(g[4]||"fork"!==g[3]){if("issues"!==g[3])return void a(u);v="open_issues_count",m="issues"}else v="forks_count",m="network/members";else v="subscribers_count",m="watchers";var y=g[2]?"/repos/"+g[1]+"/"+g[2]:"/users/"+g[1];w.call(this,"https://api.github.com"+y,(function(e,t){if(!e){var o=t[v];u.appendChild(r("a",{className:"social-count",href:t.html_url+"/"+m,target:"_blank",rel:"noopener","aria-label":o+" "+v.replace(/_count$/,"").replace("_"," ").slice(0,o<2?-1:void 0)+" on GitHub"},[(""+o).replace(/\B(?=(\d{3})+(?!\d))/g,",")]))}a(u)}))}else a(u)},k=window.devicePixelRatio||1,E=function(e){return(k>1?o.ceil(o.round(e*k)/k*2)/2:o.ceil(e))||0},x=function(e,t){e.style.width=t[0]+"px",e.style.height=t[1]+"px"},C=function(e,t){if(null!=e&&null!=t)if(e.getAttribute&&(e=function(e){for(var t={href:e.href,title:e.title,"aria-label":e.getAttribute("aria-label")},a=["icon","color-scheme","text","size","show-count"],r=0,o=a.length;r<o;r++){var n="data-"+a[r];t[n]=e.getAttribute(n)}return null==t["data-text"]&&(t["data-text"]=e.textContent||e.innerText),t}(e)),u){var a=c("span",{title:e.title||void 0});y(a.attachShadow({mode:"closed"}),e,(function(){t(a)}))}else{var n=c("iframe",{src:"javascript:0",title:e.title||void 0,allowtransparency:!0,scrolling:"no",frameBorder:0});x(n,[0,0]),n.style.border="none";var i=function(){var a,l=n.contentWindow;try{a=l.document.body}catch(c){return void r.body.appendChild(n.parentNode.removeChild(n))}f(n,"load",i),y.call(l,a,e,(function(a){var r=function(e){var t=e.offsetWidth,a=e.offsetHeight;if(e.getBoundingClientRect){var r=e.getBoundingClientRect();t=o.max(t,E(r.width)),a=o.max(a,E(r.height))}return[t,a]}(a);n.parentNode.removeChild(n),function(e,t,a){var r=function(o){return f(e,t,r),a(o)};h(e,t,r)}(n,"load",(function(){x(n,r)})),n.src="https://unpkg.com/github-buttons@2.7.0/dist/buttons.html#"+(n.name=function(e,t,a,r){null==t&&(t="&"),null==a&&(a="="),null==r&&(r=window.encodeURIComponent);var o=[];for(var n in e){var i=e[n];null!=i&&o.push(r(n)+a+r(i))}return o.join(t)}(e)),t(n)}))};h(n,"load",i),r.body.appendChild(n)}}}}]);