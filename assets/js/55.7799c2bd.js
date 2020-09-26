(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{825:function(t,a,e){"use strict";e.r(a);var r=e(115),i=Object(r.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"第五十七条：只针对异常的情况才使用异常"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第五十七条：只针对异常的情况才使用异常","aria-hidden":"true"}},[t._v("#")]),t._v(" 第五十七条：只针对异常的情况才使用异常")]),t._v(" "),e("blockquote",[e("p",[t._v("异常是为了在异常情况下使用而设计的，不要将它们用于put的控制流，也不要编写迫使它们这样做的API")])]),t._v(" "),e("h2",{attrs:{id:"第五十八条：对可恢复的情况使用受检异常，对编程错误使用运行时异常"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第五十八条：对可恢复的情况使用受检异常，对编程错误使用运行时异常","aria-hidden":"true"}},[t._v("#")]),t._v(" 第五十八条：对可恢复的情况使用受检异常，对编程错误使用运行时异常")]),t._v(" "),e("p",[t._v("Java程序设计语言提供了三种可抛出结构（throwable）：受检的异常（checked exception）、运行时异常（run-time exception）和错误（error）")]),t._v(" "),e("p",[t._v("对于受检的异常，主要的原则是如果期望调用者能够适当的恢复，对于这种情况就应该使用受检的异常。通过抛出受检的异常，强迫调用者在一个catch子句中处理该异常，或者将它传播出去")]),t._v(" "),e("p",[t._v("对于运行时异常和错误，在行为上两者是等同的，它们都是不需要也不应该被捕获的可抛出结构。如果程序抛出未受检的异常或错误，往往就属于不可恢复的情形，继续执行下去有害无益，如果程序没有捕捉到这样的可抛出结构，将会导致当前的线程停止，并出现适当的错误信息")]),t._v(" "),e("h2",{attrs:{id:"第五十九条：避免不必要地使用受检的异常"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第五十九条：避免不必要地使用受检的异常","aria-hidden":"true"}},[t._v("#")]),t._v(" 第五十九条：避免不必要地使用受检的异常")]),t._v(" "),e("h2",{attrs:{id:"第六十条：优先使用标准的异常"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第六十条：优先使用标准的异常","aria-hidden":"true"}},[t._v("#")]),t._v(" 第六十条：优先使用标准的异常")]),t._v(" "),e("h3",{attrs:{id:"常用的异常"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用的异常","aria-hidden":"true"}},[t._v("#")]),t._v(" 常用的异常")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("异常")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("使用场合")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("IllegalArgumentException")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("非null的参数不正确")])]),t._v(" "),e("tr",[e("td",[t._v("IllagalStateException")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("对于方法调用而言，对象状态不合适")])]),t._v(" "),e("tr",[e("td",[t._v("NullPointerException")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("在禁止使用null的情况下参数值为null")])]),t._v(" "),e("tr",[e("td",[t._v("IndexOutOfBoundsException")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("下标参数越界")])]),t._v(" "),e("tr",[e("td",[t._v("ConcurrentModificationException")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("在禁止并发修改的情况下，检测到对象的并发修改")])]),t._v(" "),e("tr",[e("td",[t._v("UnsupportedOperationException")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("对象不支持用户请求的方法")])])])]),t._v(" "),e("h2",{attrs:{id:"第六十一条：抛出与抽象相对应的异常"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第六十一条：抛出与抽象相对应的异常","aria-hidden":"true"}},[t._v("#")]),t._v(" 第六十一条：抛出与抽象相对应的异常")]),t._v(" "),e("h2",{attrs:{id:"第六十二条：每个方法抛出的异常都要有文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第六十二条：每个方法抛出的异常都要有文档","aria-hidden":"true"}},[t._v("#")]),t._v(" 第六十二条：每个方法抛出的异常都要有文档")]),t._v(" "),e("h2",{attrs:{id:"第六十三条：在细节消息中包含能捕获失败的消息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第六十三条：在细节消息中包含能捕获失败的消息","aria-hidden":"true"}},[t._v("#")]),t._v(" 第六十三条：在细节消息中包含能捕获失败的消息")]),t._v(" "),e("h2",{attrs:{id:"第六十四条：努力使失败保持原子性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第六十四条：努力使失败保持原子性","aria-hidden":"true"}},[t._v("#")]),t._v(" 第六十四条：努力使失败保持原子性")]),t._v(" "),e("h2",{attrs:{id:"第六十五条：不要忽略异常"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第六十五条：不要忽略异常","aria-hidden":"true"}},[t._v("#")]),t._v(" 第六十五条：不要忽略异常")])])},[],!1,null,null,null);a.default=i.exports}}]);