(function(e){function t(t){for(var r,a,u=t[0],i=t[1],l=t[2],d=0,p=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(t);while(p.length)p.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},c=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var s=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(e,t){var n=Object(r["q"])("router-view");return Object(r["m"])(),Object(r["c"])(n)}const c={};c.render=o;var a=c,u=n("6c02"),i={class:"home"};function l(e,t,n,o,c,a){var u=Object(r["q"])("HelloAdvice");return Object(r["m"])(),Object(r["c"])("div",i,[Object(r["d"])("div",null,[Object(r["d"])(u)])])}var s={class:"container centered"},d={class:"\r\n        p-10rem\r\n        min-h-116\r\n        max-w-3xl\r\n        w-full\r\n        rounded-xl\r\n        text-gray-100\r\n        xl:col-span-2\r\n        bg-center bg-cover\r\n        transform\r\n        duration-500\r\n        hover:-translate-y-5\r\n        \r\n      ",style:{"background-image":"url(https://source.unsplash.com/1600x900/?darkness,space)","box-shadow":"rgba(2, 109, 8, 0.35) 0px 5px 15px"}},p={class:"mt-5 text-4xl text leading-snug "};function f(e,t,n,o,c,a){return Object(r["m"])(),Object(r["c"])("div",s,[Object(r["d"])("article",d,[Object(r["d"])("h1",p,Object(r["s"])(c.advice),1)])])}var b=n("bc3a"),v=n.n(b),h={name:"HelloWorld",props:{},data:function(){return{advice:""}},mounted:function(){var e=this;v.a.get("https://api.adviceslip.com/advice").then((function(t){console.log(t.data.slip.advice),e.advice=t.data.slip.advice})).catch((function(e){console.log(e)})).then((function(){}))}};n("b9cc");h.render=f;var m=h,O={name:"Home",components:{HelloAdvice:m},methods:{}};O.render=l;var j=O,g=[{path:"/",name:"Home",component:j}],y=Object(u["a"])({history:Object(u["b"])("/"),routes:g}),x=y,w=n("5502"),P=Object(w["a"])({state:{},mutations:{},actions:{},modules:{}}),_=n("2106"),k=n.n(_),H=(n("ba8c"),Object(r["b"])(a));H.use(k.a,v.a),H.use(P),H.use(x),H.mount("#app")},b9cc:function(e,t,n){"use strict";n("e664")},ba8c:function(e,t,n){},e664:function(e,t,n){}});
//# sourceMappingURL=app.cc325d37.js.map