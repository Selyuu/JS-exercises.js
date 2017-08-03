// Pig Latin Javascript

/* Pig Latin is a game of alterations played on the English language game. To create the Pig Latin form of an English word the initial consonant sound is transposed to the end of the word and an ay is affixed (Ex.: "banana" would yield anana-bay). Read Wikipedia for more information on rules. */

var input = 'lower'

function pigLatin(str) {
  var endOfWord = str.slice(1, str.length)
  var startLetter = str.substr(0, 1)
  return endOfWord + '-' + startLetter + 'ay'
}

pigLatin(input)

// Count Vowels

function countVowel(str) {
  var check = str.toLowerCase().split('')
  var vowels = ['a', 'e', 'i', 'o', 'u']
  var vowelCount = 0

  check.filter(function(letter) {
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
      vowelCount++
    }
  })
  return vowelCount
}

// Two Different Arrays

function diffArray(arr1, arr2) {
  var result = []
  var newArr = arr1.concat(arr2)
  newArr.filter(function(word, i) {
    if ((arr1.indexOf(word) === -1) || (arr2.indexOf(word) === -1)) {
      result.push(word)
    }
  })
  return result
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))

// Roman Numeral Converter

var romanMatrix = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
]

function romanConvert(num) {
  if (num === 0) {
    return ''
  }
  for (var i = 0; i < romanMatrix.length; i++) {
    if (num >= romanMatrix[i][0]) {
      return romanMatrix[i][1] + romanConvert(num - romanMatrix[i][0])
    }
  }
}

// Shortest Word

function findShort(sentence) {
 var result = 0
 var wordCheck = sentence.split('')
 for (var i = 0; i < wordCheck.length; i++) {
  if ()
 }
}

// Following day

function followingDay(input) {
  console.log('Next day is ')
  switch (input) {
    case 'monday':
      console.log('tuesday')
      break
    case 'tuesday':
      console.log('wednesday')
      break
    case 'wednesday':
      console.log('thursday')
      break
    case 'thursday':
      console.log('friday')
      break
    case 'friday':
      console.log('saturday')
      break
    case 'saturday':
      console.log('sunday')
      break
    case 'sunday':
      console.log('monday')
      break      
  }
}

// Number comparison

function numberCompare(firstNum, secondNum) {
  if (firstNum > secondNum) {
    console.log(`${firstNum} is more than ${secondNum}`)
  } else if (firstNum < secondNum) {
    console.log(`${secondNum} is more than ${firstNum}`)
  } else {
    console.log('Both numbers are equal')
  }
}

// Object Play

const gameCharacter = {
  name: 'Selyuu',
  health: 150,
  strength: 45,
  isIll: false,
  experience: 370,
  battleCry() {
    return 'RAWR'
  },
  describe() {
    return `${this.name} has ${this.health} HP and ${this.strength} STR. This character's battle cry is ${this.battleCry()}. This character currently has ${this.experience} experience points.`
  }
}  

// Dog Object

const dogObj = {
  name: 'Pagchun',
  species: 'pug',
  size: 'small',
  bark() {
    return 'woof!'
  }
}

console.log(`${dog.name} is a ${dog.species} dog that is ${dog.size} in size`)
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`)

// Circle Object

const r = Number(prompt("Enter the circle radius:"))

const circle = {
  circumference() {
    let diameter = r * 2
    return Math.PI * diameter
  },
  area() {
    return Math.PI * (r ** 2)
  }
}

console.log(`Its circumference is ${circle.circumference()}`)
console.log(`Its area is ${circle.area()}`)

// Bank Account Object

const account = {
  name: 'Alex',
  balance: 0,
  credit(num) {
    return balance += num
  },
  describe() {
    return `The owner of this account is ${this.name} who has a current balance of ${this.balance}.`
  }
}

// Array iteration
const movies = ['The wolf of wall street', 'Gravity', 'Cars 2']

movies.forEach(movie => {
  console.log(movie)
})

for (const movie of movies) {
  console.log(movie)
}

// Musketeers Array
const musketeers = ['Athos', 'Porthos', 'Aramis']

for (let i = 0; i < musketeers.length; i++) {
  console.log(musketeers[i])
}

musketeers.push('D\'Artagnan')

musketeers.forEach(musketeer => {
  console.log(musketeer)
})

musketeers.splice(2, 1)

for (const musketeer of musketeers) {
  console.log(musketeer)
}

// Sum of values
const values = [3, 11, 7, 2, 9, 10]
let result = 0

values.forEach(num => {
  result += num
})

// Array maximum
const values = [3, 11, 7, 2, 9, 10]
let result = 0
for (const num of values) {
  if (num > result) {
    result = num
  }
}

// List of words
function wordSentence() {
  let result = []
  let word = ''
  while (word !== 'stop') {
    word = prompt('Give me a word')
    if (word === 'stop') {
      return result
    } else {
      result.push(word)
    }
  }
}

// Word Function
const wordProperties = word => {`${word.length} is the length, ${word.toUpperCase()} is the uppercase and ${word.toLowerCase()} is the lowercase.`}

// Vowel Function
const vowelCount = word => {
  let count = 0
  const wordArray = word.split('')
  wordArray.forEach(letter => {
    if ((letter === 'a') || (letter === 'e') || (letter === 'i') || (letter === 'o') || (letter === 'u')) {
      count++
    }
  })
  return count
}

// Reverse a string (recursive)
const stringReverse = str => {
  if (str === '') {
    return ''
  } else {
    return stringReverse(str.substr(1)) + str.charAt(0)
  }
}

// Palindrome
const palindromeChecker = str => {
  let strReversed = stringReverse(str.toLowerCase())
  if (str.toLowerCase() === strReversed) {
    return `${str} is a palindrome`
  } else {
    return `${str} is not a palindrome`
  }
}

// Javascript Class
class Character {
  constructor(name, health, strength) {
    this.name = name
    this.health = health
    this.strength = strength
    this.xp = 0
  }
  describe() {
    return `${this.name} has ${this.health} HP, ${this.strength} as strength and ${this.xp} XP points`
  }
  attack(target) {
    if (this.health > 0) {
      const damage = this.strength
      console.log(
        `${this.name} attacks ${target.name} and causes ${damage} damage points`
      )
      target.health -= damage
      if (target.health > 0) {
        console.log(`${target.name} has ${target.health} HP left`)
      } else {
        target.health = 0
        const bonusXP = 10
        console.log(
          `${this.name} eliminated ${target.name} and wins ${bonusXP} XP`
        )
        this.xp += bonusXP
      }
    } else {
      console.log(`${this.name} can't attack as this target has already been eliminated`)
    }
  }
}

// Dog Class
class Dog {
  constructor(name, species, size) {
    this.name = name
    this.species = species
    this.size = size
  }
  bark() {
    if (this.size > 60) {
      return `Grrr! Grrr!`
    } else {
      return `Woof! Woof!`
    }
  }
}

const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);




