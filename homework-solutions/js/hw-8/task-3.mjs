/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример: const arr = [5,2,7,3,8,1,6] //4
*/

function findMissingNumber(numbers) {
  const size = numbers.length + 1;
  let expectedSum = 0;
  for (let i = 1; i <= size; i++) {
    expectedSum += i;
  }
  const actualSum = numbers.reduce((accumulator, num) => accumulator + num, 0);
  return expectedSum - actualSum;
}

export { findMissingNumber };
