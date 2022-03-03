## Array.prototype.reduce()

`reduce()` 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。

```javascript
  const array = [1, 2, 3, 4];
  const sumWithReduce = array.reduce((acc, cur) => acc + cur, 0)
  console.log(sumWithReduce); // 10
```
reducer函数接受4个参数：
1. Accumulotor(acc) -- 累计器
2. Current Value(cur) -- 当前值
3. Current Index(idx) -- 当前索引
4. Source Array(src) -- 源数组

reducer函数的返回值分配给累计器，该返回值在数组的每个迭代中被记住，并最后成为最终的单个结果值。
### 语法

```javascript
arr.reduce(callback(accumulator, currentValue[, currentIndex[, array]])[, initialValue])
```
#### 参数

**callback**

执行数组中的每个值（如果没有提供initialValue则第一个值除外）的函数，包含四个参数：

`accumulator`

累计器累计回调的返回值，它是上一次调用回调时返回的累积值，或==initialValue==。

`currentValue`

数组中正在处理的元素

`currentIndex`

数组中正在处理的当前元素的索引。如果提供了initialValue，则起始索引为0，否则索引从1开始。

`array`

调用reduce的数组

`initialValue`

作为第一次调用callback函数时的第一个参数的值，如果没有提供initialValue，则将使用数组中的第一个元素。在没有初始值的空数组上调用reduce将会报错。

### 返回值

函数累积处理的结果
