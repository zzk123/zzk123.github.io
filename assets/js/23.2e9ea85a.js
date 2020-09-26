(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{843:function(t,a,n){"use strict";n.r(a);var s=n(115),e=Object(s.a)({},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"定义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#定义","aria-hidden":"true"}},[t._v("#")]),t._v(" 定义")]),t._v(" "),n("blockquote",[n("p",[t._v("原型模式（Prototype Pattern）： 使用原型实例指定创建对象的种类，并且通过克隆这些原型创建新的对象。原型模式是一种对象创建型模式")])]),t._v(" "),n("p",[t._v("原型模式的工作原理就是，将一个原型对象传给那个要发动创建的对象，这个要发动创建的对象通过请求原型对象克隆自己来实现创建过程。由于在软件系统中经常会遇到创建多个相同或者相似对象的情况，因此原型模式在真实开发中的使用频率还是非常高的。原型模式是一种‘另类’的创建型模式，创建克隆对象的工厂就是原型类的本身，工厂方法由克隆方法实现")]),t._v(" "),n("p",[t._v("需要注意的是，通过克隆方法所创建的对象是全新的对象，它们在内存中拥有新的地址；通常，对克隆所产生的对象进行的修改不会对原型对象造成任何影响，每一个克隆对象都是相互独立的；通过不同的方式对克隆对象进行修改以后，可以得到一系列相似但不完全相同的对象")]),t._v(" "),n("h2",{attrs:{id:"结构图"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#结构图","aria-hidden":"true"}},[t._v("#")]),t._v(" 结构图")]),t._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"结构图",href:"/pic/design/10asFDZ.png"}},[n("img",{attrs:{src:"/pic/design/10asFDZ.png",alt:"结构图"}})])]),t._v(" "),n("ol",[n("li",[n("p",[n("strong",[t._v("Prototype（抽象原型类）")]),t._v("：它是声明克隆方法的接口，是所有具体原型类的公共父类，可以是抽象类也可以是接口，甚至还可以是具体实现类")])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("ConcretePrototype（具体原型类）")]),t._v("：它实现在抽象原型类中声明的克隆方法，在克隆方法中返回自己的一个克隆对象")])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("Client（客户类）")]),t._v("：让一个原型对象克隆自身从而创建一个新的对象，在客户类中只需要直接实例化或通过工厂方法等方式创建一个原型对象，再通过调用该对象的克隆方法即可得到多个相同的对象，由于客户类针对抽象原型类Prototype编程，因此用户可以根据需要选择具体原型类，系统具有较好的可扩展性，增加或更换具体原型类都很方便")])])]),t._v(" "),n("h2",{attrs:{id:"实现方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 实现方法")]),t._v(" "),n("h3",{attrs:{id:"_1-通用实现方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-通用实现方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 通用实现方法")]),t._v(" "),n("p",[t._v("在具体原型类的克隆方法中实例化一个与自身类型相同的对象并将其返回，并将相关的参数传入新创建的对象中，保证它们的成员变量相同")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("\tclass ConcretePrototype implements Prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\n\t\tprivate String attr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" //成员变量\n\n\t\tpublic void setAttr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String attr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tthis.attr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" attr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t\tpublic String getAttr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" this.attr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t\tpublic Prototype clone"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tPrototype prototype "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new ConcretePrototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t//创建新的对象\n\t\t\tprototype.setAttr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("this.attr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"_2-java语言提供的clone-方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-java语言提供的clone-方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. Java语言提供的clone()方法")]),t._v(" "),n("p",[t._v("在java中可以直接使用Object提供的clone方法，不过要使用该方法先要先实现一个标识接口Cloneable，表示该java类支持被复制")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("\tclass ConcretePrototype implements Cloneable"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\t\tpublic Prototype clone"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tObject object "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" null"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\ttry"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\tobject "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" super.clone"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("catch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CloneNotSupportedException exception"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\tSystem.err.println"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Not support cloneable"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])]),n("p",[t._v("在客户端创建原型对象和克隆对象")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("\tPrototype obj1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new ConcretePrototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\tPrototype obj2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj1.clone"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("一般，java中的clone()方法满足：")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("对任何对象x，都有x.clone()！= x，即克隆对象与原型对象不是同一个对象")])]),t._v(" "),n("li",[n("p",[t._v("对任何对象x，都有x.clone().getClass() == x.getClass(),即克隆对象和原型对象的类型一样")])]),t._v(" "),n("li",[n("p",[t._v("如果对象x的equals()方法定义恰当，那么x.clone().equals(x)应该成立")])])]),t._v(" "),n("h2",{attrs:{id:"工作周报的快速创建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#工作周报的快速创建","aria-hidden":"true"}},[t._v("#")]),t._v(" 工作周报的快速创建")]),t._v(" "),n("h3",{attrs:{id:"结构图-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#结构图-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 结构图")]),t._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"结构图",href:"/pic/design/3sCZnju.png"}},[n("img",{attrs:{src:"/pic/design/3sCZnju.png",alt:"结构图"}})])]),t._v(" "),n("p",[t._v("WeeklyLog充当具体原型类，Object类充当抽象原型类，clone()方法为原型方法")]),t._v(" "),n("h3",{attrs:{id:"代码实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码实现","aria-hidden":"true"}},[t._v("#")]),t._v(" 代码实现")]),t._v(" "),n("p",[n("strong",[t._v("WeeklyLog：具体原型类")])]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("\t//实现标识接口Cloneable，表示java类支持复制\n\tpublic class WeeklyLog implements Cloneable "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tprivate String name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tprivate String "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("date")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tprivate String content"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tpublic String getName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\tpublic void setName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tthis.name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\tpublic String getDate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("date")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\tpublic void setDate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String date"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tthis.date "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("date")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\tpublic String getContent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" content"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\tpublic void setContent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String content"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tthis.content "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" content"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t//克隆方法clone"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",此处使用java语言提供的克隆机制\n\t\tpublic WeeklyLog clone"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tObject obj "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" null"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\ttry "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\tobj "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" super.clone"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("WeeklyLog"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("catch "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Exception e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\tSystem.out.println"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"不支持复制！"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" null"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("strong",[t._v("客户端测试")])]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("\tpublic class Client "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tpublic static void main"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tWeeklyLog log_previous "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new WeeklyLog"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\tlog_previous.setName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"张无忌"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\tlog_previous.setDate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"第12周"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\tlog_previous.setContent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"这周工作很忙"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t\n\t\t\tWeeklyLog log_new"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\tlog_new "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" log_previous.clone"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"浅克隆和深克隆"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浅克隆和深克隆","aria-hidden":"true"}},[t._v("#")]),t._v(" 浅克隆和深克隆")]),t._v(" "),n("p",[t._v("在java语言中，数据类型分为值类型（基本数据类型）和引用类型，值类型包括int,double,byte,boolean,char等简单数据类型，引用类型包括类，接口，数组等复杂类型。浅克隆和深克隆的主要区别在于是否支持引用类型的成员变量的复制")]),t._v(" "),n("h3",{attrs:{id:"浅克隆（shallow-clone）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浅克隆（shallow-clone）","aria-hidden":"true"}},[t._v("#")]),t._v(" 浅克隆（Shallow Clone）")]),t._v(" "),n("p",[t._v("在浅克隆中，如果原型对象的成员变量是值类型，将复制一份给克隆对象；如果原型对象的成员变量是引用类型，则将引用对象的地址复制一份给克隆对象，也就是原型对象和克隆对象的成员变量指向相同的内存地址。简单来说，当对象被复制时，只复制它本身和其中包含的值类型的成员变量，而引用类型的成员对象并没有被复制")]),t._v(" "),n("h3",{attrs:{id:"深克隆（deep-clone）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#深克隆（deep-clone）","aria-hidden":"true"}},[t._v("#")]),t._v(" 深克隆（Deep Clone）")]),t._v(" "),n("p",[t._v("在深克隆中，无论原型对象的成员变量是值类型还是引用类型，都将复制一份给克隆对象，深克隆将原型对象的所有引用对象也复制一份给克隆对象。简单来说，在深克隆中，除了对象本身被复制外，对象所包含的所有成员变量也将被复制")]),t._v(" "),n("p",[t._v("在Java语言中，如果需要实现深克隆，可以通过序列化（Serialization）等方法来实现。序列化就是将对象写到流的过程，写到流中的对象是原有对象的一个复制品，而原对象仍然存于内存中。通过序列化实现的复制不仅可以复制对象本身，而且还可以复制其引用的成员对象，因此通过序列化对象写到一个流中，再从流中将其读出来，可以实现深克隆。")]),t._v(" "),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("p",[t._v("原型模式作为一种快速创建大量相同或相似对象的方式，在软件开发中应用较为广泛，很多软件提供的复制(Ctrl + C)和粘贴(Ctrl + V)操作就是原型模式的典型应用")]),t._v(" "),n("h2",{attrs:{id:"优点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#优点","aria-hidden":"true"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("当创建新的对象实例较为复杂时，使用原型模式可以简化对象的创建过程，通过复制一个已有实例可以提高新实例的创建效率")])]),t._v(" "),n("li",[n("p",[t._v("扩展性较好，由于在原型模式中提供了抽象原型类，在客户端可以针对抽象原型类进行编程，而将具体原型类写在配置文件中，增加或减少具体原型类对原有系统都没有任何影响")])]),t._v(" "),n("li",[n("p",[t._v("原型模式提供了简化的创建结构。工厂方法模式常常需要由一个与产品类等级结构相同的工厂等级结构，而原型模式就不需要这样，原型模式中产品的复制是通过封装在原型类中的克隆方法实现的，无须专门的工厂类来创建产品")])]),t._v(" "),n("li",[n("p",[t._v("可以使用深克隆的方式保存对象的状态。使用原型模式将对象赋值一份并将其状态保存起来，以便在需要的时候使用。")])])]),t._v(" "),n("h2",{attrs:{id:"缺点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#缺点","aria-hidden":"true"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("需要为每一个类配备一个克隆方法，而且该克隆方法位于一个类的内部，当对已有的类进行改造时，需要修改源代码，违背了开闭原则")])]),t._v(" "),n("li",[n("p",[t._v("在实现深克隆时需要编写较为复杂的代码，而且当对象之间存在多重的嵌套引用时，为了实现深克隆，每一层对象对应的类都必须支持深克隆，实现起来可能会比较麻烦")])])]),t._v(" "),n("h2",{attrs:{id:"使用场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用场景","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用场景")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("创建新对象成本较大(例如初始化需要占用较长的时间，占用太对的CPU资源或网络资源)，新的对象可以通过原型模式对已有对象进行复制来获得，如果是相似对象，则可以对其成员变量稍作修改")])]),t._v(" "),n("li",[n("p",[t._v("如果系统要保存对象的状态，而对象的状态变化很小，或者对象本身占用内存较少时，可以使用原型模式来配合备忘录模式来实现")])]),t._v(" "),n("li",[n("p",[t._v("需要避免使用分层次的工厂类来创建分层次的对象，并且类的实例对象只有一个或很少的几个组合状态，通过复制原型对象得到新实例可能比使用构造函数创建一个新实例更加方便")])])])])},[],!1,null,null,null);a.default=e.exports}}]);