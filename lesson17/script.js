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
    const [name, lastName] = value.split(" ");
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
    this._dateOfStart = dateOfStart;
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
mechanic.workplaces = "1. Workplace";
mechanic.workplaces = "2. Workplace";
mechanic.workplaces = "3. Workplace";

// Создаем экземпляр класса Driver
const driver = new Driver("Max", "Schedlberger", 34, 3, false);
driver.children = 2;
driver.dateOfStart = "2003-04-22";

// Массив для хранения сотрудников
let employees = [];

// Функция для сохранения сотрудников в localStorage
function saveEmployeesToLocalStorage() {
  localStorage.setItem("employees", JSON.stringify(employees));
}

// Функция для загрузки сотрудников из localStorage
function loadEmployeesFromLocalStorage() {
  const savedEmployees = localStorage.getItem("employees");
  if (savedEmployees) {
    employees = JSON.parse(savedEmployees);
    renderEmployees();
  }
}

// Функция для отображения сотрудников в таблице
function renderEmployees() {
  const tableBody = document.getElementById("TableBody");
  tableBody.innerHTML = "";

  employees.forEach((employee) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${employee.name}</td>
      <td>${employee.lastName}</td>
      <td>${employee.age}</td>
      <td>${employee.workExperienceInMonth}</td>
      <td>${employee.education ? "Да" : "Нет"}</td>
      <td>${
        employee instanceof Driver ? (employee.children ? "Да" : "Нет") : ""
      }</td>
      <td>${
        employee instanceof Driver
          ? employee._dateOfStart
            ? employee._dateOfStart
            : ""
          : ""
      }</td> 

    <td>${employee instanceof Driver ? "Водитель" : "Слесарь"}</td>
      <td><button onclick="deleteEmployee(${employees.indexOf(
        employee
      )})">Удалить</button></td>
    `;
    tableBody.appendChild(row);
  });
}

// Функция для добавления нового сотрудника
function addEmployee(employee) {
  employees.push(employee);
  saveEmployeesToLocalStorage();
  renderEmployees();
}

// Функция для удаления сотрудника
function deleteEmployee(index) {
  employees.splice(index, 1);
  saveEmployeesToLocalStorage();
  renderEmployees();
}

// Слушатель события отправки формы
const form = document.getElementById("Form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Получаем данные из формы
  const firstName = form.elements["firstName"].value;
  const lastName = form.elements["lastName"].value;
  const age = form.elements["age"].value;
  const workExperienceInMonth = form.elements["workExperienceInMonth"].value;
  const education = form.elements["education"].checked;
  const hasChildren = form.elements["hasChildren"].checked;
  const dateOfStart = form.elements["dateOfStart"].value;
  const profession = form.elements["profession"].value;

  // Создаем сотрудника в зависимости от выбранной профессии
  let newEmployee;
  if (profession === "Mechanic") {
    newEmployee = new Mechanic(
      firstName,
      lastName,
      age,
      workExperienceInMonth,
      education
    );
  } else if (profession === "Driver") {
    newEmployee = new Driver(
      firstName,
      lastName,
      age,
      workExperienceInMonth,
      education,
      dateOfStart,
      hasChildren
    );
  }

  // Добавляем нового сотрудника и очищаем форму
  addEmployee(newEmployee);
  form.reset();
});

// Загружаем сотрудников из localStorage при загрузке страницы
window.addEventListener("load", loadEmployeesFromLocalStorage);

console.log(mechanic.fullName);
console.log(mechanic);
console.log(driver.fullName);
console.log(driver);
