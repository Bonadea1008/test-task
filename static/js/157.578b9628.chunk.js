"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[157],{529:function(e,t,r){r.r(t),r.d(t,{default:function(){return T}});var n=r(683),a=r(861),o=r(433),c=r(439),s=r(757),u=r.n(s),i=r(482),l=r(689),f="BackButton_buttonContainer__63M+e",p="BackButton_button__5Jmp+",d="BackButton_icon__w-sxb",h=r(184),m=function(){var e=(0,l.TH)(),t=(0,l.s0)();return(0,h.jsx)("div",{className:f,children:(0,h.jsxs)("button",{type:"button",className:p,onClick:function(){var r,n;t(null!==(r=null===e||void 0===e||null===(n=e.state)||void 0===n?void 0:n.from)&&void 0!==r?r:"/")},children:["Go back ",(0,h.jsx)(i.TPM,{className:d})]})})},w="CardItem_cardContainer__GzGWE",g="CardItem_cardLogo__1c4eW",A="CardItem_cardImg__qxZx0",b="CardItem_avatarContainer__2p7UV",x="CardItem_avatarImg__qX5SW",v="CardItem_cardTweets__F3Wwb",j="CardItem_cardFollowers__v+I8G",C="CardItem_cardBtn__PYbNn",_=r.p+"static/media/picture21.b3d9942b3f9d5dad1ff0.png",k=r(791),Z=function(e){var t=e.item,r=e.followings,n=e.isFollowing,a=t.tweets,o=t.followers,s=t.user,u=t.avatar,i=t.id,l=(0,k.useState)(r.includes(i)),f=(0,c.Z)(l,2),p=f[0],d=f[1];return(0,h.jsxs)("div",{className:w,children:[(0,h.jsx)("a",{href:"https://goit.global/ua/",target:"_blank",rel:"noreferrer noopener",children:(0,h.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ0SURBVHgB7VixbhNBEB0jjHQURsKRSBEkoEjhJi5o3FCk5psjQUNDkSYULqDISYTCSKawJTjJvOebjcabPe86kHiQeNLo9vZm93bfzbxZXW+1Wr2V/WMJe9fr9ZouB6xzjMuR7BkPxAcq2Fj+AXghjDhEFB2Lc3gijDgGac/EMbwRRoxB2mNxCo+E9WETkPZQHKJ0Ub9gX2AzaStapfYcNkz4z2E17LuOpe+R+pcgFIGPcjtcwT5p+wXslbY/SLv+be+dbHleRNiCL0LJX0Z9RK1CbcV6Ct9pYo4ZfKe6oJKUWxeBxFwlaDBuvUbMYY8qy9CfAnwlh1xKbpCFCfuwQaQxT0z70m5Q/a99dR5+5UbKwCJQGpUl4NqHatfBEvrQfJqbIBdhM0MWN/4mjME9U5TpZquaJYtpMNL2mih+Xc6H+8+yGZXbMIL/TP4OXpv2GazRfU1KJ8hFWG3aJ9KSRVLOpdWphbYZMfOI3JEZW+n4gF0IWBcBKdfbO0VuEVa3Kr0y6jY2rDrWJHylo2+b8KZAcemLA+QiLLXJihFEfYp8B6b9Q27qVIr8EjDtc9Xt3pAjzB4ZmHpMQZb7U7kpkH0VToo7N3lhnoXUDdhFyC+iCr1X5FLyJUiog1jj/kz16WfHnwWmJqOBpF3C9yuaj2wp1/GHUgYeUWpxhFyEhVO3PRosLFmqX+E5y/NJKNn0S5BVKuBXtzyD3SlKFk69OWWk4cqIaXTcgbSpFc/BvgM9dszNe7r8U4hTeFcM9f8ZMejwGemhdqdi0nPyA9GC+vc+1q3/PxC7ce5J5GN4I4wi/00cwxNhLkU+hhfC/lTk7w2/AbK0DT3l4b3DAAAAAElFTkSuQmCC",alt:"GoIT",className:g})}),(0,h.jsx)("img",{src:_,alt:"".concat(s," avatar"),className:A}),(0,h.jsx)("div",{className:b,children:(0,h.jsx)("img",{alt:"avatar",src:u,className:x})}),(0,h.jsxs)("p",{className:v,children:[a," tweets"]}),(0,h.jsxs)("p",{className:j,children:[o.toLocaleString("en-US")," followers"]}),(0,h.jsx)("button",{type:"button",className:C,style:{backgroundColor:p?"#5CD3A8":"#EBD8FF"},onClick:function(){return n(i,o,p),void d((function(e){return!e}))},children:p?"following":"follow"})]})},N="CardList_cardList__brJ0H",U=function(e){var t=e.users,r=e.followings,n=e.isFollowing;return(0,h.jsx)(h.Fragment,{children:0!==t.length&&(0,h.jsx)("ul",{className:N,children:t.map((function(e){return(0,h.jsx)("li",{children:(0,h.jsx)(Z,{item:e,followings:r,isFollowing:n})},e.id)}))})})},B=function(e){var t=e.page,r=e.onLoadMoreClick;return(0,h.jsxs)("div",{className:f,children:[" ",(0,h.jsx)("button",{type:"button",className:p,onClick:function(){return r(t)},children:"Load more"})]})},F=r(287),E=r(791),I=E.useEffect,L=E.useState,y=r(299),J=y.getUsers,S=y.getAllUsers,W=y.updateUser,T=function(){var e=L([]),t=(0,c.Z)(e,2),r=t[0],s=t[1],i=L(1),l=(0,c.Z)(i,2),f=l[0],p=l[1],d=L(!1),w=(0,c.Z)(d,2),g=w[0],A=w[1],b=L(!1),x=(0,c.Z)(b,2),v=x[0],j=x[1],C=L(!1),_=(0,c.Z)(C,2),Z=_[0],N=_[1],E=function(e,t){var r=(0,k.useState)((function(){var r;return null!==(r=JSON.parse(window.localStorage.getItem(e)))&&void 0!==r?r:t})),n=(0,c.Z)(r,2),a=n[0],o=n[1];return(0,k.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(a))}),[e,a]),[a,o]}("followings",[]),y=(0,c.Z)(E,2),T=y[0],M=y[1],X=S().then((function(e){return e.length})),K=Math.ceil(X/3);I((function(){1===f?(console.log(f),A(!0),j(!0),J(f).then((function(e){return s(e)})).catch((function(e){return N(!0)})).finally((function(){return A(!1)}))):J(f).then((function(e){if(0===e.length)return j(!1),alert("No tweets found");s((function(t){return[].concat((0,o.Z)(t),(0,o.Z)(e))}))}))}),[f]),I((function(){f<K/3&&j(!0)}),[f,K]);var R=function(){var e=(0,a.Z)(u().mark((function e(t,r,a){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s((function(e){return e.map((function(e){return e.id!==t?e:(0,n.Z)((0,n.Z)({},e),{},{followers:a?e.followers-=1:e.followers+=1})}))})),a){e.next=7;break}return M((function(e){return[].concat((0,o.Z)(e),[t])})),e.next=5,W(t,r+=1);case 5:e.next=10;break;case 7:return M((function(e){return e.filter((function(e){return e!==t}))})),e.next=10,W(t,r-=1);case 10:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}();return console.log(f),(0,h.jsxs)(h.Fragment,{children:[g?(0,h.jsx)(F.Z,{}):(0,h.jsxs)(h.Fragment,{children:[" ",(0,h.jsx)(m,{})," ",(0,h.jsx)(U,{users:r,followings:T,isFollowing:R})]}),Z&&(0,h.jsx)("h1",{children:Z.message}),v&&(0,h.jsx)(B,{page:f,onLoadMoreClick:function(){p(f+1)}})]})}},299:function(e,t,r){r.r(t),r.d(t,{getAllUsers:function(){return i},getUsers:function(){return s},updateUser:function(){return f}});var n=r(861),a=r(757),o=r.n(a),c=r(243);function s(e){return u.apply(this,arguments)}function u(){return(u=(0,n.Z)(o().mark((function e(t){var r,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/Users?page=".concat(t,"&limit=3"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",Promise.reject(new Error("There is no tweets")));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function i(){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(o().mark((function e(){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/Users");case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",Promise.reject(new Error("There is no tweets")));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function f(e,t){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(o().mark((function e(t,r){var n,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.put("/Users/".concat(t),{followers:r});case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",Promise.reject(new Error("There is no tweets")));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}c.Z.defaults.baseURL="https://6457cd1e1a4c152cf98acf28.mockapi.io"}}]);
//# sourceMappingURL=157.578b9628.chunk.js.map