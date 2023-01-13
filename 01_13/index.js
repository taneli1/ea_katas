const consecutiveSum = (num) => {
  const lastPossibleNum = Math.round(num / 2) - 1
  const startingNumbers = numArr(lastPossibleNum)

  for (const number of startingNumbers) {
    if (canConsecutiveSum(num, number)) {
      return true
    }
  }
  return false
}

// Create num array of len, where [0] = 1
const numArr = (len) => {
  return Array.from({ length: len }, (_, i) => i + 1)
}

// Check if target can be consecutively summed starting from param number from
const canConsecutiveSum = (target, from) => {
  let sum = 0
  for (let i = from; sum < target; i++) {
    sum += i
    if (sum === target) {
      return true
    }
  }
  return false
}

console.log(consecutiveSum(65))
console.log(consecutiveSum(9))
console.log(consecutiveSum(10))
console.log(consecutiveSum(64))
