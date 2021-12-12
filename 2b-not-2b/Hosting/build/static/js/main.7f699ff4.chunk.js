(this["webpackJsonp2b-not-2b"]=this["webpackJsonp2b-not-2b"]||[]).push([[0],{124:function(e,t,a){},125:function(e,t,a){},182:function(e,t,a){},211:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),l=a(21),n=a.n(l),r=(a(79),a(62)),i=a(6),o=(a.p,a(124),a(125),a(15)),j=a(1),d=function(e){return Object(j.jsxs)("section",{className:"Home",children:[Object(j.jsxs)("div",{className:"homeContainer",children:[Object(j.jsx)("legend",{id:"legend",children:"Play Browser"}),Object(j.jsxs)("form",{className:"homeForm",children:[Object(j.jsx)("label",{id:"label",children:"Title"}),Object(j.jsx)("input",{type:"text",name:"title",className:"inputText",defaultValue:e.filterTitle,onChange:function(t){return e.updateTitleFilter(t.target.value)}}),Object(j.jsx)(o.b,{className:"showFilteredLink",to:"/browse",children:Object(j.jsx)("button",{onClick:function(t){e.saveFilters(e.filterTitle,void 0,void 0,void 0)},className:"button showFiltered",children:"Show Matching Plays"})}),Object(j.jsx)(o.b,{className:"showAllLink",to:"/browse",children:Object(j.jsx)("button",{onClick:function(){e.saveFilters("",void 0,void 0,void 0),e.updateTitleFilter("")},className:"button ShowAll",children:"Show All Plays"})})]})]}),Object(j.jsxs)("p",{id:"heroImg",children:["Photo by"," ",Object(j.jsx)("a",{href:"https://unsplash.com/@hulkiokantabak?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Hulki Okan Tabak"})," ","on"," ",Object(j.jsx)("a",{href:"https://unsplash.com/s/photos/shakespeare?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Unsplash"})]})]})},b=(a(31),a(127),a(80),function(e){return Object(j.jsxs)("div",{className:"aboutBox",children:[Object(j.jsxs)("div",{className:"assignInfo",children:[Object(j.jsx)("h1",{id:"assignHead",children:"Assignment 1"}),Object(j.jsx)("h3",{id:"assignSubHead",children:"COMP 4513: Randy Connolly"}),Object(j.jsx)("p",{id:"assignGroup",children:"Designed by: Hatoon Al-Nakshabandi, Dylan Borchert, and Darren Lam"}),Object(j.jsx)("a",{id:"assignGit",href:"https://github.com/dborc610/comp4513-f2021-assign1",children:"github Repo"})]}),Object(j.jsxs)("div",{className:"lists",children:[Object(j.jsxs)("ul",{className:"techUsed",children:[Object(j.jsx)("li",{className:"techItem",children:Object(j.jsx)("h2",{className:"aboutList",children:"Tech Used"})}),Object(j.jsx)("li",{className:"techItem",children:"React-modal"}),Object(j.jsx)("li",{className:"techItem",children:"React-router"}),Object(j.jsx)("li",{className:"techItem",children:"React-router-DOM"}),Object(j.jsx)("li",{className:"techItem",children:"React-tabs"}),Object(j.jsx)("li",{className:"techItem",children:"lodash"}),Object(j.jsx)("li",{className:"techItem",children:"Style-components"}),Object(j.jsx)("li",{className:"techItem",children:"react-highlight-words"})]}),Object(j.jsxs)("ul",{className:"sources",children:[Object(j.jsx)("li",{className:"sourceItem",children:Object(j.jsx)("h2",{className:"aboutList",children:"Sources"})}),Object(j.jsxs)("li",{className:"sourceItem",children:["Heart Logos from:",Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://fonts.google.com/icons?selected=Material+Icons+Outlined:assignment_returned&icon.query=heart",children:"Google Icons"})]}),Object(j.jsxs)("li",{className:"sourceItem",children:["Some button Styling from:",Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://moderncss.dev/css-button-styling-guide/",children:"here"})]}),Object(j.jsxs)("li",{className:"sourceItem",children:["Icons made by:",Object(j.jsx)("a",{target:"_blank",href:"https://www.freepik.com",title:"Freepik",children:"Freepik"}),"from",Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]}),Object(j.jsxs)("li",{className:"sourceItem",children:["Scroll bar styles from:",Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp",children:"here"})]}),Object(j.jsxs)("li",{className:"sourceItem",children:["Hosting tutorial from:",Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.youtube.com/watch?v=aUW5GAFhu6s",children:"here"})]}),Object(j.jsxs)("li",{className:"sourceItem",children:["Loading Animation from",Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://monophy.com/gifs/book-page-flip-turn-lMa32EDsr7NrDwg1no",children:"from"}),"React Tabs Implemetation from:",Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.youtube.com/watch?v=tBaBl7gpYhs",children:"here"})]}),Object(j.jsxs)("li",{className:"sourceItem",children:["Local storage code setup from:",Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://blog.logrocket.com/using-localstorage-react-hooks/",children:"here"})]}),Object(j.jsxs)("li",{className:"sourceItem",children:["About and profile Drawers from:",Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://ant.design/components/drawer/",children:"here"})]})]})]}),Object(j.jsx)("div",{className:"lists",children:Object(j.jsxs)("ul",{className:"sources",children:[Object(j.jsx)("li",{children:Object(j.jsx)("h2",{className:"aboutList",children:"API Links"})}),Object(j.jsxs)("li",{children:["List all plays... ",Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",href:"/api/list",children:"here!"})]}),Object(j.jsxs)("li",{children:["List play by ID... ",Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",href:"/api/play/antony_and_cleopatra",children:"here!"})]}),Object(j.jsxs)("li",{children:["List user by ID ",Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",href:"/api/user/1",children:"here!"})]})]})})]})}),h=a.p+"static/media/theatre.75f92c21.png",u=a(216),O=a(218),x=a(217),p=function(e){var t=Object(s.useState)(),a=Object(i.a)(t,2),c=a[0],l=a[1],n=Object(s.useState)(!1),r=Object(i.a)(n,2),d=r[0],p=r[1],f=Object(s.useState)(!1),m=Object(i.a)(f,2),v=m[0],g=m[1];Object(s.useEffect)((function(){if(!c){fetch("/currentUser").then((function(e){return e.json()})).then((function(e){var t="/api/user/"+e[0].id;fetch(t).then((function(e){return e.json()})).then((function(e){l(e[0])}))}))}}),[]);var y=function(){p(!0)},N=function(){p(!1)},C=function(){if(c)return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{children:[Object(j.jsxs)("h1",{children:[c.details.firstname," ",c.details.lastname]}),Object(j.jsxs)("p",{children:[c.details.city,", ",c.details.country]}),Object(j.jsxs)("p",{children:["Email: ",c.email]}),Object(j.jsxs)("p",{children:["Date joined: ",c.membership.date_joined]}),Object(j.jsxs)("p",{children:["Likes: ",c.membership.likes]}),Object(j.jsx)("img",{src:c.picture.large})]})})};return Object(j.jsxs)("nav",{className:"header",id:"appHeader",children:[Object(j.jsx)("div",{children:Object(j.jsx)(o.b,{to:"/",children:Object(j.jsx)("img",{src:h,height:"50",alt:"back to home",title:"Back to Home"})})}),Object(j.jsxs)("div",{children:[Object(j.jsxs)(x.a,{type:"primary",className:"buttonThin buttonSolid",onClick:function(){g(!0)},children:[" ","About"," "]}),Object(j.jsx)(O.a,{title:"About",placement:"top",closable:!0,onClose:function(){g(!1)},visible:v,size:"large",children:Object(j.jsx)(b,{})})]}),Object(j.jsx)("div",{children:Object(j.jsx)("a",{href:"/logout",children:Object(j.jsx)("button",{className:"buttonThin buttonSolid",children:"Logout"})})}),function(){if(c)return Object(j.jsxs)("div",{children:[Object(j.jsx)(u.a,{size:64,icon:c.picture.large,onClick:y}),Object(j.jsx)(O.a,{title:"Profile",placement:"right",closable:!0,onClose:N,visible:d,children:C()})]})}()]})},f=function(e){return Object(j.jsxs)("tr",{className:"favItem",children:[Object(j.jsx)(o.b,{to:"/details",className:"titleLink",onClick:function(){e.updateCurrentPlay(e.play),e.updateInfo(e.info),e.play.filename||e.toggleReadText()},children:Object(j.jsx)("td",{children:e.play.title})}),Object(j.jsx)("td",{className:"trashIcon",children:Object(j.jsx)("div",{onClick:function(){e.updateFavorites(e.play)},className:"favDelete",children:Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[Object(j.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(j.jsx)("path",{d:"M14.12 10.47L12 12.59l-2.13-2.12-1.41 1.41L10.59 14l-2.12 2.12 1.41 1.41L12 15.41l2.12 2.12 1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"})]})})})]})},m=function(e){return Object(j.jsxs)("aside",{className:"favorites",children:[Object(j.jsxs)("div",{className:"hideFavs tableArea",children:[Object(j.jsx)("h2",{children:"Favorites"}),Object(j.jsx)("div",{className:"favListTable",children:Object(j.jsxs)("table",{children:[Object(j.jsxs)("tr",{className:"listHeader",children:[Object(j.jsx)("th",{className:"listTitle",children:"Title"}),Object(j.jsx)("th",{})]}),e.favorites.map((function(t){return Object(j.jsx)(f,{play:t,updateFavorites:e.updateFavorites,updateCurrentPlay:e.updateCurrentPlay,updateInfo:e.updateInfo,info:e.info,fileExists:e.fileExists})}))]})})]}),Object(j.jsx)("div",{onClick:function(){"expandFavs"===e.favoriteCollapse?e.setFavoriteCollapse("collapseFavs"):e.setFavoriteCollapse("expandFavs")},className:"favoriteCollapseButton",children:Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#ffffff",children:[Object(j.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(j.jsx)("path",{d:"M10 17l5-5-5-5v10z"})]})})]})},v=function(e){var t=Object(s.useState)(!1),a=Object(i.a)(t,2),c=a[0],l=a[1],n=Object(s.useState)(),r=Object(i.a)(n,2),o=r[0],d=r[1],b=Object(s.useState)(),h=Object(i.a)(b,2),u=h[0],O=h[1],x=Object(s.useState)(),p=Object(i.a)(x,2),f=p[0],m=p[1],v=Object(s.useState)("More Filters >"),g=Object(i.a)(v,2),y=g[0],N=g[1],C=function(){var t=e.plays.map((function(e){return e.genre}));return t.filter((function(e,a){return t.indexOf(e)===a})).map((function(e){return Object(j.jsx)("option",{defaultValue:f,onClick:k,children:e})}))},F=function(e){d(e.target.value)},S=function(e){O(e.target.value)},k=function(e){m(e.target.value)};return Object(j.jsx)("section",{className:"playFilters",children:Object(j.jsxs)("form",{className:"filter",onSubmit:function(t){t.preventDefault(),e.saveFilters(e.filterTitle,o,u,f)},children:[Object(j.jsxs)("div",{className:"titleDiv",children:[Object(j.jsx)("label",{id:"label",children:"Title"}),Object(j.jsx)("input",{type:"text",name:"title",className:"inputText",defaultValue:e.filterTitle,onChange:function(t){e.updateTitleFilter(t.target.value)}}),Object(j.jsxs)("div",{className:"buttonGroup",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{type:"submit",className:"buttonThin",children:"Filter"}),Object(j.jsx)("button",{onClick:function(){e.saveFilters("","","",""),e.updateTitleFilter(""),d(),O(),m()},value:"Reset",type:"reset",className:"buttonThin extraSpace",children:"Clear"})]}),Object(j.jsx)("button",{type:"button",className:"buttonThin moreFilters",onClick:function(){l(!c),N(c?"More Filters >":"Less Filters <")},children:y})]}),Object(j.jsx)("p",{className:"filterResults",children:e.resultStatus})]}),function(){if(c)return Object(j.jsxs)("div",{className:"clickedForm",children:[Object(j.jsx)("label",{id:"label",children:"Year"}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("label",{id:"label",children:["From",Object(j.jsx)("input",{type:"text",name:"before",className:"inputYear",value:o,onChange:F})]}),Object(j.jsx)("label",{id:"label",children:"Genre"}),Object(j.jsxs)("select",{name:"genre",onClick:k,children:[Object(j.jsx)("option",{value:"",children:"Select a Genre"}),C()]}),Object(j.jsxs)("label",{id:"label",className:"after",children:["To",Object(j.jsx)("input",{type:"text",name:"after",className:"inputYear",defaultValue:u,onChange:S})]})]})]})}()]})})};a(182);var g=function(e){var t=Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#14213dff",children:[Object(j.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(j.jsx)("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"})]}),a=Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#2e4b8aff",children:[Object(j.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(j.jsx)("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"})]});return Object(j.jsx)("div",{className:e.favoriteStatus,onClick:function(){e.updateFavorites(e.play),e.updateHeartClassName()},children:e.favorites.find((function(t){return t.id===e.play.id}))?t:a})},y=function(e){var t=Object(s.useState)("favoriteHeartOutline"),a=Object(i.a)(t,2),c=a[0],l=a[1],n=function(){e.updateCurrentPlay(e.play),e.updateInfo(e.info)};return Object(j.jsxs)("tr",{className:"playItem",children:[Object(j.jsx)(o.b,{to:"/details",className:"titleLink",onClick:n,children:Object(j.jsx)("td",{children:e.play.title})}),Object(j.jsx)("td",{className:"listItemYear",children:e.play.likelyDate}),Object(j.jsx)("td",{children:Object(j.jsx)(o.b,{to:"/details",children:e.play.filename?Object(j.jsx)("button",{className:"buttonThin singleViewButton",onClick:n,children:Object(j.jsx)("span",{children:"View \ud83d\udcd6"})}):Object(j.jsx)("button",{className:"buttonThin singleViewButton",onClick:n,children:Object(j.jsx)("span",{children:"View"})})})}),Object(j.jsx)("td",{children:Object(j.jsx)(g,{play:e.play,updateFavorites:e.updateFavorites,favoriteStatus:c,favorites:e.favorites,updateHeartClassName:function(){l("favoriteHeartOutline"===c?"favoriteHeartSolid":"favoriteHeartOutline")}})})]})},N=a.p+"static/media/loading.27044e74.gif",C=function(e){var t=function(e){return Object(j.jsx)("p",{children:Object(j.jsx)("span",{children:e})})},a=Object(s.useState)(t("Title")),c=Object(i.a)(a,2),l=c[0],n=c[1],r=Object(s.useState)(t("Year")),o=Object(i.a)(r,2),d=o[0],b=o[1],h=Object(s.useState)(0),u=Object(i.a)(h,2),O=u[0],x=u[1],p=Object(s.useState)(0),f=Object(i.a)(p,2),m=f[0],v=f[1],g=function(e){return Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{children:e}),"\u25b2"]})},C=function(e){return Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{children:e}),"\u2bc6"]})};return Object(j.jsxs)("section",{className:"playList",children:[Object(j.jsx)("h2",{children:"List/Matches"}),Object(j.jsx)("div",{className:"is"+e.loadedDataStatus,children:Object(j.jsx)("img",{src:N,className:"loadingAnimation"})}),Object(j.jsx)("div",{className:"playListTable "+e.loadedDataStatus,children:Object(j.jsxs)("table",{children:[Object(j.jsxs)("tr",{className:"listHeader",children:[Object(j.jsx)("th",{className:"listTitle",onClick:function(){switch(v(0),b(t("Year")),O){case 0:x(1),n(C("Title")),e.sortPlays(1,0);break;case 1:x(2),n(g("Title")),e.sortPlays(2,0);break;case 2:x(0),n(t("Title")),e.sortPlays(0,0)}},children:l}),Object(j.jsx)("th",{className:"listYear",onClick:function(){switch(x(0),n(t("Title")),m){case 0:v(1),b(C("Year")),e.sortPlays(0,1);break;case 1:v(2),b(g("Year")),e.sortPlays(0,2);break;case 2:v(0),b(t("Year")),e.sortPlays(0,0)}},children:d}),Object(j.jsx)("th",{className:"viewbtn",children:" "}),Object(j.jsx)("th",{className:"favbtn",children:" "})]}),e.plays.map((function(t){return Object(j.jsx)(y,{play:t,updateCurrentPlay:e.updateCurrentPlay,updateFavorites:e.updateFavorites,favorites:e.favorites,info:e.info,updateInfo:e.updateInfo})}))]})})]})},F=function(e){return Object(j.jsxs)("section",{className:"playBrowser "+e.favoriteCollapse,children:[Object(j.jsx)(p,{}),Object(j.jsx)(m,{updateFavorites:e.updateFavorites,favorites:e.favorites,plays:e.plays,updateCurrentPlay:e.updateCurrentPlay,favoriteCollapse:e.favoriteCollapse,setFavoriteCollapse:e.setFavoriteCollapse,info:e.info,updateInfo:e.updateInfo}),Object(j.jsx)(v,{plays:e.plays,saveFilters:e.saveFilters,filterTitle:e.filterTitle,updateTitleFilter:e.updateTitleFilter,resultStatus:e.resultStatus}),Object(j.jsx)(C,{plays:e.plays,updateFavorites:e.updateFavorites,favorites:e.favorites,updateCurrentPlay:e.updateCurrentPlay,sortPlays:e.sortPlays,info:e.info,updateInfo:e.updateInfo,loadedDataStatus:e.loadedDataStatus})]})},S=a.p+"static/media/wikipedia.8685c815.jpg",k=a.p+"static/media/gutenberg.adf02b7d.jpg",w=a.p+"static/media/shakespeare.05a2bba5.jpg",T=(a(51),function(e){return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"detailItems",children:[Object(j.jsxs)("div",{className:"playDetailsTab",children:[Object(j.jsxs)("p",{children:["Composition: ",e.play.likelyDate]}),Object(j.jsxs)("p",{children:["Genre: ",e.play.genre]}),Object(j.jsxs)("div",{className:"webLinks",children:[Object(j.jsx)("a",{target:"_blank",href:e.play.wiki,children:Object(j.jsx)("img",{src:S,title:"Wiki",className:"webIcon"})}),Object(j.jsx)("a",{target:"_blank",href:e.play.gutenberg,children:Object(j.jsx)("img",{src:k,title:"Gutenberg",className:"webIcon"})}),Object(j.jsx)("a",{target:"_blank",href:e.play.shakespeareOrg,children:Object(j.jsx)("img",{src:w,title:"Shakespeare Org",className:"webIcon"})})]}),Object(j.jsxs)("p",{children:["Description: ",e.play.desc]})]}),Object(j.jsx)("div",{className:"closeButton",children:Object(j.jsx)(o.b,{to:"/browse",children:Object(j.jsx)("button",{className:"button",children:"Close \u2716"})})})]})})}),I=function(e){return Object(j.jsx)("div",{className:"playCharacters",children:Object(j.jsx)("div",{className:"playCharactersTable",children:Object(j.jsxs)("table",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Character"}),Object(j.jsx)("th",{children:"Description"})]}),e.chars.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.player}),Object(j.jsx)("td",{children:e.desc})]})}))]})})})},D=a(19),L=(a(185),function(e){return e.fileExists?Object(j.jsxs)(D.d,{defaultIndex:0,children:[Object(j.jsxs)(D.b,{children:[Object(j.jsx)(D.a,{children:"Details"}),Object(j.jsx)(D.a,{children:"Characters"})]}),Object(j.jsxs)(D.b,{children:[Object(j.jsxs)(D.c,{children:[" ",Object(j.jsx)(T,{play:e.play})]}),Object(j.jsxs)(D.c,{children:[" ",Object(j.jsx)(I,{chars:e.chars})]})]})]}):Object(j.jsxs)(D.d,{defaultIndex:0,children:[Object(j.jsx)(D.b,{children:Object(j.jsx)(D.a,{children:"Details"})}),Object(j.jsx)(D.b,{children:Object(j.jsxs)(D.c,{children:[" ",Object(j.jsx)(T,{play:e.play})]})})]})}),P=function(e){var t=function(){e.fileExists&&e.toggleReadText()};return Object(j.jsx)("div",{className:"outer",children:Object(j.jsxs)("div",{className:"playDetailsMain tabs",children:[Object(j.jsx)("div",{className:"synopsis",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:" Synopsis:"}),Object(j.jsxs)("p",{children:[" ",e.play.synopsis]}),Object(j.jsx)("button",{className:e.fileExists?"button":"button sadbutton",title:e.fileExists?"Read Text":"No Text Available",onClick:t,children:"Read\ud83d\udcd6"})]})}),Object(j.jsx)("div",{className:"detailsAndChar",children:Object(j.jsx)(L,{chars:e.chars,play:e.play,fileExists:e.fileExists})})]})})},H=function(e){return Object(j.jsx)("section",{className:"",children:Object(j.jsxs)("div",{className:"formArea",children:[Object(j.jsx)("p",{children:"TextForm"}),Object(j.jsx)("form",{className:"form",children:Object(j.jsxs)("div",{className:"form",children:[Object(j.jsx)("label",{id:"act",children:"Act"}),Object(j.jsxs)("select",{name:"act",onChange:e.handleActChange,children:[Object(j.jsx)("option",{value:"",children:"Select an Act"}),e.text?e.text.map((function(e){return e.name})).map((function(t){return Object(j.jsx)("option",{defaultValue:t,onClick:e.handleActChange,children:t})})):(console.log(e.text),Object(j.jsx)("p",{children:"error rendering text"}))]}),Object(j.jsx)("label",{id:"scene",children:"Scene"}),Object(j.jsxs)("select",{name:"scene",onChange:e.handleSceneChange,children:[Object(j.jsx)("option",{value:"",children:"Select a Scene"}),e.actForm?e.text.find((function(t){return e.actForm===t.name})).scenes.map((function(e){return e.name})).map((function(t){return Object(j.jsx)("option",{defaultValue:t,onClick:e.handleSceneChange,children:t})})):(console.log(e.actForm),null)]}),Object(j.jsx)("label",{id:"character",children:"Character"}),Object(j.jsxs)("select",{name:"character",onChange:e.handleCharacterChange,children:[Object(j.jsx)("option",{value:"",children:"Select a Character"}),e.characters?e.chars.map((function(e){return e.player})).map((function(t){return Object(j.jsx)("option",{defaultValue:t,onClick:e.handleCharacterChange,children:t})})):(console.log(e.characters),Object(j.jsx)("p",{children:"error rendering text"}))]}),Object(j.jsxs)("label",{id:"searchTerm",children:[Object(j.jsx)("p",{children:"Search"}),Object(j.jsx)("input",{onChange:e.updateSearch,type:"text",name:"term",className:"searchTerm"})]})]})}),Object(j.jsx)("button",{className:"button",onClick:e.toggleReadText,children:"Back \ud83d\udcd8"})]})})},_=(a(73),a(113)),R=a.n(_),E=function(e){var t=function(t,a){return Object(j.jsx)(R.a,{searchWords:e.playSearchWord,autoEscape:!0,textToHighlight:""+t.lines})};return Object(j.jsx)("div",{className:"scene",children:e.act.scenes.map((function(a){if(a.name===e.sceneForm||!e.sceneForm)return Object(j.jsxs)("div",{className:"subScene",children:[Object(j.jsxs)("h2",{className:"sceneName",children:[a.name," - ",a.title]}),Object(j.jsx)("h2",{className:"sceneDirec",children:a.stageDirection}),a.speeches.map((function(a){if(a.speaker===e.characterForm||!e.characterForm)return Object(j.jsxs)("div",{className:"sceneLine",children:[Object(j.jsx)("h3",{children:a.speaker}),Object(j.jsx)("p",{children:t(a)})]})}))]})}))})},A=function(e){if(e.info.acts){var t=e.info;return Object(j.jsxs)("section",{className:"scriptText",children:[Object(j.jsx)("h1",{className:"playTitle",children:t.title}),t.acts.map((function(t){if(t.name===e.actForm||!e.actForm)return Object(j.jsxs)("div",{className:"act",children:[Object(j.jsx)("h2",{className:"actName",children:t.name}),Object(j.jsx)(E,{act:t,actName:t.name,actForm:e.actForm,sceneForm:e.sceneForm,characterForm:e.characterForm,playSearchWord:e.playSearchWord})]})}))]})}return null},M=function(e){var t=Object(s.useState)(""),a=Object(i.a)(t,2),c=a[0],l=a[1],n=Object(s.useState)(""),r=Object(i.a)(n,2),o=r[0],d=r[1],b=Object(s.useState)(""),h=Object(i.a)(b,2),u=h[0],O=h[1],x=Object(s.useState)([""]),p=Object(i.a)(x,2),f=p[0],m=p[1];return Object(j.jsxs)("section",{className:"playText",children:[Object(j.jsx)("div",{className:"textForm",children:Object(j.jsx)(H,{toggleReadText:e.toggleReadText,text:e.text,chars:e.chars,actForm:c,sceneForm:o,characterForm:u,updateSearch:function(e){m([e.target.value])},handleActChange:function(e){return l(e.target.value)},handleSceneChange:function(e){return d(e.target.value)},handleCharacterChange:function(e){return O(e.target.value)}})}),Object(j.jsx)("div",{className:"scriptText",children:Object(j.jsx)(A,{play:e,info:e.info,playSearchWord:f,actForm:c,sceneForm:o,characterForm:u})})]})},B=(a(186),function(e){var t=Object(s.useState)(!1),a=Object(i.a)(t,2),c=(a[0],a[1],Object(s.useState)("favoriteHeartOutline")),l=Object(i.a)(c,2),n=l[0],r=l[1];Object(s.useEffect)((function(){if(e.play.filename){e.updateFileExists(!0);var t="/api/play/"+e.play.id;fetch(t).then((function(e){return e.json()})).then((function(t){console.log(t[0].playText),e.updateText(t[0].playText.acts),e.updateChars(t[0].playText.persona),e.updateInfo(t[0].playText)}))}else e.updateFileExists(!1);console.log("show text")}),[e.play,e.readText]);return Object(j.jsxs)("section",{className:"playDetails "+e.favoriteCollapse,children:[Object(j.jsx)(p,{}),Object(j.jsxs)("section",{className:"title",children:[Object(j.jsx)(g,{play:e.play,updateFavorites:e.updateFavorites,favoriteStatus:n,favorites:e.favorites,updateHeartClassName:function(){r("favoriteHeartOutline"===n?"favoriteHeartSolid":"favoriteHeartOutline")}}),Object(j.jsx)("h2",{children:e.play.title})]}),Object(j.jsx)(m,{updateFavorites:e.updateFavorites,favorites:e.favorites,plays:e.plays,updateCurrentPlay:e.updateCurrentPlay,favoriteCollapse:e.favoriteCollapse,setFavoriteCollapse:e.setFavoriteCollapse,info:e.info,updateInfo:e.updateInfo,fileExists:e.fileExists}),e.readText?Object(j.jsx)(M,{play:e.play,toggleReadText:e.toggleReadText,chars:e.chars,text:e.text,info:e.info}):Object(j.jsx)(P,{play:e.play,chars:e.chars,fileExists:e.fileExists,toggleReadText:e.toggleReadText})]})}),V=a(7),z=a(114);var Y=function(){var e=Object(s.useState)("loading"),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(s.useState)((function(){var e=localStorage.getItem("plays");return JSON.parse(e)||[]})),n=Object(i.a)(l,2),o=n[0],b=n[1],h=Object(s.useState)([]),u=Object(i.a)(h,2),O=u[0],x=u[1],p=Object(s.useState)([]),f=Object(i.a)(p,2),m=f[0],v=f[1],g=Object(s.useState)([]),y=Object(i.a)(g,2),N=y[0],C=y[1],S=Object(s.useState)((function(){var e=localStorage.getItem("favorites");return JSON.parse(e)||[]})),k=Object(i.a)(S,2),w=k[0],T=k[1],I=Object(s.useState)(""),D=Object(i.a)(I,2),L=D[0],P=D[1],H=Object(s.useState)((function(){var e=localStorage.getItem("curPlay");return JSON.parse(e)||o[0]})),_=Object(i.a)(H,2),R=_[0],E=_[1],A=Object(s.useState)("expandFavs"),M=Object(i.a)(A,2),Y=M[0],G=M[1],J=Object(s.useState)(""),W=Object(i.a)(J,2),U=W[0],q=W[1],K=Object(s.useState)(),Q=Object(i.a)(K,2),X=Q[0],Z=Q[1],$=Object(s.useState)(!1),ee=Object(i.a)($,2),te=ee[0],ae=ee[1],se=Object(s.useState)(!1),ce=Object(i.a)(se,2),le=ce[0],ne=ce[1],re=Object(s.useState)([]),ie=Object(i.a)(re,2),oe=ie[0],je=ie[1],de=Object(s.useState)([]),be=Object(i.a)(de,2),he=be[0],ue=be[1],Oe=function(e){console.warn(e),Z(e),je(e.acts),ue(e.persona)},xe=function(e){E(e),localStorage.setItem("curPlay",JSON.stringify(e))},pe=function(e){var t=z(w),a=t.find((function(t){return t.id===e.id}));if(a){var s=t.indexOf(a);t.splice(s,1),console.log("removed!")}else t.push(e),console.log("added!");T(t),localStorage.setItem("favorites",JSON.stringify(t))};Object(s.useEffect)((function(){if("loading"===a){c("loading");fetch("/api/list").then((function(e){return e.json()})).then((function(e){b(e),localStorage.setItem("plays",JSON.stringify(e)),x(e),v(e),C(e),c("")})).catch((function(e){return console.error(e)}))}}),[oe]);var fe=function(e,t,a,s){var c=Object(r.a)(o);e&&(c=c.filter((function(t){return t.title.toLowerCase().includes(e.toLowerCase())})),P(e)),t&&(c=c.filter((function(e){return e.likelyDate>=t}))),a&&(c=c.filter((function(e){return e.likelyDate<=a}))),s&&(c=c.filter((function(e){return e.genre===s}))),x(c),v(c),C(c),c.length>0?1===c.length?q("".concat(c.length," Result")):q("".concat(c.length," Results")):q("No Results Found")};return Object(j.jsxs)(V.c,{children:[Object(j.jsx)(V.a,{path:"/",element:Object(j.jsx)(d,{plays:O,favorites:w,saveFilters:fe,updateFavorites:pe,filterTitle:L,updateTitleFilter:P})}),Object(j.jsx)(V.a,{path:"/browse",element:Object(j.jsx)(F,{plays:O,favorites:w,saveFilters:fe,updateFavorites:pe,filterTitle:L,updateTitleFilter:P,updateCurrentPlay:xe,sortPlays:function(e,t){var a=Object(r.a)(m);e>0?a.sort((function(t,a){return 1===e?t.title>a.title?1:-1:2===e?t.title<a.title?1:-1:0})):t>0?a.sort((function(e,a){return 1===t?e.likelyDate>a.likelyDate?1:-1:2===t?e.likelyDate<a.likelyDate?1:-1:0})):a=Object(r.a)(N),x(a)},favoriteCollapse:Y,setFavoriteCollapse:G,resultStatus:U,info:X,updateInfo:Oe,loadedDataStatus:a})}),Object(j.jsx)(V.a,{path:"/details",element:Object(j.jsx)(B,{plays:O,favorites:w,updateFavorites:pe,updateCurrentPlay:xe,play:R,favoriteCollapse:Y,setFavoriteCollapse:G,info:X,updateInfo:Oe,fileExists:te,updateFileExists:function(e){console.log(e),ae(e)},readText:le,toggleReadText:function(){ne(!le)},text:oe,chars:he,updateText:function(e){je(e)},updateChars:function(e){return ue(e)}})})]})},G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,219)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,l=t.getLCP,n=t.getTTFB;a(e),s(e),c(e),l(e),n(e)}))};n.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(o.a,{children:Object(j.jsx)(Y,{})})}),document.getElementById("root")),G()},31:function(e,t,a){},51:function(e,t,a){},73:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){}},[[211,1,2]]]);
//# sourceMappingURL=main.7f699ff4.chunk.js.map