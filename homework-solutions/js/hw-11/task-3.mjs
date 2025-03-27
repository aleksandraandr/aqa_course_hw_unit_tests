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
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Developer extends Employee {
  constructor(firstName, lastName, salary, programmingLanguages = []) {
    super(firstName, lastName, 'Developer', salary);
    this.programmingLanguages = programmingLanguages;
  }
  addProgrammingLanguage(language) {
    if (typeof language !== 'string' || language.trim() === '') {
      throw new Error('Programming language must be a non-empty string');
    }
    this.programmingLanguages.push(language);
  }
}

class Manager extends Employee {
  constructor(firstName, lastName, salary, teamSize = 0) {
    super(firstName, lastName, 'Manager', salary);
    this.teamSize = teamSize;
  }
  increaseTeamSize() {
    this.teamSize +=1;
  }
}

class Designer extends Employee {
  constructor(fisrtName, lastName, salary, designTools = []) {
    super(fisrtName, lastName, 'Designer', salary);
    this.designTools = designTools;
  }
  addDesignTool(tool) {
    if (typeof tool !== 'string' || tool.trim() === '') {
      throw new Error ('Design tool must be a non-empty string');
    }
    this.designTools.push(tool);
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
      if (!(employee instanceof Employee)) {
        throw new Error('Added object should be a part of Employee class');
      }
      const duplicate = this.#employees.find(
        (e) => e.firstName === employee.firstName && e.lastName === employee.lastName);
      if (duplicate) {
        throw new Error(`Employee with name '${employee.firstName} ${employee.lastName}' already exists`);
      }
      this.#employees.push(employee);
    }
    getEmployees() {
      return this.#employees;
    }
    getEmployeesByProfession(profession) {
      return this.#employees.filter(employee => employee.profession === profession);
    }
}

// Employees creation
// const dev1 = new Developer("Alice", "White", 4000, ["JavaScript"]);
// const dev2 = new Developer("John", "Doe", 4500, ["Python"]);
// const dev3 = new Developer("Alice", "White", 4200, ["C++"]); // duplicate

// const mgr1 = new Manager("Bob", "Green", 5000, 5);
// const mgr2 = new Manager("Sarah", "Brown", 5200, 3);

// const des1 = new Designer("Liam", "Stone", 3800, ["Figma"]);
// const des2 = new Designer("Emma", "Stone", 3900, ["Sketch"]);

// Company creation
// const company = new Company("CreativeTech", "123-456", "Design Street");

// company.addEmployee(dev1);
// company.addEmployee(dev2);
// company.addEmployee(mgr1);
// company.addEmployee(mgr2);
// company.addEmployee(des1);
// company.addEmployee(des2);

// Add duplicate
// company.addEmployee(dev3);

// Check getEmployeesByProfession
// console.log('\nEmployees by profession:');

// console.log('Developers:');
// console.log(company.getEmployeesByProfession('Developer'));

// console.log('Managers:');
// console.log(company.getEmployeesByProfession('Manager'));

// console.log('Designers:');
// console.log(company.getEmployeesByProfession('Designer'));

// console.log('Profession does not exist:');
// console.log(company.getEmployeesByProfession('QA'));

export { Employee, Company, Designer, Developer, Manager };
