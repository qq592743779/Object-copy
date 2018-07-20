# Object-copy

#关于对象的深浅复制</br>

##1、浅拷贝  //Object.assign() //浅拷贝，类似{...obj1,...obj2} 都是浅拷贝</br>
拷贝就是把父对象的属性，全部拷贝给子对象。</br>
接下来，我们看一个拷贝的例子：</br>
function extendCopy(b) {</br>
  var a = {};</br>
  for (var i in b) {</br>
    a[i] = b[i];</br>
  }</br>
  return a;</br>
}</br>
调用的时候，这样写：</br>
// 调用</br>
var copyA = {</br>
  titleA: '标题A'</br>
};</br>
var copyB = extendCopy(copyA);</br>
console.log(copyB.titleA); // 标题A</br>
但是，这样的拷贝有一个问题。那就是，如果父对象的属性等于数组或另一个对象，那么实际上，子对象获得的只是一个内存地址，而不是真正拷贝，因此存在父对象被篡改的可能。
接下来，我们看一个篡改的示例：</br>
function extendCopy(b) {</br>
  var a = {};</br>
  for (var i in b) {</br>
    a[i] = b[i];</br>
  }</br>
  return a;</br>
}</br>
// 调用</br>
var copyA = {</br>
  arrayA: [1, 2, 3, 4]</br>
};</br>
var copyB = extendCopy(copyA);</br>
copyB.arrayA.push(5);</br>
console.log(copyA.arrayA); // [1, 2, 3, 4, 5]</br>
结果是增加了一个5。</br>
所以，extendCopy() 只是拷贝了基本类型的数据，我们把这种拷贝叫做“浅拷贝”。</br>
//数组深拷贝   [].concat(arr1),   var =[...arr1],   arr1.slice(0)</br>
</br>
##2、深拷贝</br>
function deepCopy(p, c) {</br>
  var c = c || {};</br>
  for (var i in p) {</br>
    if (typeof p[i] === 'object') {</br>
      c[i] = (p[i].constructor === Array) ? [] : {};</br>
      deepCopy(p[i], c[i]);</br>
    } else {</br>
      c[i] = p[i];</br>
    }</br>
  }</br>
  return c;</br>
}</br>
// 调用</br>
var copyA = {</br>
    arrayA: [1, 2, 3, 4]</br>
};</br>
var copyB = deepCopy(copyA);</br>
copyB.arrayA.push(5);</br>
console.log(copyA.arrayA); // [1, 2, 3, 4]</br>