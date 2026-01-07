//DOM
//1.初识DOM(web网页最后会映射成一棵DOM树，连接网页和JS语言)
//1.1 是整个JS乃至前端最最核心的内容
//1.2 DOM:文档对象模型(Document Object Model)，可将web页面(也称为文档)与脚本编程语言（不论是python还是JS或者是JAVA都可）连接起来。
//1.3树状结构：也就是我们常说的DOM树，数据结构中的树
//（1）每一个标签都是一个节点，DOM节点，英文名为Node或者Element
//   节点之间存在父子关系，兄弟关系
//   节点类型：元素节点、文本节点、属性节点、注释节点等
//2.访问DOM
//2.1.怎么获取DOM树的根部元素（Document）
//2.1.1 document对象：代表整个HTML文档,存储在全局变量window中，可以直接使用document访问
window.document;
//得到一个HTMLDocument对象,key为documentElement
//2.2.选择器查询：document.querySelector('name');
//2.4 查询所有满足条件的节点  返回数据是一个类数组对象 NodeList
let items = document.querySelectorAll('p');
console.log(items);
//2.3 迭代查询：嵌套式
let subtitle = document.querySelector('introduce');
console.log(subtitle.querySelector('a'));
//3.DOM属性
//每一种HTML标签都有自己的属性，即自己的DOM类型对应
//约分为元素节点，文本节点，特性节点等
//3.1 元素节点  1
//HTML标签都是元素系节点，可以用nodeName属性获取节点名称
//3.2 文本节点  3
//纯文本都是文本节点，可以用nodeValue属性获取节点值
//3.3 特性节点  2
//HTML标签的属性都是特性节点，可以用nodeName方法获取属性key，用nodeValue方法获取属性value
//3.4 attributes属性（let value = name.attributes.src; value.nodeValue;）
//获取某个元素节点的所有属性,比如id 或者src什么的，返回一个类数组对象NamedNodeMap,可以通过属性key获取属性值
//附：获取内容的方法  innerHTML（内部）、outerHTML(所有)、innerText（文本）
//let divDom = document.querySelector('div#test');
//console.log(divDom.outerHTML, divDom.innerHTML, divDom.innerText);
//3.5 DOM亲属
//与CSS不同，这个child指的是该属性的子节点。
//3.5.1 parentNode属性 获取父节点
//3.5.2 childNodes属性 获取子节点列表，返回一个类数组对象NodeList
//3.5.3 firstChild属性 获取第一个子节点
//3.5.4 lastChild属性 获取最后一个子节点
//3.6 DOM样式
//通过style属性获取和设置元素节点的行内样式
const h1Dom = document.querySelector('h1');
console.log(h1Dom.classList);//DOMTokenList
console.log(h1Dom.style);//CSSStyleDeclaration
console.log(h1Dom.style.color);
let p = document.querySelector('p.introduce');
//3.7 DOM数据属性  网页设计的初衷是是数据和特定的HTML标签相关联
//HTML5引入了data-*属性，允许我们在HTML标签中嵌入自定义数据属性
//通过data-parts,data-words,data-category获取和设置data-*属性
//比如：<article data-parts="3" data-words="1314" data-category="python">··· </article>
//这些属性可以通过元素节点的dataset属性访问
const articleDom = document.querySelector('article');
console.log(articleDom.dataset);
//4.DOM操作