const doubleLetters = (str) => {
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) return true
  }
  return false
}

console.log(doubleLetters("loop"))
console.log(doubleLetters("yummy"))
console.log(doubleLetters("orange"))
console.log(doubleLetters("munchkin"))
