"use strict";

// Базовый класс "Сотрудник"
class Employee {
  constructor(name, lastName, age, workExperienceInMonth, education) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.workExperienceInMonth = workExperienceInMonth;
    this.education = education;
  }

  // Геттеры и сеттеры
  get fullName() {
    return `${this.name} ${this.lastName}`;
  }
  set fullName(value) {
    const [name, lastName] = value.split("_");
    this.name = name;
    this.lastName = lastName;
  }
}

class Mechanic extends Employee {
  constructor(
    name,
    lastName,
    age,
    workExperienceInMonth,
    education,
    workplaces = []
  ) {
    super(name, lastName, age, workExperienceInMonth, education);
    this._workplaces = workplaces;
  }
  get workplaces() {
    return this._workplaces;
  }
  set workplaces(str) {
    this._workplaces.push(str);
  }
}

class Driver extends Employee {
  constructor(
    name,
    lastName,
    age,
    workExperienceInMonth,
    education,
    dateOfStart,
    children
  ) {
    super(name, lastName, age, workExperienceInMonth, education);
    this._dateOfStart = "";
    this._children = children;
  }

  get dateOfStart() {
    return this._dateOfStart;
  }
  set dateOfStart(str) {
    this._dateOfStart = str;
  }

  get children() {
    return this._children;
  }
  set children(value) {
    if (value > 0) {
      this._children = true;
    } else {
      this._children = false;
    }
  }
}

// Создаем экземпляр класса Mechanic
const mechanic = new Mechanic("Peter", "Müller", 30, 24, true);

console.log(mechanic.fullName);
mechanic.workplaces = "1. Workplace";
mechanic.workplaces = "2. Workplace";
mechanic.workplaces = "3. Workplace";

console.log(mechanic);

// Создаем экземпляр класса Driver
const driver = new Driver("Max", "Schedlberger", 34, 3, false);
console.log(driver.fullName);
driver.children = 2;
driver.dateOfStart = "22.04.2003";
console.log(driver);
