(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(1),o=(n(0),n(131));const a={id:"on-pressed-for-duration-example",title:"Pressed For Duration",sidebar_label:"Pressed For Duration"},i={id:"on-pressed-for-duration-example",title:"Pressed For Duration",description:"The following example demostrate how to detect when a button has been pressed for a given time.\r",source:"@site/docs\\on-pressed-for-example.md",permalink:"/docs/on-pressed-for-duration-example",editUrl:"https://github.com/COVISART/SimulatorUserGuid/docs/on-pressed-for-example.md",sidebar_label:"Pressed For Duration",sidebar:"someSidebar",previous:{title:"Single Press",permalink:"/docs/on-single-press-example"},next:{title:"Detecting Sequence",permalink:"/docs/on-sequence-example"}},c=[],s={rightToc:c};function p({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The following example demostrate how to detect when a button has been pressed for a given time."),Object(o.b)("p",null,"Download ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/evert-arias/EasyButton/blob/master/examples"}),"source code")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),'#include <EasyButton.h>\n\n// Arduino pin number where the button is connected.\n#define BUTTON_PIN 26\n\n// Duration.\nint duration = 2000;\n\n// Button.\nEasyButton button(BUTTON_PIN);\n\n// Callback.\nvoid onPressedForDuration() {\n    Serial.println("Button has been pressed for the given duration!");\n}\n\nvoid setup() {\n    Serial.begin(115200);\n\n    // Initialize the button.\n    button.begin();\n\n    // Attach callback.\n    button.onPressedFor(duration, onPressedForDuration);\n}\n\nvoid loop() {\n    // Continuously update the button state.\n    button.read();\n}\n')),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Work on progress")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"We are currently working on this section."))))}p.isMDXComponent=!0},131:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),b=r,m=l["".concat(i,".").concat(b)]||l[b]||d[b]||a;return n?o.a.createElement(m,c({ref:t},p,{components:n})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);