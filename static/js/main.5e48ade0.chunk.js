(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{27:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(9),i=n(6),c=n(1),s=n(0),r=Object(c.createContext)(),o=function(e){var t=e.children,n=Object(c.useState)("light"),a=Object(i.a)(n,2),o=a[0],l=a[1];Object(c.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");l(e.matches?"dark":"light"),e.addEventListener("change",(function(e){l(e.matches?"dark":"light")}))}),[]);return Object(s.jsx)(r.Provider,{value:[{themeName:o,toggleTheme:function(){var e="dark"===o?"light":"dark";localStorage.setItem("themeName",e),l(e)}}],children:t})},l="https://abhirambj.me/",h="Abhiram B J.",d="Abhiram B J",j="Software Engineer",b="I studied Computer Science Engineering in Hassan-Karnataka-India, worked at innovative startup and Free Software Organizations. I\u2019m interested in the whole visual part of the web and cross platform mobile applications, its usability, performance and accessibility. I\u2019ve lived on planet earth for 21 years and have worked on the web and cross platform mobile applications for 1 of them.",m="https://drive.google.com/file/d/1BnuvnLsccZKOEA-FeFwoG08JwLL2snRL/view?usp=sharing",u={linkedin:"https://www.linkedin.com/in/abhiram-b-j-760439187/",github:"https://github.com/abhirambj",twitter:"https://twitter.com/EL3CTR9N"},p=[{name:"Autoshoppee",description:"This is an E-Commerce web application developed for a client having requirements in the field of automobiles. This application could let users see the price of automombile parts and other services provided by automobiles in bangalore. Once user chooses the part the notification is sent to the vendor and he would quote a price for that and that amount needed to be paid by the customer and it would be delivered to the customer to the given address.",stack:["NextJS","Bulma","FastAPI","PSQL"],company:"Ownacar"},{name:"Autoshoppee Vendor Application",description:"This cross platform mobile application was built for the vendor where he would get orders of automobile parts and services and he would quote a price for the service or part. This is the vendor part for application built above named Autoshoppee",stack:["Flutter","FastAPI","PSQL"],company:"Ownacar"},{name:"Freshchoice Web Application",description:"This is the Admin panel for the freshchoice applications built by our team. This application was built with a minimalistic design and innovative functionalities and some functionalities were generating of a report, adding of orders, deleting and adding categories,etc. Freshchoice outlets are across bangalore and appreciated this project.",stack:["NextJS","TailwindCSS","FastAPI","PSQL"],company:"SMMUD"},{name:"Freshchoice Store Manager Application",description:"This is the application for the store manager where he could maintain all the orders arriving to his store and assign to a delivery boy.",stack:["Ionic","FastAPI","PSQL"],company:"SMMUD"},{name:"Freshchoice Delivery Boy Application",description:"This is the application for the delivery boy where he could get orders assigned to him and deliver to the location given and could change the status of a order after its delivered.",stack:["Ionic","FastAPI","PSQL"],company:"SMMUD"},{name:"Project Team Management System",description:"This project automates the process of creating teams for a department.This was developed by doing minimalistic designs and good working functionalities. The team would be formed automatically by choosing random person from each group that is charecterised based on their CGPA.",stack:["HTML","CSS","PHP","MySQL"],sourceCode:"https://github.com/abhirambj/ptms",company:"Self"},{name:"Student Website For GECM College",description:"The website was developed for the sister college of the college I am pursuing my engineering.This was an opportunity for enhancing my skills on web development.",stack:["HTML","CSS","JavaScript"],livePreview:"http://gecm.in",company:"Government Engineering College, Mosale Hosahalli"}],f=["Data Structures","Algorithms","HTML","CSS","JavaScript","Go Lang","React","Python","TailwindCSS","Material UI","Git","Bulma","NextJS","Flutter","Ionic","Bravo Studio"],O="abhiram.bj@gmail.com",g=n(14),v=n.n(g),x=n(12),k=n.n(x),w=n(16),N=n.n(w),y=n(15),S=n.n(y),_=(n(27),function(){var e=Object(c.useContext)(r),t=Object(i.a)(e,1)[0],n=t.themeName,a=t.toggleTheme,o=Object(c.useState)(!1),l=Object(i.a)(o,2),h=l[0],d=l[1],j=function(){return d(!h)};return Object(s.jsxs)("nav",{className:"center nav",children:[Object(s.jsxs)("ul",{style:{display:h?"flex":null},className:"nav__list",children:[p.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#projects",onClick:j,className:"link link--nav",children:"Projects"})}):null,f.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#skills",onClick:j,className:"link link--nav",children:"Skills"})}):null,O?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#contact",onClick:j,className:"link link--nav",children:"Contact"})}):null]}),Object(s.jsx)("button",{type:"button",onClick:a,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(s.jsx)(k.a,{}):Object(s.jsx)(v.a,{})}),Object(s.jsx)("button",{type:"button",onClick:j,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:h?Object(s.jsx)(S.a,{}):Object(s.jsx)(N.a,{})})]})}),C=(n(33),function(){var e=l,t=h;return Object(s.jsxs)("header",{className:"header center",children:[Object(s.jsx)("h3",{children:e?Object(s.jsx)("a",{href:e,className:"link",children:t}):t}),Object(s.jsx)(_,{})]})}),T=n(10),P=n.n(T),A=n(17),L=n.n(A),I=n(18),F=n.n(I),M=(n(34),function(){var e=d,t=j,n=b,a=m,i=u;return Object(s.jsxs)("div",{className:"about center",children:[e&&Object(s.jsxs)("h1",{children:["Hi, I am ",Object(s.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(s.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(s.jsx)("p",{className:"about__desc",children:n&&n}),Object(s.jsxs)("div",{className:"about__contact center",children:[a&&Object(s.jsx)("a",{href:a,children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),i&&Object(s.jsxs)(s.Fragment,{children:[i.github&&Object(s.jsx)("a",{href:i.github,"aria-label":"github",className:"link link--icon",children:Object(s.jsx)(P.a,{})}),i.linkedin&&Object(s.jsx)("a",{href:i.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(s.jsx)(L.a,{})}),i.twitter&&Object(s.jsx)("a",{href:i.twitter,"aria-label":"twitter",className:"link link--icon",children:Object(s.jsx)(F.a,{})})]})]})]})}),E=n(7),J=n.n(E),B=n(19),H=n.n(B),G=(n(36),function(e){var t=e.project;return Object(s.jsxs)("div",{className:"project",children:[Object(s.jsx)("h3",{children:t.name}),Object(s.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(s.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(s.jsx)("li",{className:"project__stack-item",children:e},J()())}))}),t.sourceCode&&Object(s.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(s.jsx)(P.a,{})}),t.livePreview&&Object(s.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(s.jsx)(H.a,{})}),t.company&&Object(s.jsx)("a",{href:t.company,"aria-label":"company worked for",className:"link link--icon",children:t.company})]})}),Q=(n(37),function(){return p.length?Object(s.jsxs)("section",{id:"projects",className:"section projects",children:[Object(s.jsx)("h2",{className:"section__title",children:"Projects"}),Object(s.jsx)("div",{className:"projects__grid",children:p.map((function(e){return Object(s.jsx)(G,{project:e},J()())}))})]}):null}),D=(n(38),function(){return f.length?Object(s.jsxs)("section",{className:"section skills",id:"skills",children:[Object(s.jsx)("h2",{className:"section__title",children:"Skills"}),Object(s.jsx)("ul",{className:"skills__list",children:f.map((function(e){return Object(s.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},J()())}))})]}):null}),R=n(20),U=n.n(R),q=(n(39),function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e=function(){return window.pageYOffset>500?a(!0):a(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(s.jsx)("div",{className:"scroll-top",children:Object(s.jsx)("a",{href:"#top",children:Object(s.jsx)(U.a,{fontSize:"large"})})}):null}),z=(n(40),function(){return O?Object(s.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(s.jsx)("h2",{className:"section__title",children:"Contact"}),Object(s.jsx)("a",{href:"mailto:".concat(O),children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),K=(n(41),function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("a",{href:"https://abhirambj.me",className:"link footer__link",children:"Created By Abhiram B J"})})}),W=(n(42),function(){var e=Object(c.useContext)(r),t=Object(i.a)(e,1)[0].themeName;return Object(s.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(s.jsx)(C,{}),Object(s.jsxs)("main",{children:[Object(s.jsx)(M,{}),Object(s.jsx)(Q,{}),Object(s.jsx)(D,{}),Object(s.jsx)(z,{})]}),Object(s.jsx)(q,{}),Object(s.jsx)(K,{})]})});n(43);Object(a.render)(Object(s.jsx)(o,{children:Object(s.jsx)(W,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.5e48ade0.chunk.js.map