(this.webpackJsonpcalendar=this.webpackJsonpcalendar||[]).push([[0],[,,,function(e,t,a){e.exports={header:"header_header__2hf14",logo:"header_logo__1FR8c",user:"header_user__1nbfp",title:"header_title__2JOFF",version:"header_version__341jJ"}},,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.7d265621.svg"},function(e,t,a){e.exports=a.p+"static/media/user.03f89b96.svg"},,,,function(e,t,a){e.exports=a(33)},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(8),s=a.n(r),c=(a(21),a(22),a(4)),l=a(9),o=a(10),u=a(14),d=a(15),m=a(13),p=(a(23),a(11)),f=a.n(p),v=a(12),h=a.n(v),E=a(3),g=a.n(E),b=function(){return i.a.createElement("header",{className:g.a.header},i.a.createElement("img",{className:g.a.logo,src:f.a,alt:""}),i.a.createElement("h1",{className:g.a.title},"Kalendar"),i.a.createElement("span",{className:g.a.version},"v0.2"),i.a.createElement("img",{className:g.a.user,src:h.a,alt:""}))},D=(a(24),function(){return i.a.createElement("div",{className:"info"},i.a.createElement("h3",null,"RADNO VRIJEME"),i.a.createElement("div",{className:"info-div"},"Parni dani"),i.a.createElement("div",null,"08:00 - 14:00"),i.a.createElement("div",{className:"info-div"},"Neparni dani"),i.a.createElement("div",null,"13:00 - 19:00"),i.a.createElement("div",{className:"info-office"},"Ordinacija dr. Mirte Domjani\u0107"))}),O=(a(25),function(e){return i.a.createElement("aside",{className:"aside"},e.children)}),j=(a(26),function(e){return i.a.createElement("main",{className:"app-main"},e.children)}),k=a(5),N=a.n(k),M={reserve:"reserve",cancel:"cancel"},S=(a(28),function(e){var t=e.isVisible?"visible":"",a=N()(e.reservedDate).format("HH:mm"),n=N()(e.reservedDate).add(30,"minutes").format("HH:mm");return i.a.createElement("div",{id:"modal-background",className:t},i.a.createElement("div",{id:"pop-up",className:t},i.a.createElement("div",{className:"popup-content",onClick:function(t){var a=t.target;M.reserve===a.id?e.popupClickHandler(M.reserve):M.cancel===a.id&&e.popupClickHandler(M.cancel)}},i.a.createElement("header",null,i.a.createElement("span",{className:"label"},"Termin"),i.a.createElement("span",{id:"cancel"},"\xd7")),i.a.createElement("h3",null,"Odabrani datum: ",N()(e.selectedDate).format("DD.MM.YYYY")),i.a.createElement("input",{type:"text",id:"inputField",value:a+" - "+n,disabled:!0}),i.a.createElement("button",{id:"reserve",className:"button-popup"},"Rezerviraj termin"))))}),w=a(2),H=(a(29),function(e){var t=Object(n.useState)(""),a=Object(w.a)(t,2),r=a[0],s=a[1],c=Object(n.useState)(""),l=Object(w.a)(c,2),o=l[0],u=l[1];Object(n.useEffect)((function(){var t="";e.isBreak&&e.isMorningShift?t="PAUZA":e.isOccupied&&e.isMorningShift?t="REZERVIRAN TERMIN":e.isMorningShift&&(t=""),u(t)}),[e.date]),Object(n.useEffect)((function(){var t="disabled-timeline-row";e.isWorkingDay&&(e.isBreak&&e.isMorningShift?t="timeline-row-break":e.isOccupied&&e.isMorningShift?t="timeline-row-occupied":e.isMorningShift&&(t="timeline-row")),s(t)}),[e.date]);var d=function(e){return e<=9?"0"+e:e},m=function(){s("timeline-row"),u("")};return i.a.createElement("div",{className:r,onClick:function(t){e.isWorkingDay?e.isBreak?alert("Nije mogu\u0107e odabrati termin u vrijeme pauze"):e.isOccupied?alert("Odabrani termin je ve\u0107 zauzet"):e.isMorningShift?(s("timeline-row-occupied"),u("REZERVIRAN TERMIN"),e.reservationHandler(e.date,m)):alert("Odabrani termin nije u radnom vremenu"):alert("Nemogu\u0107e rezervirati termin na neradni dan")},time:d(e.date.getHours())+":"+d(e.date.getMinutes())},i.a.createElement("span",null,o))}),y=(a(30),8),_=19,R=function(e){var t=Object(n.useState)(e.selectedDate),a=Object(w.a)(t,2),r=a[0],s=a[1],c=Object(n.useState)([]),l=Object(w.a)(c,2),o=l[0],u=l[1],d=!0,m=!1;function p(){var t=e.selectedDate.getDay(),a=e.selectedDate.getDate();6===t?f(a)&&(m=!0):0!==t&&(f(a)?m=!0:(m=!0,d=!1))}function f(e){return e%2!==1}function v(e){return Math.floor(Math.random()*Math.floor(e))}return Object(n.useEffect)((function(){for(var t=[],a=y;a<=_;a++)p(),t.push({date:new Date(r.setHours(a,0,0)),isWorkingDay:m,isMorningShift:!!(d&&a<14||!d&&a>12),isBreak:11===a||16===a,isOccupied:!(11===a||16===a||!v(2))}),a<_&&t.push({date:new Date(r.setHours(a,30,0)),isWorkingDay:m,isMorningShift:!!(d&&a<14||!d&&a>12),isBreak:!1,isOccupied:!(11===a||16===a||!v(2))});s(e.selectedDate),u(t)}),[e.selectedDate]),i.a.createElement("ul",{className:"time-line-list"},o.map((function(t,a){return i.a.createElement(H,{key:a,isWorkingDay:t.isWorkingDay,isMorningShift:t.isMorningShift,isBreak:t.isBreak,isOccupied:t.isOccupied,date:t.date,reservationHandler:e.reservationHandler})})))},C=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={date:new Date,isPopupVisible:!1,reservedDate:null},e.onChange=function(t){e.state.date.toLocaleDateString()!==t.toLocaleDateString()&&e.setState(Object(c.a)({},e.state,{date:t,reservedDate:null}))},e.popupClickHandler=function(t){M.reserve===t?e.setState(Object(c.a)({},e.state,{isPopupVisible:!1})):M.cancel===t&&(e.cancelHandler(),e.setState(Object(c.a)({},e.state,{isPopupVisible:!1,reservedDate:null})))},e.onReservation=function(t,a){if(null!==e.state.reservedDate)return a(),void alert("Nije mogu\u0107e rezervirati vi\u0161e od jednog termina dnevno");e.setState(Object(c.a)({},e.state,{isPopupVisible:!0,reservedDate:t})),e.cancelHandler=a},e}return Object(o.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.date!==t.date||this.state.isPopupVisible!==t.isPopupVisible}},{key:"render",value:function(){return i.a.createElement(n.Fragment,null,i.a.createElement(b,null),i.a.createElement(j,null,i.a.createElement(O,null,i.a.createElement(m.a,{className:"calendar",onChange:this.onChange,value:this.state.date}),i.a.createElement(D,null)),i.a.createElement(R,{selectedDate:this.state.date,reservationHandler:this.onReservation})),i.a.createElement(S,{isVisible:this.state.isPopupVisible,selectedDate:this.state.date,reservedDate:this.state.reservedDate,popupClickHandler:this.popupClickHandler}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[16,1,2]]]);
//# sourceMappingURL=main.e3312b60.chunk.js.map