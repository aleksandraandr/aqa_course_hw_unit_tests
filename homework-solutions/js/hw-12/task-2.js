// 1. Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
// Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
// После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
// Преобразуйте респонс из JSON в объект
// Сравните данные, полученные из респонса с теми, что вы передавали в запрос. Если данные не равны в каком-то ключе - кинуть ошибку
// Функция должна возвращать полученный объект из респонса
// Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена

async function createTodo(todoData) {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(todoData)
      });
  
      if (response.status !== 201) {
        throw new Error(`Error: ${response.status} status`);
      }
  
      const responseData = await response.json();
  
      for (const key in todoData) {
        if (todoData[key] !== responseData[key]) {
          throw new Error(`Data does not match by key: ${key}`);
        }
      }
  
      console.log("ToDo is created successfully:", responseData);
      return responseData;
    } catch (error) {
      console.error("An error occurred:", error.message);
    } finally {
      console.log("Function completed");
    }
  }
  
  // E.g.
  createTodo({
        "userId": 2,
        "id": 40,
        "title": "totam atque quo nesciunt",
        "completed": true
      },
);
  