class Employee {
  #salary;
  constructor (firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.#salary = salary;
  }
  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get profession() {
    return this._profession;
  }
  get salary() {
    return this.#salary;
  }
  set firstName(value) {
    if (typeof value === 'string' && value.trim() !== "" ) {
      this._firstName = value;
    } else {
      throw new Error('Name should not be empty');
    }
  }
  set lastName(value) {
    if (typeof value === 'string' && value.trim() !== "") {
      this._lastName = value;
    } else {
      throw new Error('Lastname should not be empty');
    }
  }
  set profession(value) {
    if (typeof value === 'string' && value.trim() !== "") {
      this._profession = value;
    } else {
      throw new Error('Profession should not be empty');
    }
  }
  set salary(value) {
    if (typeof value === 'number' && value > 0) {
      this.#salary = value;
    } else {
      throw new Error('Salary should be a positive number');
    }
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
// console.log(emp1.firstName); // "John"
// emp1.salary = 3100;
// console.log(emp1.salary); // 3100
class Company {
  #employees;
  constructor (title, phone, address) {
    this.title = title;
    this.phone = phone;
    this.address = address;
    this.#employees = [];
  }
  get title() {
    return this._title;
  }
  get phone() {
    return this._phone;
  }
  get address() {
    return this._address;
  }
  set title(value) {
    if (typeof value === 'string' && value.trim() !== "") {
      this._title = value;
    } else {
      throw new Error('Title should not be empty');
    }
  }
  set phone(value) {
    if (typeof value === 'number' && !isNaN(value)) {
      this._phone = value;
    } else {
      throw new Error('Phone should be a number');
    }
  }
  set address(value) {
    if (typeof value === 'string' && value.trim() !== "") {
      this._address = value;
    } else {
      throw new Error('Address should not be empty');
    }
  }
  addEmployee(employee) {
    if (employee instanceof Employee) {
      this.#employees.push(employee);
    } else {
      throw new Error('Added object should be a part of Employee class');
    }
  }
  getEmployees() {
    return this.#employees;
  }
  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }
}

// const company = new Company('Tech Corp', 123456, 'Main Street');
// const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
// const emp2 = new Employee('Barbara', 'Johnson', 'QA', 2500);
// company.addEmployee(emp1);
// company.addEmployee(emp2);
// console.log(company.getEmployees()); // [Employee, Employee]

export { Employee, Company };
