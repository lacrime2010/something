let parentId = '18'

const lotterys = ['OOXX', 'OXOX', 'OXXO', 'XOOX', 'XOXO', 'XXOO']
let lens = ''
let nums = []
let currentArray = [[], [], [], [], [], []]
let ans = ''

switch (parentId) {
  case '7':
  case '25':
    lens = '99'

    break
  /*
  case '18':
  case '27':
    lens = '999'
    
    break
  case '23':
  case '29':
    lens = '9999'
    
    break
  */
}

// [['0','1'], ['0','2']............]
let numbers = Array.from(new Array((parseInt(lens) + 1)).keys())

numbers = Array.from(numbers, x => (x < 10) ? `0${x}` : String(x))

numbers.forEach((number, numberIndex) => {
  nums.push(Array.from(number))
})

// merage
nums.forEach((num) => {
  lotterys.forEach((lottery, lotteryIndex) => {
    let keys = []

    let characters = Array.from(lottery, (character, key) => {
      if (character === 'O') keys.push(key)

      return character
    })

    characters[keys[0]] = num[0]
    characters[keys[1]] = num[1]

    if (keys[0] === 0 && keys[1] === 1) currentArray[0].push(`${characters[0]}${characters[1]}${characters[2]}${characters[3]}`)
    if (keys[0] === 0 && keys[1] === 2) currentArray[1].push(`${characters[0]}${characters[1]}${characters[2]}${characters[3]}`)
    if (keys[0] === 0 && keys[1] === 3) currentArray[2].push(`${characters[0]}${characters[1]}${characters[2]}${characters[3]}`)
    if (keys[0] === 1 && keys[1] === 2) currentArray[3].push(`${characters[0]}${characters[1]}${characters[2]}${characters[3]}`)
    if (keys[0] === 1 && keys[1] === 3) currentArray[4].push(`${characters[0]}${characters[1]}${characters[2]}${characters[3]}`)
    if (keys[0] === 2 && keys[1] === 3) currentArray[5].push(`${characters[0]}${characters[1]}${characters[2]}${characters[3]}`)
  })
})

ans = currentArray[0].concat(currentArray[1], currentArray[2], currentArray[3], currentArray[4], currentArray[5])

console.log(ans)
