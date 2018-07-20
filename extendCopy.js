/**
 * 功能：对象的浅拷贝
 * 描述：对对象的所有可以枚举的属性进行拷贝
 * 优点：简单快速
 * 缺点：若存在子对象，只会拷贝子对象的引用，修改子对象会影响到原对象
 * @param o 被拷贝的对象
 * @return  新的对象副本
 */

function extendCopy1(o){   // 方法一
    return Object.assign(obj);
}
function extendCopy2(o){   //  方法二
    var tempObj = {};
    for(var item in o){
        tempObj[item] = o[item]
    }
    return tempObj;
}