const VOWELS = RegExp(/[aeiou]/)

const pigLatinSentence = (str) => {
  return str
    .split(" ")
    .map((it) => {
      if (VOWELS.test(it[0])) return it + "way"
      const i = it.search(VOWELS)
      return it.slice(i) + it.slice(0, i) + "ay"
    })
    .join(" ")
}

console.log(pigLatinSentence("this is pig latin"))
console.log(pigLatinSentence("wall street journal"))
console.log(pigLatinSentence("raise the bridge"))
console.log(pigLatinSentence("all pigs oink"))
