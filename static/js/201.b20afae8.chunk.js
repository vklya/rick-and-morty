"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[201],{7609:function(e,n,t){t(2791);n.Z=t.p+"static/media/sprite.07ecdcdb802bb2d393242b39bf99b177.svg"},533:function(e,n,t){t.d(n,{Z:function(){return c}});var r="container_container__UUJsT",a=t(184),c=function(e){var n=e.children;return(0,a.jsx)("div",{className:r,children:n})}},4489:function(e,n,t){t.d(n,{Z:function(){return c}});var r="error_error__n5c5r",a=t(184),c=function(e){return(0,a.jsx)("p",{className:r,children:e})}},276:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(5137),a="loader_loader__5x2cA",c=t(184),s=function(){return(0,c.jsx)("img",{src:r,alt:"loading...",className:a})}},9201:function(e,n,t){t.r(n),t.d(n,{default:function(){return Q}});var r,a=t(5861),c=t(9439),s=t(168),i=t(7757),o=t.n(i),u=t(2791),l=t(1087),d=t(7689),_=t(4390),p=t(6444),f="list_characters__0NDc1",m="list_characters__link__DK8f6",h="list_characters__item__PkFjd",x="list_characters__image__bWnAE",g="list_characters__info__kHACV",v="list_characters__name__bz3gZ",j="list_characters__descr__mLSZX",b=t(184),k=function(e){var n=e.items,t=e.location,r=n.map((function(e){var n=e.id,r=e.image,a=e.name,c=e.species;return(0,b.jsx)(l.rU,{to:"/character/".concat(n),state:{from:t},className:m,children:(0,b.jsxs)("li",{className:h,children:[(0,b.jsx)("img",{loading:"lazy",src:r,alt:a,className:x}),(0,b.jsxs)("div",{className:g,children:[(0,b.jsx)("h2",{className:v,children:a}),(0,b.jsx)("p",{className:j,children:c})]})]})},n)}));return(0,b.jsx)("ul",{className:f,children:r})},N=(0,u.memo)(k),Z=t(7609),w="filter_filter__N-06B",y="filter_filter__input__q4BP-",C="filter_filter__icon__1HnTF",S=function(e){var n=e.value,t=e.onChange;return(0,b.jsxs)("div",{className:w,children:[(0,b.jsx)("input",{className:y,type:"text",value:n,onChange:t,placeholder:"Filter by name..."}),(0,b.jsx)("svg",{className:C,children:(0,b.jsx)("use",{href:Z.Z+"#search"})})]})},A=t(4489),I=t(276),D=t(9155),L=t(8785),T=t(2381),z=t(194),B="hero_hero__5mttg",E=function(){return(0,b.jsxs)("picture",{children:[(0,b.jsx)("source",{srcSet:"".concat(D," 1x, ").concat(T," 2x"),media:"(min-width: 768px)"}),(0,b.jsx)("source",{srcSet:"".concat(L," 1x, ").concat(z," 2x"),media:"(max-width: 767px)"}),(0,b.jsx)("img",{src:L,alt:"Rick and Morty",className:B})]})},F=t(533),P=t(5856),R=(0,t(4702).ZF)({apiKey:"AIzaSyBl-6N9uCnkudXtBd55Qv04yAt7yA5Aky8",authDomain:"rick-and-morty-2c323.firebaseapp.com",projectId:"rick-and-morty-2c323",storageBucket:"rick-and-morty-2c323.appspot.com",messagingSenderId:"755340305126",appId:"1:755340305126:web:74751fa4e75d1ff3a7d127",measurementId:"G-C1CXVE7D1P"}),H=(0,P.v0)(R),J=new P.hJ,M=t(8680),U="login_user__zcloT",X="login_user__logIn__EnnCK",q="login_user__name__bnA-X",K="login_user__logo__NzVlP",O="login_user__logOut__hcDWL",V="user",G=function(){var e=(0,u.useState)((function(){var e=JSON.parse(localStorage.getItem(V));return e||""})),n=(0,c.Z)(e,2),t=n[0],r=n[1];(0,u.useEffect)((function(){localStorage.setItem(V,JSON.stringify(t))}),[t]);return(0,b.jsx)("div",{className:U,children:t.token?(0,b.jsxs)("div",{children:[(0,b.jsxs)("p",{className:q,children:["Hello, ",t.name," ",(0,b.jsx)("span",{children:"\ud83d\udc4b"})]}),(0,b.jsx)("button",{className:O,onClick:function(){r("")},children:"Log out"})]}):(0,b.jsxs)("button",{className:X,onClick:function(){(0,P.rh)(H,J).then((function(e){var n={name:e._tokenResponse.firstName,token:e._tokenResponse.oauthAccessToken};r(n)})).catch((function(e){return alert(e)}))},children:["Log in"," ",(0,b.jsx)("img",{src:M,alt:"Google logo",className:K})]})})},W=p.ZP.h1(r||(r=(0,s.Z)(["\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    margin: -1px;\n    border: 0;\n    padding: 0;\n    white-space: nowrap;\n    clip-path: inset(100%);\n    clip: rect(0 0 0 0);\n    overflow: hidden;\n"])));function Q(){var e,n=(0,u.useState)([]),t=(0,c.Z)(n,2),r=t[0],s=t[1],i=(0,u.useState)(!1),p=(0,c.Z)(i,2),f=p[0],m=p[1],h=(0,u.useState)(""),x=(0,c.Z)(h,2),g=x[0],v=x[1],j=(0,d.TH)(),k=(0,l.lr)(),Z=(0,c.Z)(k,2),w=Z[0],y=Z[1],C=null!==(e=w.get("name"))&&void 0!==e?e:"";(0,u.useEffect)((function(){var e=function(){var e=(0,a.Z)(o().mark((function e(){var n,t,r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=function(e,n){return e.name.localeCompare(n.name)},m(!0),e.next=5,(0,_.q)();case 5:t=e.sent,r=t.results,a=r.sort(n),s(a),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),v(e.t0.message),console.log(e.t0);case 15:return e.prev=15,m(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,11,15,18]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var D=r.filter((function(e){return e.name.toLowerCase().includes(C.toLowerCase())}));return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("header",{children:(0,b.jsx)(G,{})}),(0,b.jsx)("main",{children:(0,b.jsxs)(F.Z,{children:[(0,b.jsx)(W,{children:"Rick and Morty"}),(0,b.jsx)(E,{}),(0,b.jsx)(S,{value:C,onChange:function(e){var n=e.target.value;y({name:n})}}),g&&(0,b.jsx)(A.Z,{text:g}),f?(0,b.jsx)(I.Z,{}):(0,b.jsx)(N,{items:D,location:j})]})})]})}},4390:function(e,n,t){t.d(n,{T:function(){return o},q:function(){return i}});var r=t(5861),a=t(7757),c=t.n(a),s=t(1243).Z.create({baseURL:"https://rickandmortyapi.com/api"}),i=function(){var e=(0,r.Z)(c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/character");case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/character/".concat(n));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},8680:function(e,n,t){e.exports=t.p+"static/media/google.c713f92d5f3e907297e2.webp"},9155:function(e,n,t){e.exports=t.p+"static/media/heroDesk.9222166834b152817534.jpg"},2381:function(e,n,t){e.exports=t.p+"static/media/heroDesk2x.d62f481accb12c916b69.jpg"},8785:function(e,n,t){e.exports=t.p+"static/media/heroMob.6eac6d7e25ac5e93307d.jpg"},194:function(e,n,t){e.exports=t.p+"static/media/heroMob2x.8b4866cb2c0b10bbd9c7.jpg"},5137:function(e,n,t){e.exports=t.p+"static/media/icon.499c4091a07c0fe5bc78.png"}}]);
//# sourceMappingURL=201.b20afae8.chunk.js.map