(function(e){function t(t){for(var n,o,c=t[0],i=t[1],u=t[2],p=0,f=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,c=1;c<r.length;c++){var i=r[c];0!==s[i]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},s={app:0},a=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=i;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"00ba":function(e,t,r){},"034f":function(e,t,r){"use strict";r("85ec")},"2d43":function(e,t,r){"use strict";r("6245")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("h1",[e._v("Redis Caching Example")]),r("example")],1)},a=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"example"},[r("search-input",{on:{search:e.search}}),e.currentResult?r("result-item",{attrs:{result:e.currentResult},on:{search:e.search}}):e._e(),r("panel",{attrs:{usernames:e.usernames},on:{search:e.search}}),r("history",{attrs:{history:e.history},on:{search:e.search}}),r("div",{staticClass:"note"},[e._v(' Note: After you search for a github account, click "Search again" to see Redis caching in action. ')]),e._m(0)],1)},c=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"how-it-works"},[r("div",{staticClass:"how-it-works__header"},[e._v(" How it works ")]),r("div",{staticClass:"how-it-works__content"},[e._v(" This app returns the number of repositories a Github account has. When you first search for an account, the server calls Github's API to return the response. This can take 100s of milliseconds. The server then adds the details of this slow response to Redis for future requests. When you search again, the next response comes directly from Redis cache instead of calling Github. The responses are usually usually in a millisecond or so making it blazing fast. ")])])}],i=(r("99af"),r("5530")),u=(r("96cf"),r("1da1")),l=r("bc3a"),p=r.n(l),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"input-group search-input mt-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"form-control py-2 border-right-0 border",attrs:{type:"text",placeholder:"Github username"},domProps:{value:e.username},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)},input:function(t){t.target.composing||(e.username=t.target.value)}}}),e._m(0)])},h=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticClass:"input-group-append"},[r("div",{staticClass:"input-group-text bg-transparent"},[r("i",{staticClass:"fa fa-search"})])])}],m=(r("498a"),{name:"App",components:{},data:function(){return{username:""}},methods:{search:function(){this.username&&(this.$emit("search",this.username.trim()),this.username="")}}}),d=m,v=(r("fff8"),r("2877")),b=Object(v["a"])(d,f,h,!1,null,"67ddab8a",null),y=b.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"result-item"},[r("div",[e._v(' "'+e._s(e.result.username)+'" has '+e._s(e.result.repos)+" repos. ")]),r("div",[r("span",{style:{color:e.result.cached?"#29967c":"#c72b40"}},[e._v(" Took "+e._s(e.result.responseTime)+" (Cache "+e._s(e.result.cached?"hit":"missed")+") ")]),r("a",{staticClass:"ml-3 mr-1",attrs:{href:"#"},on:{click:function(t){return e.$emit("search",e.result.username)}}},[e._v("search again")]),r("i",{staticClass:"fa fa-search",staticStyle:{"font-size":"1.2rem"}})])])},g=[],w={name:"ResultItem",components:{},props:{result:{type:Object,required:!0}}},x=w,O=(r("2d43"),Object(v["a"])(x,_,g,!1,null,"1a08e42d",null)),k=O.exports,C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.history.length>0?r("div",{staticClass:"history mt-5"},[r("h5",[e._v("History:")]),e._l(e.history,(function(t,n){return r("div",{key:n,staticClass:"history-list"},[r("result-item",{attrs:{result:t},on:{search:function(t){return e.$emit("search",t)}}})],1)}))],2):e._e()},j=[],R={name:"History",components:{ResultItem:k},props:{history:{type:Array,required:!0}},computed:{}},$=R,E=(r("fac1"),Object(v["a"])($,C,j,!1,null,"568488cf",null)),P=E.exports,T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"panel mt-5"},[r("span",[e._v("Or, select one of these")]),r("br"),r("span",[e._v("repo names")]),e._l(e.usernames,(function(t,n){return r("div",{key:n},[r("a",{staticClass:"ml-3 mr-1",attrs:{href:"#"},on:{click:function(r){return e.$emit("search",t)}}},[e._v(e._s(t))])])}))],2)},S=[],A={name:"Panel",components:{},props:{usernames:{type:Array,required:!0}},data:function(){return{}}},I=A,q=(r("99e9"),Object(v["a"])(I,T,S,!1,null,"97d03914",null)),G=q.exports,H="localhost"===location.hostname?"http://localhost:5000":location.origin,M={name:"Example",components:{SearchInput:y,ResultItem:k,History:P,Panel:G},props:{},data:function(){return{history:[],currentResult:null,usernames:["microsoft","google","redislabs"]}},methods:{search:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.currentResult&&t.history.unshift(t.currentResult),r.next=3,t.getRepoCount(e);case 3:t.currentResult=r.sent;case 4:case"end":return r.stop()}}),r)})))()},getRepoCount:function(e){return Object(u["a"])(regeneratorRuntime.mark((function t(){var r,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.get("".concat(H,"/repos/").concat(e));case 3:return r=t.sent,n=r.headers["x-response-time"],s=r.data,t.abrupt("return",Object(i["a"])({responseTime:n},s));case 9:t.prev=9,t.t0=t["catch"](0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}},z=M,J=(r("cbbe"),Object(v["a"])(z,o,c,!1,null,"58a874ec",null)),N=J.exports,W={name:"App",components:{Example:N}},B=W,D=(r("034f"),Object(v["a"])(B,s,a,!1,null,null,null)),F=D.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(F)}}).$mount("#app")},"59b0":function(e,t,r){},"5bbc":function(e,t,r){},6245:function(e,t,r){},"7f63":function(e,t,r){},"85ec":function(e,t,r){},"99e9":function(e,t,r){"use strict";r("00ba")},cbbe:function(e,t,r){"use strict";r("7f63")},fac1:function(e,t,r){"use strict";r("5bbc")},fff8:function(e,t,r){"use strict";r("59b0")}});
//# sourceMappingURL=app.3c45cd62.js.map