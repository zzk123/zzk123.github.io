(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{816:function(t,a,n){"use strict";n.r(a);var s=n(115),e=Object(s.a)({},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"定义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#定义","aria-hidden":"true"}},[t._v("#")]),t._v(" 定义")]),t._v(" "),n("blockquote",[n("p",[t._v("单例模式（Singleton Pattern）:确保某一个类只有一个实例，而且自行实例化并向整个系统提供这个实例，这个类称为单例类，它提供全局访问的方法。单例是一种对象创建型模式")])]),t._v(" "),n("h2",{attrs:{id:"结构图"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#结构图","aria-hidden":"true"}},[t._v("#")]),t._v(" 结构图")]),t._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"结构图",href:"/pic/design/F3DDXEI.png"}},[n("img",{attrs:{src:"/pic/design/F3DDXEI.png",alt:"结构图"}})])]),t._v(" "),n("p",[n("strong",[t._v("Singleton（单例）")]),t._v("：在单例类的内部实现只生成一个实例，同时它提供一个静态的GetInstance()方法，让客户可以访问它的唯一实例；为了防止在外部对单例类实例化，它的构造函数可见性为private；在单例类内部定义了一个Singleton类型的静态对象，作为供外部共享访问的唯一实例")]),t._v(" "),n("h3",{attrs:{id:"要点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#要点","aria-hidden":"true"}},[t._v("#")]),t._v(" 要点")]),t._v(" "),n("ul",[n("li",[t._v("某个类只能有一个实例")]),t._v(" "),n("li",[t._v("它必须自行创建这个实例")]),t._v(" "),n("li",[t._v("它必须自行向整个系统提供这个实例")])]),t._v(" "),n("h2",{attrs:{id:"实例：负载均衡器的设计"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实例：负载均衡器的设计","aria-hidden":"true"}},[t._v("#")]),t._v(" 实例：负载均衡器的设计")]),t._v(" "),n("h3",{attrs:{id:"结构图-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#结构图-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 结构图")]),t._v(" "),n("p",[n("a",{attrs:{"data-fancybox":"",title:"结构图",href:"/pic/design/7pKv64v.png"}},[n("img",{attrs:{src:"/pic/design/7pKv64v.png",alt:"结构图"}})])]),t._v(" "),n("h3",{attrs:{id:"代码实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码实现","aria-hidden":"true"}},[t._v("#")]),t._v(" 代码实现")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("class LoadBalancer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\n\tprivate static LoadBalancer instance "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" null"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\tprivate List serverList "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" null"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\tprivate LoadBalancer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tserverList "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new ArrayList"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\tpublic static LoadBalancer getLoadBalancer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tif"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("instance "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" null"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tinstance "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new LoadBalancer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" instance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\n\tpublic void addServer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String server"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tserverList.add"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("server"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\n\tpublic void removeServer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String server"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tserverList.remove"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("server"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\n\tpublic String getServer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tRandom random "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new Random"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tint i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" random.nextInt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("serverList.size"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("serverList.get"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"饿汉式单例模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#饿汉式单例模式","aria-hidden":"true"}},[t._v("#")]),t._v(" 饿汉式单例模式")]),t._v(" "),n("blockquote",[n("p",[t._v("饿汉式单例模式是指在定义静态变量的时候实例化单例类，因此在类加载的时候就已经创建了单例对象")])]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("class EagerSingleton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\n\tprivate static final EagerSingleton instance "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new EagerSingleton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\tprivate EagerSingleton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\tpublic static EagerSingleton getInstance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" instance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"懒汉式单例模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#懒汉式单例模式","aria-hidden":"true"}},[t._v("#")]),t._v(" 懒汉式单例模式")]),t._v(" "),n("blockquote",[n("p",[t._v("懒汉式单例模式是指在第一次调用getInstance()方法时实例化单例，在类加载时不自行实例化，这种技术又称为延迟加载技术，即需要的时候再加载实例")])]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("//双重检查锁定"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Doublie-check Locking"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nclass LazySingleton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\n\t//使用volatile修饰的成员变量可以确保多个线程都能够正确处理\n\tprivate volatile static LazySingleton "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" null"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\tprivate LazySingleton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\tpublic static LazySingleton getInstance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\n\t\t//第一重判断\n\t\tif"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("instance "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" null"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t//锁定代码块\n\t\t\tsynchronized"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LazySingleton.class"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t//第二重判断\n\t\t\t\tif"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("instance "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" null"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t\tinstance "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new LazySingleton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("//创建单例实例\n\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\t\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"饿汉式单例类与懒汉式单例类比较"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#饿汉式单例类与懒汉式单例类比较","aria-hidden":"true"}},[t._v("#")]),t._v(" 饿汉式单例类与懒汉式单例类比较")]),t._v(" "),n("ul",[n("li",[n("p",[n("code",[t._v("饿汉式单例类在类被加载时就将自己实例化，它的优点在于无须考虑多线程访问的问题，可以确保实例的唯一性")]),t._v("；从调用速度和反应时间角度来说，由于单例对象一开始就得以创建，因此要由于懒汉式单例。但是无论系统在运行时是否需要使用该单例对象，由于在类加载时该对象就需要创建，因此从资源利用效率角度来讲，饿汉式单例不及懒汉式单例，而且在系统加载时由于需要创建饿汉式单例对象，加载时间可能会比较长")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("懒汉式单例类在第一次使用时创建，无须一直占用系统资源，实现了延迟加载")]),t._v("，但是必须处理好多个线程同时访问的问题，特别是当单例类作为资源控制器，在实例化时必然涉及资源初始化，而资源初始化很有可能耗费大量时间，这意味着出现多线程同时首次引用此类的几率较大，需要通过双重检查锁定等机制进行控制，这将导致系统性能受到一定影响")])])]),t._v(" "),n("h2",{attrs:{id:"iodh"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#iodh","aria-hidden":"true"}},[t._v("#")]),t._v(" IoDH")]),t._v(" "),n("blockquote",[n("p",[t._v("在IoDH中，在单例类中增加一个静态(static)内部类，在该内部类中创建单例对象，再将该单例对象通过getInstance()方法返回给外部使用")])]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("class Singleton "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n\tprivate Singleton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n\t\t\n\tprivate static class HolderClass "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n\t\t\tprivate final static Singleton instance "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new Singleton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n\t\t\n\tpublic static Singleton getInstance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" HolderClass.instance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n\t\t\n\tpublic static void main"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n\t\tSingleton s1, s2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   \n\t\t\ts1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Singleton.getInstance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n\t\ts2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Singleton.getInstance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n\t\tSystem.out.println"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("s2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n")])])]),n("p",[t._v("创建的单例对象s1和s2为同一对象。由于静态单例对象没有作为Singleton的成员变量直接实例化，因此类加载时不会实例化Singleton，第一次调用getInstance()时将加载内部类HolderClass，在该内部类中定义了一个static类型的变量instance，此时会首先初始化这个成员变量，由Java虚拟机来保证其线程安全性，确保该成员变量只能初始化一次。由于getInstance()方法没有任何线程锁定，因此其性能不会造成任何影响。")]),t._v(" "),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("p",[t._v("单例模式作为一种目标明确，结构简单，理解容易的设计模式，在软件开发中使用频繁非常高，在很多应用软件和框架中都得以广泛使用")]),t._v(" "),n("h2",{attrs:{id:"优点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#优点","aria-hidden":"true"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),n("ol",[n("li",[n("p",[n("strong",[t._v("单例模式提供了对唯一实例的受控访问")]),t._v("。因为单例类封装了它的唯一实例，所以它可以严格控制客户怎样以及何时访问它")])]),t._v(" "),n("li",[n("p",[t._v("由于在系统内存中只存在一个对象，因此可以节约资源，对于一些需要频繁创建和销毁的对象，"),n("strong",[t._v("单例模式可以提高系统的性能")])])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("允许可变数目的实例")]),t._v("。基于单例模式，开发人员可以进行扩展，使用和控制单例对象相似的方法来获取指定个数的实例对象，既节约资源，又解决了由于单例对象共享过多有损性能的问题")])])]),t._v(" "),n("h2",{attrs:{id:"缺点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#缺点","aria-hidden":"true"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("由于单例模式中没有抽象层，因此"),n("strong",[t._v("单例类的扩展有很大困难")])])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("单例类的职责过重，在一定程度上违背了单一职责原则")]),t._v("。因为单例类既提供了业务方法，又提供了创建对象的方法（工厂方法），将对象的创建和对象本身的功能耦合在一起")])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("很多面向对象语言（如Java， C#）的运行环境都提供了自动垃圾回收技术，因此，如果实例化的共享对象长时间不被利用，系统会认为它是垃圾，会自动销毁并回收资源，下次利用时又将重新实例化，这将导致共享的单例对象状态的丢失")])])])]),t._v(" "),n("h2",{attrs:{id:"适用场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#适用场景","aria-hidden":"true"}},[t._v("#")]),t._v(" 适用场景")]),t._v(" "),n("ol",[n("li",[n("p",[n("strong",[t._v("系统只需要一个实例对象")]),t._v("。例如，系统要求提供了一个唯一的序列号生成器或资源管理器，或者需要考虑资源消耗太大而只允许创建一个对象")])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("客户调用类的单个实例只允许使用一个公共访问点")]),t._v("，除了该公共访问点，不能通过其他途径访问该实例")])])])])},[],!1,null,null,null);a.default=e.exports}}]);