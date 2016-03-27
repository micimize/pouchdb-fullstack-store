require("source-map-support").install(),module.exports=function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){e.exports=r(7)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(i,u){try{var o=t[i](u),a=o.value}catch(c){return void r(c)}return o.done?void e(a):Promise.resolve(a).then(function(e){return n("next",e)},function(e){return n("throw",e)})}return n("next")})}}function u(e,t){console.log(e,t),console.trace(t)}function o(e){var t=e.uri,r=e.protocols,n=void 0===r?["http","https"]:r,i=e.admin,u=i.name,o=i.password,a=n.filter(function(e){return t.startsWith(e+"://")})[0]+"://";return t.replace(a,""+a+u+":"+o+"@")}function a(e){var t=e.uri,r=e.name,n=e.credentials;n=void 0===n?{}:n;var i=n.admin,u=i?o({uri:t+"/"+r,admin:i}):t+"/"+r;(0,h.execSync)("curl -silent -X PUT "+u)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=function(){var e=i(regeneratorRuntime.mark(function t(e){var r,n,i=e.uri,o=e.name,a=e.password;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p["default"].put(i+"/_config/admins/"+o).send('"'+a+'"');case 3:r=e.sent,console.log("Server admin created"),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),409!=e.t0.status?u("error creating superadmin",e.t0):console.log("Server admin already exists");case 10:return e.prev=10,e.next=13,this.login(o,a);case 13:return n=e.sent,console.log("Server admin logged in"),e.abrupt("return",n);case 18:e.prev=18,e.t1=e["catch"](10),u("error logging in superadmin",e.t1);case 21:case"end":return e.stop()}},t,this,[[0,7],[10,18]])}));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=i(regeneratorRuntime.mark(function t(e){var r=e.name,n=e.password;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.signup(r,n);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),409!=e.t0.status?u("error creating superadmin",e.t0):console.log("user "+r+" already exists");case 8:case"end":return e.stop()}},t,this,[[0,5]])}));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=i(regeneratorRuntime.mark(function t(e){var r=e.uri,n=e.credentials,i=n.admin,o=n.users;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.bind(this)(c({uri:r},i));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),u("error in initDbUsers",e.t0);case 8:o.forEach(f.bind(this));case 9:case"end":return e.stop()}},t,this,[[0,5]])}));return function(t){return e.apply(this,arguments)}}();t.ensureRemoteExistence=a;var l=r(15),p=n(l),v=r(2),h=(n(v),r(10));t["default"]=function(){function e(e){return t.apply(this,arguments)}var t=i(regeneratorRuntime.mark(function r(e){var t=e.settings.db,n=t.uri,i=t.credentials;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:i&&d.bind(this)({uri:n,credentials:i});case 1:case"end":return e.stop()}},r,this)}));return e}()},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e){var t=e.name,r=e.uri;return r+"/"+t}function u(e){return new a["default"](i(e),{skipSetup:!0})}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=u;var o=r(13),a=n(o),c=r(14),s=n(c);a["default"].plugin(s["default"])},function(e,t){e.exports=require("redux")},function(e,t){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={INSERT:function(e,t){return[t].concat(r(e))},UPDATE:function(e,t){return e.map(function(e){return e._id==t._id?t:e})},REMOVE:function(e,t){var r=t._id;return e.filter(function(e){return e._id!=r})}}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(16),u=r(6),o=n(u),a=r(2),c=n(a),s=r(1)["default"],f=r(1).ensureRemoteExistence;t["default"]=i.storePersistencePlugin.implement({name:"DomainDrivenPouchPersistencePlugin",constructor:function(e){var t=e.Domains.settings.db;return f(t),[{db:(0,c["default"])(t),middlewareGenerator:o["default"]}]},provider:function(){return s.bind(this.db).apply(void 0,arguments)}})},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e){return Object.keys(e).reduce(function(t,r){return t[e[r]]=r,t},{})}function u(e){var t=e.domain,r=t.actions,n=void 0===r?{}:r,u=t.pouchActionMap,o=void 0===u?{insert:"insert",update:"update",remove:"remove"}:u,a=i(o),c=Object.keys(n).filter(function(e){return[o.update,o.insert,o.remove].indexOf(e)>=0}).reduce(function(e,t){return e[a[t]]=function(e){try{return n[t](e)}catch(r){if(r instanceof TypeError)return;throw r}},e},{});return Object.keys(c).length?c:!1}function o(e){var t=e.db,r=e.domains;return(0,c["default"])(Object.values(r).filter(function(e){return u({domain:e})}).map(function(e){return e}).map(function(e){return{path:"/"+e.prefix,prefix:""+(e.dbPrefix||""),db:t,actions:u({domain:e})}}))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var a=(r(3),r(8)),c=n(a)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.utils=t.defaultDataFlows=t["default"]=void 0;var i=r(5),u=n(i),o=r(4),a=n(o);t["default"]=u["default"],t.defaultDataFlows=a["default"];t.utils=r(1)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e){var t=console.warn||console.log;t&&t.call(console,e)}function a(e){return function(){throw new Error("no action provided for "+e)}}function c(e){e.lifecycleState||(e.lifecycleState="INITIALIZING",e.db.allDocs(h({include_docs:!0},e.prefix?{startkey:e.prefix,endkey:e.prefix+"￿"}:{})).then(function(t){t.rows.forEach(function(t){return l(e,t)}),e.lifecycleState="INITIALIZED",s(e)})["catch"](function(e){return console.log(e)}))}function s(e){var t=e.db.changes(h({live:!0,since:"now",include_docs:!0},e.prefix?{filter:function(t){var r=t._id;return r.split("/")[0]==e.prefix}}:{}));t.on("change",function(t){return l(e,t)})}function f(e,t){var r=b["default"].resolve(t,e.path);r&&r.length&&"INITIALIZED"==e.lifecycleState&&r.forEach(function(t){var r=d(e.docs,t),n=r.updated,i=r.deleted,u=r.inserted;u.concat(n).forEach(function(t){return e.insert(t)}),i.forEach(function(t){return e.remove(t)})})}function d(e,t){var r=[],n=[],i=Object.keys(e).map(function(t){return e[t]});return t.forEach(function(t){t._id||o("doc with no id"),i=i.filter(function(e){return e._id!==t._id});var u=e[t._id];u?(0,_["default"])(u,t)||n.push(t):r.push(t)}),{inserted:r,updated:n,deleted:i}}function l(e,t){var r=t.doc;i(t,["doc"]);if(r._deleted)e.docs[r._id]&&(delete e.docs[r._id],e.propagations.remove(r));else{var n=e.docs[r._id];e.docs[r._id]=r,n?e.propagations.update(r):e.propagations.insert(r)}}function p(){var e=arguments.length<=0||void 0===arguments[0]?[]:arguments[0];if(Array.isArray(e)||(e=[e]),!e.length)throw new Error("PouchMiddleware: no paths");return e=e.map(function(e){return new O(e)}),function(t){var r=t.dispatch,n=t.getState;return e.forEach(function(e){e.wrapActionCreators(r),e.initFromDb()}),function(t){return function(r){var i=t(r);return e.forEach(function(e){return f(e,n())}),i}}}}Object.defineProperty(t,"__esModule",{value:!0});var v=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t["default"]=p;var m=r(12),b=n(m),y=r(9),g=n(y),x=r(11),_=n(x),w=(r(3),{remove:a("remove"),update:a("update"),insert:a("insert")}),O=function(){function e(t){var r=t.path,n=void 0===r?".":r,i=t.prefix,o=void 0===i?"":i,a=t.db,c=t.actions;if(u(this,e),!a)throw new Error("path "+n.path+" needs a db");this.queue=(0,g["default"])(1),this.docs={},this.db=a,this.path=n,this.prefix=o,this.actions=Object.assign({},w,c)}return v(e,[{key:"insert",value:function(e){this.docs[e._id]=e;var t=this.db;this.queue.push(function(r){t.put(e,r)})}},{key:"remove",value:function(e){var t=this,r=this.db;this.queue.push(function(n){r.remove(e,n),delete t.docs[e._id]})}},{key:"wrapActionCreators",value:function(e){var t=this;this.propagations=Object.keys(this.actions).reduce(function(r,n){return r[n]=function(r){var i=t.actions[n](r);i&&e(i)},r},{})}},{key:"initFromDb",value:function(){c(this)}}]),e}()},function(e,t){e.exports=require("async-function-queue")},function(e,t){e.exports=require("child_process")},function(e,t){e.exports=require("deep-equal")},function(e,t){e.exports=require("json-path")},function(e,t){e.exports=require("pouchdb")},function(e,t){e.exports=require("pouchdb-authentication")},function(e,t){e.exports=require("requisition")},function(e,t){e.exports=require("strictduck-domain-driven-fullstack")}]);
//# sourceMappingURL=node.js.map