import React, { useState } from 'react'

const Index = () => {
  const [array, setArray] = useState([85, 24, 63, 45, 17, 31, 96, 50])
  const quickSort = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr.splice(pivotIndex, 1)[0];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
    return quickSort(left).concat([pivot], quickSort(right))
  }
  const handleClick = (arr) => {
    setArray(quickSort(arr))
  }
  return (
    <div>
      <h1>Quick Sort</h1>
      <button onClick={() => handleClick(array)}>click to quickSort</button>
      <div>{JSON.stringify(array)}</div>
    </div>
  )
}

export default Index
