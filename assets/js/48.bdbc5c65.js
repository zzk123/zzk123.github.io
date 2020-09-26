(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{857:function(t,a,s){"use strict";s.r(a);var n=s(115),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"第一条-考虑用静态工厂方法代替构造器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一条-考虑用静态工厂方法代替构造器","aria-hidden":"true"}},[t._v("#")]),t._v(" 第一条: 考虑用静态工厂方法代替构造器")]),t._v(" "),s("h3",{attrs:{id:"优势"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优势","aria-hidden":"true"}},[t._v("#")]),t._v(" 优势")]),t._v(" "),s("ul",[s("li",[t._v("静态工厂方法与构造器不同的第一大优势，它们有名字")]),t._v(" "),s("li",[t._v("静态工厂方法与构造器不同的第二大优势在于，不必在每次调用它们的时候都创建一个新对象")]),t._v(" "),s("li",[t._v("静态工厂方法与构造器不同的第三大优势在于，它们可以原返回类型的任何子类型的对象")]),t._v(" "),s("li",[t._v("静态工厂方法与构造器不同的第四大优势在于，它们使代码变得更加简洁")])]),t._v(" "),s("h3",{attrs:{id:"缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缺点","aria-hidden":"true"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),s("ul",[s("li",[t._v("类如果不含公有的或者受保护的构造器，就不能被子类化")]),t._v(" "),s("li",[t._v("它们与其他的静态方法实际上没有任何区别")])]),t._v(" "),s("h3",{attrs:{id:"静态工厂的惯用名称"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态工厂的惯用名称","aria-hidden":"true"}},[t._v("#")]),t._v(" 静态工厂的惯用名称")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("valueOf")]),t._v("： 该方法返回的实例与它的参数具有相同的值")]),t._v(" "),s("li",[s("strong",[t._v("of")]),t._v("： valueOf的一种更为简洁的替代")]),t._v(" "),s("li",[s("strong",[t._v("getInstance")]),t._v(" ： 返回的实例是通过方法的参数来描述的，但是不能够说与参数具有同样的值。对于Singleton来说，该方法没有参数，并返回唯一的实例")]),t._v(" "),s("li",[s("strong",[t._v("newInstance")]),t._v(" ： 像getInstance一样，但newInstance可以确保返回的每个实例都与所有其他实例不同")]),t._v(" "),s("li",[s("strong",[t._v("getType")]),t._v(" ： 像getInstance一样，但是在工厂方法处于不同的类中的时候使用，Type 表示工厂方法所返回的对象类型")]),t._v(" "),s("li",[s("strong",[t._v("newType")]),t._v("： 像getInstance一样，但是在工厂方法处于不同的类中国的时候使用，Type 表示工厂方法所返回的对象类型")])]),t._v(" "),s("h2",{attrs:{id:"第二条：遇到多个构造器参数时要考虑用构造器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第二条：遇到多个构造器参数时要考虑用构造器","aria-hidden":"true"}},[t._v("#")]),t._v(" 第二条：遇到多个构造器参数时要考虑用构造器")]),t._v(" "),s("blockquote",[s("p",[t._v("注：如果类的构造器或者静态工厂中具有多个参数，设计这种类时，Builder模式就是不错的选择")])]),t._v(" "),s("h2",{attrs:{id:"第三条：用私有构造器或枚举类型强化singleton属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三条：用私有构造器或枚举类型强化singleton属性","aria-hidden":"true"}},[t._v("#")]),t._v(" 第三条：用私有构造器或枚举类型强化Singleton属性")]),t._v(" "),s("h3",{attrs:{id:"第一种方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一种方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 第一种方法")]),t._v(" "),s("blockquote",[s("p",[t._v("公有静态成员是一个final域，私有构造器仅被调用一次，用来实例化公有的静态final域Elvis.INSTANCE。由于缺少公有的或者受保护的构造器，所以保证了Elvis的全局唯一性：一旦Elvis类被实例化，只会存在一个Elvis实例。客户端的任何行为都不会改变这一点。但是，享有特权的客户端可以借助AccessibleObject.setAccessible方法，通过反射机制调用私有构造器。如果需要抵御这种攻击。可以修改构造器，让它在被要求创建第二个实例的时候抛出异常")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("    public class Elvis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        public static final Elvis INSTANCE "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new Elvis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       \n        private Elvis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"第二种方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第二种方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 第二种方法")]),t._v(" "),s("blockquote",[s("p",[t._v("在实现Singleton的第二种方法中，公有的成员是个静态工厂方法。对于静态方法Elvis.getInstance的所有调用，都会返回同一对象引用，所以永远不会创建其他的Elvis实例")])]),t._v(" "),s("p",[s("strong",[t._v("公有域方法的主要好处在于，组成类的成员的声明很清楚地表明了这个类是一个Singleton：公有的静态域是final的，所以该域将总是包含相同的对象引用。公有域方法在性能上不再由任何优势：现代的JVM实现几乎都能将静态工厂方法的调用内联化")])]),t._v(" "),s("p",[s("strong",[t._v("工厂方法的优势之一在于，它提供了灵活性：在不改变其API的前提下，我们可以改变该类是否应该为Singleton的想法，工厂方法返回该类的唯一实例，但是，它可以很容易修改，比如改成为每个调用该方法的线程返回一个唯一的实例，第二个优势与泛型有关。这些优势之间通常都不想关，public域的方法比较简单")])]),t._v(" "),s("blockquote",[s("p",[t._v('为了使利用这其中一种方法实现的Singleton类变成是可序列化的（Serializable），仅仅在声明中加上"implements Serializable"是不够的，为了维护并保证Singleton，必须声明所有实例域都是瞬时（transient）的，并提供一个readResolve方法。否则，每次反序列化一个序列化的实例时，都会创建一个新的实例，为了防止这种情况，要在Elvis类中加入下面这个readResolve方法：')])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("    private Object  readResolve"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" INSTANCE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"第三种方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三种方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 第三种方法")]),t._v(" "),s("blockquote",[s("p",[t._v("编写一个包含单个元素的枚举类型，这种方法在功能上与公有域方法相近，但是更加简洁，无偿提供了序列化机制，绝对防止多次实例化，即使是在面对复杂的序列化或者反射攻击的时候")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("    public class Elvis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        \n        private static final Elvis INSTANCE "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new Elvis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        private Elvis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        public static Elvis getInstance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" INSTANCE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n\n\n    public enum Elvis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        INSTANCE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"第四条：通过私有构造器强化不可实例化的能力"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第四条：通过私有构造器强化不可实例化的能力","aria-hidden":"true"}},[t._v("#")]),t._v(" 第四条：通过私有构造器强化不可实例化的能力")]),t._v(" "),s("blockquote",[s("p",[t._v("对于一些只包含静态方法和静态域的类，这样的类不希望被实例化，实例化对它没有任何意义，有一些简单的习惯用法可以确保类不可被实例化，由于只有当类不包含显式的构造器时，编译器参会生成缺省的构造器，因此我们只要让类包含私有构造器，它就不能被实例化")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("    public class UtilityClass"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        private UtilityClass"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            throw new AssertionError"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("由于显式的构造器是私有的，所以不可以在该类的外部访问它。AssertionError不是必须的，但是他可以避免在类的内部调用构造器。它确保了该类在任何情况下都不会被实例化")]),t._v(" "),s("h2",{attrs:{id:"第五条：避免创建不必要的对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第五条：避免创建不必要的对象","aria-hidden":"true"}},[t._v("#")]),t._v(" 第五条：避免创建不必要的对象")]),t._v(" "),s("h3",{attrs:{id:"不可变的对象重用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不可变的对象重用","aria-hidden":"true"}},[t._v("#")]),t._v(" 不可变的对象重用")]),t._v(" "),s("blockquote",[s("p",[t._v("一般来说。最好能重用对象而不是在每次需要的时候创建一个相同功能的新对象。重用方式既快速，又流行。如果对象是不变的（immutable），它就始终可以被重用")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("String s "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stringette"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v('该语句每次被执行的时候都创建一个新的String实例，但是这些创建对象的动作全都是不必要的。传递给String构造器的参数("stringette")本身就是一个String实例，功能方面等同于构造器创建的所有对象')]),t._v(" "),s("p",[s("strong",[t._v("改造后：")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("String s "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stringette"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("这个版本只用了一个String实例，而不是每次执行的时候都创建一个新的实例，而且它可以保证，对于所有同一台虚拟机中运行的代码，只要它们包含相同的字符串字面常量，该对象就会被重用")]),t._v(" "),s("p",[t._v("对于同时提供了静态工厂方法和构造器的不可变类，通常可以使用静态工厂方法而不是构造器，以避免创建不必要的对象。例如，**静态工厂方法Boolean.valueOf(String)几乎总是优先于构造器Boolean(String)。**构造器在每次被调用的时候都会创建一个新的对象，而静态工厂方法则从来不要求这样做，实际上也不会这样做")]),t._v(" "),s("h3",{attrs:{id:"不会被修改的对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不会被修改的对象","aria-hidden":"true"}},[t._v("#")]),t._v(" 不会被修改的对象")]),t._v(" "),s("p",[s("strong",[t._v("反例：")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("    public class Person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        \n        private final Date birthDate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        public boolean isBabyBoomer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            Calendar gmtCal "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Calendar.getInstance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TimeZone.getTimeZome"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GMT"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            gmtCal.set"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("1946, Calendar.JANUARY, 1, 0, 0, 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            Date boomStart "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gmtCal.getTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            gmtCal.set"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("1965, Calendar.JANUARY, 1, 0, 0, 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            Date boomEnd "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gmtCal.getTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" birthDate.compareTo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("boomStart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" 0 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" birthDate.compareTo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("boomEnd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" 0\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("isBabyBoomer每次被调用的时候，都会新建一个Calendar、一个TimeZone和两个Date实例，这是不必要的。")]),t._v(" "),s("p",[s("strong",[t._v("改版后：")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("    public class Person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        \n        private final Date birthDate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \n        private static final Date BOOM_START"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \n        private static final Date BOOM_END"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        static"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            Calendar gmtCal "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Calendar.getInstance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TimeZone.getTimeZome"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GMT"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            gmtCal.set"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("1946, Calendar.JANUARY, 1, 0, 0, 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            Date boomStart "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gmtCal.getTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            gmtCal.set"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("1965, Calendar.JANUARY, 1, 0, 0, 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            Date boomEnd "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gmtCal.getTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        public boolean isBabyBoomer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n             "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" birthDate.compareTo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("boomStart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" 0 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" birthDate.compareTo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("boomEnd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" 0\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("改版后的的Person类只在初始化的时候创建Calendar、TimeZone和Date实例一次，而不是在每次调用isBabyBoomer的时候都创建这些实例")]),t._v(" "),s("h3",{attrs:{id:"自动装箱"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动装箱","aria-hidden":"true"}},[t._v("#")]),t._v(" 自动装箱")]),t._v(" "),s("blockquote",[s("p",[t._v("在java 1.5发行版本中，有一种创建多余对象的新方法，称作自动装箱（autoboxing），它允许程序员将基本类型和装箱基本类型（Boxed Primtive Type）混用，按需要自动装箱和拆箱。自动装箱使得基本类型和装箱基本类型之间的差别变得模糊起来，但是并没有完全消除。")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("    public static void main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Long "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 0L"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        for"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("long i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" Integer.MAX_VALUE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i++"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),t._v(" +"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        System.out.println"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("上面的程序计算结果是正确的，但是比实际情况要更慢一些，只因为打错了一个字符，变量sum被声明成Long而不是long，意味着程序造了大约2^31个多余的Long实例（大约每次往Long sum中增加long时构造一个实例）。将sum的声明从Long改成long。")]),t._v(" "),s("blockquote",[s("p",[t._v("结论：要优先使用基本类型而不是装箱基本类型，要当心无意识的自动装箱")])]),t._v(" "),s("h2",{attrs:{id:"第六条：消除过期的对象引用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第六条：消除过期的对象引用","aria-hidden":"true"}},[t._v("#")]),t._v(" 第六条：消除过期的对象引用")]),t._v(" "),s("p",[s("strong",[t._v("反例：")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("    public class Stack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        \n        private Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" elements"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \n        private int size "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \n        private static final int DEFAULT_INITIAL_CAPACITY "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 16"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        public Stack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            elements "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DEFAULT_INITIAL_CAPACITY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        public void pop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            ensureCapacity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            elements"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("size++"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        public void push"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            if"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("size "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                throw new EmptyStackExcption"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" elements"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        private void ensureCapacity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            if"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elements.length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                elements "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Arrays.copyOf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" elements, 2 * size + 1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("在例子中程序没有明显的错误，无论怎么测试都可以成功通过，但是它隐藏着一个问题-内存泄漏，随着垃圾回收的增加，或者由于内存占用的不断增加，程序性能的降低会逐渐表现出来，在极端的情况下，这种内存泄漏会导致磁盘交换（Disk Paging），甚至导致程序失败（OutOfMemoryError错误）")]),t._v(" "),s("p",[t._v("在栈内部维护着对象的过期引用（obsolete reference）。所谓的过期引用，是指永远也不会再被解除的引用。在本例中，凡是在elements数组的“活动部分”之外的任何引用都是过期的")]),t._v(" "),s("p",[s("strong",[t._v("改进版本：")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("    public Obect pop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        if"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("size "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            throw new EmptyStackException"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        Object result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" elements"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        elements"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" null"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" //删除引用\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"第七条：避免使用终结方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第七条：避免使用终结方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 第七条：避免使用终结方法")]),t._v(" "),s("blockquote",[s("p",[t._v("终结方法（finalizer）通常是不可预测的，也是很危险的。一般情况下是不必要的。使用终结方法会导致行为不稳定、降低性能，以及可移植性问题")])]),t._v(" "),s("p",[s("strong",[t._v("终结方法的缺点在于不能保证会被及时地执行")]),t._v("。从一个对象变得不可到达开始到它的终结方法被执行，所花费的这段时间是任意长的，这意味着。注重时间（time-critical）的任务不应该由终结方法来完成。例如："),s("strong",[t._v("用终结方法来关闭已经打开的文件，这是严重错误")]),t._v("，因为打开文件的描述符是一种很有限的资源。由于JVM会延迟执行终结方法，所以大量的文件会保留在打开的状态，当一个程序再不能打开文件的时候，它可能会运行失败\n及时地执行终结方法正是垃圾回收算法的一个主要功能，这种算法在不同的JVM实现中会大相径庭，如果程序依赖于终结方法被执行的时间点，那么这个程序的行为在不同的JVM中运行的表现可能就会截然不同。一个程序在你测试用的JVM平台上运行得非常好，而在其他JVM平台上却根本无法运行。")])])},[],!1,null,null,null);a.default=e.exports}}]);