import React from 'react'

const index = () => {
  const deepClone = (target) => {
    if (typeof target === 'object') {
      const cloneTarget = Array.isArray(target) ? [] : {};
      for (const key in target) {
        cloneTarget[key] = deepClone(target[key]);
      }
    } else {
      return target;
    }
  }
  const shallowClone = (target) => {
    if (typeof target === 'object') {
      const cloneTarget = Array.isArray(target) ? [] : {};
      for (const key in target) {
        cloneTarget[key] = target[key];
      }
    } else {
      return target;
    }
  }
  const obj = {
    a: "hello",
    b:{ a: "world", b: 21 },
    c:["Bob", "Tom", "Jenny"],
    d:function() {
        alert("hello world");
    }
  }
  const cloneObj = shallowClone(obj);
//   console.log(cloneObj.b);
// console.log(cloneObj.c);
// console.log(cloneObj.d);
// cloneObj.b.a = "changed";
// cloneObj.c = [1, 2, 3];
// cloneObj.d = function() {
//     alert("changed");
// };
// console.log(obj.b);
// console.log(obj.c);
// console.log(obj.d);
console.log(cloneObj)
  return (
    <div>index</div>
  )
}

export default index
