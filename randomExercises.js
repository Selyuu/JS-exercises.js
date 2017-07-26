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
  for (var i = 0; i < )
}

