const REG_UPPER =  /[A-Z]/g
const REG_LOWER = /[a-z]/g
const REG_NUM = /\d+/g

const reorder = (string) => {
  const upper = string.match(REG_UPPER).join("")
  const lower = string.match(REG_LOWER).join("")
  const num = string.match(REG_NUM).join("")
  return upper + lower + num
}

const original = "teAs1tBC44s2ww"
const result = reorder(original)
console.log(original, result)