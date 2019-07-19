webpackJsonp([11],{1230:function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=n(1278),e=n.n(a);for(var v in a)"default"!==v&&function(t){n.d(s,t,function(){return a[t]})}(v);var r=n(44),_=r(e.a,null,!1,null,null,null);s.default=_.exports},1278:function(t,s,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var e=n(1434),v=a(e),r=n(1439),_=a(r);s.default={render:function(){var t=arguments[0];return t("div",[t("md",{attrs:{doc:"#打点统计\n打点统计\n## 如何使用\n\n```js\n```\n\n## 何时使用\n- 记录PV，EV，UV等\n\n## 代码演示"}}),t(v.default),t("api",[t(_.default)])])}}},1279:function(t,s,n){"use strict";function a(t){return function(){var s=t.apply(this,arguments);return new Promise(function(t,n){function a(e,v){try{var r=s[e](v),_=r.value}catch(t){return void n(t)}if(!r.done)return Promise.resolve(_).then(function(t){a("next",t)},function(t){a("throw",t)});t(_)}return a("next")})}}Object.defineProperty(s,"__esModule",{value:!0});var e=n(435);e.Log.initLog(),console.log(e.Log);var v=e.Log.initTracker("test");s.default={mounted:function(){e.Log.log("ActivePV","ViewPV",document.title||""),v({title:"aaa",groupId:6000111,productId:6000111,hlfrom:"test"})},methods:{fetch:function(){function t(){return s.apply(this,arguments)}var s=a(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,this)}));return t}()}}},1434:function(t,s,n){t.exports=n(1435)},1435:function(t,s,n){"use strict";function a(t){n(1436)}Object.defineProperty(s,"__esModule",{value:!0});var e=n(1279),v=n.n(e);for(var r in e)"default"!==r&&function(t){n.d(s,t,function(){return e[t]})}(r);var _=n(1438),l=n(44),i=a,o=l(v.a,_.a,!1,i,null,null);s.default=o.exports},1436:function(t,s,n){var a=n(1437);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(434)("762640ea",a,!0,{})},1437:function(t,s,n){s=t.exports=n(433)(!1),s.push([t.i,"",""])},1438:function(t,s,n){"use strict";var a=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",[[n("demo-box",{attrs:{jsfiddle:{html:"\n  <span/>\n",script:'\nimport { Log } from "@hbgj/tools";\n\nLog.initLog();\nconsole.log(Log);\n// 包装PV\nconst testLog = Log.initTracker(\'test\');\n\nexport default {\n  mounted() {\n    // 页面总PV统计\n    Log.log("ActivePV", "ViewPV", document.title || "")\n    // 页面商品PV统计\n    testLog({\n      title: "aaa",\n      groupId: 6000111,\n      productId: 6000111,\n      hlfrom: "test"\n    })\n  },\n\n  methods: {\n    async fetch() {\n\n\n    }\n\n  }\n}\n',style:"\n",us:"",cn:"\n#### 基本用法\n",sourceCode:'<template>\n  <span></span>\n</template>\n<script>\nimport { Log } from "@hbgj/tools";\n\nLog.initLog();\nconsole.log(Log);\n// 包装PV\nconst testLog = Log.initTracker(\'test\');\n\nexport default {\n  mounted() {\n    // 页面总PV统计\n    Log.log("ActivePV", "ViewPV", document.title || "")\n    // 页面商品PV统计\n    testLog({\n      title: "aaa",\n      groupId: 6000111,\n      productId: 6000111,\n      hlfrom: "test"\n    })\n  },\n\n  methods: {\n    async fetch() {\n\n\n    }\n\n  }\n}\n<\/script>\n<style>\n</style>\n'}}},[n("template",{slot:"component"},[n("span")]),t._v(" "),n("template",{slot:"description"},[n("h4",{attrs:{id:"基本用法"}},[t._v("基本用法 "),n("a",{staticClass:"anchor",attrs:{href:"#基本用法","aria-hidden":"true"}},[t._v("#")])])]),t._v(" "),n("template",{slot:"us-description"}),t._v(" "),n("template",{slot:"code"},[n("pre",[n("code",{staticClass:"language-html"},[n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("span")]),t._v(">")]),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("span")]),t._v(">")]),t._v("\n"),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n"),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),n("span",{staticClass:"javascript"},[t._v("\n"),n("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" { Log } "),n("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),n("span",{staticClass:"hljs-string"},[t._v('"@hbgj/tools"')]),t._v(";\n\nLog.initLog();\n"),n("span",{staticClass:"hljs-built_in"},[t._v("console")]),t._v(".log(Log);\n"),n("span",{staticClass:"hljs-comment"},[t._v("// 包装PV")]),t._v("\n"),n("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" testLog = Log.initTracker("),n("span",{staticClass:"hljs-string"},[t._v("'test'")]),t._v(");\n\n"),n("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),n("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  mounted() {\n    "),n("span",{staticClass:"hljs-comment"},[t._v("// 页面总PV统计")]),t._v("\n    Log.log("),n("span",{staticClass:"hljs-string"},[t._v('"ActivePV"')]),t._v(", "),n("span",{staticClass:"hljs-string"},[t._v('"ViewPV"')]),t._v(", "),n("span",{staticClass:"hljs-built_in"},[t._v("document")]),t._v(".title || "),n("span",{staticClass:"hljs-string"},[t._v('""')]),t._v(")\n    "),n("span",{staticClass:"hljs-comment"},[t._v("// 页面商品PV统计")]),t._v("\n    testLog({\n      "),n("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v(": "),n("span",{staticClass:"hljs-string"},[t._v('"aaa"')]),t._v(",\n      "),n("span",{staticClass:"hljs-attr"},[t._v("groupId")]),t._v(": "),n("span",{staticClass:"hljs-number"},[t._v("6000111")]),t._v(",\n      "),n("span",{staticClass:"hljs-attr"},[t._v("productId")]),t._v(": "),n("span",{staticClass:"hljs-number"},[t._v("6000111")]),t._v(",\n      "),n("span",{staticClass:"hljs-attr"},[t._v("hlfrom")]),t._v(": "),n("span",{staticClass:"hljs-string"},[t._v('"test"')]),t._v("\n    })\n  },\n\n  "),n("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n    "),n("span",{staticClass:"hljs-keyword"},[t._v("async")]),t._v(" fetch() {\n\n\n    }\n\n  }\n}\n")]),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n"),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("style")]),t._v(">")]),n("span",{staticClass:"undefined"},[t._v("\n")]),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("style")]),t._v(">")]),t._v("\n")])])])],2)]],2)},e=[],v={render:a,staticRenderFns:e};s.a=v},1439:function(t,s,n){t.exports=n(1440)},1440:function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=n(1441),e=n(44),v=e(null,a.a,!1,null,null,null);s.default=v.exports},1441:function(t,s,n){"use strict";var a=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},e=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",[n("h2",{attrs:{id:"API"}},[t._v("API "),n("a",{staticClass:"anchor",attrs:{href:"#API","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),n("h3",{attrs:{id:"Log.initLog"}},[t._v("Log.initLog "),n("a",{staticClass:"anchor",attrs:{href:"#Log.initLog","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),n("p",[t._v("初始化统计功能，会自动统计 a标签，button标签 data-log-click格式如"),n("br"),t._v("\ngtgj_visa-ev-网站标题 TOOLS_这么快能行吗"),n("br")]),t._v(" "),n("p",[t._v("如果a,button 标签没有data-log-click 会统计标签内容 格式如"),n("br"),t._v("\ngtgj_visa-ev-页面title 标签内容"),n("br")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":"",class:"language-js"}},[t._v("Log.initLog();\n")])]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("无")]),t._v(" "),n("td"),t._v(" "),n("td"),t._v(" "),n("td",[t._v("无")])])])]),t._v(" "),n("h3",{attrs:{id:"Log.log"}},[t._v("Log.log "),n("a",{staticClass:"anchor",attrs:{href:"#Log.log","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),n("p",[t._v("原生功能")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":"",class:"language-js"}},[t._v("Log.log("),n("span",{attrs:{class:"hljs-string"}},[t._v('"category"')]),t._v(", "),n("span",{attrs:{class:"hljs-string"}},[t._v('"action"')]),t._v(", "),n("span",{attrs:{class:"hljs-string"}},[t._v('"label"')]),t._v(", "),n("span",{attrs:{class:"hljs-string"}},[t._v('"value"')]),t._v(", "),n("span",{attrs:{class:"hljs-string"}},[t._v('"nodeid"')]),t._v(");\n"),n("span",{attrs:{class:"hljs-comment"}},[t._v("// 等于下面这个")]),t._v("\n_czc.push("),n("span",{attrs:{class:"hljs-string"}},[t._v('"_trackEvent"')]),t._v(", "),n("span",{attrs:{class:"hljs-string"}},[t._v('"category"')]),t._v(", "),n("span",{attrs:{class:"hljs-string"}},[t._v('"action"')]),t._v(", "),n("span",{attrs:{class:"hljs-string"}},[t._v('"label"')]),t._v(", "),n("span",{attrs:{class:"hljs-string"}},[t._v('"value"')]),t._v(", "),n("span",{attrs:{class:"hljs-string"}},[t._v('"nodeid"')]),t._v(");\n")])]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("category")]),t._v(" "),n("td"),t._v(" "),n("td"),t._v(" "),n("td",[t._v("无")])]),t._v(" "),n("tr",[n("td",[t._v("action")]),t._v(" "),n("td"),t._v(" "),n("td"),t._v(" "),n("td",[t._v("无")])]),t._v(" "),n("tr",[n("td",[t._v("label")]),t._v(" "),n("td"),t._v(" "),n("td"),t._v(" "),n("td",[t._v("无")])]),t._v(" "),n("tr",[n("td",[t._v("value")]),t._v(" "),n("td"),t._v(" "),n("td"),t._v(" "),n("td",[t._v("无")])]),t._v(" "),n("tr",[n("td",[t._v("nodeid")]),t._v(" "),n("td"),t._v(" "),n("td"),t._v(" "),n("td",[t._v("无")])])])]),t._v(" "),n("h3",{attrs:{id:"Log.initTracker"}},[t._v("Log.initTracker "),n("a",{staticClass:"anchor",attrs:{href:"#Log.initTracker","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),n("p",[t._v("按标签统计")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":"",class:"language-js"}},[t._v("log.initTracker("),n("span",{attrs:{class:"hljs-string"}},[t._v('"myTag"')]),t._v(");\n")])]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("tag")]),t._v(" "),n("td",[t._v("统计的跟标签")]),t._v(" "),n("td"),t._v(" "),n("td")])])]),t._v(" "),n("h3",{attrs:{id:'Log.initTracker("tag")(options)'}},[t._v('Log.initTracker("tag")(options) '),n("a",{staticClass:"anchor",attrs:{href:'#Log.initTracker("tag")(options)',"aria-hidden":"true"}},[t._v("#")])]),t._v(" "),n("p",[t._v("按标签统计实例参数 实际统计结果为"),n("br"),t._v("\ncategory: hbgj_active-tag_title_productid_groupId"),n("br"),t._v("\nlabel: hlfrom"),n("br"),n("br")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":"",class:"language-js"}})]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("title")]),t._v(" "),n("td",[t._v("名字")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("无")])]),t._v(" "),n("tr",[n("td",[t._v("productid")]),t._v(" "),n("td",[t._v("产品ID")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("无")])]),t._v(" "),n("tr",[n("td",[t._v("groupId")]),t._v(" "),n("td",[t._v("组ID")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("无")])]),t._v(" "),n("tr",[n("td",[t._v("hlfrom")]),t._v(" "),n("td",[t._v("来源")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("无")])])])])])}],v={render:a,staticRenderFns:e};s.a=v}});