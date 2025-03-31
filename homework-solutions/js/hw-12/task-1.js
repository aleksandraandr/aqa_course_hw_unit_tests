// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, 
// которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds

function delayTwoSeconds(callback) {
    setTimeout(callback, 2000);
}

// 2. Создайте переменную, в которую присвоите новый промис. 
// Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
// его резолва в консоль

const promiseResolved = new Promise((resolve) => {
    resolve(1);
});
promiseResolved.then((result) => {
    console.log('Resolved:', result);
});

// 3. Создайте переменную, в которую присвоите новый промис. 
// Промис должен реджектаться с "Promise failed". 
// Обработайте промис методом .catch и выведите результат его реджекта в консоль

const promiseReject = new Promise((reject) => {
    reject('Promise failed');
});
promiseReject.catch((error) => {
    console.log('Rejected:', error);
});

// 4. Создайте функцию promiseNumber, принимающую на вход число. 
// Функция должна возвращать промис, резолвающий это число

function promiseNumber(num) {
    return new Promise((resolve) => {
        resolve(num);
    });
}

// 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), 
// обработайте его результаты и последовательно выведите в консоль результаты 
// работы каждого промиса через .then

Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
.then((results) => {
    results.forEach((result) => console.log('Result:', result));
});

// 6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), 
// обработайте его результаты и последовательно выведите в консоль статус и 
// результат каждого промиса через .then

Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
.then((results) => {
    results.forEach((result) => {
        console.log('Status:', result.status, 'Value:', result.value);
    });
});

// 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch

//Promise.all с async/await
async function runAll() {
    try {
        const results = await Promise.all([
            promiseNumber(1),
            promiseNumber(2),
            promiseNumber(3)
        ]);
        results.forEach((result) => console.log('Async result:', result));
    } catch (error) {
        console.error('Error in Promise.all:', error);
    }
}

runAll();

// Promise.allSettled с async/await
async function runAllSettled() {
    try {
        const results = await Promise.allSettled([
            promiseNumber(1),
            promiseNumber(2),
            Promise.reject('Error'),
            promiseNumber(3)
        ]);
        results.forEach((result) => {
            if (result.status === 'fulfilled') {
                console.log('Async status:', result.status, 'Value:', result.value);
            } else {
                console.error('Async status:', result.status, 'Reason:', result.reason); 
            }
        });
    } catch (error) {
        console.error('Error in Promise.allSettled:', error.message);
    } finally {
        console.log('Completed');
    }
}

runAllSettled();