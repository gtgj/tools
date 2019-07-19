webpackJsonp([2],{1228:function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=n(1272),e=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(s,t,function(){return a[t]})}(r);var o=n(44),c=o(e.a,null,!1,null,null,null);s.default=c.exports},1272:function(t,s,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var e=n(1408),r=a(e),o=n(1413),c=a(o),l=n(1418),i=a(l),v=n(1423),_=a(v);s.default={render:function(){var t=arguments[0];return t("div",[t("md",{attrs:{doc:"#数据服务接口\n后台通信\n## 如何使用\n\n```js\n```\n\n## 何时使用\n- 与后台通信\n- 统一异常拦截等\n- 获取用户等\n\n## 代码演示"}}),t(r.default),t(i.default),t(c.default),t("api",[t(_.default)])])}}},1273:function(t,s,n){"use strict";function a(t){return function(){var s=t.apply(this,arguments);return new Promise(function(t,n){function a(e,r){try{var o=s[e](r),c=o.value}catch(t){return void n(t)}if(!o.done)return Promise.resolve(c).then(function(t){a("next",t)},function(t){a("throw",t)});t(c)}return a("next")})}}Object.defineProperty(s,"__esModule",{value:!0});var e=n(435),r=n(52);(function(t){return t&&t.__esModule?t:{default:t}})(r).default.set("webName",1);var o=e.DataService.post;s.default={data:function(){return{data:null}},mounted:function(){this.fetch()},methods:{fetch:function(){function t(){return s.apply(this,arguments)}var s=a(regeneratorRuntime.mark(function t(){var s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o("refreshToken",null);case 3:s=t.sent,console.log(s),this.data=s,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}},t,this,[[0,8]])}));return t}()}}},1274:function(t,s,n){"use strict";function a(t){return function(){var s=t.apply(this,arguments);return new Promise(function(t,n){function a(e,r){try{var o=s[e](r),c=o.value}catch(t){return void n(t)}if(!o.done)return Promise.resolve(c).then(function(t){a("next",t)},function(t){a("throw",t)});t(c)}return a("next")})}}Object.defineProperty(s,"__esModule",{value:!0});var e=n(435),r=n(52);(function(t){return t&&t.__esModule?t:{default:t}})(r).default.set("webName",1);e.DataService.createOrder,e.DataService.createCartOrder;s.default={mounted:function(){this.fetch()},methods:{fetch:function(){function t(){return s.apply(this,arguments)}var s=a(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,this)}));return t}()}}},1275:function(t,s,n){"use strict";function a(t){return function(){var s=t.apply(this,arguments);return new Promise(function(t,n){function a(e,r){try{var o=s[e](r),c=o.value}catch(t){return void n(t)}if(!o.done)return Promise.resolve(c).then(function(t){a("next",t)},function(t){a("throw",t)});t(c)}return a("next")})}}Object.defineProperty(s,"__esModule",{value:!0});var e=n(435),r=n(52);(function(t){return t&&t.__esModule?t:{default:t}})(r).default.set("webName",1),s.default={data:function(){return{userInfo:null}},mounted:function(){},methods:{fetch:function(){function t(){return s.apply(this,arguments)}var s=a(regeneratorRuntime.mark(function t(){var s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(location.hostname.indexOf("github.io")>=0)){t.next=3;break}return alert("请在本机调试"),t.abrupt("return");case 3:return t.prev=3,t.next=6,e.DataService.checkLogin();case 6:s=t.sent,this.userInfo=s,t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),console.log(t.t0);case 13:case"end":return t.stop()}},t,this,[[3,10]])}));return t}()}}},1408:function(t,s,n){t.exports=n(1409)},1409:function(t,s,n){"use strict";function a(t){n(1410)}Object.defineProperty(s,"__esModule",{value:!0});var e=n(1273),r=n.n(e);for(var o in e)"default"!==o&&function(t){n.d(s,t,function(){return e[t]})}(o);var c=n(1412),l=n(44),i=a,v=l(r.a,c.a,!1,i,null,null);s.default=v.exports},1410:function(t,s,n){var a=n(1411);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(434)("8c00fff0",a,!0,{})},1411:function(t,s,n){s=t.exports=n(433)(!1),s.push([t.i,"",""])},1412:function(t,s,n){"use strict";var a=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",[[n("demo-box",{attrs:{jsfiddle:{html:"\n  <span>{{data}}</span>\n",script:'\nimport {DataService} from "@hbgj/tools";\nimport cookie from "js-cookie";\n\ncookie.set("webName", 1); // 接口必要cookie字段 测试用\n\nconst { post } = DataService;\n\nexport default {\n  data() {\n    return {\n      data: null\n    }\n  },\n\n  mounted() {\n    this.fetch();\n\n  },\n  methods: {\n    async fetch() {\n      try {\n        const data = await post("refreshToken", null);\n        console.log(data);\n        this.data = data;\n      } catch(err) {\n        console.log(err);\n      }\n\n    }\n\n  }\n}\n',style:"\n",us:"",cn:"\n#### 基本用法\n是调用一个后台接口，以刷新token为例\n",sourceCode:'<template>\n  <span>{{data}}</span>\n</template>\n<script>\nimport {DataService} from "@hbgj/tools";\nimport cookie from "js-cookie";\n\ncookie.set("webName", 1); // 接口必要cookie字段 测试用\n\nconst { post } = DataService;\n\nexport default {\n  data() {\n    return {\n      data: null\n    }\n  },\n\n  mounted() {\n    this.fetch();\n\n  },\n  methods: {\n    async fetch() {\n      try {\n        const data = await post("refreshToken", null);\n        console.log(data);\n        this.data = data;\n      } catch(err) {\n        console.log(err);\n      }\n\n    }\n\n  }\n}\n<\/script>\n<style>\n</style>\n'}}},[n("template",{slot:"component"},[n("span",[t._v(t._s(t.data))])]),t._v(" "),n("template",{slot:"description"},[n("h4",{attrs:{id:"基本用法"}},[t._v("基本用法 "),n("a",{staticClass:"anchor",attrs:{href:"#基本用法","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),n("p",[t._v("是调用一个后台接口，以刷新token为例")])]),t._v(" "),n("template",{slot:"us-description"}),t._v(" "),n("template",{slot:"code"},[n("pre",[n("code",{staticClass:"language-html"},[n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("span")]),t._v(">")]),n("span",[t._v("{{")]),t._v("data"),n("span",[t._v("}}")]),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("span")]),t._v(">")]),t._v("\n"),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n"),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),n("span",{staticClass:"javascript"},[t._v("\n"),n("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" {DataService} "),n("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),n("span",{staticClass:"hljs-string"},[t._v('"@hbgj/tools"')]),t._v(";\n"),n("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" cookie "),n("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),n("span",{staticClass:"hljs-string"},[t._v('"js-cookie"')]),t._v(";\n\ncookie.set("),n("span",{staticClass:"hljs-string"},[t._v('"webName"')]),t._v(", "),n("span",{staticClass:"hljs-number"},[t._v("1")]),t._v("); "),n("span",{staticClass:"hljs-comment"},[t._v("// 接口必要cookie字段 测试用")]),t._v("\n\n"),n("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" { post } = DataService;\n\n"),n("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),n("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  data() {\n    "),n("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      "),n("span",{staticClass:"hljs-attr"},[t._v("data")]),t._v(": "),n("span",{staticClass:"hljs-literal"},[t._v("null")]),t._v("\n    }\n  },\n\n  mounted() {\n    "),n("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".fetch();\n\n  },\n  "),n("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n    "),n("span",{staticClass:"hljs-keyword"},[t._v("async")]),t._v(" fetch() {\n      "),n("span",{staticClass:"hljs-keyword"},[t._v("try")]),t._v(" {\n        "),n("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" data = "),n("span",{staticClass:"hljs-keyword"},[t._v("await")]),t._v(" post("),n("span",{staticClass:"hljs-string"},[t._v('"refreshToken"')]),t._v(", "),n("span",{staticClass:"hljs-literal"},[t._v("null")]),t._v(");\n        "),n("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log(data);\n        "),n("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".data = data;\n      } "),n("span",{staticClass:"hljs-keyword"},[t._v("catch")]),t._v("(err) {\n        "),n("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log(err);\n      }\n\n    }\n\n  }\n}\n")]),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n"),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("style")]),t._v(">")]),n("span",{staticClass:"undefined"},[t._v("\n")]),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("style")]),t._v(">")]),t._v("\n")])])])],2)]],2)},e=[],r={render:a,staticRenderFns:e};s.a=r},1413:function(t,s,n){t.exports=n(1414)},1414:function(t,s,n){"use strict";function a(t){n(1415)}Object.defineProperty(s,"__esModule",{value:!0});var e=n(1274),r=n.n(e);for(var o in e)"default"!==o&&function(t){n.d(s,t,function(){return e[t]})}(o);var c=n(1417),l=n(44),i=a,v=l(r.a,c.a,!1,i,null,null);s.default=v.exports},1415:function(t,s,n){var a=n(1416);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(434)("1a91bbb0",a,!0,{})},1416:function(t,s,n){s=t.exports=n(433)(!1),s.push([t.i,"",""])},1417:function(t,s,n){"use strict";var a=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",[[n("demo-box",{attrs:{jsfiddle:{html:"\n",script:'\nimport {DataService} from "@hbgj/tools";\nimport cookie from "js-cookie";\n\ncookie.set("webName", 1); // 接口必要cookie字段 测试用\n\nconst { createOrder, createCartOrder} = DataService;\n\nexport default {\n\n  mounted() {\n    this.fetch();\n\n  },\n  methods: {\n    async fetch() {\n      /*try {\n        const data = await createOrder({})\n        console.log(data);\n\n      } catch(err) {\n        console.log(err);\n      }\n      try {\n        const data1 = await createCartOrder({})\n        console.log(data1);\n      } catch(err) {\n        console.log(err);\n      }\n      */\n\n    }\n\n  }\n}\n',style:"\n",us:"",cn:"\n#### 创建订单\n",sourceCode:'<template>\n</template>\n<script>\nimport {DataService} from "@hbgj/tools";\nimport cookie from "js-cookie";\n\ncookie.set("webName", 1); // 接口必要cookie字段 测试用\n\nconst { createOrder, createCartOrder} = DataService;\n\nexport default {\n\n  mounted() {\n    this.fetch();\n\n  },\n  methods: {\n    async fetch() {\n      /*try {\n        const data = await createOrder({})\n        console.log(data);\n\n      } catch(err) {\n        console.log(err);\n      }\n      try {\n        const data1 = await createCartOrder({})\n        console.log(data1);\n      } catch(err) {\n        console.log(err);\n      }\n      */\n\n    }\n\n  }\n}\n<\/script>\n<style>\n</style>\n'}}},[n("template",{slot:"component"}),t._v(" "),n("template",{slot:"description"},[n("h4",{attrs:{id:"创建订单"}},[t._v("创建订单 "),n("a",{staticClass:"anchor",attrs:{href:"#创建订单","aria-hidden":"true"}},[t._v("#")])])]),t._v(" "),n("template",{slot:"us-description"}),t._v(" "),n("template",{slot:"code"},[n("pre",[n("code",{staticClass:"language-html"},[n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n"),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n"),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),n("span",{staticClass:"javascript"},[t._v("\n"),n("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" {DataService} "),n("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),n("span",{staticClass:"hljs-string"},[t._v('"@hbgj/tools"')]),t._v(";\n"),n("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" cookie "),n("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),n("span",{staticClass:"hljs-string"},[t._v('"js-cookie"')]),t._v(";\n\ncookie.set("),n("span",{staticClass:"hljs-string"},[t._v('"webName"')]),t._v(", "),n("span",{staticClass:"hljs-number"},[t._v("1")]),t._v("); "),n("span",{staticClass:"hljs-comment"},[t._v("// 接口必要cookie字段 测试用")]),t._v("\n\n"),n("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" { createOrder, createCartOrder} = DataService;\n\n"),n("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),n("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n\n  mounted() {\n    "),n("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".fetch();\n\n  },\n  "),n("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n    "),n("span",{staticClass:"hljs-keyword"},[t._v("async")]),t._v(" fetch() {\n      "),n("span",{staticClass:"hljs-comment"},[t._v("/*try {\n        const data = await createOrder({})\n        console.log(data);\n\n      } catch(err) {\n        console.log(err);\n      }\n      try {\n        const data1 = await createCartOrder({})\n        console.log(data1);\n      } catch(err) {\n        console.log(err);\n      }\n      */")]),t._v("\n\n    }\n\n  }\n}\n")]),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n"),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("style")]),t._v(">")]),n("span",{staticClass:"undefined"},[t._v("\n")]),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("style")]),t._v(">")]),t._v("\n")])])])],2)]],2)},e=[],r={render:a,staticRenderFns:e};s.a=r},1418:function(t,s,n){t.exports=n(1419)},1419:function(t,s,n){"use strict";function a(t){n(1420)}Object.defineProperty(s,"__esModule",{value:!0});var e=n(1275),r=n.n(e);for(var o in e)"default"!==o&&function(t){n.d(s,t,function(){return e[t]})}(o);var c=n(1422),l=n(44),i=a,v=l(r.a,c.a,!1,i,null,null);s.default=v.exports},1420:function(t,s,n){var a=n(1421);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(434)("fc48d314",a,!0,{})},1421:function(t,s,n){s=t.exports=n(433)(!1),s.push([t.i,"",""])},1422:function(t,s,n){"use strict";var a=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",[[n("demo-box",{attrs:{jsfiddle:{html:'\n  <div>\n    <span>用户信息</span>\n    <h-button @click="fetch">获取用户信息(只限在本机启动服务中使用)</h-button>\n    <span>{{JSON.stringify(userInfo)}}</span>\n  </div>\n',script:'\nimport {DataService} from "@hbgj/tools";\nimport cookie from "js-cookie";\n\ncookie.set("webName", 1); // 接口必要cookie字段 测试用\n\n\nexport default {\n  data() {\n    return {\n      userInfo: null\n    }\n  },\n\n  mounted() {\n\n  },\n  methods: {\n    async fetch() {\n      if(location.hostname.indexOf("github.io") >= 0) {\n        alert("请在本机调试");\n        return;\n      }\n      try {\n        const userData = await DataService.checkLogin();\n        this.userInfo = userData;\n      } catch(err) {\n        console.log(err);\n      }\n\n    }\n\n  }\n}\n',style:"\n",us:"",cn:"\n#### 检测登录\n",sourceCode:'<template>\n  <div>\n    <span>用户信息</span>\n    <h-button @click="fetch">获取用户信息(只限在本机启动服务中使用)</h-button>\n    <span>{{JSON.stringify(userInfo)}}</span>\n  </div>\n</template>\n<script>\nimport {DataService} from "@hbgj/tools";\nimport cookie from "js-cookie";\n\ncookie.set("webName", 1); // 接口必要cookie字段 测试用\n\n\nexport default {\n  data() {\n    return {\n      userInfo: null\n    }\n  },\n\n  mounted() {\n\n  },\n  methods: {\n    async fetch() {\n      if(location.hostname.indexOf("github.io") >= 0) {\n        alert("请在本机调试");\n        return;\n      }\n      try {\n        const userData = await DataService.checkLogin();\n        this.userInfo = userData;\n      } catch(err) {\n        console.log(err);\n      }\n\n    }\n\n  }\n}\n<\/script>\n<style>\n</style>\n'}}},[n("template",{slot:"component"},[n("div",[n("span",[t._v("用户信息")]),t._v(" "),n("h-button",{on:{click:t.fetch}},[t._v("获取用户信息(只限在本机启动服务中使用)")]),t._v(" "),n("span",[t._v(t._s(JSON.stringify(t.userInfo)))])],1)]),t._v(" "),n("template",{slot:"description"},[n("h4",{attrs:{id:"检测登录"}},[t._v("检测登录 "),n("a",{staticClass:"anchor",attrs:{href:"#检测登录","aria-hidden":"true"}},[t._v("#")])])]),t._v(" "),n("template",{slot:"us-description"}),t._v(" "),n("template",{slot:"code"},[n("pre",[n("code",{staticClass:"language-html"},[n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n    "),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("span")]),t._v(">")]),t._v("用户信息"),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("span")]),t._v(">")]),t._v("\n    "),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("h-button")]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("@click")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"fetch"')]),t._v(">")]),t._v("获取用户信息(只限在本机启动服务中使用)"),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("h-button")]),t._v(">")]),t._v("\n    "),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("span")]),t._v(">")]),n("span",[t._v("{{")]),t._v("JSON.stringify(userInfo)"),n("span",[t._v("}}")]),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("span")]),t._v(">")]),t._v("\n  "),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n"),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n"),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),n("span",{staticClass:"javascript"},[t._v("\n"),n("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" {DataService} "),n("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),n("span",{staticClass:"hljs-string"},[t._v('"@hbgj/tools"')]),t._v(";\n"),n("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" cookie "),n("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),n("span",{staticClass:"hljs-string"},[t._v('"js-cookie"')]),t._v(";\n\ncookie.set("),n("span",{staticClass:"hljs-string"},[t._v('"webName"')]),t._v(", "),n("span",{staticClass:"hljs-number"},[t._v("1")]),t._v("); "),n("span",{staticClass:"hljs-comment"},[t._v("// 接口必要cookie字段 测试用")]),t._v("\n\n\n"),n("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),n("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  data() {\n    "),n("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      "),n("span",{staticClass:"hljs-attr"},[t._v("userInfo")]),t._v(": "),n("span",{staticClass:"hljs-literal"},[t._v("null")]),t._v("\n    }\n  },\n\n  mounted() {\n\n  },\n  "),n("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n    "),n("span",{staticClass:"hljs-keyword"},[t._v("async")]),t._v(" fetch() {\n      "),n("span",{staticClass:"hljs-keyword"},[t._v("if")]),t._v("(location.hostname.indexOf("),n("span",{staticClass:"hljs-string"},[t._v('"github.io"')]),t._v(") >= "),n("span",{staticClass:"hljs-number"},[t._v("0")]),t._v(") {\n        alert("),n("span",{staticClass:"hljs-string"},[t._v('"请在本机调试"')]),t._v(");\n        "),n("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(";\n      }\n      "),n("span",{staticClass:"hljs-keyword"},[t._v("try")]),t._v(" {\n        "),n("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" userData = "),n("span",{staticClass:"hljs-keyword"},[t._v("await")]),t._v(" DataService.checkLogin();\n        "),n("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".userInfo = userData;\n      } "),n("span",{staticClass:"hljs-keyword"},[t._v("catch")]),t._v("(err) {\n        "),n("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log(err);\n      }\n\n    }\n\n  }\n}\n")]),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n"),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("style")]),t._v(">")]),n("span",{staticClass:"undefined"},[t._v("\n")]),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("style")]),t._v(">")]),t._v("\n")])])])],2)]],2)},e=[],r={render:a,staticRenderFns:e};s.a=r},1423:function(t,s,n){t.exports=n(1424)},1424:function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=n(1425),e=n(44),r=e(null,a.a,!1,null,null,null);s.default=r.exports},1425:function(t,s,n){"use strict";var a=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},e=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",[n("h2",{attrs:{id:"API"}},[t._v("API "),n("a",{staticClass:"anchor",attrs:{href:"#API","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),n("h3",{attrs:{id:"DataService.checkLogin()"}},[t._v("DataService.checkLogin() "),n("a",{staticClass:"anchor",attrs:{href:"#DataService.checkLogin()","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),n("p",[t._v("检查登陆状态，如果未登录则进行登录，如果已经登录，则返回用户信息")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("待补充")]),t._v(" "),n("td"),t._v(" "),n("td"),t._v(" "),n("td",[t._v("无")])])])]),t._v(" "),n("h3",{attrs:{id:"DataService.post()"}},[t._v("DataService.post() "),n("a",{staticClass:"anchor",attrs:{href:"#DataService.post()","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),n("p",[t._v("请求后段接口，jsonRPC包装")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("待补充")]),t._v(" "),n("td"),t._v(" "),n("td"),t._v(" "),n("td",[t._v("无")])])])]),t._v(" "),n("h3",{attrs:{id:"DataService.catchFn()"}},[t._v("DataService.catchFn() "),n("a",{staticClass:"anchor",attrs:{href:"#DataService.catchFn()","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),n("p",[t._v("统一处理借口层异常")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("待补充")]),t._v(" "),n("td"),t._v(" "),n("td"),t._v(" "),n("td",[t._v("无")])])])]),t._v(" "),n("h3",{attrs:{id:"DataService.createOrder()"}},[t._v("DataService.createOrder() "),n("a",{staticClass:"anchor",attrs:{href:"#DataService.createOrder()","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),n("p",[t._v("创建订单")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("待补充")]),t._v(" "),n("td"),t._v(" "),n("td"),t._v(" "),n("td",[t._v("无")])])])]),t._v(" "),n("h3",{attrs:{id:"DataService.createCartOrder()"}},[t._v("DataService.createCartOrder() "),n("a",{staticClass:"anchor",attrs:{href:"#DataService.createCartOrder()","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),n("p",[t._v("创建购物车订单")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("待补充")]),t._v(" "),n("td"),t._v(" "),n("td"),t._v(" "),n("td",[t._v("无")])])])]),t._v(" "),n("h3",{attrs:{id:"DataService.getDownloadUrl(hlfromStr)"}},[t._v("DataService.getDownloadUrl(hlfromStr) "),n("a",{staticClass:"anchor",attrs:{href:"#DataService.getDownloadUrl(hlfromStr)","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),n("p",[t._v("根据hlfrom参数获取航班管家下载链接")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("hlfrom")]),t._v(" "),n("td",[t._v("来源标记")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("url中的hlfrom参数")])])])])])}],r={render:a,staticRenderFns:e};s.a=r}});