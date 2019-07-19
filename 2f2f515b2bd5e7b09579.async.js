webpackJsonp([15],{1225:function(t,v,e){"use strict";Object.defineProperty(v,"__esModule",{value:!0});var _=e(1267),n=e.n(_);for(var s in _)"default"!==s&&function(t){e.d(v,t,function(){return _[t]})}(s);var r=e(44),a=r(n.a,null,!1,null,null,null);v.default=a.exports},1267:function(t,v,e){"use strict";Object.defineProperty(v,"__esModule",{value:!0});var _=e(1389),n=function(t){return t&&t.__esModule?t:{default:t}}(_);v.default={render:function(){var t=arguments[0];return t("div",[t("md",{attrs:{doc:'# 基础工具\n基础通用工具\n## 如何使用\n- 在vue中使用\n- 独立使用\n```js\n  import {util} from "@hbgj/tools";\n  util.isWechat(); // 微信环境\n  util.isApp(); // app环境\n```\n## 何时使用\n- 系统判断等。\n\n## 代码演示'}}),t("api",[t(n.default)])])}}},1389:function(t,v,e){t.exports=e(1390)},1390:function(t,v,e){"use strict";Object.defineProperty(v,"__esModule",{value:!0});var _=e(1391),n=e(44),s=n(null,_.a,!1,null,null,null);v.default=s.exports},1391:function(t,v,e){"use strict";var _=function(){var t=this,v=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("div",[e("h2",{attrs:{id:"API"}},[t._v("API "),e("a",{staticClass:"anchor",attrs:{href:"#API","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),e("p",[t._v("组件静态方法，使用方式和参数如下：")]),t._v(" "),e("ul",[e("li",[e("code",{pre:!0},[t._v("util.isWechat()")]),t._v(" 判断是否是微信环境")]),t._v(" "),e("li",[e("code",{pre:!0},[t._v("util.isApp()")]),t._v("  判断是否是app环境")]),t._v(" "),e("li",[e("code",{pre:!0},[t._v("util.getAppName()")]),t._v(" 获取app名称，默认高铁")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("content")]),t._v(" "),e("td",[t._v("提示内容")]),t._v(" "),e("td",[t._v("string|vueNode |function(h)")]),t._v(" "),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("duration")]),t._v(" "),e("td",[t._v("自动关闭的延时，单位秒。设为 0 时不自动关闭。")]),t._v(" "),e("td",[t._v("number")]),t._v(" "),e("td",[t._v("3")])]),t._v(" "),e("tr",[e("td",[t._v("onClose")]),t._v(" "),e("td",[t._v("关闭时触发的回调函数")]),t._v(" "),e("td",[t._v("Function")]),t._v(" "),e("td",[t._v("-")])])])]),t._v(" "),e("p",[t._v("还提供了全局配置和全局销毁方法：")]),t._v(" "),e("ul",[e("li",[e("code",{pre:!0},[t._v("message.config(options)")])]),t._v(" "),e("li",[e("code",{pre:!0},[t._v("message.destroy()")])])]),t._v(" "),e("h3",{attrs:{id:"message.config"}},[t._v("message.config "),e("a",{staticClass:"anchor",attrs:{href:"#message.config","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),e("pre",{pre:!0},[e("code",{attrs:{"v-pre":"",class:"language-js"}},[t._v("message.config({\n  "),e("span",{attrs:{class:"hljs-attr"}},[t._v("top")]),t._v(": "),e("span",{attrs:{class:"hljs-string"}},[t._v("`100px`")]),t._v(",\n  "),e("span",{attrs:{class:"hljs-attr"}},[t._v("duration")]),t._v(": "),e("span",{attrs:{class:"hljs-number"}},[t._v("2")]),t._v(",\n  "),e("span",{attrs:{class:"hljs-attr"}},[t._v("getContainer")]),t._v(": "),e("span",{attrs:{class:"hljs-function"}},[e("span",{attrs:{class:"hljs-params"}},[t._v("()")]),t._v(" =>")]),t._v(" {\n    "),e("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" "),e("span",{attrs:{class:"hljs-built_in"}},[t._v("document")]),t._v(".body;\n  }\n});\n")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("duration")]),t._v(" "),e("td",[t._v("默认自动关闭延时，单位秒")]),t._v(" "),e("td",[t._v("number")]),t._v(" "),e("td",[t._v("3")])]),t._v(" "),e("tr",[e("td",[t._v("getContainer")]),t._v(" "),e("td",[t._v("配置渲染节点的输出位置")]),t._v(" "),e("td",[t._v("() => HTMLElement")]),t._v(" "),e("td",[t._v("() => document.body")])]),t._v(" "),e("tr",[e("td",[t._v("top")]),t._v(" "),e("td",[t._v("消息距离顶部的位置")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("24px")])])])])])])}],s={render:_,staticRenderFns:n};v.a=s}});