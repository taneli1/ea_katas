const noStrangers = (str) => {
  const words = str.replace(RegExp(/\./, "g"), "").toLowerCase().split(" ")
  const map = new Map()
  const aq = new Set()
  const fr = new Set()

  for (const word of words) {
    const count = (map[word] ?? 0) + 1
    map[word] = count
    if (count >= 3 && !aq.has(word)) aq.add(word)
    if (count >= 5 && !fr.has(word)) fr.add(word)
  }

  const aqArr = [...aq].filter((it) => !fr.has(it))
  return [aqArr, [...fr]]
}

console.log(
  noStrangers("See Spot run. See Spot jump. Spot likes jumping. See Spot fly.")
)

console.log(noStrangers("See Spot See See see spot Spot See."))
