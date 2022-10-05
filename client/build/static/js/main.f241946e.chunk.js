/*! For license information please see main.f241946e.chunk.js.LICENSE.txt */
(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{46:function(e,t,r){e.exports=r.p+"static/media/spinner.ab497855.gif"},73:function(e,t,r){e.exports=r(87)},78:function(e,t,r){},86:function(e,t,r){},87:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(61),i=r.n(o),c=(r(78),r(4)),l=r(12),u=r(9),s=r(68),f=r(98),h=r(100),p=r(97),d=r(65),m=r(10);function v(e,t,r){return new Promise((function(n,a){var o,i,c,l=window.indexedDB.open("shop-shop",1);l.onupgradeneeded=function(e){var t=l.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},l.onerror=function(e){console.log("There was an error")},l.onsuccess=function(a){switch(o=l.result,i=o.transaction(e,"readwrite"),c=i.objectStore(e),o.onerror=function(e){console.log("error",e)},t){case"put":c.put(r),n(r);break;case"get":var u=c.getAll();u.onsuccess=function(){n(u.result)};break;case"delete":c.delete(r._id);break;default:console.log("No valid method")}i.oncomplete=function(){o.close()}}}))}var y=r(69),g=r(27),E=function(e,t){switch(t.type){case"UPDATE_PRODUTS":return Object(c.a)(Object(c.a)({},e),{},{products:Object(g.a)(t.products)});case"UPDATE_CATEGORIES":return Object(c.a)(Object(c.a)({},e),{},{categories:Object(g.a)(t.categories)});case"UPDATE_CURRENT_CATEGORY":return Object(c.a)(Object(c.a)({},e),{},{currentCategory:t.currentCategory});case"ADD_TO_CART":return Object(c.a)(Object(c.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(g.a)(e.cart),[t.product])});case"ADD_MULTIPLE_TO_CART":return Object(c.a)(Object(c.a)({},e),{},{cart:[].concat(Object(g.a)(e.cart),Object(g.a)(t.products))});case"REMOVE_FROM_CART":var r=e.cart.filter((function(e){return e._id!==t._id}));return Object(c.a)(Object(c.a)({},e),{},{cartOpen:r.length>0,cart:r});case"UPDATE_CART_QUANTITY":return Object(c.a)(Object(c.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case"CLEAR_CART":return Object(c.a)(Object(c.a)({},e),{},{cartOpen:!1,cart:[]});case"TOGGLE_CART":return Object(c.a)(Object(c.a)({},e),{},{cartOpen:!e.cartOpen});default:return e}};var b=["value"],w=Object(n.createContext)(),O=w.Provider,j=function(e){e.value;var t,r=Object(y.a)(e,b),o=(t={products:[],cart:[],cartOpen:!1,categories:[],currentCategory:""},Object(n.useReducer)(E,t)),i=Object(m.a)(o,2),c=i[0],l=i[1];return console.log("state",c),a.a.createElement(O,Object.assign({value:[c,l]},r))},_=function(){return Object(n.useContext)(w)};var x,L,N,k,T=function(e){var t=e.image,r=e.name,n=e._id,o=e.price,i=e.quantity,u=_(),s=Object(m.a)(u,2),f=s[0],h=s[1],p=f.cart;return a.a.createElement("div",{className:"card px-1 py-1"},a.a.createElement(l.b,{to:"/products/".concat(n)},a.a.createElement("img",{alt:r,src:"/images/".concat(t)}),a.a.createElement("p",null,r)),a.a.createElement("div",null,a.a.createElement("div",null,i," ",function(e,t){return 1===t?e:e+"s"}("item",i)," in stock"),a.a.createElement("span",null,"$",o)),a.a.createElement("button",{onClick:function(){var t=p.find((function(e){return e._id===n}));t?(h({type:"UPDATE_CART_QUANTITY",_id:n,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),v("cart","put",Object(c.a)(Object(c.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(h({type:"ADD_TO_CART",product:Object(c.a)(Object(c.a)({},e),{},{purchaseQuantity:1})}),v("cart","put",Object(c.a)(Object(c.a)({},e),{},{purchaseQuantity:1})))}},"Add to cart"))},S=r(102),A=r(23),C=r(99),P=Object(C.a)(x||(x=Object(A.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),R=(Object(C.a)(L||(L=Object(A.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(C.a)(N||(N=Object(A.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"])))),D=Object(C.a)(k||(k=Object(A.a)(["\n  {\n    user {\n      firstName\n      lastName\n      orders {\n        _id\n        purchaseDate\n        products {\n          _id\n          name\n          description\n          price\n          quantity\n          image\n        }\n      }\n    }\n  }\n"]))),G=r(46),I=r.n(G);var F=function(){var e=_(),t=Object(m.a)(e,2),r=t[0],o=t[1],i=r.currentCategory,c=Object(S.a)(P),l=c.loading,u=c.data;return Object(n.useEffect)((function(){u?(o({type:"UPDATE_PRODUTS",products:u.products}),u.products.forEach((function(e){v("products","put",e)}))):l||v("products","get").then((function(e){o({type:"UPDATE_PRODUTS",products:e})}))}),[u,l,o]),a.a.createElement("div",{className:"my-2"},a.a.createElement("h2",null,"Our Products:"),r.products.length?a.a.createElement("div",{className:"flex-row"},(i?r.products.filter((function(e){return e.category._id===i})):r.products).map((function(e){return a.a.createElement(T,{key:e._id,_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity})}))):a.a.createElement("h3",null,"You haven't added any products yet!"),l?a.a.createElement("img",{src:I.a,alt:"loading"}):null)};var U=function(){var e=_(),t=Object(m.a)(e,2),r=t[0],o=t[1],i=r.categories,c=Object(S.a)(R).data;return Object(n.useEffect)((function(){c&&o({type:"UPDATE_CATEGORIES",categories:c.categories})}),[c,o]),a.a.createElement("div",null,a.a.createElement("h2",null,"Choose a Category:"),i.map((function(e){return a.a.createElement("button",{key:e._id,onClick:function(){var t;t=e._id,o({type:"UPDATE_CURRENT_CATEGORY",currentCategory:t})}},e.name)})))},Q=r(32),$=function(e){var t=e.item,r=_(),n=Object(m.a)(r,2)[1];return a.a.createElement("div",{className:"flex-row"},a.a.createElement("div",null,a.a.createElement("img",{src:"/images/".concat(t.image),alt:""})),a.a.createElement("div",null,a.a.createElement("div",null,t.name,", $",t.price),a.a.createElement("div",null,a.a.createElement("span",null,"Qty:"),a.a.createElement("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var r=e.target.value;"0"===r?(n({type:"REMOVE_FROM_CART",_id:t._id}),v("cart","delete",Object(c.a)({},t))):(n({type:"UPDATE_CART_QUANTITY",_id:t._id,purchaseQuantity:parseInt(r)}),v("cart","put",Object(c.a)(Object(c.a)({},t),{},{purchaseQuantity:parseInt(r)})))}}),a.a.createElement("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){n({type:"REMOVE_FROM_CART",_id:e._id}),v("cart","delete",Object(c.a)({},e))}(t)}},"\ud83d\uddd1\ufe0f"))))},Y=r(63),M=r(64),q=r(52),W=r.n(q),B=new(function(){function e(){Object(Y.a)(this,e)}return Object(M.a)(e,[{key:"getProfile",value:function(){return W()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return W()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}());r(86);function H(){H=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(L){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof f?t:f,o=Object.create(a.prototype),i=new j(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return x()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(L){return{type:"throw",arg:L}}}e.wrap=l;var s={};function f(){}function h(){}function p(){}var d={};c(d,a,(function(){return this}));var m=Object.getPrototypeOf,v=m&&m(m(_([])));v&&v!==t&&r.call(v,a)&&(d=v);var y=p.prototype=f.prototype=Object.create(d);function g(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var n;this._invoke=function(a,o){function i(){return new t((function(n,i){!function n(a,o,i,c){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(f).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function _(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:x}}function x(){return{value:void 0,done:!0}}return h.prototype=p,c(y,"constructor",p),c(p,"constructor",h),h.displayName=c(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(E.prototype),c(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new E(l(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},g(y),c(y,i,"Generator"),c(y,a,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=_,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:_(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}var V=function(){var e=_(),t=Object(m.a)(e,2),r=t[0],o=t[1];function i(){o({type:"TOGGLE_CART"})}return Object(n.useEffect)((function(){function e(){return(e=Object(Q.a)(H().mark((function e(){var t;return H().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v("cart","get");case 2:t=e.sent,o({type:"ADD_MULTIPLE_TO_CART",products:Object(g.a)(t)});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r.cart.length||function(){e.apply(this,arguments)}()}),[r.cart.length,o]),r.cartOpen?a.a.createElement("div",{className:"cart"},a.a.createElement("div",{className:"close",onClick:i},"[close]"),a.a.createElement("h2",null,"Shopping Cart"),r.cart.length?a.a.createElement("div",null,r.cart.map((function(e){return a.a.createElement($,{key:e._id,item:e})})),a.a.createElement("div",{className:"flex-row space-between"},a.a.createElement("strong",null,"Total: $",function(){var e=0;return r.cart.forEach((function(t){e+=t.price*t.purchaseQuantity})),e.toFixed(2)}()),B.loggedIn()?a.a.createElement("button",null,"Checkout"):a.a.createElement("span",null,"(log in to check out)"))):a.a.createElement("h3",null,a.a.createElement("span",{role:"img","aria-label":"shocked"},"\ud83d\ude31"),"You haven't added anything to your cart yet!")):a.a.createElement("div",{className:"cart-closed",onClick:i},a.a.createElement("span",{role:"img","aria-label":"trash"},"\ud83d\uded2"))},J=function(){return a.a.createElement("div",{className:"container"},a.a.createElement(U,null),a.a.createElement(F,null),a.a.createElement(V,null))};var z=function(){var e=_(),t=Object(m.a)(e,2),r=t[0],o=t[1],i=Object(u.f)().id,s=Object(n.useState)({}),f=Object(m.a)(s,2),h=f[0],p=f[1],d=Object(S.a)(P),y=d.loading,g=d.data,E=r.products,b=r.cart;return Object(n.useEffect)((function(){E.length?p(E.find((function(e){return e._id===i}))):g?(o({type:"UPDATE_PRODUTS",products:g.products}),g.products.forEach((function(e){v("products","put",e)}))):y||v("products","get").then((function(e){o({type:"UPDATE_PRODUTS",products:e})}))}),[E,g,y,o,i]),a.a.createElement(a.a.Fragment,null,h?a.a.createElement("div",{className:"container my-1"},a.a.createElement(l.b,{to:"/"},"\u2190 Back to Products"),a.a.createElement("h2",null,h.name),a.a.createElement("p",null,h.description),a.a.createElement("p",null,a.a.createElement("strong",null,"Price:"),"$",h.price," ",a.a.createElement("button",{onClick:function(){var e=b.find((function(e){return e._id===i}));e?(o({type:"UPDATE_CART_QUANTITY",_id:i,purchaseQuantity:parseInt(e.purchaseQuantity)+1}),v("cart","put",Object(c.a)(Object(c.a)({},e),{},{purchaseQuantity:parseInt(e.purchaseQuantity)+1}))):(o({type:"ADD_TO_CART",product:Object(c.a)(Object(c.a)({},h),{},{purchaseQuantity:1})}),v("cart","put",Object(c.a)(Object(c.a)({},h),{},{purchaseQuantity:1})))}},"Add to Cart"),a.a.createElement("button",{disabled:!b.find((function(e){return e._id===h._id})),onClick:function(){o({type:"REMOVE_FROM_CART",_id:h._id}),v("cart","delete",Object(c.a)({},h))}},"Remove from Cart")),a.a.createElement("img",{src:"/images/".concat(h.image),alt:h.name})):null,y?a.a.createElement("img",{src:I.a,alt:"loading"}):null)};var K,X,Z,ee=function(e){var t=e.children;return a.a.createElement("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"}},t)},te=function(){return a.a.createElement("div",null,a.a.createElement(ee,null,a.a.createElement("h1",null,"404 Page Not Found"),a.a.createElement("h1",null,a.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))},re=r(31),ne=r(95),ae=Object(C.a)(K||(K=Object(A.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),oe=(Object(C.a)(X||(X=Object(A.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),Object(C.a)(Z||(Z=Object(A.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))));function ie(){ie=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(L){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof f?t:f,o=Object.create(a.prototype),i=new j(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return x()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(L){return{type:"throw",arg:L}}}e.wrap=l;var s={};function f(){}function h(){}function p(){}var d={};c(d,a,(function(){return this}));var m=Object.getPrototypeOf,v=m&&m(m(_([])));v&&v!==t&&r.call(v,a)&&(d=v);var y=p.prototype=f.prototype=Object.create(d);function g(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var n;this._invoke=function(a,o){function i(){return new t((function(n,i){!function n(a,o,i,c){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(f).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function _(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:x}}function x(){return{value:void 0,done:!0}}return h.prototype=p,c(y,"constructor",p),c(p,"constructor",h),h.displayName=c(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(E.prototype),c(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new E(l(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},g(y),c(y,i,"Generator"),c(y,a,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=_,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:_(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}var ce=function(e){var t=Object(n.useState)({email:"",password:""}),r=Object(m.a)(t,2),o=r[0],i=r[1],u=Object(ne.a)(ae),s=Object(m.a)(u,2),f=s[0],h=s[1].error,p=function(){var e=Object(Q.a)(ie().mark((function e(t){var r,n;return ie().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,f({variables:{email:o.email,password:o.password}});case 4:r=e.sent,n=r.data.login.token,B.login(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.target,r=t.name,n=t.value;i(Object(c.a)(Object(c.a)({},o),{},Object(re.a)({},r,n)))};return a.a.createElement("div",{className:"container my-1"},a.a.createElement(l.b,{to:"/signup"},"\u2190 Go to Signup"),a.a.createElement("h2",null,"Login"),a.a.createElement("form",{onSubmit:p},a.a.createElement("div",{className:"flex-row space-between my-2"},a.a.createElement("label",{htmlFor:"email"},"Email address:"),a.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:d})),a.a.createElement("div",{className:"flex-row space-between my-2"},a.a.createElement("label",{htmlFor:"pwd"},"Password:"),a.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:d})),h?a.a.createElement("div",null,a.a.createElement("p",{className:"error-text"},"The provided credentials are incorrect")):null,a.a.createElement("div",{className:"flex-row flex-end"},a.a.createElement("button",{type:"submit"},"Submit"))))};function le(){le=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(L){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof f?t:f,o=Object.create(a.prototype),i=new j(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return x()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(L){return{type:"throw",arg:L}}}e.wrap=l;var s={};function f(){}function h(){}function p(){}var d={};c(d,a,(function(){return this}));var m=Object.getPrototypeOf,v=m&&m(m(_([])));v&&v!==t&&r.call(v,a)&&(d=v);var y=p.prototype=f.prototype=Object.create(d);function g(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var n;this._invoke=function(a,o){function i(){return new t((function(n,i){!function n(a,o,i,c){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(f).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function _(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:x}}function x(){return{value:void 0,done:!0}}return h.prototype=p,c(y,"constructor",p),c(p,"constructor",h),h.displayName=c(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(E.prototype),c(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new E(l(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},g(y),c(y,i,"Generator"),c(y,a,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=_,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:_(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}var ue=function(e){var t=Object(n.useState)({email:"",password:""}),r=Object(m.a)(t,2),o=r[0],i=r[1],u=Object(ne.a)(oe),s=Object(m.a)(u,1)[0],f=function(){var e=Object(Q.a)(le().mark((function e(t){var r,n;return le().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,s({variables:{email:o.email,password:o.password,firstName:o.firstName,lastName:o.lastName}});case 3:r=e.sent,n=r.data.addUser.token,B.login(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t=e.target,r=t.name,n=t.value;i(Object(c.a)(Object(c.a)({},o),{},Object(re.a)({},r,n)))};return a.a.createElement("div",{className:"container my-1"},a.a.createElement(l.b,{to:"/login"},"\u2190 Go to Login"),a.a.createElement("h2",null,"Signup"),a.a.createElement("form",{onSubmit:f},a.a.createElement("div",{className:"flex-row space-between my-2"},a.a.createElement("label",{htmlFor:"firstName"},"First Name:"),a.a.createElement("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:h})),a.a.createElement("div",{className:"flex-row space-between my-2"},a.a.createElement("label",{htmlFor:"lastName"},"Last Name:"),a.a.createElement("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:h})),a.a.createElement("div",{className:"flex-row space-between my-2"},a.a.createElement("label",{htmlFor:"email"},"Email:"),a.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:h})),a.a.createElement("div",{className:"flex-row space-between my-2"},a.a.createElement("label",{htmlFor:"pwd"},"Password:"),a.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:h})),a.a.createElement("div",{className:"flex-row flex-end"},a.a.createElement("button",{type:"submit"},"Submit"))))};var se=function(){return a.a.createElement("header",{className:"flex-row px-1"},a.a.createElement("h1",null,a.a.createElement(l.b,{to:"/"},a.a.createElement("span",{role:"img","aria-label":"shopping bag"},"\ud83d\udecd\ufe0f"),"-Shop-Shop")),a.a.createElement("nav",null,B.loggedIn()?a.a.createElement("ul",{className:"flex-row"},a.a.createElement("li",{className:"mx-1"},a.a.createElement(l.b,{to:"/orderHistory"},"Order History")),a.a.createElement("li",{className:"mx-1"},a.a.createElement("a",{href:"/",onClick:function(){return B.logout()}},"Logout"))):a.a.createElement("ul",{className:"flex-row"},a.a.createElement("li",{className:"mx-1"},a.a.createElement(l.b,{to:"/signup"},"Signup")),a.a.createElement("li",{className:"mx-1"},a.a.createElement(l.b,{to:"/login"},"Login")))))};var fe=function(){var e,t=Object(S.a)(D).data;return t&&(e=t.user),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"container my-1"},a.a.createElement(l.b,{to:"/"},"\u2190 Back to Products"),e?a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"Order History for ",e.firstName," ",e.lastName),e.orders.map((function(e){return a.a.createElement("div",{key:e._id,className:"my-2"},a.a.createElement("h3",null,new Date(parseInt(e.purchaseDate)).toLocaleDateString()),a.a.createElement("div",{className:"flex-row"},e.products.map((function(e,t){var r=e._id,n=e.image,o=e.name,i=e.price;return a.a.createElement("div",{key:t,className:"card px-1 py-1"},a.a.createElement(l.b,{to:"/products/".concat(r)},a.a.createElement("img",{alt:o,src:"/images/".concat(n)}),a.a.createElement("p",null,o)),a.a.createElement("div",null,a.a.createElement("span",null,"$",i)))}))))}))):null))},he=Object(s.a)({uri:"/graphql"}),pe=Object(d.a)((function(e,t){var r=t.headers,n=localStorage.getItem("id_token");return{headers:Object(c.a)(Object(c.a)({},r),{},{authorization:n?"Bearer ".concat(n):""})}})),de=new f.a({link:pe.concat(he),cache:new h.a});var me=function(){return a.a.createElement(p.a,{client:de},a.a.createElement(l.a,null,a.a.createElement("div",null,a.a.createElement(j,null,a.a.createElement(se,null),a.a.createElement(u.c,null,a.a.createElement(u.a,{exact:!0,path:"/",component:J}),a.a.createElement(u.a,{exact:!0,path:"/login",component:ce}),a.a.createElement(u.a,{exact:!0,path:"/signup",component:ue}),a.a.createElement(u.a,{exact:!0,path:"/orderHistory",component:fe}),a.a.createElement(u.a,{exact:!0,path:"/products/:id",component:z}),a.a.createElement(u.a,{component:te}))))))},ve=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ye(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var r=e.installing;null!=r&&(r.onstatechange=function(){"installed"===r.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(me,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");ve?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(r){var n=r.headers.get("content-type");404===r.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ye(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ye(t,e)}))}}()}},[[73,1,2]]]);
//# sourceMappingURL=main.f241946e.chunk.js.map