require("source-map-support").install(),module.exports=function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){e.exports=r(8)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(o,i){try{var u=t[o](i),a=u.value}catch(c){return void r(c)}return u.done?void e(a):Promise.resolve(a).then(function(e){return n("next",e)},function(e){return n("throw",e)})}return n("next")})}}function i(e,t){console.log(e,t),console.trace(t)}function u(e){var t=e.uri,r=e.protocols,n=void 0===r?["http","https"]:r,o=e.admin,i=o.name,u=o.password,a=n.filter(function(e){return t.startsWith(e+"://")})[0]+"://";return t.replace(a,""+a+i+":"+u+"@")}function a(e){var t=e.uri,r=e.name,n=e.credentials;n=void 0===n?{}:n;var o=n.admin,i=o?u({uri:t+"/"+r,admin:o}):t+"/"+r;(0,h.execSync)("curl -silent -X PUT "+i)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=function(){var e=o(regeneratorRuntime.mark(function t(e){var r,n,o=e.uri,u=e.name,a=e.password;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l["default"].put(o+"/_config/admins/"+u).send('"'+a+'"');case 3:r=e.sent,console.log("Server admin created"),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),409!=e.t0.status?i("error creating superadmin",e.t0):console.log("Server admin already exists");case 10:return e.prev=10,e.next=13,this.login(u,a);case 13:return n=e.sent,console.log("Server admin logged in"),e.abrupt("return",n);case 18:e.prev=18,e.t1=e["catch"](10),i("error logging in superadmin",e.t1);case 21:case"end":return e.stop()}},t,this,[[0,7],[10,18]])}));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=o(regeneratorRuntime.mark(function t(e){var r=e.name,n=e.password;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.signup(r,n);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),409!=e.t0.status?i("error creating superadmin",e.t0):console.log("user "+r+" already exists");case 8:case"end":return e.stop()}},t,this,[[0,5]])}));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=o(regeneratorRuntime.mark(function t(e){var r=e.uri,n=e.credentials,o=n.admin,u=n.users;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.bind(this)(c({uri:r},o));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),i("error in initDbUsers",e.t0);case 8:u.forEach(f.bind(this));case 9:case"end":return e.stop()}},t,this,[[0,5]])}));return function(t){return e.apply(this,arguments)}}();t.ensureRemoteExistence=a;var p=r(17),l=n(p),v=r(2),h=(n(v),r(11));t["default"]=function(){function e(e){return t.apply(this,arguments)}var t=o(regeneratorRuntime.mark(function r(e){var t=e.settings.db,n=t.uri,o=t.credentials;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o&&d.bind(this)({uri:n,credentials:o});case 1:case"end":return e.stop()}},r,this)}));return e}()},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t=e.name,r=e.uri;return r+"/"+t}function i(e){return new a["default"](o(e),{skipSetup:!0})}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i;var u=r(14),a=n(u),c=r(15),s=n(c);a["default"].plugin(s["default"])},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t=e.path,r=e.persister;return function(e,n,o){var i=function(r){n({nextPathname:e.location.pathname},t),o()};(r||this.db).getSession(function(e,t){e?(console.log(e),i()):t.userCtx.name?o():i()})}}function i(e){return{requiresAuthentication:!0,path:e}}function u(e){var t=function(e){return e};return Object.assign(t,{providesAuthentication:!0,component:e}),t}function a(e){var t=e.route,r=e.persister;return t.props.onEnter&&t.props.onEnter.requiresAuthentication?{onEnter:o({path:t.props.onEnter.path,persister:r})}:{}}function c(e){var t=e.route,r=e.persister;return t.props.component&&t.props.component.providesAuthentication?{component:function(e){return b["default"].createElement(t.props.component.component,h({auth:r},e))}}:{}}function s(e,t){return t=t||this.db,b["default"].cloneElement(e,h({},a({route:e,persister:t}),c({route:e,persister:t}),{key:e.props.path}),e.props.children?e.props.children.map(function(e){return s(e,t)}):void 0)}function f(e,t){var r=this;return function(){for(var n=arguments.length,o=Array(n),i=0;n>i;i++)o[i]=arguments[i];return e.apply(void 0,[t||r.db].concat(o))}}function d(e,t){return e.handlers=e.handlers.map(function(e){return e.requiresPersister?f(e.dependentFunction,t):e}),e}function p(e,t){var r=e.get("routes");return Object.keys(e.get("routes")).map(function(n){return e.register("routes",n,d(r[n],t))}),e}function l(e,t){return t=t||this.db,Object.keys(e).reduce(function(r,n){return r[n]=p(e[n],t),r},{})}function v(e){return{requiresPersister:!0,dependentFunction:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultDataFlows=void 0;var h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.requireAuthWithPersister=o,t.requireAuthFromRoute=i,t.provideAuthFromRoute=u,t.authenticateRoutes=s,t.provideInjectionForDomainRouteHandlers=l,t.requireInjection=v;var m=r(16),b=n(m),y=r(5),g=n(y);t.defaultDataFlows=g["default"]},function(e,t){e.exports=require("redux")},function(e,t){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={INSERT:function(e,t){return[t].concat(r(e))},UPDATE:function(e,t){return e.map(function(e){return e._id==t._id?t:e})},REMOVE:function(e,t){var r=t._id;return e.filter(function(e){return e._id!=r})}}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(18),i=r(7),u=n(i),a=r(2),c=n(a),s=r(3),f=r(1)["default"],d=r(1).ensureRemoteExistence;t["default"]=o.storePersistencePlugin.implement({name:"DomainDrivenPouchPersistencePlugin",constructor:function(e){var t=e.Domains.settings.db;return d(t),[{db:(0,c["default"])(t),middlewareGenerator:u["default"],authenticateRoutes:s.authenticateRoutes,provideAuthFromRoute:s.provideAuthFromRoute,provideInjectionForDomainRouteHandlers:s.provideInjectionForDomainRouteHandlers}]},provider:function(){return f.bind(this.db).apply(void 0,arguments)}})},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){return Object.keys(e).reduce(function(t,r){return t[e[r]]=r,t},{})}function i(e){var t=e.domain,r=t.actions,n=void 0===r?{}:r,i=t.pouchActionMap,u=void 0===i?{insert:"insert",update:"update",remove:"remove"}:i,a=o(u),c=Object.keys(n).filter(function(e){return[u.update,u.insert,u.remove].indexOf(e)>=0}).reduce(function(e,t){return e[a[t]]=function(e){try{return n[t](e)}catch(r){if(r instanceof TypeError)return;throw r}},e},{});return Object.keys(c).length?c:!1}function u(e){var t=e.db,r=e.domains;return(0,c["default"])(Object.values(r).filter(function(e){return i({domain:e})}).map(function(e){return e}).map(function(e){return{path:"/"+e.prefix,prefix:""+(e.dbPrefix||""),db:t,actions:i({domain:e})}}))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=u;var a=(r(4),r(9)),c=n(a)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.utils=t["default"]=void 0;var o=r(3);Object.keys(o).forEach(function(e){"default"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})});var i=r(6),u=n(i);t["default"]=u["default"];t.utils=r(1)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e){var t=console.warn||console.log;t&&t.call(console,e)}function a(e){return function(){throw new Error("no action provided for "+e)}}function c(e){e.lifecycleState||(e.lifecycleState="INITIALIZING",e.db.allDocs(h({include_docs:!0},e.prefix?{startkey:e.prefix,endkey:e.prefix+"￿"}:{})).then(function(t){t.rows.forEach(function(t){return p(e,t)}),e.lifecycleState="INITIALIZED",s(e)})["catch"](function(e){return console.log(e)}))}function s(e){var t=e.db.changes(h({live:!0,since:"now",include_docs:!0},e.prefix?{filter:function(t){var r=t._id;return r.split("/")[0]==e.prefix}}:{}));t.on("change",function(t){return p(e,t)})}function f(e,t){var r=b["default"].resolve(t,e.path);r&&r.length&&"INITIALIZED"==e.lifecycleState&&r.forEach(function(t){var r=d(e.docs,t),n=r.updated,o=r.deleted,i=r.inserted;i.concat(n).forEach(function(t){return e.insert(t)}),o.forEach(function(t){return e.remove(t)})})}function d(e,t){var r=[],n=[],o=Object.keys(e).map(function(t){return e[t]});return t.forEach(function(t){t._id||u("doc with no id"),o=o.filter(function(e){return e._id!==t._id});var i=e[t._id];i?(0,_["default"])(i,t)||n.push(t):r.push(t)}),{inserted:r,updated:n,deleted:o}}function p(e,t){var r=t.doc;o(t,["doc"]);if(r._deleted)e.docs[r._id]&&(delete e.docs[r._id],e.propagations.remove(r));else{var n=e.docs[r._id];e.docs[r._id]=r,n?e.propagations.update(r):e.propagations.insert(r)}}function l(){var e=arguments.length<=0||void 0===arguments[0]?[]:arguments[0];if(Array.isArray(e)||(e=[e]),!e.length)throw new Error("PouchMiddleware: no paths");return e=e.map(function(e){return new O(e)}),function(t){var r=t.dispatch,n=t.getState;return e.forEach(function(e){e.wrapActionCreators(r),e.initFromDb()}),function(t){return function(r){var o=t(r);return e.forEach(function(e){return f(e,n())}),o}}}}Object.defineProperty(t,"__esModule",{value:!0});var v=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t["default"]=l;var m=r(13),b=n(m),y=r(10),g=n(y),x=r(12),_=n(x),w=(r(4),{remove:a("remove"),update:a("update"),insert:a("insert")}),O=function(){function e(t){var r=t.path,n=void 0===r?".":r,o=t.prefix,u=void 0===o?"":o,a=t.db,c=t.actions;if(i(this,e),!a)throw new Error("path "+n.path+" needs a db");this.queue=(0,g["default"])(1),this.docs={},this.db=a,this.path=n,this.prefix=u,this.actions=Object.assign({},w,c)}return v(e,[{key:"insert",value:function(e){this.docs[e._id]=e;var t=this.db;this.queue.push(function(r){t.put(e,r)})}},{key:"remove",value:function(e){var t=this,r=this.db;this.queue.push(function(n){r.remove(e,n),delete t.docs[e._id]})}},{key:"wrapActionCreators",value:function(e){var t=this;this.propagations=Object.keys(this.actions).reduce(function(r,n){return r[n]=function(r){var o=t.actions[n](r);o&&e(o)},r},{})}},{key:"initFromDb",value:function(){c(this)}}]),e}()},function(e,t){e.exports=require("async-function-queue")},function(e,t){e.exports=require("child_process")},function(e,t){e.exports=require("deep-equal")},function(e,t){e.exports=require("json-path")},function(e,t){e.exports=require("pouchdb")},function(e,t){e.exports=require("pouchdb-authentication")},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("requisition")},function(e,t){e.exports=require("strictduck-domain-driven-fullstack")}]);
//# sourceMappingURL=node.js.map