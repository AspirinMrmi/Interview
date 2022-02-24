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
  return (
    <div>index</div>
  )
}

export default index
