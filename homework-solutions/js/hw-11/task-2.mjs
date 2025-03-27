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
    if (typeof value !== 'string' || !/^[A-Za-z]{2,50}$/.test(value)) {
      throw new Error('First name must be 2-50 Latin letters only!');
    }
    this._firstName = value;
  }
  set lastName(value) {
    if (typeof value !== 'string' || !/^[A-Za-z]{2,50}$/.test(value)) {
      throw new Error('Last name must be 2-50 Latin letters only!');
    }
    this._lastName = value;
  }
  set profession(value) {
    if (typeof value !== 'string' || !/^[A-Za-z\s]+$/.test(value) || value.trim() === '') {
      throw new Error('Profession must be non-empty, with Latin letters and spaces only!');
    }
    this._profession = value;
  }
  set salary(value) {
    if (typeof value !== 'number' || isNaN(value) || value <= 0 || value >= 10000) {
      throw new Error('Salary must be a number between 1 and 9999!');
    }
    this.#salary = value;
  }
}

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
    this._title = value;
  }
  set phone(value) {
    this._phone = value;
  }
  set address(value) {
    this._address = value;
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
  findEmployeeByName(firstName) {
    const employee = this.#employees.find(employee => employee.firstName === firstName);
    if (!employee) {
      throw new Error(`Employee with name ${firstName} not found`);
    }
    return employee;
  }
  #getEmployeeIndex(firstName) {
    return this.#employees.findIndex(employee => employee.firstName === firstName);
  }
  removeEmployee(firstName) {
    const index = this.#getEmployeeIndex(firstName);
    if (index !== -1) {
      this.#employees.splice(index, 1);
      console.log(`Employee ${firstName} has been removed`);
    } else {
      throw new Error(`Employee with name ${firstName} not found`);
    }
  }
  getTotalSalary() {
    return this.#employees.reduce((total, employee) => total + employee.salary, 0);
  }
}

// const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
// const emp2 = new Employee('Jane', 'Smith', 'Manager', 5000);
// const emp3 = new Employee('Mark', 'Brown', 'Designer', 4000);

// const company = new Company('Tech Corp', '123-456', 'Main Street');
// company.addEmployee(emp1);
// company.addEmployee(emp2);
// company.addEmployee(emp3);

// console.log(company.getTotalSalary()); // 12000
// console.log(company.findEmployeeByName('Jane')); // Employee { firstName: 'Jane', ... }
// company.removeEmployee('John');
// console.log(company.getEmployees()); // [Employee, Employee]

export { Employee, Company };
