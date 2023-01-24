const howUnlucky = (year) => {
  let c = 0
  for (let i = 0; i < 12; i++) {
    const date = new Date(year, i, 13)
    if (date.getDay() === 5) c++
  }
  return c
}

console.log(howUnlucky(2020))
console.log(howUnlucky(2026))
console.log(howUnlucky(2016))
