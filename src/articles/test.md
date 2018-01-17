#JS 函数的调用 （apply，call，bind的区别辨析）

##apply =》 `Function.prototype.apply(thisArgs,[])`
`apply()`方法调用一个函数，具有一个指定的this值，以及作为参数传入的数组（或者类似数组的对象），两个参数
`fun.apply(thisArg, [argsArray])`

##call
`call()`方法的作用与 `apply()`类似，区别在于 `call()` 接受的是做个参数的列表，即：
`fun.call(thisArg, arg1,arg2...)`
使用 `call()` 可以用来调用父构造函数，实现继承的效果

##bind
`bind()`方法创建一个新的函数，当被调用时，将其 this 关键字设置为提供的值
