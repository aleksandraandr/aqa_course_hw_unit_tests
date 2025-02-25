/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

let resultUnique;
let resultNull;

let competitorPizzasLower = [];
for (let pizza of competitorPizzas) {
  competitorPizzasLower.push(pizza.toLowerCase());
}

let resultUniqueT1 = [];
for (let myPizza of myPizzasT1) {
  let isUnique = true;
  for (let competitorPizza of competitorPizzasLower) {
    if (myPizza.toLowerCase() === competitorPizza) {
      isUnique = false;
    }
  } 
  if (isUnique) {
    resultUniqueT1.push(myPizza);
  }
}

let resultUniqueT2 = [];
for (let myPizza of myPizzasT2) {
  let isUnique = true;
  for (let competitorPizza of competitorPizzasLower) {
    if (myPizza.toLowerCase() === competitorPizza) {
      isUnique = false;
    }
  }
  if (isUnique) {
    resultUniqueT2.push(myPizza);
  }
}

if (resultUniqueT1.length > 0) {
  resultUnique = resultUniqueT1;
  resultNull = null;
} else if (resultUniqueT2.length > 0) {
  resultUnique = resultUniqueT2;
  resultNull = null;
} else {
  resultUnique = null;
  resultNull = null;
}


export { resultNull, resultUnique };
