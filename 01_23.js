const countBoomerangs = (arr) => {
  validate(arr)

  return arr.filter((num, i) => {
    if (num === arr[i + 1] || num !== arr[i + 2]) {
      return false
    }

    return true
  }).length
}

const validate = (arr) => {
  if (arr.length < 3) throw new Error("Arr too short.")

  arr.forEach((it) => {
    if (isNaN(it)) throw new Error("Not a number")
  })
}

console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]))
console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9]))
console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]))
console.log(countBoomerangs([1, 7, 1, 7, 1, 7, 1]))
// console.log(countBoomerangs([]))
// console.log(countBoomerangs([1, 7]))
// console.log(countBoomerangs([1, 7, 1, 3, "one", 7, 1]))
