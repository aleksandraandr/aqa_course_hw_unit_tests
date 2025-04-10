// 1. Создайте интерфейс IEmployee {name: string, salary: number, isManager: boolean } и объект QA: IEmployee

interface IEmployee {
    name: string;
    salary: number;
    isManager: boolean;
}

const QA: IEmployee = {
    name: 'Alex',
    salary: 5000,
    isManager: false,
};

// 2. Создайте тип EmployeeKeys, который будет юнионом названий ключей IEmployee (использовать keyof)

type EmployeeKeys = keyof IEmployee;

// 3. Создайте тип QaKeys, который будет содержать лишь ключи объекта QA(использовать keyof и typeof)

type QaKeys = keyof typeof QA;

// 4. Создайте тип UserType из объекта QA (используйте typeof)

type UserType = typeof QA;

// 5. Создайте тип, в котором все поля интерфейса IEmployee будут необязательными

type PartialEmployee = Partial<IEmployee>;

// 6. Создайте тип, который будет содержать поля name и salary из интерфейса IEmployee

type NameAndSalary = Pick<IEmployee, 'name' | 'salary'>; 

// 7. Создайте тип, который будет держать все поля из интерфейса IEmployee, кроме isManager

type NoManager = Omit<IEmployee, 'isManager'>;

// 8. Создайте тип, который будет содержать все поля из интерфейса IEmployee и сделает их неизменяемыми (readonly)

type ReadonlyEmployee = Readonly<IEmployee>;

// 9. Создайте объект с помощью Record, в ключах которого будут строки, а в значениях - ключи объекта QA (Используйте Record, keyof, typeof)

type QaRecord = Record<string, keyof typeof QA>;
const qaRecord: QaRecord = {
  key1: 'name',
  key2: 'salary',
  key3: 'isManager'
};

// 10. Создайте дженерик функцию wrapInArray, которая принимает значение любого типа и возвращает его в виде массива этого типа.
    function wrapInArray<T>(value: T): T[] {
      return [value];
    }

    const numberArray = wrapInArray(5); // [5]
    const stringArray = wrapInArray('Hello'); // ['Hello]

// 11. Создайте дженерик функцию getLastElement, которая принимает массив элементов типа T, и возвращает последний элемент (типа T).

    function getLastItem<T>(array: T[]): T | undefined {
      return array.length ? array[array.length - 1] : undefined;
    }

    const nums = [10, 20, 30];
    const lastNum = getLastItem(nums);
    console.log(lastNum);

    const emptyNumbers: number[] = [];
    const last = getLastItem(emptyNumbers);
    console.log(last);

    const words = ['TypeScript', 'is', 'fun'];
    const lastWord = getLastItem(words);
    console.log(lastWord);

