module.exports=function(e){function t(t){for(var n,o,a=t[0],l=t[1],c=0,i=[];c<a.length;c++)o=a[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&i.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(u&&u(t);i.length;)i.shift()()}var n={},r={0:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=a);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=function(e){return o.p+""+e+".index.js"}(e);var u=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(i);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,n[1](u)}r[e]=void 0}};var i=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var u=l;return o(o.s=2)}([function(e,t){e.exports=require("react")},function(e,t,n){e.exports=n(3)()},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var r=n(0),o=n.n(r),a=n(1),l=n.n(a);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.e(1).then(n.bind(null,5));var s=function(e,t){var n=t.slice();return(0===e||e>1)&&(n="".concat(t,"s")),n};function p(e){var t=i({},e),n=t.username,a=t.accessToken,l=t.theme,u=c(Object(r.useState)({}),2),p=u[0],f=u[1],m=c(Object(r.useState)([]),2),h=m[0],b=m[1],d=c(Object(r.useState)({}),2),g=d[0],y=d[1],v=Object.entries(g).sort((function(e,t){return e[1][1]-t[1][1]})),E=(v.length>=3?v.slice(0,3):v).map((function(e){return o.a.createElement("li",null,o.a.createElement("b",null,e[0]),o.a.createElement("small",null,e[1]," ",s(parseInt(e[1]),"repo")))})),O=h.reduce((function(e,t){return e+t.watchers_count}),0),w=h.reduce((function(e,t){return e+t.stargazers_count}),0),j=h.reduce((function(e,t){return e+t.open_issues_count}),0),_=o.a.createElement("li",null,"Starred ",o.a.createElement("b",null,w)," ",s(parseInt(w),"time")),T=o.a.createElement("li",null,o.a.createElement("b",null,O)," ",s(parseInt(O),"watcher")),S=o.a.createElement("li",null,"Followed by ",o.a.createElement("b",null,p.followers)," ",s(parseInt(p.followers),"member")),A=o.a.createElement("li",null,"Following ",o.a.createElement("b",null,p.following)," ",s(parseInt(p.following),"member")),P=o.a.createElement("li",null,o.a.createElement("b",null,j)," ",s(parseInt(j),"open issue")),k=p.company?o.a.createElement("p",null,"Currently at ",p.company):"",x=(p.location&&p.location,o.a.createElement("p",null,o.a.createElement("a",{href:p.html_url,target:"_blank",rel:"noreferrer nofollow"},"@",p.login," on GitHub"))),I=(p.name&&p.name,p.blog&&(p.blog,p.blog.split("://")[1]),new Date(p.created_at)),C=Date.now()-I,G=Math.round(C/1e3/60/60/24/365),M=o.a.createElement("p",null,G," ",s(G,"Year")," of Membership"),R=o.a.createElement("footer",null,o.a.createElement("section",null,x,M,k),o.a.createElement("img",{src:"https://github.githubassets.com/images/icons/emoji/octocat.png?v8",alt:"Octocat"}));return Object(r.useEffect)((function(){0===Object.keys(p).length&&function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;t=n?{method:"GET",headers:{Accept:"application/vnd.github.v3+json","User-Agent":"@cnocon/react-github-stats-card-v2",Authorization:"token ".concat(n)}}:{method:"GET",headers:{Accept:"application/vnd.github.v3+json","User-Agent":"@cnocon/github-stats-card-v2"}},fetch("https://api.github.com/users/".concat(e),t).then((function(e){return e.json()})).then((function(e){f(e)}))}(n,a),(0===h.length||Object.keys(0===g.length))&&function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;t=n?{method:"GET",headers:{Accept:"application/vnd.github.v3+json","User-Agent":"@cnocon/github-stats-card-v2",Authorization:"token ".concat(n)}}:{method:"GET",headers:{Accept:"application/vnd.github.v3+json","User-Agent":"@cnocon/github-stats-card-v2"}},fetch("https://api.github.com/users/".concat(e,"/repos"),t).then((function(e){return e.json()})).then((function(e){var t={};try{return e.forEach((function(e){e.language&&null!==e.language&&(t[e.language]?t[e.language]+=1:t[e.language]=1)})),[e,t]}catch(e){var n=new Error(e);console.error(n)}})).then((function(e){try{b(e[0]),y(e[1])}catch(e){var t=new Error(e);console.error(t)}})).catch((function(e){return console.error(e),e}))}(n,a)}),[]),o.a.createElement("div",{className:l?"github-stats-card":""},o.a.createElement("header",null,o.a.createElement("h3",null,o.a.createElement("a",{href:p.html_url,target:"_blank",rel:"noopener nofollow"},"@",n)," on GitHub"),p&&p.bio?o.a.createElement("h4",null,p.bio):"",o.a.createElement("h5",null,o.a.createElement("span",null,o.a.createElement("b",null,p.public_repos),"Public Repos"),o.a.createElement("span",null,"|"),o.a.createElement("span",null,o.a.createElement("b",null,p.public_gists),"Public Gists"))),o.a.createElement("div",null,o.a.createElement("p",null,o.a.createElement("b",null,"Top Languages")),o.a.createElement("ol",null,E),o.a.createElement("ul",null,P,T,_,S,A)),R)}p.propTypes={username:l.a.string.isRequired,theme:l.a.bool,accessToken:l.a.string}},function(e,t,n){"use strict";var r=n(4);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,l){if(l!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}]);