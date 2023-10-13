"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[895],{895:function(n,e,r){r.r(e),r.d(e,{default:function(){return Z}});var t,a,c,o,i=r(861),u=r(439),s=r(687),p=r.n(s),d=r(791),f=r(689),l=r(87),v=r(86),h=r(168),x=r(686),m=x.Z.div(t||(t=(0,h.Z)(["\n    display: flex;\n    gap: 40px;\n    margin-top: 20px;\n"]))),g=r(184),b=function(n){var e=n.movie,r=e.title,t=e.genres,a=e.release_date,c=e.overview,o=e.vote_average,i=e.poster_path,u=new Date(a).getFullYear(),s=(o/10*100).toFixed(0),p="https://image.tmdb.org/t/p/w300".concat(i);return(0,g.jsxs)(m,{children:[(0,g.jsx)("img",{src:p,alt:r}),(0,g.jsxs)("div",{children:[(0,g.jsxs)("h1",{children:[r," (",u,")"]}),(0,g.jsxs)("p",{children:["User rate: ",s,"%"]}),(0,g.jsx)("h3",{children:"Overview"}),(0,g.jsx)("p",{children:c}),(0,g.jsx)("h3",{children:"Genres"}),(0,g.jsx)("p",{children:t&&t[0].name})]})]})},j=x.Z.button(a||(a=(0,h.Z)(["\n    margin: 20px 64px;    \n    background-color: #007BFF;\n    color: #fff;\n    padding: 10px 20px;\n    border: none;\n    border-radius: 3px;\n    cursor: pointer;\n\n    :hover,\n    :focus {\n        background-color: #0056b3;\n    }\n"]))),w=x.Z.h1(c||(c=(0,h.Z)(["\n    font-size: 36px;\n    color: #007BFF;\n    text-align: center;\n    margin: 20px 0;\n"]))),k=x.Z.a(o||(o=(0,h.Z)(["\n\n"]))),Z=function(){var n,e,r=(0,d.useState)({}),t=(0,u.Z)(r,2),a=t[0],c=t[1],o=(0,f.UO)().movieId,s=(0,f.TH)(),h=(0,d.useRef)(null!==(n=null===(e=s.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");return(0,d.useEffect)((function(){var n=function(){var n=(0,i.Z)(p().mark((function n(e){var r;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,v.$5)(e);case 3:r=n.sent,c(r),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}();n(o)}),[o]),(0,g.jsxs)("div",{children:[(0,g.jsx)(l.rU,{to:h.current,children:(0,g.jsx)(j,{type:"button",children:"Go back"})}),(0,g.jsx)(b,{movie:a}),(0,g.jsx)(w,{children:"Movie info"}),(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:(0,g.jsx)(k,{to:"cast",children:"Cast"})}),(0,g.jsx)("li",{children:(0,g.jsx)(k,{to:"reviews",children:"Reviews"})})]}),(0,g.jsx)(d.Suspense,{fallback:(0,g.jsx)("div",{children:"Loading..."}),children:(0,g.jsx)(f.j3,{})})]})}},86:function(n,e,r){r.d(e,{$5:function(){return d},D$:function(){return l},R4:function(){return f},SU:function(){return s},bI:function(){return p}});var t=r(861),a=r(687),c=r.n(a),o=r(243),i="4a3136bad29614034a217fa6beb2440a",u="https://api.themoviedb.org/3",s=function(){var n=(0,t.Z)(c().mark((function n(){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"/trending/movie/day?api_key=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"/search/movie?api_key=").concat(i,"&query=").concat(e,"&page=1"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"/movie/").concat(e,"?api_key=").concat(i));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"/movie/").concat(e,"/credits?api_key=").concat(i));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u,"/movie/").concat(e,"/reviews?api_key=").concat(i));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=895.9b1f8a99.chunk.js.map