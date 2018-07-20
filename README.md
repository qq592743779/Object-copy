# Object-copy
关于对象的深浅复制

1、浅拷贝  //Object.assign() //浅拷贝，类似{...obj1,...obj2} 都是浅拷贝
拷贝就是把父对象的属性，全部拷贝给子对象。
接下来，我们看一个拷贝的例子：
function extendCopy(b) {
  var a = {};
  for (var i in b) {
    a[i] = b[i];
  }
  return a;
}
调用的时候，这样写：
// 调用
var copyA = {
  titleA: '标题A'
};
var copyB = extendCopy(copyA);
console.log(copyB.titleA); // 标题A
但是，这样的拷贝有一个问题。那就是，如果父对象的属性等于数组或另一个对象，那么实际上，子对象获得的只是一个内存地址，而不是真正拷贝，因此存在父对象被篡改的可能。
接下来，我们看一个篡改的示例：
function extendCopy(b) {
  var a = {};
  for (var i in b) {
    a[i] = b[i];
  }
  return a;
}
// 调用
var copyA = {
  arrayA: [1, 2, 3, 4]
};
var copyB = extendCopy(copyA);
copyB.arrayA.push(5);
console.log(copyA.arrayA); // [1, 2, 3, 4, 5]
结果是增加了一个5。
所以，extendCopy() 只是拷贝了基本类型的数据，我们把这种拷贝叫做“浅拷贝”。


//数组深拷贝   [].concat(arr1),   var =[...arr1],   arr1.slice(0)



2、深拷贝
function deepCopy(p, c) {
  var c = c || {};
  for (var i in p) {
    if (typeof p[i] === 'object') {
      c[i] = (p[i].constructor === Array) ? [] : {};
      deepCopy(p[i], c[i]);
    } else {
      c[i] = p[i];
    }
  }
  return c;
}
// 调用
var copyA = {
    arrayA: [1, 2, 3, 4]
};
var copyB = deepCopy(copyA);
copyB.arrayA.push(5);
console.log(copyA.arrayA); // [1, 2, 3, 4]