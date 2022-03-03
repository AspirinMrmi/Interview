
const index = () => {
  const array = [1, 2, 3, 4];
  const sumWithReduce = array.reduce((acc, cur) => acc + cur, 0)
  console.log(sumWithReduce);
  const maxCallback = (acc, cur) => Math.max(acc.x, cur.x);
  const max = [{ x: 2 }, { x: 22 }, { x: 42 }].reduce(maxCallback, { x: 1 });
  console.log(max);
  return (
    <div>ssss</div>
  )
}

export default index
