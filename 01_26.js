const happyAlgorithm = (num, arr = []) => {
  if (arr.includes(num)) return `SAD ${arr.length - arr.indexOf(num)}`

  const total = [...num.toString()]
    .map((str) => parseInt(str) * parseInt(str))
    .reduce((a, b) => a + b)

  if (total === 1) return `HAPPY ${arr.length + 1}`

  return happyAlgorithm(total, [...arr, num])
}

console.log(happyAlgorithm(139))
console.log(happyAlgorithm(67))
console.log(happyAlgorithm(1))
console.log(happyAlgorithm(89))
