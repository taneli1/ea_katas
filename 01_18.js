const MAP = new Map([
  ["a", 1],
  ["e", 2],
  ["i", 3],
  ["o", 4],
  ["u", 5],
])

const replaceVowel = (string) => {
  let str = string.toLowerCase()

  for (const kv of MAP) {
    str = str.replace(new RegExp(kv[0], "g"), kv[1])
  }

  return str
}

console.log(replaceVowel("kaaaaaaaaarAchi"))
console.log(replaceVowel("chEmBur"))
console.log(replaceVowel("khandbari"))
console.log(replaceVowel("LexiCAl"))
console.log(replaceVowel("fuNctionS"))
console.log(replaceVowel("EASY"))
