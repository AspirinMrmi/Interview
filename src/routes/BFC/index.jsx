import React from 'react'
import './index.css'

const index = () => {
  // flatten
  const arr = [1,[2,3,[4,[5]]]];
  const flatten = (arr) => {
    return arr.reduce((prev, cur) => {
      console.log(prev)
      return prev.concat(Array.isArray(cur) ? flatten(cur) : cur)
    }, [])
  }
  flatten(arr)
  return (
    <div className='container'>
      <div className="box"></div>
      <div className="box"></div>
    </div>
  )
}

export default index
