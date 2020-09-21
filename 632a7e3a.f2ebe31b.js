(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(6),a=(n(0),n(130)),i={id:"on-pressed-for-api",title:"onPressedFor",sidebar_label:"onPressedFor"},c={id:"on-pressed-for-api",title:"onPressedFor",description:"`Event`\r",source:"@site/docs\\on-pressed-for-api.md",permalink:"/docs/on-pressed-for-api",editUrl:"https://github.com/COVISART/SimulatorUserGuid/docs/on-pressed-for-api.md",sidebar_label:"onPressedFor",sidebar:"someSidebar",previous:{title:"onPressed",permalink:"/docs/on-single-press-api"},next:{title:"onSequence",permalink:"/docs/on-sequence-api"}},s=[{value:"Description",id:"description",children:[]},{value:"External interrupts",id:"external-interrupts",children:[]},{value:"Examples",id:"examples",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Event")),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"Triggers a callback function when the Button has been pressed and hold for at least the given duration time. This method takes two parameters as arguments. The first argument is the duration in milliseconds and the second is the callback function to be called."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"int duration = 2000;\n\nbutton.onPressedFor(duration, onPressedCallback);\n")),Object(a.b)("h2",{id:"external-interrupts"},"External interrupts"),Object(a.b)("p",null,"When the button is being interfaced with microcontroller through external interrupts and you need to use this feature, method ",Object(a.b)("inlineCode",{parentName:"p"},"update")," must be called inside ",Object(a.b)("inlineCode",{parentName:"p"},"loop")," function as shown below."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"void loop() {\n  // update() function must be called repeatedly only if onPressedFor functionality is being used and interrupt is enabled\n  button.update();\n}\n")),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("p",null,"Please refer to the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"pressed-for-duration-example"}),"Pressed For Duration")," example included in this documentation."))}p.isMDXComponent=!0},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,f=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return n?o.a.createElement(f,c({ref:t},l,{components:n})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);