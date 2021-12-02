(()=>{"use strict";var e={914:(e,t,n)=>{var r,o=n(804),a=n.n(o),i=n(196),l=n.n(i),s=n(751),c=n(890),d=n(851);!function(e){e.LOGIN_REQUEST="@login/LOGIN_REQUEST",e.LOGIN_SUCCESS="@login/LOGIN_SUCCESS",e.LOGIN_FAILURE="@login/LOGIN_FAILURE"}(r||(r={}));const u={pending:!1,error:null};var p;!function(e){e.DISPATCH_SOCKET="@socket/DISPATCH_SOCKET"}(p||(p={}));const m={socket:null};var h;!function(e){e.DISPATCH_MESSAGE="@message/DISPATCH_MESSAGE",e.DELETE_ALL_MESSAGES_BY_ROOM="@message/DELETE_ALL_MESSAGES_BY_ROOM"}(h||(h={}));const g={messages:[]},f=(0,c.UY)({loginReducer:(e=u,t)=>{switch(t.type){case r.LOGIN_REQUEST:return Object.assign(Object.assign({},e),{pending:!0});case r.LOGIN_SUCCESS:return Object.assign(Object.assign({},e),{pending:!1,error:null});case r.LOGIN_FAILURE:return Object.assign(Object.assign({},e),{pending:!1,error:t.payload.error});default:return Object.assign({},e)}},socketReducer:(e=m,t)=>{switch(t.type){case p.DISPATCH_SOCKET:return Object.assign(Object.assign({},e),{socket:t.payload.socket});default:return Object.assign({},e)}},messageReducer:(e=g,t)=>{switch(t.type){case h.DISPATCH_MESSAGE:return Object.assign(Object.assign({},e),{messages:[...e.messages,...t.payload.message]});case h.DELETE_ALL_MESSAGES_BY_ROOM:return Object.assign(Object.assign({},e),{messages:e.messages.filter((e=>e.room!==t.payload.room))});default:return e}}});var x=n(970),w=n(936);const b=axios;const E=n.n(b)().create({baseURL:"http://backend:8000"});function*v({payload:e}){try{const t="/signin",{username:n,password:o}=e,{data:a}=yield(0,w.RE)(E.post,t,{name:n,password:o});localStorage.setItem("token",a.token),yield(0,w.gz)({type:r.LOGIN_SUCCESS})}catch(e){yield(0,w.gz)((e=>({type:r.LOGIN_FAILURE,payload:e}))({error:e.message}))}}const y=function*(){yield(0,w.$6)([(0,w.Fm)(r.LOGIN_REQUEST,v)])};const S=(0,d.ZP)(),C=(0,c.MT)(f,(0,c.md)(S));S.run((function*(){yield(0,x.$6)([(0,x.rM)(y)])}));const k=C,P=ReactRouterDOM;var R,M,O,z,T=n(871);function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const L=function(e){return o.createElement("svg",Z({xmlns:"http://www.w3.org/2000/svg",width:922.667,height:822.667,viewBox:"0 0 692 617"},e),R||(R=o.createElement("path",{d:"M120 57v28H63v113H7v113h56v-57l28.3.2 28.2.3.3 28.3.2 28.2 27.8-.2 27.7-.3.3-28.3.2-28.2h56l.2 28.2.3 28.3h56l.3-28.3.2-28.2h56v57h56V198h-56V85h-56V29h-57v56h-56V29h-56v28zm56 113v28h-56v-56h56v28zm113 0v28h-57v-56h57v28zM401.2 113.2l.3 28.3 112.2.3 112.3.2v157.3l3.2 9.1c3.5 10.3 19.2 47.4 23.8 56.7 2.4 4.7 3.5 5.9 4.8 5.4.9-.3 2.9-.9 4.4-1.2 2.6-.5 2.7-.3 5.2 7.8 7.8 25.9 11.4 45.9 13.9 77.4.2 2.2.4-80 .5-182.8L682 85H401l.2 28.2z"})),M||(M=o.createElement("path",{d:"M481 154.1c-2.6 1-8 5.7-8 6.9 0 .4 2.3-.4 5-1.8 4.6-2.3 5.4-2.4 9.2-1.3 2.2.7 6.2 3.2 8.8 5.7l4.7 4.4 2.7-4c4.7-7.2 11.1-8.6 17.7-3.9 3.6 2.5 3.8 1.1.4-2.4-5.5-5.5-12.7-5.9-18.4-1.2l-2.9 2.5-5.7-3c-5.9-3.1-9.2-3.6-13.5-1.9zM571.6 173.3c-2.1 1.2-5.1 3.7-6.5 5.6l-2.6 3.4 5.6-3.2c9.2-5.2 15-4 24.3 4.8 3.6 3.4 5 4.2 5.4 3.1.3-.8 2.6-3.6 5.2-6.3 4.2-4.2 5.2-4.7 9.2-4.7 3.2 0 5.6.8 8.3 2.5 4.8 3.3 5.4 2.6 1.6-1.8-6.1-6.9-14.9-7.6-22.2-1.7-3.7 2.9-4.2 3.1-5.7 1.7-3-2.8-10.6-5.7-14.7-5.7-2.3 0-5.6 1-7.9 2.3zM530 199.5c-5.2 1.6-11.6 6.8-14.4 11.5-2 3.6-1.7 3.5 4.7-1.1 10.7-7.7 21.8-5.7 34.3 6.2 3.3 3.3 6.3 5.9 6.6 5.9.2 0 2.1-2.4 4.2-5.4 9.1-13.2 20.7-14.9 32.7-4.9 3.9 3.3 3.7 1.6-.6-4-4.9-6.4-12.8-10.2-19.5-9.4-5.7.7-9.6 2.5-14.5 6.8l-3.5 3.1-6-4c-5.4-3.6-13.2-6.3-17.8-6.1-.9 0-3.7.7-6.2 1.4zM307 444c0 13.7.2 15.2 2 17 1.1 1.1 2.5 2 3 2 1.6 0 1.2-3.7-.5-4.4-1.2-.4-1.5-3.1-1.5-15.1 0-12.2-.2-14.5-1.5-14.5s-1.5 2.3-1.5 15zM485 446c0 14.4.2 17 1.5 17 1.1 0 1.5-1.2 1.5-4.9 0-2.8.4-5.2.9-5.6.6-.3 2.7 1.9 4.8 4.9 2.1 3.1 4.6 5.5 5.6 5.6 2.4 0 2.2-.4-2.4-6.5-4.4-5.8-4.3-7 .1-11 3.5-3.1 4.4-5.5 2.2-5.5-1 0-3.4 2.2-5.5 5s-4.2 4.8-4.7 4.5c-.6-.4-1-5.1-1-10.6 0-8.1-.3-9.9-1.5-9.9-1.3 0-1.5 2.6-1.5 17zM237.2 433c-4.8 2.9-7.2 7.5-7.2 13.8 0 11.8 8.1 18.1 20.4 15.8l3.6-.7V447h-3.5c-4 0-5 2.6-1.2 3.2 1.8.2 2.3 1 2.5 4.2.4 4.5-.7 5.6-6 5.6-8 0-12.8-4.7-12.8-12.8 0-9.1 5.4-13.9 14.7-12.9 4 .4 5.3.2 5.3-.8 0-3.1-10.8-3.5-15.8-.5zM293 433.5c0 1.6.6 2.5 1.5 2.5s1.5-.9 1.5-2.5-.6-2.5-1.5-2.5-1.5.9-1.5 2.5zM202.2 439.1c-5.9 2.9-9.2 8.8-9.2 16.1 0 4.4.5 6 2.4 8.1 4.3 4.6 11.7 4.4 18.1-.7 2-1.5 1.9-1.5-.8-1.6-1.5 0-3-.7-3.3-1.5-.5-1.3-.8-1.3-2.7 0-2.6 1.8-6.9 1.9-8.5.3-2.9-2.9-.5-10.8 4.4-14.7 3-2.3 8.1-2.8 10.7-.9 1.5 1.2 1.5 1.8.2 6.7-1.5 5.7-1.3 7.1 1 7.1 2.4 0 4.5-4.3 4.5-9.3 0-6.1-1.3-8.5-5.5-10.3-4.6-1.9-6.2-1.8-11.3.7zM265 448.2c0 4.6.6 9.4 1.3 10.7 1.7 3.5 5.9 4.6 9.7 2.7 2.7-1.3 3.2-1.3 3.7 0 1.5 3.9 2.3.3 2.3-10.1 0-9.4-.3-11.5-1.5-11.5-1.1 0-1.5 1.9-1.7 9.2-.3 9-.3 9.2-3.1 10.1-2.1.7-3.4.5-5.2-.7-2.3-1.5-2.5-2.2-2.5-10.1 0-6.9-.3-8.5-1.5-8.5s-1.5 1.6-1.5 8.2zM293 451.5c0 9.6.3 11.5 1.5 11.5s1.5-1.9 1.5-11.5-.3-11.5-1.5-11.5-1.5 1.9-1.5 11.5zM327.5 441.2c-3.9 2.1-5.5 5.1-5.5 10.4 0 5.7 2.7 9.8 7.4 11 5.9 1.4 12.6-4.4 12.6-11 0-8-8.2-13.9-14.5-10.4zm9.8 4.5c2.5 2.3 2.3 9.4-.3 11.8-5 4.5-13 1-13-5.7 0-7.7 7.6-11.2 13.3-6.1zM353.5 442.5c-4.4 4.3-2.7 8.1 4.8 10.5 2.9.9 3.7 1.7 3.7 3.5 0 2.8-3.3 3.9-7.8 2.5-2.6-.7-3.2-.6-3.2.6 0 4.1 11.3 4.1 13.2-.1 1.9-4.2.3-7-5.2-9.3-2.9-1.2-5-2.7-5-3.6 0-2.2 3.4-3.7 6.9-3 3.5.7 4.2-.9 1.2-2.6-3.2-1.6-6-1.2-8.6 1.5zM375 457c0 14.4.2 17 1.5 17 1.2 0 1.5-1.4 1.5-7 0-3.9.2-7 .3-7 .2 0 1.8.7 3.5 1.5 6.6 3.3 12.2-1.3 12.2-10s-5.6-13.3-12.2-10c-3.9 1.9-4.8 1.9-4.8 0 0-.8-.4-1.5-1-1.5s-1 6.3-1 17zm14.7-11.8c1.8 1.5 2.6 6.9 1.4 10.1-2.3 5.9-10.9 5.5-13-.6-2.8-8 5.4-14.7 11.6-9.5zM407.3 441c-3.5 1.4-2.9 3.4.7 2.6 3.7-.7 8 .8 8 2.9 0 1-1.4 1.7-4 2.1-8.1 1.3-11.7 7.7-7 12.4 2.4 2.4 4.3 2.5 8.1.3 2.7-1.6 2.9-1.6 4.9.2 1.8 1.6 2.3 1.7 3 .5.7-1 .5-1.8-.4-2.5-.8-.6-1.5-4-1.8-8.4-.5-6.2-1-7.8-2.8-9.3-2.4-1.9-5.2-2.2-8.7-.8zm8.5 13.2c-.6 6.2-9.8 7.4-9.8 1.3 0-2.9 2.3-4.4 6.8-4.5 3.2 0 3.3.2 3 3.2zM431 451.5c0 9.6.3 11.5 1.5 11.5s1.5-1.6 1.5-8.4c0-9.5.9-11 6.7-11 5.1 0 6.3 2.2 6.3 11.6 0 6.5.3 7.8 1.6 7.8 2.5 0 1.6-17-1-19.9-2.6-2.8-7-3.6-10.6-1.7-2.7 1.3-3.2 1.3-3.7 0-1.5-3.9-2.3-.3-2.3 10.1zM465.3 441c-3 1.2-6.3 6.7-6.3 10.5 0 7 6.9 12.7 13.2 10.9 4.5-1.3 5.1-3.8.7-3.2-4.6.7-8.4-.8-9.8-3.8-3.1-6.8 1.7-12.7 9.8-12.1 3.1.3 3.8-1.9.9-2.7-3.1-.8-5.8-.7-8.5.4z"})),O||(O=o.createElement("path",{d:"M204.7 448.8c-1.8 1.9-2.7 3.9-2.7 6 0 3.8.9 4 3.7.9 6.5-7.1 5.6-13.8-1-6.9zM28 479.1c-10.4 2-18 10.1-20.1 21.2-.6 3.7-.9 19.8-.7 44.5.3 33.8.5 39.2 2 42.4 2.9 6.5 6.8 10.7 12.6 13.5l5.7 2.8h640l4.5-2.1c5.8-2.6 10.8-7.6 13.4-13.4 2-4.3 2.1-6 2.1-46.5 0-31.9-.3-42.9-1.3-45.7-2.2-6.1-6.8-11.6-12.4-14.5l-5.3-2.8-318-.1c-178.9-.1-319.9.2-322.5.7zm37.4 18.1c8.3 2.5 14.1 11.5 14.8 23.3l.3 5h-13l-.6-5.8c-.4-3.2-1.2-6.9-1.9-8.2-3.5-6.5-15.5-5.7-19.2 1.4-1.7 3.5-2.4 47.1-.8 53.2.6 2.3 2.5 5.6 4.1 7.2 2.7 2.6 3.5 2.9 7.4 2.4 7.6-.8 10.1-4.6 11.2-17.1l.6-7.5-6.4-.3-6.4-.3v-9l12.8-.3 12.7-.3V586h-4.9c-4.8 0-5-.1-6.1-3.5-1.4-4.1-2.2-4.4-3.9-1.2-3.2 6-12.8 7.4-21.7 3.3-11.2-5.2-14.3-14.8-14.4-44.1 0-17.7 1-25 4.5-32.2 4-8.1 11.1-12.2 21.4-12.3 2.9 0 7.2.6 9.5 1.2zm232.7-.1c8.9 3 13.6 10.1 14.6 21.8l.6 7.1h-13l-.5-6.3c-.6-7-2-10-5.5-11.6-5.3-2.4-11.5-.5-14.1 4.3-2.2 4.1-3.1 43.1-1.2 52.2 1.5 7.3 5.2 11.4 10.3 11.4 6.8 0 10.7-6.3 10.7-17.4V554h13v5.7c0 13.2-6 23.8-14.7 26.2-10.7 3-23-.4-27.6-7.6-4.8-7.4-5.2-10.1-5.2-36.8 0-26.8.7-31.7 5.7-38.1 4.9-6.1 18.1-9.2 26.9-6.3zm-180.7 1.6c.3 1 4.3 20 9.1 42.3 4.7 22.3 8.7 41.5 9 42.8.5 2.2.4 2.3-6.2 2-7.6-.3-6.5 1.2-9.8-14l-1.7-7.8h-14.7l-1.6 7.7c-3.3 15.4-2.2 13.8-9.9 14.1-6.7.3-6.8.2-6.3-2 .3-1.3 4.4-20.5 9.2-42.8 4.7-22.3 8.8-41.3 9.1-42.3.4-1.4 1.7-1.7 6.9-1.7s6.5.3 6.9 1.7zm58.1 1.8c7.9 4 10.9 9.5 10.9 19.9.1 9.1-1.7 14.2-6.5 18.7l-3.8 3.5 6.4 20.2c3.6 11.2 6.5 21 6.5 21.8 0 1.2-1.2 1.4-6.2 1.2l-6.3-.3-6.2-20-6.1-20-4.1-.3-4.1-.3-.2 20.3-.3 20.3-6.7.3-6.8.3V496.8l13.8.4c13.1.3 14.2.5 19.7 3.3zm59.3 2.2l.3 5.2-7.8.3-7.8.3-.3 38.7-.2 38.8h-13l-.2-38.8-.3-38.7-7.7-.3-7.8-.3v-4.8c0-2.6.3-5.1.7-5.5.4-.3 10.4-.5 22.2-.4l21.6.3.3 5.2zm19.2 38.8V586h-13v-89h13v44.5zm100.8-4.3l.2 39.8h22.1l-.3 4.2-.3 4.3-17.7.3-17.8.2v-89.1l6.8.3 6.7.3.3 39.7zm40.2 4.3V586h-13v-89h13v44.5zm26-27.5c0 9.3.4 17 .8 17 .5 0 4.6-7.7 9.1-17l8.2-17h7.9c4.4 0 8 .4 8 .8 0 .5-4 8.4-9 17.6-4.9 9.3-9 17-9 17.3 0 .2 4.7 11.9 10.5 25.8 5.8 14 10.5 25.9 10.5 26.5 0 .6-3.1 1-7.8 1h-7.9l-6.3-16.3c-3.4-8.9-6.9-17.8-7.7-19.7l-1.5-3.5-2.8 5.5c-2.8 5.3-2.9 6-3 19.7V586h-13v-89h13v17zm76.8-12.3l.3 4.2-10.8.3-10.8.3-.3 14.2-.3 14.2 7.8.3 7.8.3v9l-7.8.3-7.8.3.3 15.7.3 15.7 10.8.3 10.8.3-.3 4.2-.3 4.2h-35l-.3-43c-.1-23.7 0-43.6.3-44.3.3-1 4.5-1.2 17.7-1l17.3.3.3 4.2zm53.6-3.8c.7 1 18.6 84.8 18.6 86.8 0 .9-1.7 1.3-6.4 1.3h-6.5l-1.6-7.7c-3.3-15.4-2.1-13.8-10.6-14.1l-7.5-.3-1.3 6.3c-.7 3.5-1.7 8.4-2.3 11l-1 4.8h-6.4c-5 0-6.4-.3-6.4-1.5 0-.8 4.1-20.5 9-43.8 5-23.4 9-42.7 9-43.1 0-.9 12.8-.7 13.4.3zm59.1 1.7c6.3 3.3 9.7 9.7 10.3 19.2.6 10.2-1 15.7-5.8 20.3-4.3 4.1-10 5.9-18.9 5.9H590v41.1l-6.7-.3-6.8-.3-.3-43c-.1-23.7 0-43.6.3-44.3.4-1.1 3.7-1.3 15.2-1 12.7.3 15.4.6 18.8 2.4zm51.8.2c6.1 3.9 9 10 9.5 20.2.4 7.1.1 9.5-1.6 13.2-3.5 8-10.9 11.8-22.9 11.8H641v41.1l-6.7-.3-6.8-.3-.3-43c-.1-23.7 0-43.6.3-44.3.4-1.1 3.7-1.3 15.8-1 13.9.3 15.5.5 19 2.6z"})),z||(z=o.createElement("path",{d:"M109.6 524.7c-.6 3-4.6 28-4.6 28.8 0 .3 2.5.5 5.5.5s5.5-.3 5.5-.6c0-1.5-5.1-30.9-5.5-31.2-.2-.2-.6.9-.9 2.5zM156.7 506.7c-.4.3-.7 6.9-.7 14.5V535h3.5c8.8 0 13.5-4.9 13.5-14 0-8.7-3.5-12.8-12.1-14.4-1.9-.3-3.8-.3-4.2.1zM542.1 536.7c-1.2 7.6-2.5 14.6-2.7 15.5-.5 1.6.2 1.8 5.4 1.8h5.8l-2.5-15.5c-1.4-8.5-2.8-15.5-3.2-15.5-.3 0-1.6 6.2-2.8 13.7zM590 520.4V535h4.5c2.5 0 6.1-.6 8-1.4 2.7-1.2 3.6-2.3 4.5-5.8 1.4-5.1.7-13.1-1.5-16.4-2-3.1-4-4-10.2-4.9l-5.3-.7v14.6zM641 520.4V535h4.5c9.6 0 13.6-3.9 13.4-13.4-.1-9.6-3.8-14-12.6-15.1l-5.3-.7v14.6z"})))};var _=n(163);const I=(0,_.ZP)(L)`
  width: 100%;
  height: 80%;
  fill: white;
`,j=(0,_.ZP)(P.NavLink)`
  width: 100px;
  height: 100%;
  border: none;
  cursor: pointer;
  background: none;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
`,A=_.ZP.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
`,D=_.ZP.nav`
  // background: #884eef;
  background: #9a98ca;
  height: 85px;
  display: flex;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  width: 100%;
`,N=(0,_.ZP)(P.NavLink)`
  color: #d7d7de;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: white;
    font-style: bold;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    color: white;
  }
`,B=(0,_.ZP)(T.Fm7)` 
`,H=_.ZP.button`
  display: none;
  color: white;
  font-size: 1.8rem;
  cursor: pointer; 
  margin-left: 4%;
  background: none;
  border: none;

  @media screen and (max-width: 768px) {
    display: flex; 
    align-items: center;
  }
`,U=_.ZP.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`,$=(_.ZP.nav`
  display: flex;
  align-items: center;
  margin-right: 24px; 
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`,()=>a().createElement(a().Fragment,null,a().createElement(D,null,a().createElement(H,null,a().createElement(B,null)),a().createElement(U,null,a().createElement(j,{to:"/"},a().createElement(I,null)),a().createElement(N,{to:"/",exact:!0,activeStyle:{}},"Home"),a().createElement(N,{to:"/dashboard",activeStyle:{}},"Dashboard")),a().createElement(A,null)))),G=_.ZP.div`
  display: flex;
  flex-direction: column;

  gap: 1%;
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
  justify-items: center;    

  @media(min-width: 800px) {
    flex-direction: row;
  }
`,V=({CanvasComponent:e,ChatComponent:t})=>a().createElement(G,null,a().createElement(e,{item:!0}),a().createElement(t,{item:!0})),F=_.ZP.div`
  box-shadow: -1px 2px 12px 0px #c7c6c5;
  
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  flex-grow: 7;

  border-radius: 10px;
`,K=_.ZP.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 5px;  
`,Y=_.ZP.button`
  border: none;
  outline: none;
  background: blue;
  border-radius: 5px;
  padding: 5px;
  text-transform: uppercase;
  color: white;
  cursor: pointer;
`,J=_.ZP.button`
  border: none;
  outline: none;
  background: green;
  border-radius: 5px;
  padding: 5px;  
  color: white;  
`,W=_.ZP.button`
  border: none;
  outline: none;
  background: red;
  border-radius: 5px;
  padding: 5px;
  text-transform: uppercase;
  cursor: pointer;
  color: white;
`,Q=_.ZP.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`,X=_.ZP.div`
  display: flex;
  flex-direction: column;
  width: 35px;
  height: 100%;

  justify-content: flex-start;
  align-items: center;
  align-content: center;
  gap: 0.5%;

  margin-left: 1px;
  padding: 5px;
  box-shadow: -1px 2px 12px 0px #c7c6c5;
  border-bottom-right-radius: 10px;
`,q=_.ZP.button`
  border: none;
  outline: none;
  background: ${e=>e.bgColor||"red"};
  border-radius: 3px;

  padding: 0px;
  cursor: pointer;
  width: 20px;
  height: 20px;
`,ee=_.ZP.div`
  width: 20px;
  height: 1px;
  margin-top: 2px;
  border-top: 1px solid gray;
`,te=_.ZP.div`
  position: fixed;
  top: ${e=>e.top||"50%"};
  left: ${e=>e.left||"50%"};
  width: 8px;
  height: 8px;
  background-color: ${e=>e.bgColor};
  transform: translate(-50%, -50%);
  z-index: 999;
  pointer-events: none;
`,ne=_.ZP.div`
  height: 100%;
`,re=_.ZP.canvas`    
  height: 100%;
`,oe=_.ZP.div`
  display: flex;
  width: 100%;
  height: 20px;
`,ae=_.ZP.div`
  background: ${e=>e.color};
  height: 100%;
  width: ${e=>{var t;return null!==(t=e.percentage+"%")&&void 0!==t?t:"100%"}};
  transition: width 0.7s ease-in-out;
  border-radius: ${e=>100===e.percentage?"0px":"0px 9px 9px 0px"};
`,ie=({percentage:e})=>{const t=(()=>{switch(!0){case e>=80:return"#359d73";case e>=60:return"#f0be39";case e>=40:return"#ffc163";case e>=20:return"#ffa879";default:return"#fb4b4b"}})();return a().createElement(oe,null,a().createElement(ae,{percentage:e,color:t}))};var le;function se(){return(se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const ce=function(e){return o.createElement("svg",se({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},e),le||(le=o.createElement("path",{d:"M28.7 8.9L23 3.2c-1.1-1.1-3.1-1.1-4.2 0l-7.1 7.1-7.5 7.5C3 19 3 20.9 4.2 22L8 25.8c.2.2.4.3.7.3h6.6c.3 0 .5-.1.7-.3l12.7-12.7c1.2-1.1 1.2-3 0-4.2zM14.9 24.1H9.2l-3.5-3.5c-.4-.4-.4-1 0-1.4l6.8-6.8 7.1 7.1-4.7 4.6zM27 28H5c-.6 0-1 .4-1 1s.4 1 1 1h22c.6 0 1-.4 1-1s-.4-1-1-1z"})))},de=({viewModel:e})=>{const t=(0,o.useMemo)((()=>a().createElement(X,null,e.COLORS_ARRAY.map(((t,n)=>a().createElement(q,{onClick:()=>e.onColorButtonClick(t),key:n,bgColor:t}))),a().createElement(ee,null),a().createElement(q,{onClick:()=>e.onColorButtonClick("white"),bgColor:"none"},a().createElement(ce,{width:20,height:20})))),[e.COLORS_ARRAY]);return a().createElement(a().Fragment,null,!e.disableCanvas&&a().createElement(te,{left:`${e.mousePosition.x}px`,top:`${e.mousePosition.y}px`,bgColor:e.strokeStyle}),a().createElement(F,null,a().createElement(ie,{percentage:e.drawersTurnProgressBarPercentage}),a().createElement(K,null,a().createElement(W,{onClick:e.onExitButtonClick},"Exit"),e.drawersTurn?e.drawersTurn===e.usernameRef.current?a().createElement(J,null,"Your Turn"):a().createElement(J,null,"Player's Turn: ",a().createElement("b",null,e.drawersTurn)):a().createElement("span",null,"Waiting for participants..."),!e.disableCanvas&&a().createElement(Y,{onClick:e.onClearButtonClick},"Clear")),a().createElement(Q,null,a().createElement(ne,{id:"canvas-container"},a().createElement(re,{onMouseDown:e.startDrawing,onMouseUp:e.finishDrawing,onMouseMove:e.draw,ref:e.canvasRef})),!e.disableCanvas&&t)))},ue=_.ZP.div`
  justify-content: center;
  align-items: center;
  justify-items: center;
  
  width: 100%;
  height: 100%;
  flex-grow: 3;

  display: flex;
  flex-direction: row;
  gap: 1%;

  @media(min-width: 800px) {
    height: 100%;
    width: 50%;
    flex-direction: column;
  }
`,pe=_.ZP.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  align-content: flex-start;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  height: 300px;

  overflow-y: auto;
  box-shadow: 3px 4px 8px 0px #979797;
  border-radius: 10px;
`,me=_.ZP.div`
  padding: 5px;    
  width: 100%;
  margin-bottom: 1px;
  background: ${e=>e.index%2==0?"#d9cdee":"#fff"};
`,he=_.ZP.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 300px;
  width: 100%;
  
  @media(min-width: 800px) {
    max-height: 65%;    
  }
`,ge=_.ZP.div`
  display: flex;
  flex-direction: column;
  
  width: 100%;
  height: 100%;

  overflow-y: auto;
  padding-bottom: 8px;
  border: none;
  box-shadow: -1px 2px 12px 0px #c7c6c5;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  @media(min-width: 800px) {
    flex-grow: 4;
  }
`,fe=_.ZP.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  background: #884eef;
  border: none;
  border-radius: 15px;
  margin: 3px 7px;

  padding-left: 3%;
  padding-right: 3%;
  padding-top: 1%;
  
  box-shadow: 3px 3px 6px 0px #191919;
  color: white;

  height: 40px;
  gap: 15px;

  @media(min-width: 800px) {
    height: 70px;
    flex-direction: column;    
    gap: 0px;
  }
`,xe=_.ZP.div`
  display: flex;
  font-weight: bold;

  @media(min-width: 800px) {
  }
`,we=_.ZP.div`
  display: flex;  
  word-break: break-word;

  @media(min-width: 800px) {
    word-break: normal;
  }
`,be=_.ZP.div`   
  align-content: center;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  font-size: 10px;
  font-weight: bold;

  display: none;

  @media(min-width: 800px) {
    display: flex; 
  }
`,Ee=_.ZP.div`
  display: flex;
  width: 100%;
  flex-grow: 1;

  flex-direction: row;
`,ve=_.ZP.textarea`
  flex-grow: 2;
  height: 100%;

  resize: none;
  border: none;
  box-shadow: -1px 2px 12px 0px #c7c6c5;

  border-bottom-left-radius: 10px;

  &:focus {
    outline: none;
    border-color: black;
    box-shadow: 0 0 10px #719ECE;
  }
`,ye=_.ZP.button`
  height: 100%;

  border: none;
  background: #1dac1d;
  color: white;
  border-radius: 5px;

  &:hover {
    transition: all 0.2s ease-in-out;
    box-shadow: 3px 1px 12px 0px #1dac1d;
  }

  cursor: pointer;
`,Se=({viewModel:e})=>{var t;return a().createElement(ue,null,a().createElement(pe,{id:"participants-container"},e.participantsInTheRoom.map(((e,t)=>a().createElement(me,{key:t,index:t},e)))),a().createElement(he,null,a().createElement(ge,{id:"messages-container"},null===(t=e.messages)||void 0===t?void 0:t.map(((t,n)=>t.room!==e.room||t.canvasCoordinates?null:a().createElement(fe,{key:n},a().createElement(xe,null,null==t?void 0:t.username),a().createElement(we,null,null==t?void 0:t.message),a().createElement(be,null,new Date(null==t?void 0:t.date).toLocaleString()))))),a().createElement(Ee,null,a().createElement(ve,{name:"writemessage",id:"writer",placeholder:"Type your guess!",value:e.message,onChange:t=>e.handleMessage(t.target.value),onKeyDown:e.handleTextAreaKeyDown,maxLength:21}),a().createElement(ye,{onClick:e.sendMessage},"Send"))))},Ce=(0,o.createContext)(null),ke=({children:e})=>{const t=(0,o.useRef)(null),n=(0,o.useRef)(null),r=(0,o.useRef)(null),i=(0,o.useRef)([]),[l,s]=(0,o.useState)([]),[c,d]=(0,o.useState)([]),[u,p]=(0,o.useState)(""),[m,h]=(0,o.useState)(0),g={socketRef:t,usernameRef:n,roomRef:r,coordinatesRef:i,canvasConfigsAndCoordinatesState:l,setCanvasConfigsAndCoordinatesState:s,participantsInTheRoom:c,setParticipantsInTheRoom:d,drawersTurn:u,setDrawersTurn:p,drawersTurnProgressBarPercentage:m,updateProgressBar:()=>{h(100);let e=0,t=100;const n=setInterval((()=>{t-=5,h(t),e++,20===e&&(h(100),clearInterval(n))}),1e3)}};return a().createElement(Ce.Provider,{value:g}," ",e," ")},Pe=()=>{const e=(0,P.useHistory)(),t=(0,o.useRef)(null),n=(0,o.useRef)(null),r=(0,o.useRef)(null),[a,i]=(0,o.useState)(!1),[l,s]=(0,o.useState)("round"),[c,d]=(0,o.useState)("black"),[u,p]=(0,o.useState)(5),[m,h]=(0,o.useState)({x:null,y:null}),[g,f]=(0,o.useState)(null),[x,w]=(0,o.useState)(!1),{socketRef:b,usernameRef:E,roomRef:v,coordinatesRef:y,canvasConfigsAndCoordinatesState:S,drawersTurn:C,drawersTurnProgressBarPercentage:k}=(0,o.useContext)(Ce),R=(e=null,t=null,r=null)=>{g.lineCap=null!=e?e:l,g.strokeStyle=null!=t?t:c,g.lineWidth=null!=r?r:u,n.current=g,s(g.lineCap),d(g.strokeStyle),p(g.lineWidth)};(0,o.useEffect)((()=>{const e=e=>{const{clientX:t,clientY:n}=e;h({x:t,y:n})};return document.addEventListener("mousemove",e),()=>{document.removeEventListener("mousemove",e)}}),[]),(0,o.useEffect)((()=>{(()=>{const e=t.current;e.style.width="100%",e.style.height="100%",e.width=1280,e.height=720;const n=e.getContext("2d");n.mozImageSmoothingEnabled=!1,n.imageSmoothingEnabled=!1,f(n)})()}),[]),(0,o.useEffect)((()=>{null!==g&&R()}),[g]),(0,o.useEffect)((()=>{S.forEach((e=>{const t=e.configs,r=e.coordinates;if(e.username===E.current)return;const{lineCap:o,strokeStyle:a,lineWidth:i}=t;if(R(o,a,i),1===r.length)return n.current.beginPath(),n.current.lineTo(r[0][0],r[0][1]),n.current.stroke(),void n.current.closePath();r.forEach(((e,t)=>{switch(t){case 0:n.current.beginPath(),n.current.moveTo(e[0],e[1]);break;case r.length-1:n.current.closePath();break;default:n.current.lineTo(e[0],e[1]),n.current.stroke()}}))}))}),[S]),(0,o.useEffect)((()=>(w(C!==E.current),()=>C!==E.current&&O())),[C]);const M=e=>({x:e.offsetX*t.current.width/t.current.clientWidth|0,y:e.offsetY*t.current.height/t.current.clientHeight|0}),O=()=>{n.current.closePath(),i(!1),z()},z=(e=null,t=null,n=null)=>{t||(t=r.current);const o={username:E.current,room:v.current,message:null,date:(new Date).toLocaleString("pt-br"),close:!1,canvasCoordinates:JSON.stringify(y.current),canvasConfigs:JSON.stringify({lineCap:null!=e?e:l,strokeStyle:null!=t?t:c,lineWidth:null!=n?n:u})};y.current=[],b.current.send(JSON.stringify(o))};return{startDrawing:({nativeEvent:e})=>{if(x)return;let r,o;if(e instanceof MouseEvent){const{x:t,y:n}=M(e);r=t,o=n}else{const n=t.current.getBoundingClientRect();r=e.touches[0].clientX-n.left,o=e.touches[0].clientY-n.top}n.current.beginPath(),n.current.moveTo(r,o),i(!0),y.current.push([r,o])},finishDrawing:O,draw:({nativeEvent:e})=>{if(!a||x)return;let r,o;if(e instanceof MouseEvent){const{x:t,y:n}=M(e);r=t,o=n}else{const n=t.current.getBoundingClientRect();r=e.touches[0].clientX-n.left,o=e.touches[0].clientY-n.top}n.current.lineTo(r,o),n.current.stroke(),y.current.push([r,o])},canvasRef:t,onClearButtonClick:()=>{let e="round",r="white";R(e,r,5e3),y.current=[],n.current.beginPath(),n.current.lineTo(t.current.offsetWidth,t.current.offsetHeight),n.current.stroke(),n.current.closePath(),y.current.push([t.current.offsetWidth,t.current.offsetHeight]),z(e,r,5e3),R()},disableCanvas:x,onExitButtonClick:()=>{e.push({pathname:"/"})},drawersTurnProgressBarPercentage:k,drawersTurn:C,COLORS_ARRAY:["red","blue","green","pink","brown","gray","black","violet","orange","yellow","gold","salmon","purple","aquamarine","chocolate","cyan","turquoise","aqua","beige","chartreuse","crimson","darkcyan","darkolivegreen","darkmagenta","goldenrod","indigo","limegreen","midnightblue","mistyrose","peru","silver"],onColorButtonClick:e=>{g.strokeStyle=e,r.current=e,d(e)},mousePosition:m,strokeStyle:c,usernameRef:E}};let Re=null;const Me=()=>{const e=new URLSearchParams((0,P.useLocation)().search),{socketRef:t,usernameRef:n,roomRef:r,coordinatesRef:a,setCanvasConfigsAndCoordinatesState:i,participantsInTheRoom:l,setParticipantsInTheRoom:c,setDrawersTurn:d,drawersTurnProgressBarPercentage:u,updateProgressBar:p}=(0,o.useContext)(Ce),[m]=(0,o.useState)(e.get("username")),[g]=(0,o.useState)(e.get("room"));n.current=m,r.current=g;const f=`ws://backend:5555/ws?username=${m}&room=${g}`,[x,w]=(0,o.useState)(""),b=(0,s.I0)(),E=(0,s.v9)((e=>e.messageReducer.messages));(0,o.useEffect)((()=>{document.getElementById("messages-container").scrollTop=document.getElementById("messages-container").scrollHeight}),[E]),(0,o.useEffect)((()=>{document.getElementById("participants-container").scrollTop=document.getElementById("participants-container").scrollHeight}),[l]);const v=(0,o.useCallback)((()=>{Re&&(Re.onopen=e=>{console.log("Opened dashboard: \n"),console.log(e)},Re.onerror=e=>{console.log("Error dashboard: \n"),console.log(e)},Re.onmessage=e=>{if(null==e?void 0:e.data){const n=JSON.parse(e.data);if(n.timestamp)return d(n.username),void p();if(n.participants)return void c(n.participants);let r=n;n.length||(r=[n]);const o=r;S(o),b((t={message:o},{type:h.DISPATCH_MESSAGE,payload:t}))}var t})}),[]);(0,o.useEffect)((()=>(Re=new WebSocket(f),t.current=Re,v(),function(){const e={username:m,room:g,message:"closing dashboard...",date:(new Date).toLocaleString("pt-br"),close:!0};var o;Re.send(JSON.stringify(e)),t.current=null,n.current=null,r.current=null,a.current=null,b((o={room:g},{type:h.DELETE_ALL_MESSAGES_BY_ROOM,payload:o}))})),[]);const y=()=>{const e={username:m,room:g,message:x,date:(new Date).toLocaleString("pt-br"),close:!1,canvasCoordinates:null,canvasConfigs:null};Re.send(JSON.stringify(e)),w("")},S=e=>{let t=[];e.forEach((e=>{if(e.canvasConfigs){const n=JSON.parse(null==e?void 0:e.canvasCoordinates),r=JSON.parse(null==e?void 0:e.canvasConfigs);t.push({configs:r,coordinates:n,username:e.username})}})),i(t)};return{sendMessage:y,message:x,handleMessage:e=>{w(e)},handleTextAreaKeyDown:e=>{if("Enter"===e.key&&0==e.shiftKey){if(e.preventDefault(),0===x.length)return;y()}},messages:E,room:g,participantsInTheRoom:l}},Oe=()=>{const e=Pe();return a().createElement(de,{viewModel:e})},ze=()=>{const e=Me();return a().createElement(Se,{viewModel:e})},Te=()=>a().createElement(ke,null,a().createElement(V,{CanvasComponent:Oe,ChatComponent:ze})),Ze=_.ZP.div`
  display: flex;
  width: 100%;
  height: 100%;

  align-items: center;
`,Le=_.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 300px;
  margin: 0 auto;
`,_e=_.ZP.input`
  background: none;
  border: 1px solid grey;
  outline: none;

  width: 100%;
  height: 34px;
  border-radius: 5px;
  padding: 10px;

  margin-bottom: 5%;
`,Ie=_.ZP.button`
  background: #884eef;
  color: white;
  border: none;
  outline: none;

  padding: 7px;
  cursor: pointer;

  width: 100%;
  border-radius: 5px;
`,je=({viewModel:e})=>a().createElement(Ze,null,a().createElement(Le,null,a().createElement(_e,{type:"text",placeholder:"Insert your username",value:e.username,onChange:t=>e.setUsername(t.target.value),autoFocus:!0,onKeyDown:e.handleTextAreaKeyDown}),a().createElement(Ie,{onClick:e.onEnterClick},"ENTER")));var Ae=n(842);const De=()=>{const e=(()=>{const e=(0,Ae.k6)(),[t,n]=(0,o.useState)(""),r=()=>{0!==t.length&&e.push({pathname:"/waitingroom",search:`?username=${t}`})};return{username:t,setUsername:n,onEnterClick:e=>{e.stopPropagation(),r()},handleTextAreaKeyDown:e=>{"Enter"===e.key&&(e.stopPropagation(),r())}}})();return a().createElement(je,{viewModel:e})},Ne=_.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Be=_.ZP.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-around;
  align-items: center;
  width: 98%;

  gap: 1px;

  &:hover {
    border-color: #884eef;
  }

  border: 1px solid #c0b9b9;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 5px;

`,He=_.ZP.div`
  @media(min-width: 800px) {
    width: 12%;
  }
`,Ue=_.ZP.div`
  display: flex;
  font-weight: bold;
`,$e=_.ZP.div`
  display: flex;
`,Ge=_.ZP.button`
  border: none; 
  padding: 7px;
  width: 65px;
  background: #884eef;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
`,Ve=_.ZP.button`
  border: none; 
  padding: 15px;
  width: 120px;
  background: #884eef;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
`,Fe=({viewModel:e})=>a().createElement(Ne,null,e.rooms.map(((t,n)=>a().createElement(Be,{key:n},a().createElement(He,null,a().createElement(Ue,null,t.room)),a().createElement(He,null,a().createElement($e,null,a().createElement("strong",null,"Participants: ")," ",t.numOfParticipants)),a().createElement(He,null,a().createElement(Ge,{onClick:n=>e.onEnterClick(n,t.room)},"Enter"))))),a().createElement(Ve,{onClick:e.onNewRoomClick},"New Room"));let Ke=null;const Ye=()=>{const e=(()=>{const e=(0,P.useHistory)(),t=new URLSearchParams((0,P.useLocation)().search),[n,r]=(0,o.useState)([]),[a,i]=(0,o.useState)(t.get("username")),l="waitingroomgarticlikeapp",s=`ws://backend:5555/ws?username=${a}&room=${l}`,c=(0,o.useCallback)((()=>{Ke&&(Ke.onopen=e=>{console.log("Opened waiting room socket: \n"),console.log(e)},Ke.onerror=e=>{console.log("Error waiting room socket: \n"),console.log(e)},Ke.onmessage=e=>{if(null==e?void 0:e.data){const t=JSON.parse(e.data);d(t)}})}),[]);(0,o.useEffect)((()=>(Ke=new WebSocket(s),c(),function(){const e={username:a,room:l,message:"closing waiting room...",date:(new Date).toLocaleString("pt-br"),close:!0};Ke.send(JSON.stringify(e))})),[]);const d=e=>{const t=[];e.forEach((e=>{e.room!==l&&t.push({room:e.room,numOfParticipants:e.participants.length})})),r(t)};return{rooms:n,onEnterClick:(t,n)=>{t.stopPropagation(),e.push({pathname:"/dashboard",search:`?username=${a}&room=${n}`})},onNewRoomClick:t=>{t.stopPropagation(),e.push({pathname:"/newroom",search:`?username=${a}`})}}})();return a().createElement(Fe,{viewModel:e})},Je=_.ZP.div`
  display: flex;
  width: 100%;
  height: 100%;

  align-items: center;
`,We=_.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 300px;
  margin: 0 auto;
`,Qe=_.ZP.input`
  background: none;
  border: 1px solid grey;
  outline: none;

  width: 100%;
  height: 34px;
  border-radius: 5px;
  padding: 10px;

  margin-bottom: 5%;
`,Xe=_.ZP.button`
  background: #884eef;
  color: white;
  border: none;
  outline: none;

  padding: 7px;
  cursor: pointer;

  width: 100%;
  border-radius: 5px;
`,qe=({viewModel:e})=>a().createElement(Je,null,a().createElement(We,null,a().createElement(Qe,{type:"text",placeholder:"Insert room's name",value:e.roomName,onChange:t=>e.setRoomName(t.target.value),autoFocus:!0,onKeyDown:e.handleTextAreaKeyDown}),a().createElement(Xe,{onClick:e.onEnterClick},"ENTER"))),et=()=>{const e=(()=>{const e=(0,Ae.k6)(),t=new URLSearchParams((0,P.useLocation)().search),[n,r]=(0,o.useState)(t.get("username")),[a,i]=(0,o.useState)(""),l=()=>{0!==a.length&&e.push({pathname:"/dashboard",search:`?username=${n}&room=${a}`})};return{roomName:a,setRoomName:i,onEnterClick:e=>{e.stopPropagation(),l()},handleTextAreaKeyDown:e=>{"Enter"===e.key&&(e.stopPropagation(),l())}}})();return a().createElement(qe,{viewModel:e})},tt=()=>a().createElement(P.BrowserRouter,null,a().createElement($,null),a().createElement(P.Switch,null,a().createElement(P.Route,{path:"/",exact:!0,component:De}),a().createElement(P.Route,{path:"/dashboard",component:Te}),a().createElement(P.Route,{path:"/waitingroom",component:Ye}),a().createElement(P.Route,{path:"/newroom",component:et})));const nt=function(){return a().createElement(s.zt,{store:k},a().createElement(tt,null))},rt=_.vJ`
  body {
    margin: 0;
    padding-top: 90px;
    padding-bottom: 20px;
    width: 100%;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: white;
  }

  html {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 100%;
  }

  *,
  *::before,
  *::after {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;l().render(a().createElement(a().StrictMode,null,a().createElement(rt,null),a().createElement(nt,null)),document.getElementById("root"))},804:e=>{e.exports=React},196:e=>{e.exports=ReactDOM}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={id:r,loaded:!1,exports:{}};return e[r](o,o.exports,n),o.loaded=!0,o.exports}n.m=e,n.x=e=>{},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0},t=[[914,371]],r=e=>{},o=(o,a)=>{for(var i,l,[s,c,d,u]=a,p=0,m=[];p<s.length;p++)l=s[p],n.o(e,l)&&e[l]&&m.push(e[l][0]),e[l]=0;for(i in c)n.o(c,i)&&(n.m[i]=c[i]);for(d&&d(n),o&&o(a);m.length;)m.shift()();return u&&t.push.apply(t,u),r()},a=self.webpackChunktemplate_reactjs_typescript=self.webpackChunktemplate_reactjs_typescript||[];function i(){for(var r,o=0;o<t.length;o++){for(var a=t[o],i=!0,l=1;l<a.length;l++){var s=a[l];0!==e[s]&&(i=!1)}i&&(t.splice(o--,1),r=n(n.s=a[0]))}return 0===t.length&&(n.x(),n.x=e=>{}),r}a.forEach(o.bind(null,0)),a.push=o.bind(null,a.push.bind(a));var l=n.x;n.x=()=>(n.x=l||(e=>{}),(r=i)())})(),n.x()})();