(this["webpackJsonptwitter-clone-coding"]=this["webpackJsonptwitter-clone-coding"]||[]).push([[0],{47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(31),l=a.n(c),o=a(8),u=a(21),i=a(5),s=a(9),m=a.n(s),p=a(16),f=a(23);a(39),a(49),a(50);f.a.initializeApp({apiKey:"AIzaSyAOLBN9g20wWKhc7ZzVqQb3Pwjv_TPfCoE",authDomain:"twitter-clone-coding-8a29b.firebaseapp.com",databaseURL:"https://twitter-clone-coding-8a29b-default-rtdb.firebaseio.com",projectId:"twitter-clone-coding-8a29b",storageBucket:"twitter-clone-coding-8a29b.appspot.com",messagingSenderId:"899674399442",appId:"1:899674399442:web:560289cb25d0612e71430b"});var d=f.a,E=f.a.auth(),b=f.a.firestore(),h=f.a.storage(),g=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),u=Object(o.a)(l,2),i=u[0],s=u[1],f=Object(n.useState)(!0),d=Object(o.a)(f,2),b=d[0],h=d[1],g=Object(n.useState)(""),v=Object(o.a)(g,2),w=v[0],y=v[1],O=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?c(n):"password"===a&&s(n)},j=function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!b){e.next=8;break}return e.next=5,E.createUserWithEmailAndPassword(a,i);case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,E.signInWithEmailAndPassword(a,i);case 10:n=e.sent;case 11:console.log(n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),y(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"container",onSubmit:j},r.a.createElement("input",{className:"authInput",name:"email",type:"email",placeholder:"Email",required:!0,value:a,onChange:O}),r.a.createElement("input",{className:"authInput",name:"password",type:"password",placeholder:"Password",required:!0,value:i,onChange:O}),r.a.createElement("input",{className:"authInput authSubmit",type:"submit",value:b?"Create Account":"Log In"}),w&&r.a.createElement("span",{className:"authError"},w)),r.a.createElement("span",{className:"authSwitch",onClick:function(){return h((function(e){return!e}))}},b?"Sign In":"Create Account"))},v=a(11),w=a(22),y=function(){var e=function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(a=t.target.name)?n=new d.auth.GoogleAuthProvider:"github"===a&&(n=new d.auth.GithubAuthProvider),e.next=4,E.signInWithPopup(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"authContainer"},r.a.createElement(v.a,{icon:w.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),r.a.createElement(g,null),r.a.createElement("div",{className:"authBtns"},r.a.createElement("button",{className:"authBtn",onClick:e,name:"google"},"Continue with Google ",r.a.createElement(v.a,{icon:w.b})),r.a.createElement("button",{className:"authBtn",onClick:e,name:"github"},"Continue with Github ",r.a.createElement(v.a,{icon:w.a}))))},O=a(33),j=a(17),x=function(e){var t=e.tweetObj,a=e.isOwner,c=Object(n.useState)(!1),l=Object(o.a)(c,2),u=l[0],i=l[1],s=Object(n.useState)(t.text),f=Object(o.a)(s,2),d=f[0],E=f[1],g=function(){var e=Object(p.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=window.confirm("\uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"),console.log(a),!a){e.next=7;break}return e.next=5,b.doc("tweets/".concat(t.id)).delete();case 5:return e.next=7,h.refFromURL(t.attachmentUrl).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){return i((function(e){return!e}))},y=function(){var e=Object(p.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,b.doc("tweets/".concat(t.id)).update({text:d});case 3:i(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"tweet"},u?r.a.createElement(r.a.Fragment,null,a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"container tweetEdit",onSubmit:y},r.a.createElement("input",{className:"formInput",type:"text",placeholder:"Edit your tweet",value:d,required:!0,autoFocus:!0,onChange:function(e){var t=e.target.value;E(t)}}),r.a.createElement("input",{className:"formBtn",type:"submit",value:"Update Tweet"})),r.a.createElement("button",{className:"formBtn cancelBtn",onClick:w},"Cancel"))):r.a.createElement(r.a.Fragment,null,t.attachmentUrl?r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"tweet_attachment"},t.text),r.a.createElement("img",{src:t.attachmentUrl}),a&&r.a.createElement("div",{className:"tweet_actions"},r.a.createElement("span",{onClick:g},r.a.createElement(v.a,{icon:j.d})),r.a.createElement("span",{onClick:w},r.a.createElement(v.a,{icon:j.a})))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,t.text),a&&r.a.createElement("div",{className:"tweet_actions"},r.a.createElement("span",{onClick:g},r.a.createElement(v.a,{icon:j.d})),r.a.createElement("span",{onClick:w},r.a.createElement(v.a,{icon:j.a}))))))},N=a(52),k=function(e){var t=e.userObj,a=Object(n.useState)(""),c=Object(o.a)(a,2),l=c[0],u=c[1],i=Object(n.useState)(""),s=Object(o.a)(i,2),f=s[0],d=s[1],E=function(){var e=Object(p.a)(m.a.mark((function e(a){var n,r,c,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n="",""!==l){e.next=4;break}return e.abrupt("return");case 4:if(""===f){e.next=12;break}return r=h.ref().child("".concat(t.uid,"/").concat(Object(N.a)())),e.next=8,r.putString(f,"data_url");case 8:return c=e.sent,e.next=11,c.ref.getDownloadURL();case 11:n=e.sent;case 12:return o={text:l,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:n},e.next=15,b.collection("tweets").add(o);case 15:u(""),d("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{className:"factoryForm",onSubmit:E},r.a.createElement("div",{className:"factoryInput_container"},r.a.createElement("input",{className:"factoryInput_input",type:"text",value:l,onChange:function(e){var t=e.target.value;u(t)},placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc138\uc694.",maxLength:120}),r.a.createElement("input",{className:"factoryInput_arrow",type:"submit",value:"\u2192"})),r.a.createElement("label",{for:"attach-file",className:"factoryInput_label"},r.a.createElement("span",null,"Add photos"),r.a.createElement(v.a,{icon:j.b})),r.a.createElement("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){console.log(e);var t=e.currentTarget.result;d(t)},Boolean(t)&&a.readAsDataURL(t)},style:{opacity:0}}),f&&r.a.createElement("div",{className:"factoryForm_attachment"},r.a.createElement("img",{src:f,style:{backgroundImage:f}}),r.a.createElement("div",{className:"factoryForm_clear",onClick:function(){return d("")}},r.a.createElement("span",null,"Remove"),r.a.createElement(v.a,{icon:j.c}))))},C=function(e){var t=e.userObj,a=Object(n.useState)([]),c=Object(o.a)(a,2),l=c[0],u=c[1];return Object(n.useEffect)((function(){b.collection("tweets").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(O.a)({id:e.id},e.data())}));u(t)}))}),[]),r.a.createElement("div",{className:"container"},r.a.createElement(k,{userObj:t}),r.a.createElement("div",{style:{marginTop:30}},l.map((function(e){return r.a.createElement(x,{key:e.id,tweetObj:e,isOwner:e.creatorId===t.uid})}))))},S=function(e){var t=e.userObj;return r.a.createElement("nav",null,r.a.createElement("ul",{style:{display:"flex",justifyContent:"center",marginTop:50}},r.a.createElement("li",null,r.a.createElement(u.b,{to:"/",style:{marginRight:10}},r.a.createElement(v.a,{icon:w.c,color:"#04AAFF",size:"2x"}))),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12}},r.a.createElement(v.a,{icon:j.e,color:"#04AAFF",size:"2x"}),r.a.createElement("span",{style:{marginTop:10}},t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile")))))},I=function(e){var t=e.userObj,a=e.refreshUser,c=Object(i.f)(),l=Object(n.useState)(t.displayName),u=Object(o.a)(l,2),s=u[0],f=u[1],d=function(){var e=Object(p.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),t.displayName===s){e.next=5;break}return e.next=4,t.updateProfile({displayName:s});case 4:a();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"profileForm",onSubmit:d},r.a.createElement("input",{className:"formInput",type:"text",autoFocus:!0,value:s,onChange:function(e){var t=e.target.value;f(t)},placeholder:"Display name"}),r.a.createElement("input",{className:"formBtn",type:"submit",value:"Update Profile",style:{marginTop:10}})),r.a.createElement("span",{className:"formBtn cancelBtn logOut",onClick:function(){E.signOut(),c.push("/")}},"Log Out"))},F=function(e){var t=e.isLoggedIn,a=e.userObj,n=e.refreshUser;return r.a.createElement(u.a,null,t&&r.a.createElement(S,{userObj:a}),r.a.createElement(i.c,null,t?r.a.createElement("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"}},r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(C,{userObj:a})),r.a.createElement(i.a,{exact:!0,path:"/profile"},r.a.createElement(I,{userObj:a,refreshUser:n}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(y,null)))))};var A=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),u=Object(o.a)(l,2),i=u[0],s=u[1];return Object(n.useEffect)((function(){E.onAuthStateChanged((function(e){s(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),c(!0)}))}),[]),r.a.createElement(r.a.Fragment,null,a?r.a.createElement(F,{isLoggedIn:Boolean(i),userObj:i,refreshUser:function(){var e=E.currentUser;s({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})}}):"Initializing...")};a(47);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.c224b841.chunk.js.map