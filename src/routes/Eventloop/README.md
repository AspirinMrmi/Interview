## JS执行机制、事件循环

### JS是一门**单线程**语言

### JS事件循环

- 同步任务
- 异步任务

!(event)[./images/event.webp]

- 同步任务和异步任务分别进入不同的执行“场所”，同步的进入主线程，异步的进入Event Table并且注册回调函数；
- 当指定的事情完成时，Event Table会将这个函数移入Event Queue；
- 主线程内的任务执行完毕为空，会去Event Queue读取对应的函数，进入主线程执行；
- 上述的过程不断的重复，也就是Event Loop；

**如何判断主线程为空？**

js引擎存在monitoring process进程，会不断的查看主线程执行栈是否为空，一旦为空，就会去Event Queue中检查是否有等待被调用的回调函数。

### setTimeOut

setTimeout并不是之前所理解的：设定多少时间延迟执行函数，就会在规定的时间内去执行。
正确的理解是：在经过指定时间后，把要执行的任务加入到Event Queue中，因为单线程任务要一个个执行，如果主线程的任务执行的时间需要太久，那么只能等着，导致真正的延迟时间大于指定的时间。

**setTimeout(fn, 0)是立即执行吗？**

不是！
setTimeout(fn, 0)的含义是，指定某个任务在主线程最早可得的空闲时间执行，意味着不用再等多长时间了，只要主线程执行栈内的同步任务全部执行完成，栈为空就马上执行。
另外，即便主线程为空，0毫秒也是达不到的。根据HTML的标准，最低是4ms

### setInterval

相对应的，setInterval(fn, ms)也不是每经过ms执行一次fn，而是每过ms，会有fn进入Event Queue。

### Promise和procees.nextTick(callback)

除了广义的同步任务和异步任务，我们还对任务有着更精细的定义：
- 宏任务：包括整体代码、setTimeout、setInterval
- 微任务：Promise、process.nextTick

不同类型的任务会进入对应的Event Queue，比如setTimeout和setInterval会进入相同的Event Queue。

事件循环的顺序，决定js代码的执行顺序，进入宏任务后，开始第一次循环，接着执行所有的微任务，由此反复。

```
setTimeout(function() {
    console.log('setTimeout');
})

new Promise(function(resolve) {
    console.log('promise');
}).then(function() {
    console.log('then');
})

console.log('console');
```
以上代码分析可得：
1. 整体代码作为宏任务，进入主线程
2. 先遇到setTimeout，将其回调函数注册后分发到另外一个宏任务Event Queue
3. Promise，new Promise立即执行，then分发到微任务Event Queue
4. 遇到console，直接执行，
5. 第一轮中的宏任务执行结束，检查有没有微任务，发现了then，执行。至此，分别打印出：promise、console、then
6. 第一轮事件循环结束，开始第二轮循环，从宏任务开始，在宏任务Event Queue中发现了setTimeout中的回调函数，立即执行。最后打印出setTimeout

事件循环，宏任务，微任务的关系如图所示：

!(loop)[./images/loop.webp]

分析一段复杂的代码：

```
console.log('1');

setTimeout(function() {
    console.log('2');
    process.nextTick(function() {
        console.log('3');
    })
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })
})
process.nextTick(function() {
    console.log('6');
})
new Promise(function(resolve) {
    console.log('7');
    resolve();
}).then(function() {
    console.log('8')
})

setTimeout(function() {
    console.log('9');
    process.nextTick(function() {
        console.log('10');
    })
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    })
})
```
输出结果为：

1，7，6，8，2，4，3，5，9，11，10，12
