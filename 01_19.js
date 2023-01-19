const numInStr = (arr) => {
  return arr.filter((str) => {
    return [...str].filter((char) => char !== " " && !isNaN(char)).length !== 0
  })
}

console.log(numInStr(["1a", "a", "2b", "b"]))
console.log(numInStr(["abc", "abc10"]))
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]))
console.log(numInStr(["this is a test", "test1"]))
console.log(numInStr(["who needs numbers", "not me"]))
console.log(numInStr(["!!", "##", "@"]))
