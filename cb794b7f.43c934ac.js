(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(6),i=(n(0),n(130)),o={id:"poll-vs-external-interrupts",title:"Poll vs External Interrupts",sidebar_label:"Poll vs External Interrupts"},l={id:"poll-vs-external-interrupts",title:"Poll vs External Interrupts",description:"## Poll\r",source:"@site/docs\\poll-vs-external-interrupts.md",permalink:"/docs/poll-vs-external-interrupts",editUrl:"https://github.com/COVISART/SimulatorUserGuid/docs/poll-vs-external-interrupts.md",sidebar_label:"Poll vs External Interrupts",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"Fundamentals",permalink:"/docs/fundamentals"}},s=[{value:"Poll",id:"poll",children:[]},{value:"External interrupts",id:"external-interrupts",children:[{value:"Things to consider with the use of interrupts",id:"things-to-consider-with-the-use-of-interrupts",children:[]}]}],c={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"poll"},"Poll"),Object(i.b)("p",null,"There are many ways in which a microcontroller is able the detect the state of a button. The most common\nway to do this is by polling the button. This means that ",Object(i.b)("strong",{parentName:"p"},"the microcontroller will be continuously reading the button signal"),". This approach is shown below"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Note")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"All code in this section is shown only for teaching purposes. EasyButton library will do most of this work for you."))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),'void loop() \n{\n  // put your main code here, to run repeatedly:\n  if (digitalRead(BUTTON_PIN) == LOW)\n    Serial.println("Button Pressed");\n}\n')),Object(i.b)("p",null,"This works in most cases, but ",Object(i.b)("strong",{parentName:"p"},"it isn't the most efficient solution"),".  "),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),'void loop() \n{\n  // put your main code here, to run repeatedly:\n  delay(SECONDS*1000);\n  if (digitalRead(BUTTON_PIN) == LOW)\n    Serial.println("Button Pressed");\n}\n')),Object(i.b)("p",null,"For example, in the code shown above, the microcontroller won't be able to detect the state of the button while the delay its being executed. As a consequence, it is pretty probable that some state changes couldn't be detected. In order to avoid this, external interrupts must be used.  "),Object(i.b)("h2",{id:"external-interrupts"},"External interrupts"),Object(i.b)("p",null,"External interrupts ",Object(i.b)("strong",{parentName:"p"},"are used to detect a state change in a more efficient way than poll system"),". This is because ",Object(i.b)("strong",{parentName:"p"},"the event is detected by hardware and not by software"),". This means that, even the microcontroller could be doing other tasks like delay in previous example, it will be able to detect the event.  "),Object(i.b)("p",null,"External interrupts link a function to an event. In order to define an external interrupt, is needed:  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A microcontroller pin which will detect the event"),Object(i.b)("li",{parentName:"ul"},"A trigger condition  "),Object(i.b)("li",{parentName:"ul"},"An interrupt service routine  ")),Object(i.b)("p",null,"Pins which can be used by external interrupts depend on the microcontroller used, it is your responsability to connect the button to one of these pins."),Object(i.b)("p",null,"The most commons trigger conditions are:  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"FALLING: Interrupt is triggered when occurs a falling edge, this happens when signal goes from HIGH to LOW"),Object(i.b)("li",{parentName:"ul"},"RISING: Interrupt is triggered when occurs a rising edge, this happens when signal goes from LOW to HIGH"),Object(i.b)("li",{parentName:"ul"},"CHANGE: Interrupt is triggered when occurs a falling edge or a rising edge")),Object(i.b)("p",null,"Now we can solve the initial problem in a more efficient way. The microcontroller will run the ",Object(i.b)("inlineCode",{parentName:"p"},"buttonPressed()")," function when a falling edge will be detected on pin ",Object(i.b)("inlineCode",{parentName:"p"},"BUTTON_PIN"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"attachInterrupt(digitalPinToInterrupt(BUTTON_PIN), buttonPressed, FALLING);\n")),Object(i.b)("p",null,"A 'flag' is activated inside the ",Object(i.b)("inlineCode",{parentName:"p"},"buttonPressed")," function. This flag indicates that the event was detected."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"void buttonPressed()\n{\n  wasPressed = true;\n}\n")),Object(i.b)("p",null,"In the main program, after executing delay, the flag value is readed."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),'void loop()\n{\n  // put your main code here, to run repeatedly:\n  delay(1000*SECONDS);\n  if (wasPressed)\n  {\n    Serial.println("Button was pressed");\n    wasPressed = false;\n  }\n}\n')),Object(i.b)("p",null,"This solution is more efficient than the previous one based on 'poll system' because all events will be detected. Every time that a falling edge occurs on ",Object(i.b)("inlineCode",{parentName:"p"},"BUTTON_PIN"),", the microcontroller will execute the interrupt service routine and because of this your main program will know each time the button was pressed.  "),Object(i.b)("h3",{id:"things-to-consider-with-the-use-of-interrupts"},"Things to consider with the use of interrupts"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Inside an interrupt service routine, most of timing functions won't work as expected (millis, delay, etc). This is because this functions use interrupt service routines which can't be executed while an external interrupt is being executed."),Object(i.b)("li",{parentName:"ul"},"Interrupt service routines should be as shorts as possible.")))}p.isMDXComponent=!0},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?a.a.createElement(h,l({ref:t},c,{components:n})):a.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);