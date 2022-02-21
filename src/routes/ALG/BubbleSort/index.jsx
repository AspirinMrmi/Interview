import React, { useState } from 'react'

const BubbleSort = () => {
  const [array, setArray] = useState([8, 3, 4, 1, 2])
  const bubbleSortFunc = (arr) => {
    if (isArray(arr)) {
      for (let i = 0; i < arr.length - 1; i++) {
        let done = true
        for (let j = 0; j < arr.length - 1 - i; j++) {
          if (arr[j] > arr[j + 1]) {
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
            done = false
          }
        }
        if (done) {
          break
        }
      }
      setArray([...arr])
    }
  }
  // isArray
  const isArray = (arr) => {
    return Array.isArray(arr)
  }
  console.log(array)
  return (
    <>
      <h1>Bubble Sort</h1>
      <button onClick={() => bubbleSortFunc(array)}>BubbleSort</button>
      <div>{JSON.stringify(array)}</div>
    </>

  )
}

export default BubbleSort
