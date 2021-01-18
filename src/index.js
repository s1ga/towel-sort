
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const array = []
  if (matrix) {
    matrix.forEach((arr, index) => {
      if (index % 2 === 0) {
        arr.forEach(i => array.push(i))
      } else {
        arr.reverse().forEach(i => array.push(i))
      }
    })
  }

  return array
}
