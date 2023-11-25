const reverseString = require('./reverseString');

function helloWorld() {
  return 'HelloWorld';
}

function isPalindrome(word) {
  return word.toLowerCase() === reverseString(word);
}

module.exports = isPalindrome;
