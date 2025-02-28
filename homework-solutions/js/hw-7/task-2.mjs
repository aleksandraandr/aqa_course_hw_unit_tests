/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !== 'string') return false;
  if (word === '') return true;
  const lowerCaseWord = word.toLowerCase();
  const reversedWord = lowerCaseWord.split('').reverse().join('');
  return lowerCaseWord === reversedWord;
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (typeof sentence !== 'string') return [];
  if (sentence.trim() === '') return [];
  const words = sentence.split(' ');
  let maxLength = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  const longestWords = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length === maxLength) {
      longestWords.push(words[i]);
    }
  }
  return longestWords;
}

export { isPalindrom, findLongestWords };
