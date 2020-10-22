!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=2)}([function(e,n,t){"use strict";var o=t(1);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i={assertTrue:function(e,n){if(!e)throw new Error(n)},assertNotNull:function(e,n){return i.assertTrue(null!==e&&void 0!==r(e),Object(o.sprintf)("%s must be provided",n||"A value")),e},isNonEmptyString:function(e){return"string"==typeof e&&e.length>0},assertIsList:function(e,n){if(!Array.isArray(e))throw new Error(n+" is not an array")},isFunction:function(e){return!!(e&&e.constructor&&e.call&&e.apply)},isObject:function(e){return!("object"!==r(e)||null===e)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e}},c=new RegExp("^(wss://)\\w*");i.validWSUrl=function(e){return c.test(e)},i.getSubscriptionResponse=function(e,n,t){return{topic:e,content:{status:n?"success":"failure",topics:t}}},i.assertIsObject=function(e,n){if(!i.isObject(e))throw new Error(n+" is not an object!")},i.addJitter=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;n=Math.min(n,1);var t=Math.random()>.5?1:-1;return Math.floor(e+t*e*Math.random()*n)},i.isNetworkOnline=function(){return navigator.onLine};var s=i,a="NULL",u="CLIENT_LOGGER",l="DEBUG",f="aws/subscribe",p="aws/unsubscribe",d="aws/heartbeat",b="connected",g="disconnected";function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,n){return!n||"object"!==m(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,n){return(k=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function h(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function v(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function w(e,n,t){return n&&v(e.prototype,n),t&&v(e,t),e}var C=function(){function e(){h(this,e)}return w(e,[{key:"debug",value:function(e){}},{key:"info",value:function(e){}},{key:"warn",value:function(e){}},{key:"error",value:function(e){}}]),e}(),T={DEBUG:10,INFO:20,WARN:30,ERROR:40},O=function(){function e(){h(this,e),this.updateLoggerConfig(),this.consoleLoggerWrapper=N()}return w(e,[{key:"writeToClientLogger",value:function(e,n){if(this.hasClientLogger())switch(e){case T.DEBUG:return this._clientLogger.debug(n);case T.INFO:return this._clientLogger.info(n);case T.WARN:return this._clientLogger.warn(n);case T.ERROR:return this._clientLogger.error(n)}}},{key:"isLevelEnabled",value:function(e){return e>=this._level}},{key:"hasClientLogger",value:function(){return null!==this._clientLogger}},{key:"getLogger",value:function(e){var n=e.prefix||"";return this._logsDestination===l?this.consoleLoggerWrapper:new W(n)}},{key:"updateLoggerConfig",value:function(e){var n=e||{};this._level=n.level||T.DEBUG,this._clientLogger=n.logger||null,this._logsDestination=a,n.debug&&(this._logsDestination=l),n.logger&&(this._logsDestination=u)}}]),e}(),I=function(){function e(){h(this,e)}return w(e,[{key:"debug",value:function(){}},{key:"info",value:function(){}},{key:"warn",value:function(){}},{key:"error",value:function(){}}]),e}(),W=function(e){function n(e){var t;return h(this,n),(t=y(this,S(n).call(this))).prefix=e||"",t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&k(e,n)}(n,I),w(n,[{key:"debug",value:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];this._log(T.DEBUG,n)}},{key:"info",value:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];this._log(T.INFO,n)}},{key:"warn",value:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];this._log(T.WARN,n)}},{key:"error",value:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];this._log(T.ERROR,n)}},{key:"_shouldLog",value:function(e){return _.hasClientLogger()&&_.isLevelEnabled(e)}},{key:"_writeToClientLogger",value:function(e,n){_.writeToClientLogger(e,n)}},{key:"_log",value:function(e,n){if(this._shouldLog(e)){var t=this._convertToSingleStatement(n);this._writeToClientLogger(e,t)}}},{key:"_convertToSingleStatement",value:function(e){var n="";this.prefix&&(n+=this.prefix+" ");for(var t=0;t<e.length;t++){var o=e[t];n+=this._convertToString(o)+" "}return n}},{key:"_convertToString",value:function(e){try{if(!e)return"";if(s.isString(e))return e;if(s.isObject(e)&&s.isFunction(e.toString)){var n=e.toString();if("[object Object]"!==n)return n}return JSON.stringify(e)}catch(n){return console.error("Error while converting argument to string",e,n),""}}}]),n}(),N=function(){var e=new I;return e.debug=console.debug,e.info=console.info,e.warn=console.warn,e.error=console.error,e},_=new O;t.d(n,"a",function(){return L});var E=function(){var e=_.getLogger({}),n=s.isNetworkOnline(),t={primary:null,secondary:null},o={reconnectWebSocket:!0,websocketInitFailed:!1,exponentialBackOffTime:1e3,exponentialTimeoutHandle:null,lifeTimeTimeoutHandle:null,webSocketInitCheckerTimeoutId:null,connState:null},r={connectWebSocketRetryCount:0,connectionAttemptStartTime:null,noOpenConnectionsTimestamp:null},i={pendingResponse:!1,intervalHandle:null},c={initFailure:new Set,getWebSocketTransport:null,subscriptionUpdate:new Set,subscriptionFailure:new Set,topic:new Map,allMessage:new Set,connectionGain:new Set,connectionLost:new Set,connectionOpen:new Set,connectionClose:new Set},a={connConfig:null,promiseHandle:null,promiseCompleted:!0},u={subscribed:new Set,pending:new Set,subscriptionHistory:new Set},l={responseCheckIntervalId:null,requestCompleted:!0,reSubscribeIntervalId:null,consecutiveFailedSubscribeAttempts:0,consecutiveNoResponseRequest:0},m=new Set([f,p,d]),y=setInterval(function(){if(n!==s.isNetworkOnline()){if(!(n=s.isNetworkOnline()))return void e.info("Network offline");var t=T();n&&(!t||v(t,WebSocket.CLOSING)||v(t,WebSocket.CLOSED))&&(e.info("Network online, connecting to WebSocket server"),G())}},250),S=function(n,t){n.forEach(function(n){try{n(t)}catch(n){e.error("Error executing callback",n)}})},k=function(e){if(null===e)return"NULL";switch(e.readyState){case WebSocket.CONNECTING:return"CONNECTING";case WebSocket.OPEN:return"OPEN";case WebSocket.CLOSING:return"CLOSING";case WebSocket.CLOSED:return"CLOSED";default:return"UNDEFINED"}},h=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e.debug("["+n+"] Primary WebSocket: "+k(t.primary)+" | Secondary WebSocket: "+k(t.secondary))},v=function(e,n){return e&&e.readyState===n},w=function(e){return v(e,WebSocket.OPEN)},C=function(e){return null===e||void 0===e.readyState||v(e,WebSocket.CLOSED)},T=function(){return null!==t.secondary?t.secondary:t.primary},O=function(){return w(T())},I=function(){if(i.pendingResponse)return e.warn("Heartbeat response not received"),clearInterval(i.intervalHandle),i.pendingResponse=!1,void G();O()?(e.debug("Sending heartbeat"),T().send(P(d)),i.pendingResponse=!0):(e.warn("Failed to send heartbeat since WebSocket is not open"),h("sendHeartBeat"),G())},W=function(){o.exponentialBackOffTime=1e3,i.pendingResponse=!1,o.reconnectWebSocket=!0,clearTimeout(o.lifeTimeTimeoutHandle),clearInterval(i.intervalHandle),clearTimeout(o.exponentialTimeoutHandle),clearTimeout(o.webSocketInitCheckerTimeoutId)},N=function(){l.consecutiveFailedSubscribeAttempts=0,l.consecutiveNoResponseRequest=0,clearInterval(l.responseCheckIntervalId),clearInterval(l.reSubscribeIntervalId)},E=function(){r.connectWebSocketRetryCount=0,r.connectionAttemptStartTime=null,r.noOpenConnectionsTimestamp=null},L=function(){try{e.info("WebSocket connection established!"),h("webSocketOnOpen"),null!==o.connState&&o.connState!==g||S(c.connectionGain),o.connState=b;var n=Date.now();S(c.connectionOpen,{connectWebSocketRetryCount:r.connectWebSocketRetryCount,connectionAttemptStartTime:r.connectionAttemptStartTime,noOpenConnectionsTimestamp:r.noOpenConnectionsTimestamp,connectionEstablishedTime:n,timeToConnect:n-r.connectionAttemptStartTime,timeWithoutConnection:r.noOpenConnectionsTimestamp?n-r.noOpenConnectionsTimestamp:null}),E(),W(),T().openTimestamp=Date.now(),0===u.subscribed.size&&w(t.secondary)&&j(t.primary,"[Primary WebSocket] Closing WebSocket"),(u.subscribed.size>0||u.pending.size>0)&&(w(t.secondary)&&e.info("Subscribing secondary websocket to topics of primary websocket"),u.subscribed.forEach(function(e){u.subscriptionHistory.add(e),u.pending.add(e)}),u.subscribed.clear(),R()),I(),i.intervalHandle=setInterval(I,1e4);var l=Math.min(s.addJitter(3e6,.1),1e3*a.connConfig.webSocketTransport.transportLifeTimeInSeconds);e.debug("Scheduling WebSocket manager reconnection, after delay "+l+" ms"),o.lifeTimeTimeoutHandle=setTimeout(function(){e.debug("Starting scheduled WebSocket manager reconnection"),G()},l)}catch(n){e.error("Error after establishing WebSocket connection",n)}},F=function(n){h("webSocketOnError"),e.error("WebSocketManager Error, error_event: ",JSON.stringify(n)),G()},x=function(n){var o=JSON.parse(n.data);switch(o.topic){case f:if(e.debug("Subscription Message received from webSocket server",n.data),l.requestCompleted=!0,l.consecutiveNoResponseRequest=0,"success"===o.content.status)l.consecutiveFailedSubscribeAttempts=0,o.content.topics.forEach(function(e){u.subscriptionHistory.delete(e),u.pending.delete(e),u.subscribed.add(e)}),0===u.subscriptionHistory.size?w(t.secondary)&&(e.info("Successfully subscribed secondary websocket to all topics of primary websocket"),j(t.primary,"[Primary WebSocket] Closing WebSocket")):R(),S(c.subscriptionUpdate,o);else{if(clearInterval(l.reSubscribeIntervalId),++l.consecutiveFailedSubscribeAttempts,5===l.consecutiveFailedSubscribeAttempts)return S(c.subscriptionFailure,o),void(l.consecutiveFailedSubscribeAttempts=0);l.reSubscribeIntervalId=setInterval(function(){R()},500)}break;case d:e.debug("Heartbeat response received"),i.pendingResponse=!1;break;default:if(o.topic){if(e.debug("Message received for topic "+o.topic),w(t.primary)&&w(t.secondary)&&0===u.subscriptionHistory.size&&this===t.primary)return void e.warn("Ignoring Message for Topic "+o.topic+", to avoid duplicates");if(0===c.allMessage.size&&0===c.topic.size)return void e.warn("No registered callback listener for Topic",o.topic);S(c.allMessage,o),c.topic.has(o.topic)&&S(c.topic.get(o.topic),o)}else o.message?e.warn("WebSocketManager Message Error",o):e.warn("Invalid incoming message",o)}},R=function n(){if(l.consecutiveNoResponseRequest>3)return e.warn("Ignoring subscribePendingTopics since we have exhausted max subscription retries with no response"),void S(c.subscriptionFailure,s.getSubscriptionResponse(f,!1,Array.from(u.pending)));O()?(clearInterval(l.responseCheckIntervalId),T().send(P(f,{topics:Array.from(u.pending)})),l.requestCompleted=!1,l.responseCheckIntervalId=setInterval(function(){l.requestCompleted||(++l.consecutiveNoResponseRequest,n())},1e3)):e.warn("Ignoring subscribePendingTopics call since Default WebSocket is not open")},j=function(n,t){v(n,WebSocket.CONNECTING)||v(n,WebSocket.OPEN)?n.close(1e3,t):e.warn("Ignoring WebSocket Close request, WebSocket State: "+k(n))},M=function(e){j(t.primary,"[Primary] WebSocket "+e),j(t.secondary,"[Secondary] WebSocket "+e)},A=function(){r.connectWebSocketRetryCount++;var n=s.addJitter(o.exponentialBackOffTime,.3);Date.now()+n<=a.connConfig.urlConnValidTime?(e.debug("Scheduling WebSocket reinitialization, after delay "+n+" ms"),o.exponentialTimeoutHandle=setTimeout(function(){return z()},n),o.exponentialBackOffTime*=2):(e.warn("WebSocket URL cannot be used to establish connection"),G())},D=function(n){W(),N(),e.error("WebSocket Initialization failed"),o.websocketInitFailed=!0,M("Terminating WebSocket Manager"),clearInterval(y),S(c.initFailure,{connectWebSocketRetryCount:r.connectWebSocketRetryCount,connectionAttemptStartTime:r.connectionAttemptStartTime,reason:n}),E()},P=function(e,n){return JSON.stringify({topic:e,content:n})},H=function(n){return!!(s.isObject(n)&&s.isObject(n.webSocketTransport)&&s.isNonEmptyString(n.webSocketTransport.url)&&s.validWSUrl(n.webSocketTransport.url)&&1e3*n.webSocketTransport.transportLifeTimeInSeconds>=3e5)||(e.error("Invalid WebSocket Connection Configuration",n),!1)},G=function(){if(s.isNetworkOnline())if(o.websocketInitFailed)e.debug("WebSocket Init had failed, ignoring this getWebSocketConnConfig request");else{if(a.promiseCompleted)return W(),e.info("Fetching new WebSocket connection configuration"),r.connectionAttemptStartTime=r.connectionAttemptStartTime||Date.now(),a.promiseCompleted=!1,a.promiseHandle=c.getWebSocketTransport(),a.promiseHandle.then(function(n){return a.promiseCompleted=!0,e.debug("Successfully fetched webSocket connection configuration",n),H(n)?(a.connConfig=n,a.connConfig.urlConnValidTime=Date.now()+85e3,z()):(D("Invalid WebSocket connection configuration: "+n),{webSocketConnectionFailed:!0})},function(n){return a.promiseCompleted=!0,e.error("Failed to fetch webSocket connection configuration",n),{webSocketConnectionFailed:!0}});e.debug("There is an ongoing getWebSocketConnConfig request, this request will be ignored")}else e.info("Network offline, ignoring this getWebSocketConnConfig request")},z=function(){if(o.websocketInitFailed)return e.info("web-socket initializing had failed, aborting re-init"),{webSocketConnectionFailed:!0};if(!s.isNetworkOnline())return e.warn("System is offline aborting web-socket init"),{webSocketConnectionFailed:!0};e.info("Initializing Websocket Manager"),h("initWebSocket");try{if(H(a.connConfig)){var n=null;return w(t.primary)?(e.debug("Primary Socket connection is already open"),v(t.secondary,WebSocket.CONNECTING)||(e.debug("Establishing a secondary web-socket connection"),t.secondary=U()),n=t.secondary):(v(t.primary,WebSocket.CONNECTING)||(e.debug("Establishing a primary web-socket connection"),t.primary=U()),n=t.primary),o.webSocketInitCheckerTimeoutId=setTimeout(function(){w(n)||A()},1e3),{webSocketConnectionFailed:!1}}}catch(n){return e.error("Error Initializing web-socket-manager",n),D("Failed to initialize new WebSocket: "+n.message),{webSocketConnectionFailed:!0}}},U=function(){var n=new WebSocket(a.connConfig.webSocketTransport.url);return n.addEventListener("open",L),n.addEventListener("message",x),n.addEventListener("error",F),n.addEventListener("close",function(i){return function(n,i){e.info("Socket connection is closed",n),h("webSocketOnClose before-cleanup"),S(c.connectionClose,{openTimestamp:i.openTimestamp,closeTimestamp:Date.now(),connectionDuration:Date.now()-i.openTimestamp,code:n.code,reason:n.reason}),C(t.primary)&&(t.primary=null),C(t.secondary)&&(t.secondary=null),o.reconnectWebSocket&&(w(t.primary)||w(t.secondary)?C(t.primary)&&w(t.secondary)&&(e.info("[Primary] WebSocket Cleanly Closed"),t.primary=t.secondary,t.secondary=null):(e.warn("Neither primary websocket and nor secondary websocket have open connections, attempting to re-establish connection"),o.connState===g?e.info("Ignoring connectionLost callback invocation"):(S(c.connectionLost,{openTimestamp:i.openTimestamp,closeTimestamp:Date.now(),connectionDuration:Date.now()-i.openTimestamp,code:n.code,reason:n.reason}),r.noOpenConnectionsTimestamp=Date.now()),o.connState=g,G()),h("webSocketOnClose after-cleanup"))}(i,n)}),n};this.init=function(n){if(s.assertTrue(s.isFunction(n),"transportHandle must be a function"),null===c.getWebSocketTransport)return c.getWebSocketTransport=n,G();e.warn("Web Socket Manager was already initialized")},this.onInitFailure=function(e){return s.assertTrue(s.isFunction(e),"cb must be a function"),c.initFailure.add(e),o.websocketInitFailed&&e(),function(){return c.initFailure.delete(e)}},this.onConnectionOpen=function(e){return s.assertTrue(s.isFunction(e),"cb must be a function"),c.connectionOpen.add(e),function(){return c.connectionOpen.delete(e)}},this.onConnectionClose=function(e){return s.assertTrue(s.isFunction(e),"cb must be a function"),c.connectionClose.add(e),function(){return c.connectionClose.delete(e)}},this.onConnectionGain=function(e){return s.assertTrue(s.isFunction(e),"cb must be a function"),c.connectionGain.add(e),O()&&e(),function(){return c.connectionGain.delete(e)}},this.onConnectionLost=function(e){return s.assertTrue(s.isFunction(e),"cb must be a function"),c.connectionLost.add(e),o.connState===g&&e(),function(){return c.connectionLost.delete(e)}},this.onSubscriptionUpdate=function(e){return s.assertTrue(s.isFunction(e),"cb must be a function"),c.subscriptionUpdate.add(e),function(){return c.subscriptionUpdate.delete(e)}},this.onSubscriptionFailure=function(e){return s.assertTrue(s.isFunction(e),"cb must be a function"),c.subscriptionFailure.add(e),function(){return c.subscriptionFailure.delete(e)}},this.onMessage=function(e,n){return s.assertNotNull(e,"topicName"),s.assertTrue(s.isFunction(n),"cb must be a function"),c.topic.has(e)?c.topic.get(e).add(n):c.topic.set(e,new Set([n])),function(){return c.topic.get(e).delete(n)}},this.onAllMessage=function(e){return s.assertTrue(s.isFunction(e),"cb must be a function"),c.allMessage.add(e),function(){return c.allMessage.delete(e)}},this.subscribeTopics=function(e){s.assertNotNull(e,"topics"),s.assertIsList(e),e.forEach(function(e){u.subscribed.has(e)||u.pending.add(e)}),l.consecutiveNoResponseRequest=0,R()},this.sendMessage=function(n){if(s.assertIsObject(n,"payload"),void 0===n.topic||m.has(n.topic))e.warn("Cannot send message, Invalid topic",n);else{try{n=JSON.stringify(n)}catch(t){return void e.warn("Error stringify message",n)}O()?T().send(n):e.warn("Cannot send message, web socket connection is not open")}},this.closeWebSocket=function(){W(),N(),o.reconnectWebSocket=!1,clearInterval(y),M("User request to close WebSocket")},this.terminateWebSocketManager=D},L={create:function(){return new E},setGlobalConfig:function(e){var n=e.loggerConfig;_.updateLoggerConfig(n)},LogLevel:T,Logger:C}},function(e,n,t){var o;!function(){"use strict";var r={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/};function i(e){return function(e,n){var t,o,c,s,a,u,l,f,p,d=1,b=e.length,g="";for(o=0;o<b;o++)if("string"==typeof e[o])g+=e[o];else if("object"==typeof e[o]){if((s=e[o]).keys)for(t=n[d],c=0;c<s.keys.length;c++){if(null==t)throw new Error(i('[sprintf] Cannot access property "%s" of undefined value "%s"',s.keys[c],s.keys[c-1]));t=t[s.keys[c]]}else t=s.param_no?n[s.param_no]:n[d++];if(r.not_type.test(s.type)&&r.not_primitive.test(s.type)&&t instanceof Function&&(t=t()),r.numeric_arg.test(s.type)&&"number"!=typeof t&&isNaN(t))throw new TypeError(i("[sprintf] expecting number but found %T",t));switch(r.number.test(s.type)&&(f=t>=0),s.type){case"b":t=parseInt(t,10).toString(2);break;case"c":t=String.fromCharCode(parseInt(t,10));break;case"d":case"i":t=parseInt(t,10);break;case"j":t=JSON.stringify(t,null,s.width?parseInt(s.width):0);break;case"e":t=s.precision?parseFloat(t).toExponential(s.precision):parseFloat(t).toExponential();break;case"f":t=s.precision?parseFloat(t).toFixed(s.precision):parseFloat(t);break;case"g":t=s.precision?String(Number(t.toPrecision(s.precision))):parseFloat(t);break;case"o":t=(parseInt(t,10)>>>0).toString(8);break;case"s":t=String(t),t=s.precision?t.substring(0,s.precision):t;break;case"t":t=String(!!t),t=s.precision?t.substring(0,s.precision):t;break;case"T":t=Object.prototype.toString.call(t).slice(8,-1).toLowerCase(),t=s.precision?t.substring(0,s.precision):t;break;case"u":t=parseInt(t,10)>>>0;break;case"v":t=t.valueOf(),t=s.precision?t.substring(0,s.precision):t;break;case"x":t=(parseInt(t,10)>>>0).toString(16);break;case"X":t=(parseInt(t,10)>>>0).toString(16).toUpperCase()}r.json.test(s.type)?g+=t:(!r.number.test(s.type)||f&&!s.sign?p="":(p=f?"+":"-",t=t.toString().replace(r.sign,"")),u=s.pad_char?"0"===s.pad_char?"0":s.pad_char.charAt(1):" ",l=s.width-(p+t).length,a=s.width&&l>0?u.repeat(l):"",g+=s.align?p+t+a:"0"===u?p+a+t:a+p+t)}return g}(function(e){if(s[e])return s[e];var n,t=e,o=[],i=0;for(;t;){if(null!==(n=r.text.exec(t)))o.push(n[0]);else if(null!==(n=r.modulo.exec(t)))o.push("%");else{if(null===(n=r.placeholder.exec(t)))throw new SyntaxError("[sprintf] unexpected placeholder");if(n[2]){i|=1;var c=[],a=n[2],u=[];if(null===(u=r.key.exec(a)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(c.push(u[1]);""!==(a=a.substring(u[0].length));)if(null!==(u=r.key_access.exec(a)))c.push(u[1]);else{if(null===(u=r.index_access.exec(a)))throw new SyntaxError("[sprintf] failed to parse named argument key");c.push(u[1])}n[2]=c}else i|=2;if(3===i)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");o.push({placeholder:n[0],param_no:n[1],keys:n[2],sign:n[3],pad_char:n[4],align:n[5],width:n[6],precision:n[7],type:n[8]})}t=t.substring(n[0].length)}return s[e]=o}(e),arguments)}function c(e,n){return i.apply(null,[e].concat(n||[]))}var s=Object.create(null);n.sprintf=i,n.vsprintf=c,"undefined"!=typeof window&&(window.sprintf=i,window.vsprintf=c,void 0===(o=function(){return{sprintf:i,vsprintf:c}}.call(n,t,n,e))||(e.exports=o))}()},function(e,n,t){"use strict";t.r(n),function(e){t.d(n,"WebSocketManager",function(){return r});var o=t(0);e.connect=e.connect||{},connect.WebSocketManager=o.a;var r=o.a}.call(this,t(3))},function(e,n){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(e){"object"==typeof window&&(t=window)}e.exports=t}]);
//# sourceMappingURL=amazon-connect-websocket-manager.js.map
