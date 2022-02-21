import React from 'react'

const Index = () => {
  const isArray = (arr) => {
    return Object.prototype.toString.call(arr) === '[object Array]' && arr.length > 0
  }
  console.log(isArray([1, 2, 3]))
  return (
    <h3>isArray</h3>
  )
}

export default Index
