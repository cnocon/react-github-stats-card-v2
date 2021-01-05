!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){e.exports=require("react")},function(e,t,n){(t=n(3)(!1)).push([e.i,".github-stats-card{max-width:320px;margin:auto;width:100%;padding:0;background-color:#fff;box-sizing:border-box;font-family:Arial, sans-serif;display:flex;border:1px solid #e9e9e9;flex-direction:column;flex-basis:100%;font-size:12px;line-height:16px;box-shadow:5px 10px 20px -10px rgba(0,0,0,0.2);color:#24292e}.github-stats-card header{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;box-sizing:border-box;margin:0;padding:20px 0 0;background-color:#f6f8fa;color:#24292e}.github-stats-card h3{display:block;text-align:center;width:100%;box-sizing:border-box;font-size:18px;font-weight:600;padding:0 0 20px;margin:0}.github-stats-card h3 a{display:inline-block;text-decoration:none;color:inherit;max-width:calc(100% - 30px);box-sizing:border-box;line-height:24px;font-size:18px;font-weight:600;color:#0366d6}.github-stats-card header img{max-width:40px;border-radius:50%}.github-stats-card h4{display:flex;justify-content:center;width:100%;padding:10px 0;margin:0;font-weight:normal;font-style:italic;font-size:12px;line-height:16px;background-color:#24292e;color:#fff}.github-stats-card h5{display:flex;width:100%;background-color:#0366d6;color:#fff;justify-content:center;font-weight:400;padding:10px 0;margin:0;box-sizing:border-box;font-size:14px}.github-stats-card h5 span{display:flex;flex-direction:row;flex-wrap:nowrap;margin:0 5px;box-sizing:border-box;font-size:13px;line-height:18px;vertical-align:middle}.github-stats-card h5 span b{margin-right:3px;font-size:16px}.github-stats-card ol,ul{max-width:100%;display:flex;flex-direction:column;align-items:center;margin:0;padding:0 0 10px 10px}.github-stats-card ol{list-style:none;display:flex;width:100%;flex-direction:row;padding-bottom:10px;border-bottom:1px solid #f5f5f5;margin-bottom:10px;text-align:center;justify-content:space-around}.github-stats-card ol li:first-of-type{order:2}.github-stats-card ol li:nth-of-type(2){order:1}.github-stats-card ol li:last-of-type{order:3}.github-stats-card ul{list-style:none}.github-stats-card ul li b{font-size:13px;font-family:Menlo, Monaco, monospace}.github-stats-card li{margin:5px 0;color:#24292e}.github-stats-card li small{display:block;font-size:12px}.github-stats-card li b{font-size:13px}.github-stats-card p{width:100%;text-align:center;margin:5px auto;color:#24292e}.github-stats-card>div{display:flex;justify-content:center;flex-wrap:wrap;padding:10px 15px}.github-stats-card div p{font-weight:400;font-size:14px}.github-stats-card div p b{font-weight:400;font-size:15px}.github-stats-card footer{display:flex;align-items:center;height:100px;max-width:100%;box-sizing:border-box;background-color:#f6f8fa;color:#24292e}.github-stats-card footer img{max-width:100px;box-sizing:border-box;display:block;margin:0 15px 0 0}.github-stats-card footer section{display:flex;justify-content:flex-start;flex-wrap:wrap;padding:10px 15px}.github-stats-card footer section p{margin:0;padding-bottom:2.5px;font-size:11px;line-height:14px;text-align:left;color:#586069}.github-stats-card footer section p b{text-transform:uppercase;color:#586069}.github-stats-card footer a{color:#586069;text-decoration:none;font-weight:600}\n",""]),e.exports=t},function(e,t,n){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],a=0;a<e.length;a++){var o=e[a],l=t.base?o[0]+t.base:o[0],s=n[l]||0,u="".concat(l," ").concat(s);n[l]=s+1;var f=c(u),d={css:o[1],media:o[2],sourceMap:o[3]};-1!==f?(i[f].references++,i[f].updater(d)):i.push({identifier:u,updater:b(d,t),references:1}),r.push(u)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var u,f=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function d(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function p(e,t,n){var r=n.css,a=n.media,o=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,g=0;function b(e,t){var n,r,a;if(t.singleton){var o=g++;n=h||(h=s(t)),r=d.bind(null,n,o,!1),a=d.bind(null,n,o,!0)}else n=s(t),r=p.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=c(n[r]);i[a].references--}for(var o=l(e,t),s=0;s<n.length;s++){var u=c(n[s]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=o}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([a]).join("\n")}var i,c,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&a[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";n.r(t),n.d(t,"Card",(function(){return p}));var r=n(0),a=n.n(r),o=n(2),i=n.n(o),c=n(1),l=n.n(c),s={insert:"head",singleton:!1};i()(l.a,s),l.a.locals;function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p=function(e){var t=d({},e),n=t.username,o=t.accessToken,i=t.theme,c=u(Object(r.useState)({}),2),l=c[0],s=c[1],f=u(Object(r.useState)([]),2),p=f[0],h=f[1],g=u(Object(r.useState)({}),2),b=g[0],m=g[1],x=function(e,t){var n=t.slice();return(0===e||e>1)&&(n="".concat(t,"s")),n},v=Object.entries(b).sort((function(e,t){return e[1][1]-t[1][1]})),y=(v.length>=3?v.slice(0,3):v).map((function(e){return a.a.createElement("li",{key:"".concat(e[0])},a.a.createElement("b",null,e[0]),a.a.createElement("small",null,e[1]," ",x(parseInt(e[1]),"repo")))})),w=p.reduce((function(e,t){return e+t.watchers_count}),0),E=p.reduce((function(e,t){return e+t.stargazers_count}),0),j=p.reduce((function(e,t){return e+t.open_issues_count}),0),O=a.a.createElement("li",null,"Starred ",a.a.createElement("b",null,E)," ",x(parseInt(E),"time")),z=a.a.createElement("li",null,a.a.createElement("b",null,w)," ",x(parseInt(w),"watcher")),S=a.a.createElement("li",null,"Followed by ",a.a.createElement("b",null,l.followers)," ",x(parseInt(l.followers),"member")),A=a.a.createElement("li",null,"Following ",a.a.createElement("b",null,l.following)," ",x(parseInt(l.following),"member")),k=a.a.createElement("li",null,a.a.createElement("b",null,j)," ",x(parseInt(j),"open issue")),M=l.company?a.a.createElement("p",null,"Currently at ",l.company):"",_=(l.location&&l.location,a.a.createElement("p",null,a.a.createElement("a",{href:l.html_url,target:"_blank",rel:"noreferrer nofollow"},"@",l.login," on GitHub"))),T=(l.name&&l.name,l.blog&&(l.blog,l.blog.split("://")[1]),new Date(l.created_at)),C=Date.now()-T,I=Math.round(C/1e3/60/60/24/365),U=a.a.createElement("p",null,I," ",x(I,"Year")," of Membership"),N=a.a.createElement("footer",null,a.a.createElement("section",null,_,U,M),a.a.createElement("img",{src:"https://github.githubassets.com/images/icons/emoji/octocat.png?v8",alt:"Octocat"}));return Object(r.useEffect)((function(){0===Object.keys(l).length&&function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;t=n&&n.length>0?{method:"GET",headers:{Accept:"application/vnd.github.v3+json","User-Agent":"@cnocon/react-github-stats-card-v2",Authorization:"token ".concat(n)}}:{method:"GET",headers:{Accept:"application/vnd.github.v3+json","User-Agent":"@cnocon/github-stats-card-v2"}},fetch("https://api.github.com/users/".concat(e),t).then((function(e){return e.json()})).then((function(e){s(e)}))}(n,o),(0===p.length||Object.keys(0===b.length))&&function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";t=n&&n.length>0?{method:"GET",headers:{Accept:"application/vnd.github.v3+json","User-Agent":"react-github-stats-card-v2",Authorization:"token ".concat(n)}}:{method:"GET",headers:{Accept:"application/vnd.github.v3+json","User-Agent":"react-github-stats-card-v2"}},fetch("https://api.github.com/users/".concat(e,"/repos"),t).then((function(e){return e.json()})).then((function(e){var t={};try{return e.forEach((function(e){e.language&&null!==e.language&&(t[e.language]?t[e.language]+=1:t[e.language]=1)})),[e,t]}catch(e){var n=new Error(e);console.error(n)}})).then((function(e){try{h(e[0]),m(e[1])}catch(e){var t=new Error(e);console.error(t)}})).catch((function(e){return console.error(e),e}))}(n,o)}),[]),a.a.createElement("div",{className:i?"github-stats-card":""},a.a.createElement("header",null,a.a.createElement("h3",null,a.a.createElement("a",{href:l.html_url,target:"_blank",rel:"noopener nofollow"},"@",n)," on GitHub"),l&&l.bio?a.a.createElement("h4",null,l.bio):"",a.a.createElement("h5",null,a.a.createElement("span",null,a.a.createElement("b",null,l.public_repos),"Public Repos"),a.a.createElement("span",null,"|"),a.a.createElement("span",null,a.a.createElement("b",null,l.public_gists),"Public Gists"))),a.a.createElement("div",null,a.a.createElement("p",null,a.a.createElement("b",null,"Top Languages")),a.a.createElement("ol",null,y),a.a.createElement("ul",null,k,z,O,S,A)),N)}}]));