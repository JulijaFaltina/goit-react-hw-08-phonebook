(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(23),a=Object(r.createAction)("contacts/changeFilter")},16:function(e,t,n){"use strict";n.d(t,"d",(function(){return p})),n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return x}));var r=n(6),a=n.n(r),c=n(18),u=n(23),i=n(29),s=n.n(i),o=n(75);function l(){return(l=Object(c.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/contacts");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){return(b=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("/contacts",t);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){return(d=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.delete("/contacts/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return(j=Object(c.a)(a.a.mark((function e(t,n){var r,c,u,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.name,c=n.number,e.next=3,s.a.patch("/contacts/".concat(t),{name:r,number:c});case 3:return u=e.sent,i=u.data,e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s.a.defaults.baseURL=o.a;var f={fetchContactData:function(){return l.apply(this,arguments)},postContactData:function(e){return b.apply(this,arguments)},deleteContactData:function(e){return d.apply(this,arguments)},patchContactData:function(e,t){return j.apply(this,arguments)}},p=Object(u.createAsyncThunk)("contacts/getContacts",function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,f.fetchContactsData();case 4:return c=e.sent,e.abrupt("return",c);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",r(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}()),h=Object(u.createAsyncThunk)("contacts/addContact",function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,f.postContactData(t);case 4:return c=e.sent,e.abrupt("return",c);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",r(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}()),O=Object(u.createAsyncThunk)("contacts/deleteContact",function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,f.deleteContactData(t);case 4:return e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",r(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}()),x=Object(u.createAsyncThunk)("contacts/editContact",function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c,u,i,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.id,c=t.name,u=t.number,i=n.rejectWithValue,e.prev=2,e.next=5,f.patchContactData(r,{name:c,number:u});case 5:return s=e.sent,e.abrupt("return",s);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",i(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,n){return e.apply(this,arguments)}}())},165:function(e,t,n){"use strict";n.r(t);var r=n(202),a=n(0),c=n.n(a),u=n(44),i=n.n(u),s=n(20),o=n(58),l=n(108),b=n(12),d=n(200),j=n(27),f=n(174),p={html:{height:"100%"},body:{height:"100%",margin:0,fontFamily:'"Oswald", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n      sans-serif',lineHeight:"1.3",backgroundColor:j.a.palette.background.default,color:j.a.palette.text.primary},footer:{flexGrow:0,flexShrink:0,flexBasis:"auto"},"#root":{display:"flex",flexDirection:"column",minHeight:"100%"},main:{flexGrow:1,flexShrink:0,flexBasis:"auto"},".list":{listStyle:"none",marginTop:0,paddingLeft:0},".link":{cursor:"pointer",textDecoration:"none",fontStyle:"normal",color:"inherit",outline:"none"},".button":{cursor:"pointer",outline:"none",border:"none",fontFamily:"inherit",lineHeight:"inherit"},".visuallyHidden":{position:"absolute",width:"1px",height:"1px",margin:"-1px",padding:0,overflow:"hidden",border:0,clip:"rect(0 0 0 0)"}},h=n(14),O=n(36),x=n(1);function g(e){var t=e.children,n=e.redirectTo,r=void 0===n?"/":n,a=e.routeProps,c=Object(s.d)(O.b);return Object(x.jsx)(b.b,Object(h.a)(Object(h.a)({},a),{},{children:c?t:Object(x.jsx)(b.a,{to:r})}))}function m(e){var t=e.children,n=e.redirectTo,r=void 0===n?"/":n,a=e.restricted,c=void 0!==a&&a,u=e.routeProps,i=Object(s.d)(O.b)&&c;return Object(x.jsx)(b.b,Object(h.a)(Object(h.a)({},u),{},{children:i?Object(x.jsx)(b.a,{to:r}):t}))}var v=n(37),y=n(204),k=n(190);function w(){return Object(x.jsx)(k.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center",padding:"10px"},children:Object(x.jsx)(y.a,{})})}var C=n(197),U=n(198),L=n(207),D=n(209),S=n(210),T=n(64),I=n(193),F=["children"],R=Object(I.a)("ul")((function(){return{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:0}}));function N(e){var t=e.children,n=Object(T.a)(e,F);return Object(x.jsx)(R,Object(h.a)(Object(h.a)({},n),{},{children:t}))}var A=Object(I.a)("li")((function(){return{"&:not(:last-child)":{marginRight:"10px"}}}));function V(e){var t=e.children;return Object(x.jsx)(A,{children:t})}var W=n(205),z=["children","homeLink"];function B(e){var t,n=e.children,r=e.homeLink,a=Object(T.a)(e,z);t="/"===Object(b.g)().pathname?j.a.palette.background.default:"inherit";var c={"&:hover, &:focus":{color:j.a.palette.background.default},display:"flex",alignItems:"center",padding:"5px"},u={"&.active":{color:j.a.palette.background.default}},i={"&.active":{color:t}};return Object(x.jsx)(W.a,Object(h.a)(Object(h.a)({component:o.b},a),{},{sx:r?Object(h.a)(Object(h.a)({},i),c):Object(h.a)(Object(h.a)({},u),c),children:n}))}function P(){return Object(x.jsx)("div",{children:Object(x.jsxs)(N,{className:"list",children:[Object(x.jsx)(V,{children:Object(x.jsx)(B,{to:"/login",className:"link",children:"Log in"})}),Object(x.jsx)(V,{children:Object(x.jsx)(B,{to:"/register",className:"link",children:"Sign up"})})]})})}var E=n(194);function H(){var e=Object(s.d)(O.b),t=Object(E.a)(j.a.breakpoints.up("sm"));return Object(x.jsxs)(N,{className:"list",children:[Object(x.jsx)(V,{children:Object(x.jsx)(B,{homeLink:!0,to:"/",className:"link",sx:{display:"flex",alignItems:"center"},children:t&&"Phonebook"})}),e&&Object(x.jsx)(V,{children:Object(x.jsx)(B,{to:"/contacts",className:"link",children:"Contacts"})})]})}var J=n(203),M=n(206),G=n(113),_=n.n(G);function Y(){var e=Object(s.c)(),t=Object(s.d)(O.c);return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(N,{className:"list",children:[Object(x.jsx)(V,{children:Object(x.jsx)(B,{to:"/user-account",className:"link",children:Object(x.jsx)(J.a,{alt:"",sx:{bgcolor:"background.light"},children:t.at()})})}),Object(x.jsx)(V,{children:Object(x.jsx)(M.a,{"aria-label":"Log out",sx:{"&:hover, &:focus":{color:j.a.palette.background.default}},onClick:function(){return e(Object(v.b)())},children:Object(x.jsx)(_.a,{})})})]})})}function q(e){var t=e.children,n=e.window,r=Object(C.a)({target:n?n():void 0});return Object(x.jsx)(U.a,{appear:!1,direction:"down",in:!r,children:t})}function K(e){var t=Object(s.d)(O.b);return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(q,Object(h.a)(Object(h.a)({},e),{},{children:Object(x.jsx)(L.a,{children:Object(x.jsx)(D.a,{children:Object(x.jsxs)(S.a,{component:"nav",sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(x.jsx)(H,{}),t?Object(x.jsx)(Y,{}):Object(x.jsx)(P,{})]})})})}))})}var Q=n(15),X=n(211);function Z(e){return Object(x.jsxs)(W.a,Object(h.a)(Object(h.a)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:[" \xa9 ",Object(x.jsx)(X.a,{color:"inherit",href:"https://github.com/Julija100",target:"_blank",rel:"noopener noreferrer",className:"link",children:"by Julia Faltina"})," ",(new Date).getFullYear(),"."]}))}var $=n(199);function ee(){var e=Object(b.g)(),t=Object(a.useState)(1),n=Object(Q.a)(t,2),r=n[0],c=n[1],u="/contacts"===e.pathname;return Object(a.useEffect)((function(){c(u?11:1)}),[u]),Object(x.jsx)($.a,{component:"footer",bgcolor:"primary.main",pb:r,children:Object(x.jsx)(D.a,{component:"div",maxWidth:"xs",children:Object(x.jsx)(Z,{sx:{pt:1,pb:1}})})})}var te=Object(a.lazy)((function(){return n.e(2).then(n.bind(null,271))})),ne=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(9),n.e(1)]).then(n.bind(null,277))})),re=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,282))})),ae=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,283))})),ce=Object(a.lazy)((function(){return n.e(7).then(n.bind(null,275))}));var ue,ie,se,oe,le=Object(s.b)((function(e){return{filter:e.contacts.filter,contacts:e.contacts.items}}),(function(e){return{removeContact:function(t){return e({type:"REMOVE_CONTACT",payload:{id:t}})}}}))((function(){var e=Object(s.c)(),t=Object(s.d)(O.a);return Object(a.useEffect)((function(){e(Object(v.a)())}),[e]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(d.a,{}),Object(x.jsx)(f.a,{styles:p}),Object(x.jsx)(r.a,{theme:j.a,children:Object(x.jsx)(a.Suspense,{fallback:Object(x.jsx)(w,{}),children:t?Object(x.jsx)(w,{}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(K,{}),Object(x.jsx)("main",{children:Object(x.jsxs)(b.d,{children:[Object(x.jsx)(m,{path:"/",redirectTo:"/contacts",restricted:!0,exact:!0,children:Object(x.jsx)(te,{})}),Object(x.jsx)(g,{path:"/contacts",exact:!0,children:Object(x.jsx)(ne,{})}),Object(x.jsx)(m,{path:"/login",redirectTo:"/contacts",restricted:!0,exact:!0,children:Object(x.jsx)(re,{})}),Object(x.jsx)(m,{path:"/register",restricted:!0,exact:!0,children:Object(x.jsx)(ae,{})}),Object(x.jsx)(g,{path:"/user-account",exact:!0,children:Object(x.jsx)(ce,{})}),Object(x.jsx)(b.b,{children:Object(x.jsx)(b.a,{to:"/"})})]})}),Object(x.jsx)(ee,{})]})})})]})})),be=n(23),de=n(43),je=n(114),fe=n.n(je),pe=n(4),he=n(33),Oe=n(25),xe=n(16),ge=n(105),me=Object(be.createReducer)([],(ue={},Object(pe.a)(ue,xe.d.fulfilled,(function(e,t){return t.payload})),Object(pe.a)(ue,xe.a.fulfilled,(function(e,t){var n=t.payload;return[].concat(Object(he.a)(e),[n])})),Object(pe.a)(ue,xe.b.fulfilled,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),Object(pe.a)(ue,xe.c.fulfilled,(function(e,t){var n=t.payload;return Object(he.a)(e).map((function(e){return e.id===n.id?n:e}))})),ue)),ve=Object(be.createReducer)(!1,(ie={},Object(pe.a)(ie,xe.d.pending,(function(){return!0})),Object(pe.a)(ie,xe.d.fulfilled,(function(){return!1})),Object(pe.a)(ie,xe.d.rejected,(function(){return!1})),Object(pe.a)(ie,xe.a.pending,(function(){return!0})),Object(pe.a)(ie,xe.a.fulfilled,(function(){return!1})),Object(pe.a)(ie,xe.a.rejected,(function(){return!1})),Object(pe.a)(ie,xe.b.pending,(function(){return!0})),Object(pe.a)(ie,xe.b.fulfilled,(function(){return!1})),Object(pe.a)(ie,xe.b.rejected,(function(){return!1})),Object(pe.a)(ie,xe.c.pending,(function(){return!0})),Object(pe.a)(ie,xe.c.fulfilled,(function(){return!1})),Object(pe.a)(ie,xe.c.rejected,(function(){return!1})),ie)),ye=Object(be.createReducer)(null,(se={},Object(pe.a)(se,xe.d.pending,(function(){return null})),Object(pe.a)(se,xe.d.rejected,(function(e,t){return t.payload})),Object(pe.a)(se,xe.a.pending,(function(){return null})),Object(pe.a)(se,xe.a.rejected,(function(e,t){return t.payload})),Object(pe.a)(se,xe.b.pending,(function(){return null})),Object(pe.a)(se,xe.b.rejected,(function(e,t){return t.payload})),se)),ke=Object(be.createReducer)("",Object(pe.a)({},ge.a,(function(e,t){return t.payload}))),we=Object(Oe.d)({items:me,isLoading:ve,error:ye,filter:ke}),Ce=Object(be.createSlice)({name:"auth",initialState:{user:{name:null,email:null,password:null},token:null,isLoggedIn:!1,isChecksCurrentUser:!1},extraReducers:(oe={},Object(pe.a)(oe,v.d.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(pe.a)(oe,v.c.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(pe.a)(oe,v.b.fulfilled,(function(e,t){e.user={name:null,email:null,password:null},e.token=null,e.isLoggedIn=!1})),Object(pe.a)(oe,v.a.pending,(function(e){e.isChecksCurrentUser=!0})),Object(pe.a)(oe,v.a.fulfilled,(function(e,t){e.user=t.payload,e.isLoggedIn=!0,e.isChecksCurrentUser=!1})),Object(pe.a)(oe,v.a.rejected,(function(e){e.isChecksCurrentUser=!1})),oe)}).reducer,Ue={key:"auth",storage:fe.a,whitelist:["token"]},Le=Object(be.configureStore)({reducer:{auth:Object(de.g)(Ue,Ce),contacts:we},devTools:!1,middleware:function(e){return e({serializableCheck:{ignoredActions:[de.a,de.f,de.b,de.c,de.d,de.e]}})}}),De=Object(de.h)(Le);i.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(s.a,{store:Le,children:Object(x.jsx)(l.a,{loading:null,persistor:De,children:Object(x.jsx)(o.a,{children:Object(x.jsx)(r.a,{theme:j.a,children:Object(x.jsx)(le,{})})})})})}),document.getElementById("root"))},27:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(79),a=Object(r.a)({palette:{type:"light",primary:{main:"#c2a28c",contrastText:"2e2c2b"},secondary:{main:"#e76f51",accent:"#f4a261"},background:{default:"#f7e9e1",paper:"#2a9d8f",light:"#fffffe"},text:{primary:"#264653",secondary:"#fffffe"}},typography:{fontFamily:"Oswald"}})},36:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return c}));var r=function(e){return e.auth.isLoggedIn},a=function(e){return e.auth.user.name},c=function(e){return e.auth.isChecksCurrentUser}},37:function(e,t,n){"use strict";n.d(t,"d",(function(){return O})),n.d(t,"c",(function(){return x})),n.d(t,"b",(function(){return g})),n.d(t,"a",(function(){return m}));var r=n(6),a=n.n(r),c=n(18),u=n(29),i=n.n(u),s=n(75);function o(){return(o=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("/users/signup",t);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(){return(l=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("/users/login",t);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){return(b=Object(c.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("/users/logout");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){return(d=Object(c.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("/users/current");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.a.defaults.baseURL=s.a;var j={postUserRegisterData:function(e){return o.apply(this,arguments)},postUserLoginData:function(e){return l.apply(this,arguments)},deleteUserLoginData:function(){return b.apply(this,arguments)},fetchCurrentUser:function(){return d.apply(this,arguments)}},f=function(e){i.a.defaults.headers.common.Authorization="Bearer ".concat(e)},p=function(){i.a.defaults.headers.common.Authorization=""},h=n(23).createAsyncThunk,O=h("auth/registerUser",function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,j.postUserRegisterData(t);case 4:return c=e.sent,f(c.token),e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",r(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),x=h("auth/loginUser",function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,j.postUserLoginData(t);case 4:return c=e.sent,f(c.token),e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",r(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),g=h("auth/logOutUser",function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,j.deleteUserLoginData();case 4:return c=e.sent,p(),e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",r(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),m=h("auth/getCurrentUser",function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c,u,i,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.rejectWithValue,c=n.getState,u=c(),null!==(i=u.auth.token)){e.next=5;break}return e.abrupt("return",r());case 5:return f(i),e.prev=6,e.next=9,j.fetchCurrentUser();case 9:return s=e.sent,e.abrupt("return",s);case 13:return e.prev=13,e.t0=e.catch(6),e.abrupt("return",r(e.t0.message));case 16:case"end":return e.stop()}}),e,null,[[6,13]])})));return function(t,n){return e.apply(this,arguments)}}())},75:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r="https://connections-api.herokuapp.com"}},[[165,5,8]]]);
//# sourceMappingURL=main.f8c2e3ec.chunk.js.map