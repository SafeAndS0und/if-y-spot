(window.webpackJsonptotallynotspotify=window.webpackJsonptotallynotspotify||[]).push([[0],{21:function(e,t,a){e.exports=a(69)},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n,c=a(0),r=a.n(c),l=a(3),i=a.n(l),s=(a(26),a(1)),o=(a(27),a(6)),u=(a(28),a(2)),A=a(70),m=(a(29),function(e){var t=e.children,a=e.toggle;return r.a.createElement(A.a,{in:a,timeout:700,unmountOnExit:!0,classNames:"fade"},t)}),d=function(){var e=Object(c.useState)(0),t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)(function(){n(document.documentElement.clientWidth);var e=function(){n(document.documentElement.clientWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}},[]),a},f=function(){var e=d(),t=Object(c.useState)([{icon:u.j,text:"Search",show:!1},{icon:u.h,text:"Favorites",show:!1},{icon:u.i,text:"Playlists",show:!1},{icon:u.n,text:"Artists",show:!1},{icon:u.g,text:"Stats",show:!1}]),a=Object(s.a)(t,2),n=a[0],l=a[1];return Object(c.useEffect)(function(){n.forEach(function(e,t){setTimeout(function(){l(function(e){return[].concat(Object(o.a)(e.slice(0,t)),[Object.assign({},e[t],{show:!0})],Object(o.a)(e.slice(t+1)))})},200*t)})},[]),r.a.createElement("nav",null,r.a.createElement("div",{className:"brand"},r.a.createElement("h3",null,"totallynotspotify")),r.a.createElement("div",{className:"menu",style:{display:e>1100?"grid":"none"}},r.a.createElement("ul",null,n.map(function(e,t){return r.a.createElement(m,{key:e.text,toggle:e.show},r.a.createElement("li",{className:1===t?"active":null},r.a.createElement(e.icon,{className:"icon"}),r.a.createElement("p",null,e.text)))}))))},E=(a(34),function(e){var t=e.children,a=e.playing,n=e.url,l=e.setPlaying,i=e.onSongChange,o=e.proportion,u=e.ended,A=e.loop,m=e.volume,d=Object(c.useState)(new Audio(n)),f=Object(s.a)(d,2),E=f[0],b=f[1];return Object(c.useEffect)(function(){if(a){var e=E.play();void 0!==e&&e.catch(function(e){return console.error(e.message)})}else E.pause()},[a]),Object(c.useEffect)(function(){l(!1),E.pause(),b(function(){var e=new Audio(n);return e.addEventListener("loadedmetadata",function(){i(e.duration)}),e.addEventListener("ended",function(){return u(e.duration)}),e.volume=m/10,e.loop=A,e})},[n]),Object(c.useEffect)(function(){var e=E.duration*(.01*o);isNaN(e)||(E.currentTime=e)},[o]),Object(c.useEffect)(function(){E.loop=A},[A]),Object(c.useEffect)(function(){E.volume=m/10},[m]),r.a.createElement(r.a.Fragment,null,t)}),b=(a(35),function(e){var t=e.currentVolume,a=e.setCurrentVolume,n=Object(c.useState)([1,2,3,4,5,6,7,8,9,10]),l=Object(s.a)(n,1)[0];return r.a.createElement("div",{className:"volume-slider"},r.a.createElement(u.o,null),r.a.createElement("div",{className:"steps"},l.map(function(e){return r.a.createElement("span",{key:e,style:{backgroundColor:e>t?"#E4E4E4":"#b385ff"},onClick:function(){return a(e)}})})),r.a.createElement(u.p,null))}),p=function(e){var t=Math.round(e),a=parseInt(t/60),n=t-60*a;return"".concat(a>9?a:"0"+a,":").concat(n>9?n:"0"+n)},g=function(e){var t=e.currentSong,a=Object(c.useState)(0),l=Object(s.a)(a,2),i=l[0],o=l[1],A=Object(c.useState)(!1),m=Object(s.a)(A,2),d=m[0],f=m[1],g=Object(c.useState)(0),S=Object(s.a)(g,2),v=S[0],h=S[1],y=Object(c.useState)("0 15px auto"),O=Object(s.a)(y,2),j=O[0],N=O[1],w=Object(c.useState)(0),L=Object(s.a)(w,2),z=L[0],M=L[1],T=Object(c.useState)(0),k=Object(s.a)(T,2),V=k[0],x=k[1],K=Object(c.useState)(!1),G=Object(s.a)(K,2),U=G[0],C=G[1],R=Object(c.useState)(!1),X=Object(s.a)(R,2),J=X[0],Q=X[1],Z=Object(c.useState)(3),D=Object(s.a)(Z,2),W=D[0],B=D[1],q=null;Object(c.useEffect)(function(){var e=function(){o(function(){return q.clientWidth})};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}},[]);var I=function(){M(0),Y(0),h(0)},P=function(e){clearInterval(n),M(0),Y(0),x(e),h(0),f(!1)},Y=function(e){N("".concat(e,"% 15px auto"))};return r.a.createElement("footer",null,r.a.createElement("section",{className:"now-playing"},r.a.createElement("img",{src:t.imgURL,alt:"artist"}),r.a.createElement("div",{className:"author"},r.a.createElement("h3",null,t.title),r.a.createElement("p",null,t.artist))),r.a.createElement("section",{className:"controls"},r.a.createElement(u.k,{className:"control"}),r.a.createElement(E,{playing:d,volume:W,setPlaying:f,url:t.url,onSongChange:P,ended:P,loop:U,proportion:v},d?r.a.createElement(u.d,{className:"control play",onClick:function(){f(!d),clearInterval(n)}}):r.a.createElement(u.e,{className:"control play",onClick:function(){f(!d),n=setInterval(function(){M(function(e){console.log("asd");var t=e+1;return t>=V&&I(),Y(Math.floor(t/V*100)),t})},1e3)}})),r.a.createElement(u.l,{className:"control"})),r.a.createElement("section",{className:"timer"},r.a.createElement("div",{className:"line-container",ref:function(e){e&&(q=e)},onClick:function(e){var t=Math.floor(e.nativeEvent.offsetX/i*100),a=V*(.01*t),n=Math.round(a);M(n),h(t),Y(t)},style:{gridTemplateColumns:j}},r.a.createElement("div",{className:"invisible"}),r.a.createElement("div",{className:"line-before"}),r.a.createElement("div",{className:"circle"}),r.a.createElement("div",{className:"line-after"})),r.a.createElement("span",{className:"time"},0===z?null:p(z)+" / "," ",p(V))),r.a.createElement("section",{className:"settings"},J&&r.a.createElement(b,{className:"volume-slider",setCurrentVolume:B,currentVolume:W}),r.a.createElement(u.p,{className:"setting",onClick:function(){return Q(!J)}}),r.a.createElement(u.c,{className:"setting"}),r.a.createElement(u.m,{className:"setting ".concat(U?"active":""),onClick:function(){C(!U)}}),r.a.createElement("a",{href:"https://github.com/SafeAndS0und/totallynotspotify",target:"_blank"},r.a.createElement(u.b,{className:"setting"}))))},S=(a(36),a(37),function(e){var t=e.style;return r.a.createElement("svg",{className:"some-form",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",style:t,viewBox:"0 0 1920 1080"},r.a.createElement("path",{className:"st0",d:"M-0.5,845.5"}),r.a.createElement("path",{className:"st1",d:"M-0.5,935.5c780,427,1295-935,1295-935h-422c0,0-28,989-873,661V935.5z"}),r.a.createElement("path",{className:"st1",d:"M1919.5,0.5c0,0-561,752-515,1080h-355c531-200,566-1080,566-1080"}))}),v=function(e){return r.a.createElement("header",null,r.a.createElement(S,null),r.a.createElement(m,{toggle:e.toggle},r.a.createElement("h1",null,"Let us get you through the day ",r.a.createElement("br",null),"With music.")))},h=(a(38),function(e){var t=e.children,a=e.toggle;return r.a.createElement(A.a,{in:a,timeout:700,unmountOnExit:!0,classNames:"from-bottom"},t)}),y=function(e){var t=e.children,a=e.currentSong,n=Object(c.useState)(!1),l=Object(s.a)(n,2),i=l[0],o=l[1],u=Object(c.useState)(!1),A=Object(s.a)(u,2),m=A[0],E=A[1],b=d();return Object(c.useEffect)(function(){setTimeout(function(){return o(!0)},600)},[]),Object(c.useEffect)(function(){a&&0!==Object.entries(a).length&&E(!0)},[a]),r.a.createElement("div",{className:"main-layout"},r.a.createElement("div",{className:"sidebar-container"},r.a.createElement(f,null)),r.a.createElement("main",null,b>1100&&r.a.createElement(v,{toggle:i}),r.a.createElement("section",null,t)),r.a.createElement("div",{className:"footer-container"},m,r.a.createElement(h,{toggle:m},r.a.createElement(g,{currentSong:a}))))},O=(a(39),function(e){var t=e.songsData,a=e.shuffle,n=e.setCurrentSong,l=Object(c.useState)(!1),i=Object(s.a)(l,2),o=i[0],A=i[1],d=Object(c.useState)([]),f=Object(s.a)(d,2),E=f[0],b=f[1];Object(c.useEffect)(function(){setTimeout(function(){return A(!0)},300);var e=[];t.forEach(function(){return e.push(!1)}),b(e)},[]);return Object(c.useEffect)(function(){n(t.find(function(e){var t=e.id;return E[t]}))},[E]),r.a.createElement("div",{className:"songs"},r.a.createElement("div",{className:"top"},r.a.createElement("h2",null,"Favorites"),r.a.createElement("p",null,t.length," songs, updated yesterday"),r.a.createElement("div",{className:"right"},r.a.createElement("p",{onClick:a},"Shuffle All"),r.a.createElement(u.f,{onClick:a}),r.a.createElement(u.a,null))),r.a.createElement(m,{toggle:o},r.a.createElement("div",{className:"list"},r.a.createElement("div",{className:"headline"},r.a.createElement("h4",null,"Track"),r.a.createElement("h4",null,"Album"),r.a.createElement("h4",null,"Duration")),t.map(function(e,t){return r.a.createElement("article",{key:e.title,onClick:function(){return t=e.id,void b(function(e){return e.map(function(e,a){return a===t})});var t},className:E[e.id]?"active":null},r.a.createElement("div",{className:"track"},r.a.createElement("img",{src:e.imgURL,alt:"artist"}),r.a.createElement("h3",{className:"title"},e.title),r.a.createElement("p",{className:"artist"},e.artist)),r.a.createElement("p",{className:"album"},e.album),r.a.createElement("p",{className:"duration"},e.duration),r.a.createElement(u.c,{className:"heart"}),r.a.createElement(u.a,{className:"dots"}))}))))}),j=[{id:0,duration:"03:59",url:"songs/niemafal.mp3",title:"Nie Ma Fal",artist:"Dawid Podsiad\u0142o",album:"Ma\u0142omiasteczkowy",imgURL:"data:image/jpeg;base64,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"},{id:1,duration:"04:11",url:"songs/died.mp3",title:"Died In Your Arms",artist:"Cutting Drew",album:"Broadcast",imgURL:"https://i.scdn.co/image/2525cfab2197c9fc95ace03daa965249c2006d6a"},{id:2,duration:"03:45",url:"songs/sweetie.mp3",title:"Sweetie Little Jean",artist:"Cage The Elephant",album:"Tell Me I'm Pretty",imgURL:"https://cdn.smehost.net/cagetheelephantcom-usrcaprod/wp-content/uploads/2019/02/Cage_The_Elephant_Europe_3000x3000_022119_r12-1024x1024.jpg"},{id:3,duration:"03:02",url:"songs/billboards.mp3",title:"Bucskin Stallion Blues",artist:"Townes Van Zandt",album:"Three Billboards...",imgURL:"https://images-na.ssl-images-amazon.com/images/I/81x2%2BT0mXKL._SX342_.jpg"},{id:4,duration:"04:09",url:"songs/horsewithnoname.mp3",title:"A Horse With No Name",artist:"America",album:"America",imgURL:"https://i.scdn.co/image/8aad3712983eab1773d5926ac2409a89d485ec63"},{id:5,duration:"05:14",url:"songs/killing.mp3",title:"Killing In The Name of",artist:"Rage Against the Machine",album:"Rage Against...",imgURL:"https://gfx.antyradio.pl/var/ezflow_site/storage/images/muzyka/muzoteka/system-of-a-down/32060-2-pol-PL/System-Of-A-Down_article.jpg"},{id:6,duration:"02:26",url:"songs/et3.mp3",title:"Etude No. 3",artist:"Sergei Rachmaninoff",album:"Etudes-Tableaux Op.39",imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcwIwmFun3Pz4CKFPMVbWEKLx4Mp_B_AbwLS32cHqGVXpDXDX1_A"},{id:7,duration:"04:36",url:"songs/chopin.mp3",title:"Variations 1-2, 4",artist:"Fryderyk Chopin",album:"L\xe0 ci darem la mano",imgURL:"https://ocdn.eu/pulscms-transforms/1/ZYSktkpTURBXy9lYzc5YjVhNTEzZGQ3MzAzMmU5Zjk5MTAzMjM5NjFmNy5qcGeRkwIAzQHk"},{id:8,duration:"02:09",url:"songs/brahms.mp3",title:"Variations 5-6",artist:"Johannes Brahms",album:"Variations on a Theme by Haydn",imgURL:"https://www.paladino.at/sites/default/files/styles/large/public/people/brahms.jpg?itok=OvMfBMgr"},{id:9,duration:"02:57",url:"songs/liszt.mp3",title:"Mephisto Waltz",artist:"Franz Liszt",album:"Mephisto Waltzes",imgURL:"https://i.guim.co.uk/img/media/05443e7e60c42623af0f54265c9a2f7b04a3a91e/0_118_2121_1552/master/2121.jpg?width=300&quality=85&auto=format&fit=max&s=38cdb231ae8d7032084bfea5196f4c88"}],N=a(18),w=a.n(N);var L=function(){var e=Object(c.useState)(j),t=Object(s.a)(e,2),a=t[0],n=t[1],l=Object(c.useState)(null),i=Object(s.a)(l,2),o=i[0],u=i[1];return r.a.createElement("div",null,r.a.createElement(y,{currentSong:o},r.a.createElement(O,{songsData:a,setCurrentSong:u,shuffle:function(){n(function(e){return w()(e)})}})))};i.a.render(r.a.createElement(L,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.81663bcc.chunk.js.map