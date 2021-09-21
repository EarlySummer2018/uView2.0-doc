(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{608:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"mpshare-小程序分享"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mpshare-小程序分享"}},[t._v("#")]),t._v(" mpShare 小程序分享")]),t._v(" "),a("demo-model",{attrs:{url:"/pages/library/mpShare/index"}}),t._v(" "),a("p",[t._v("此功能，是对uni的"),a("a",{attrs:{href:"https://uniapp.dcloud.io/api/plugins/share?id=onshareappmessage",target:"_blank",rel:"noopener noreferrer"}},[t._v("onShareAppMessage 生命周期"),a("OutboundLink")],1),t._v("的封装。")]),t._v(" "),a("p",[t._v('这里说的小程序，指的是"微信小程序、百度小程序、头条小程序、QQ小程序，支付宝小程序等"。')]),t._v(" "),a("p",[t._v("由于小程序的分享(微信、头条平台)，需要监听页面的"),a("code",[t._v("onShareAppMessage")]),t._v('生命周期，小程序需要在页面声明了此生命周期，点击右上角的"胶囊"才会有分享功能，\n而一般情况下，我们希望每个页面都可以分享，那就需要每个页面都写一遍这个生命周期，是很繁琐的。')]),t._v(" "),a("p",[t._v("基于以上，uView通过"),a("code",[t._v("mixin")]),t._v("的形式，给每一个页面注入了"),a("code",[t._v("onShareAppMessage")]),t._v("生命周期，让您简单引入，无需任何后续操作，即可让每一个页面都有分享功能(仅针对小程序)。")]),t._v(" "),a("h3",{attrs:{id:"平台差异说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#平台差异说明"}},[t._v("#")]),t._v(" 平台差异说明")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("App")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("H5")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("微信小程序")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("支付宝小程序")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("百度小程序")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("头条小程序")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("QQ小程序")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("x")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("x")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("√")])])])]),t._v(" "),a("h3",{attrs:{id:"基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[t._v("#")]),t._v(" 基本使用")]),t._v(" "),a("p",[t._v('需要注意的是，小程序(uni)没有提供类似"getNavigationBarTitle"这样的接口，所以我们无法获取当前页面导航栏的标题，换言之，我们想要每个页面个性化的\n分享标题，需要手动设置，否则'),a("strong",[t._v("默认为小程序的名称")]),t._v("。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意：")]),t._v(" "),a("p",[t._v("分享功能是默认关闭的，但是我们写好各项配置，您只要在"),a("code",[t._v("main.js")]),t._v("中引入对应的文件即可，我们没有默认引入，是因为某些用户并不需要此功能。")])]),t._v(" "),a("p",[t._v("打开小程序分享功能：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main.js")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 其他内容")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引入uView对小程序分享的mixin封装")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" mpShare "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'uview-ui/libs/mixin/mpShare.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mixin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mpShare"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 其他内容")]),t._v("\n")])])]),a("p",[t._v("分享功能，一般有三个参数，如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 该对象已集成到this.$u中，内部属性如下")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mpShare "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ttitle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认为小程序名称，可自定义")]),t._v("\n\tpath"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认为当前页面路径，一般无需修改，QQ小程序不支持")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 分享图标，路径可以是本地文件路径、代码包文件路径或者网络图片路径。")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 支持PNG及JPG，默认为当前页面的截图")]),t._v("\n\timageUrl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("以上这些，uView已通过"),a("code",[t._v("mixin")]),t._v('集成，当某一个页面您需要自定义分享信息时，可以通过"this.$u.mpShare"对进行修改，在页面的'),a("code",[t._v("onLoad")]),t._v("生命周期修改即可。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onLoad")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mpShare"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'天苍苍野茫茫，风吹草低见牛羊'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"重写-onshareappmessage-生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重写-onshareappmessage-生命周期"}},[t._v("#")]),t._v(' 重写"onShareAppMessage"生命周期')]),t._v(" "),a("p",[t._v("如果您基于自己的一些业务逻辑，需要更加自定义的实现逻辑，可以在页面中重写"),a("code",[t._v("onShareAppMessage")]),t._v("生命周期即可覆盖uView通过"),a("code",[t._v("mixin")]),t._v("监听的"),a("code",[t._v("onShareAppMessage")]),t._v("生命周期。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里如果写成onShareAppMessage: res => { ... }形式的箭头函数，在内部会无法获得this")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onShareAppMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("from "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'button'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 来自页面内分享按钮")]),t._v("\n\t\t\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\ttitle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'自定义分享标题'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tpath"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/pages/test/test?id=123'")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"分享到朋友圈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分享到朋友圈"}},[t._v("#")]),t._v(" 分享到朋友圈")]),t._v(" "),a("p",[t._v("此功能为微信小程序最新加入的功能，仅适用于微信小程序，uView也全局监听了此生命周期。")]),t._v(" "),a("p",[t._v("同理，你也可以在页面中重写"),a("code",[t._v("onShareTimeline")]),t._v("生命周期即可覆盖uView通过"),a("code",[t._v("mixin")]),t._v("监听的"),a("code",[t._v("onShareTimeline")]),t._v("生命周期。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onShareTimeline")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("from "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'button'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 来自页面内分享按钮")]),t._v("\n\t\t\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\ttitle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'自定义分享标题'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tpath"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/pages/test/test?id=123'")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);