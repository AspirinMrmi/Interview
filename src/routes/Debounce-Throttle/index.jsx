import React from 'react'

const index = () => {
  // debounce
  const debounce = (func, delay) => {
    let timer = null;
    return function(...args) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        func.apply(this.args)
      }, delay)
    }
  }

  // throttle 定时器实现
  const throttle = (func, delay) => {
    let timer = null;
    return function(...args) {
      if (timer) {
        return;
      }
      timer = setTimeout(() =>  {
        func.apply(this.args)
        timer = null;
      })
    }
  }
  return (
    <div>index</div>
  )
}

export default index
