/**
 * 功能：对象的深拷贝
 * 描述：对对象以及子对象的所有可以枚举方法进行深度拷贝
 * 优点：完全复制一个新对象，包括其子对象
 * @param o 被拷贝的对象
 * @param c 新的对象容器
 * @return  新的对象快照
 */
function deepCopy(o,c){
    var c = c || {};
    for(var i in o){
        if(typeof o[i] === 'object'){
            c[i] = (o[i] instanceof Array) ? [] : {};
            deepCopy(o[i],c[i]);
        }else{
            c[i] = o[i];
        }
    }
    return c;
}
