(this["webpackJsonpreact-movies"]=this["webpackJsonpreact-movies"]||[]).push([[2],{11:function(e,t,n){e.exports={link:"Navigation_link__1aUvc",activeLink:"Navigation_activeLink__1yMQd Navigation_link__1aUvc"}},16:function(e,t,n){e.exports={movieDetails:"MovieDetailsView_movieDetails__Fwgi3",description:"MovieDetailsView_description__1rIb3"}},18:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(24),c=n.n(r),a=n(0);function i(e){var t=e.text;return Object(a.jsx)("h1",{className:c.a.title,children:t})}},22:function(e,t,n){e.exports={header:"Appbar_header__1J2S5"}},23:function(e,t,n){},24:function(e,t,n){e.exports={title:"PageHeading_title__2u_Np"}},25:function(e,t,n){e.exports={cast:"MovieCastView_cast__3lUzX"}},40:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(19),i=n.n(a),s=n(5),o=n(2),u=n(11),j=n.n(u),l=n(0),b=function(){return Object(l.jsxs)("nav",{children:[Object(l.jsx)(s.c,{exact:!0,to:"/",className:j.a.link,activeClassName:j.a.activeLink,children:"HomePage"}),Object(l.jsx)(s.c,{to:"/movies",className:j.a.link,activeClassName:j.a.activeLink,children:"MoviesPage"})]})},f=n(22),d=n.n(f);function h(){return Object(l.jsx)("header",{className:d.a.header,children:Object(l.jsx)(b,{})})}var p=n(23),v=n.n(p);function x(e){var t=e.children;return Object(l.jsx)("div",{className:v.a.container,children:t})}var O=n(8),m=n(18),g=n(7),k=n(25),w=n.n(k);function _(){var e=Object(o.h)().movieId,t=Object(r.useState)(null),n=Object(O.a)(t,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){g.b(e).then(a)}),[e]),Object(l.jsx)(l.Fragment,{children:c&&Object(l.jsx)("ul",{className:w.a.cast,children:c.cast.map((function(e){return Object(l.jsxs)("li",{children:[e.name,Object(l.jsx)("img",{src:"//image.tmdb.org/t/p/w200"+e.profile_path,alt:"".concat(e.name)})]},e.id)}))})})}var y=n(16),N=n.n(y),S=Object(r.lazy)((function(){return n.e(0).then(n.bind(null,44))}));function E(){var e,t,n,c,a=Object(o.h)().movieId,i=Object(r.useState)(null),u=Object(O.a)(i,2),j=u[0],b=u[1],f=Object(o.i)().path,d=Object(o.f)(),h=Object(o.g)();Object(r.useEffect)((function(){g.a(a).then(b)}),[a]);return Object(l.jsxs)(l.Fragment,{children:[j&&Object(l.jsx)(m.a,{text:'Movie "'.concat(j.title,'" ').concat(a)}),Object(l.jsx)("button",{type:"button",onClick:function(){var e,t;d.push(null!==(e=null===h||void 0===h||null===(t=h.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/")},children:"Back"}),j&&Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:N.a.movieDetails,children:[Object(l.jsxs)("div",{children:[" ",Object(l.jsx)("img",{src:"//image.tmdb.org/t/p/w300"+j.poster_path,alt:j.title})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Overview"}),Object(l.jsx)("p",{className:N.a.description,children:j.overview})]})]})}),j&&Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(s.c,{to:{pathname:"/movies/".concat(a,"/cast"),state:{from:null!==(e=null===h||void 0===h||null===(t=h.state)||void 0===t?void 0:t.from)&&void 0!==e?e:void 0}},children:"Cast"})}),Object(l.jsx)("li",{children:Object(l.jsx)(s.c,{to:{pathname:"/movies/".concat(a,"/reviews"),state:{from:null!==(n=null===h||void 0===h||null===(c=h.state)||void 0===c?void 0:c.from)&&void 0!==n?n:void 0}},children:"Reviews"})})]}),Object(l.jsx)(r.Suspense,{fallback:Object(l.jsx)("h1",{children:"Downloading"}),children:Object(l.jsxs)(o.c,{children:[" ",Object(l.jsx)(o.a,{path:"".concat(f,"/reviews"),children:j&&Object(l.jsx)(S,{})}),Object(l.jsx)(o.a,{path:"".concat(f,"/cast"),children:j&&Object(l.jsx)(_,{})})]})})]})}var P=n(17);function D(){var e=Object(r.useState)(null),t=Object(O.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),i=Object(O.a)(a,2),u=i[0],j=i[1],b=Object(o.f)(),f=Object(o.g)();Object(r.useEffect)((function(){if(""!==f.search&&"?query="!==f.search){console.log(f.search);var e=new URLSearchParams(f.search).get("query");g.d(e).then(c)}}),[f.search]);return Object(l.jsxs)("div",{children:[Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(f),b.push(Object(P.a)(Object(P.a)({},f),{},{search:"query=".concat(u)})),""!==u&&g.d(u).then(c).finally(j(""))},children:[Object(l.jsx)("input",{type:"text",name:"movieName",value:u,onChange:function(e){j(e.currentTarget.value.toLowerCase())}}),Object(l.jsx)("button",{type:"submit",children:"\u041d\u0430\u0439\u0442\u0438"})]}),Object(l.jsx)("ul",{children:n&&n.results.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsx)(s.b,{to:{pathname:"movies/".concat(e.id),state:{from:f}},children:e.title})},e.id)}))})]})}function U(){return Object(l.jsx)("h1",{children:"404 \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430 :("})}n(40);var C=Object(r.lazy)((function(){return n.e(1).then(n.bind(null,43))}));function M(){return Object(l.jsxs)(x,{children:[Object(l.jsx)(h,{}),Object(l.jsx)(r.Suspense,{fallback:Object(l.jsx)("h1",{children:"Downloading"}),children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/",exact:!0,children:Object(l.jsx)(C,{})}),Object(l.jsx)(o.a,{path:"/movies",exact:!0,children:Object(l.jsx)(D,{})}),Object(l.jsx)(o.a,{path:"/movies/:movieId",children:Object(l.jsx)(E,{})}),Object(l.jsx)(o.a,{children:Object(l.jsx)(U,{})})]})})]})}n(41);i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(s.a,{children:Object(l.jsx)(M,{})})}),document.getElementById("root"))},7:function(e,t,n){"use strict";n.d(t,"e",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return j})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return d}));var r=n(6),c=n.n(r),a=n(9);function i(){return(i=Object(a.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if(!(n=e.sent).ok){e.next=9;break}return e.next=6,n.json();case 6:e.t0=e.sent,e.next=10;break;case 9:e.t0=Promise.reject(new Error("Not found"));case 10:return e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function s(){return function(e){return i.apply(this,arguments)}("".concat("https://api.themoviedb.org/3","/trending/movie/week?api_key=fbea9f1423c9f0a1d682ef53259502f7"))}function o(e){return u.apply(this,arguments)}function u(){return(u=Object(a.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=fbea9f1423c9f0a1d682ef53259502f7&language=en-US"));case 2:if(!(n=e.sent).ok){e.next=5;break}return e.abrupt("return",n.json());case 5:return e.next=7,Promise.reject(new Error("Not found"));case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return l.apply(this,arguments)}function l(){return(l=Object(a.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=fbea9f1423c9f0a1d682ef53259502f7&language=en-US"));case 2:if(!(n=e.sent).ok){e.next=5;break}return e.abrupt("return",n.json());case 5:return e.next=7,Promise.reject(new Error("Not found"));case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return f.apply(this,arguments)}function f(){return(f=Object(a.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=fbea9f1423c9f0a1d682ef53259502f7&language=en-US&page=1"));case 2:if(!(n=e.sent).ok){e.next=5;break}return e.abrupt("return",n.json());case 5:return e.next=7,Promise.reject(new Error("Not found"));case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return h.apply(this,arguments)}function h(){return(h=Object(a.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=fbea9f1423c9f0a1d682ef53259502f7&query=".concat(t,"&language=en-US&page=1&include_adult=false"));case 2:if(!(n=e.sent).ok){e.next=5;break}return e.abrupt("return",n.json());case 5:return e.next=7,Promise.reject(new Error("Not found"));case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}},[[42,3,4]]]);
//# sourceMappingURL=main.228a8862.chunk.js.map