(this.webpackJsonpmovie_app_02=this.webpackJsonpmovie_app_02||[]).push([[0],{45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),r=n(19),a=n.n(r),s=n(20),o=n(5),j=n.n(o),d=n(9),l=n(3),u=n(7),b=n(10),h=n.n(b),O=n(0);var v=function(e){e.api;var t=e.movies,n=e.onNomination;return Object(O.jsx)("div",{id:"resultFor",children:Object(O.jsx)("ul",{children:t.map((function(e){return Object(O.jsxs)("li",{children:[Object(O.jsx)("span",{className:"hidden",children:e.imdbID}),e.Title," (",e.Year,")",Object(O.jsx)("button",{onClick:n,children:"Nominate"})]},e.imdbID)}))})})};n(45);var x=function(e){e.banner;var t=e.setBanner;return Object(O.jsx)("div",{className:"banner",children:Object(O.jsx)("div",{className:"banner__content",children:Object(O.jsxs)("div",{className:"banner__text",children:[Object(O.jsx)("strong",{children:"Reminder: "})," You can nominate up to 5 movies",Object(O.jsx)("button",{class:"button__close",onClick:function(){t(!1)},children:"close"})]})})})};var f=function(e){var t=e.nominees,n=e.setNominees,c=function(e){var c=e.target.parentElement.firstChild.innerText;console.log(c),n(t.filter((function(e){return e.id!==c})))};return Object(O.jsx)("div",{id:"nominations",children:Object(O.jsx)("ul",{children:t.map((function(e){return Object(O.jsxs)("li",{children:[Object(O.jsx)("span",{className:"hidden",children:e.id}),e.title," (",e.year,")",Object(O.jsx)("button",{onClick:c,children:"Remove"})]})}))})})};var m=function(){var e=Object(c.useState)({text:"",movies:[],find:!0}),t=Object(u.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)([]),a=Object(u.a)(r,2),o=a[0],b=a[1],m=Object(c.useState)(!1),p=Object(u.a)(m,2),g=p[0],_=p[1],w=n.text,N=n.movies,k=n.find,y=Object(c.useRef)(),C="https://www.omdbapi.com/?apikey=9cbee72",S=function(){var e=Object(d.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(C,"&&s=").concat(w));case 2:t=e.sent,c=t.data.Search,i(void 0===c?Object(l.a)(Object(l.a)({},n),{},{find:!1}):Object(l.a)(Object(l.a)({},n),{},{movies:c,find:!0})),y.current.focus();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(d.a)(j.a.mark((function e(t){var n,c,i,r,a,d,l,u;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=function(e){for(var t=0;t<e.length;t++)if(e[t].id===l.id)return!0;return!1},n=t.target.parentElement.firstChild.innerText,c="".concat(C,"&i=").concat(n),e.next=5,h.a.get(c);case 5:i=e.sent,r=i.data.imdbID,a=i.data.Year,d=i.data.Title,l={id:r,year:a,title:d},o.length<5?u(o)?(console.log(u(o)),console.log("duplicate!!")):b([].concat(Object(s.a)(o),[l])):_(!0);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{children:[g&&Object(O.jsx)(x,{banner:g,setBanner:_}),Object(O.jsx)("h1",{children:"Movie_app_02"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:"Movie title"}),Object(O.jsx)("input",{style:{width:"300px"},onChange:function(e){i(Object(l.a)(Object(l.a)({},n),{},{text:e.target.value}))},value:w,placeholder:"Enter a title to search",ref:y}),Object(O.jsx)("button",{onClick:S,children:"submit"})]}),Object(O.jsxs)("div",{children:[k?Object(O.jsx)(v,{api:C,movies:N,onNomination:E}):Object(O.jsx)("h3",{children:"We can not find any movie with the offered information"}),Object(O.jsx)(f,{nominees:o,setNominees:b})]})]})};var p=function(){return Object(O.jsx)("div",{children:Object(O.jsx)(m,{})})};a.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(p,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.92161f8d.chunk.js.map