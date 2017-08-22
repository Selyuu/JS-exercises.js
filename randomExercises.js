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
    this.gold = 10
    this.keys = 1
  }
  describe() {
    return `${this.name} has ${this.health} HP, ${this.strength} as strength and ${this.xp} XP points. This character also has ${this.gold} gold piece(s) and ${this.keys} key(s) in their inventory.`
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
        this.gold += target.gold
        this.key += target.keys
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

// Bank Account Object 
class Account {
  constructor(name) {
    this.name = name
    this.amount = 0
  }
  credit(add) {
    return this.amount += add
  }
  describe() {
    return `Owner: ${this.name}, balance: ${this.amount}`
  }
}

const sean = new Account('Sean')
const brad = new Account('Brad')
const george = new Account('George')

let accountArray = [sean, brad, george]

accountArray.forEach(account => account.amount += 1000)

// Reduce
const numbers = [1, 5, 10, 15];

const totalAmount = numbers.reduce((acc, total) => acc + total, 0) / numbers.length

// Functional Programming
const movieList = [
  {
    title: "Batman",
    year: 1989,
    director: "Tim Burton",
    imdbRating: 7.6
  },
  {
    title: "Batman Returns",
    year: 1992,
    director: "Tim Burton",
    imdbRating: 7.0
  },
  {
    title: "Batman Forever",
    year: 1995,
    director: "Joel Schumacher",
    imdbRating: 5.4
  },
  {
    title: "Batman & Robin",
    year: 1997,
    director: "Joel Schumacher",
    imdbRating: 3.7
  },
  {
    title: "Batman Begins",
    year: 2005,
    director: "Christopher Nolan",
    imdbRating: 8.3
  },
  {
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    imdbRating: 9.0
  },
  {
    title: "The Dark Knight Rises",
    year: 2012,
    director: "Christopher Nolan",
    imdbRating: 8.5
  }
]

const moviesBefore2000 = movieList.filter(movie => movie.year < 2000).map(movie => movie.title)

console.log(moviesBefore2000)

// More
const governmentForms = [
  {
    name: "Plutocracy",
    definition: "Rule by the wealthy"
  },
  {
    name: "Oligarchy",
    definition: "Rule by a small number of people"
  },
  {
    name: "Kleptocracy",
    definition: "Rule by the thieves"
  },
  {
    name: "Theocracy",
    definition: "Rule by a religious elite"
  },
  {
    name: "Democracy",
    definition: "Rule by the people"
  },
  {
    name: "Autocracy",
    definition: "Rule by a single person"
  }
]

const formsEndingWithCy = governmentForms.map(name => name.name)

console.log(formsEndingWithCy);

// Sum of Array
const arrays = [[1, 4], [11], [3, 5, 7]];

const arraysSum = arrays.reduce()

console.log(arraysSum)

// Count Positive & Negative 
const countPosSumNeg = nums => {
  if ((nums === false) || (nums.length === 0)) {
    return []
  }
  result = []
  let posNum = nums.filter(num => num > 0).length
  let negNum = nums.filter(num => num < 0).reduce((acc, val) => acc + val, 0)
  result.push(posNum, negNum)
  return result
}

// Last item in an array
const lastItemArray = arr => arr[arr.length - 1]

// Number even or odd
const isEvenOrOdd = num => {
  if (num % 2 === 0) {
    return `even`
  }
  return `odd`
}

// Count words
const countWords = str => str.split(' ').length

// Name Shuffle
const nameShuffle = str => {
  let result = []
  let newStr = str.split(' ')
  result.push(newStr[1], newStr[0])
  return result.join(' ')
}

// Alphabet soup
const alphabetSoup = str => str.split('').sort().join('')

// Find the largest num in an array
const findLargestNum = arr => arr.reduce((acc, number) => number > acc ? number : acc, 0)

// find the smallest num in an array
const findSmallestNum = arr => arr.reduce((acc, number) => number <= acc ? number : acc, arr[0])

// Eliminate odd numbers
const noOdds = arr => arr.filter(num => num % 2 === 0)

// Add up
const addUp = num => {
  let result = createArrNum(num)
  return result.reduce((acc, val) => acc + val ,0)
}

const createArrNum = num => {
  let result = []
  let count = 1

  while (count < num) {
    result.push(count)
    count++
  }
  result.push(num)
  return result
}

// Four letter words
const isFourLetters = arr => arr.filter(word => word.length === 4)

// Check ending string
const checkEnding = (str1, str2) => str1.slice((str1.length - str2.length)) === str2 ? true : false

// Absolute value
const getAbsSum = arr => arr.reduce((acc, val) => Math.abs(acc) + Math.abs(val) ,0)

// Date checker for Christmas Eve
const timeForMilkAndCookies = date => date.getMonth() === 11 && date.getDate() === 24 ? true : false

// Filter strings
const filterArray = arr => arr.filter(item => typeof(item) !== 'string')

// Double letter strings
const doubleChar = str => str.split('').map(letter => letter + letter).join('')

// Minmax number
const minMax = arr => {
  let min = arr.reduce((acc, val) => acc <= val ? acc : val)
  let max = arr.reduce((acc, val) => acc >= val? acc : val)
  return [min, max]
}

// Silent vowels 
const silenceTrump = str => str.split('').filter(isVowel).join('')

const isVowel = char => ['a', 'e', 'i', 'o', 'u'].indexOf(char.toLowerCase()) === -1

// Count vowels
const countVowels = str => {
  let count = 0
  str.split('').forEach(letter => isVowel(letter) ? count++ : count) 
  return count
}

// Sort numbers
const sortNumsAscending = arr => arr === null || arr === [] ? [] : arr.sort((a, b) => a - b)

// XO check
const XO = str => {
  let xCount = 0
  let oCount = 0
  str.toLowerCase().indexOf('x') === -1 && str.toLowerCase().indexOf('o') === -1 ? 
  true : str.toLowerCase().split('').forEach(letter => letter !== 'x' && letter !== 'o' ? '' : letter === 'x' ? xCount++ : oCount++)
  return xCount === oCount ? true : false
}

// Min Max Length & Avg
const minMaxLengthAverage = arr => {
  let min = arr.reduce((acc, num) => acc < num ? acc : num)
  let max = arr.reduce((acc, num) => acc > num ? acc : num)
  let average = arr.reduce((acc, num) => acc + num, 0) / arr.length
  return [min, max, arr.length, average]
}

const minMaxLengthAverage = arr => [
  arr.reduce((acc, num) => acc < num ? acc : num), 
  arr.reduce((acc, num) => acc > num ? acc : num),
  arr.length,
  arr.reduce((acc, num) => acc + num, 0) / arr.length
]

// Capitalise letters
const capMe = arr => arr.map(word => {
  let item = word.toLowerCase()
  return item[0].toUpperCase() + item.slice(1)
})

// Head body tail
const verifySubstrs = (mainStr, head, body, tail) => {
  
}

// Mutations
const mutation = arr => {
  let wordCheck = arr[0].toLowerCase()
  let letterCheck = arr[1].toLowerCase().split('')
  let result = []
  letterCheck.forEach(letter => result.push(wordCheck.indexOf(letter)))
  let wordFinal = result.filter(number => number < 0)
  return wordFinal.length > 0 ? false : true
}

function mutation(arr) {
  var wordCheck = arr[0].toLowerCase();
  var letterCheck = arr[1].toLowerCase().split('');
  var result = [];

  for (var i = 0; i < letterCheck.length; i++) {
    result.push(wordCheck.indexOf(letterCheck[i]));
  }

  var wordFinal = result.filter(function (number) {
    return number < 0;
  });

  if (wordFinal.length > 0) {
    return false;
  }
  return true;
}


