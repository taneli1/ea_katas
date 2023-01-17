const bestfriend = (str, c1, c2) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== c1) {
      continue
    }

    // c1 is last || next char not c2
    if (i + 1 > str.length || str[i + 1] !== c2) {
      return false
    }
  }

  return true
}

console.log(bestfriend("he headed to the store", "h", "e"))
console.log(bestfriend("i found an ounce with my hound", "o", "u"))
console.log(bestfriend("we found your dynamite", "d", "y"))
