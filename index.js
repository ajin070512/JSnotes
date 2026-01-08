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
console.log(h1Dom.classList);//DOMTokenList 获取所有的类
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

//4.1 DOM样式修改（以优课达的点击案例）
//目标：点击按钮，呈现选中或未选中状态
//方法：在点击时渲染，再次点击时解除渲染，需使用到event方法，if选择等

//问题阐述
//1.如何创建节点
//2.如何设置节点属性
//3.如何将节点添加到目标节点内部
//4.如何清空该节点（呈现解除渲染状态）

//1.针对问题一：创建节点,别忘了变量名
const div = document.createElement('div');//创建一个div节点
//如果想继续在这个标签内部添加纯文本内容，可以继续使用创建文本方法
let txt = document.createTextNode('hello world!');
div.appendChild(txt);
document.body.appendChild(div);//document必须要写，此处的body表示body标签
//2.添加新节点，在上文已有介绍
//2.1 appendChild(newNode)  在所有儿子节点之后添加新的儿子节点
//2.2 inserBefore(newNode,referenceNode) 在参考节点之前插入新的节点
//2.3 可以把添加新的节点做成函数，再根据后续需要，补充添加位置的代码
function createDisease(txt) {
  const dom = document.createElement('li');
  const domTxt = document.createTextNode(txt);
  dom.appendChild(domTxt);
  return dom;
}

const root = document.querySelector('ul.root');
const sars = document.querySelector('li.sars');

// 创建 H1N1
const H1N1 = createDisease('H1N1');
root.appendChild(H1N1);

// 创建 新型冠状病毒
const nCoV = createDisease('新型冠状病毒');
root.insertBefore(nCoV, sars);
//3. 设置样式属性
p.setAttribute('style','width:100%;height:100%;');//和HTML相同
//或者单独替换某个样式属性
p.style.color = 'red';
//除了style属性之外，id,src,href等属性都可以用setAttribute方法设置
//4. 清空节点内容
//4.1 直接innerHTML清空
root.innerHTML = '';
//4.2 也可以利用它添加内容
root.innerHTML = 'hello';
