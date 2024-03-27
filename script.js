"use strict";
let title = prompt("Как называется ваш проект?", "Калькулятор верстки");
let screens = prompt(
  "Какие типы экранов нужно разработать?",
  "Простые, Сложные, Интерактивные"
);
let screenPrice = +prompt("Сколько будет стоить данная работа?", "15000");
let adaptive = confirm("Нужен ли адаптив на сайте?");

let rollback = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;

// let service1 = prompt("Какой дополнительный тип услуги нужен?");
// let servicePrice1 = +prompt("Сколько это будет стоить?");
// let service2 = prompt("Какой дополнительный тип услуги нужен?");
// let servicePrice2 = +prompt("Сколько это будет стоить?");

const getAllServicePrices = function () {
  let sum = 0;
  for (let i = 0; i < 2; i++) {
    sum += +prompt("Сколько это будет стоить?");
  }
  return sum;
};

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getFullPrice = function () {
  return screenPrice + allServicePrices;
};

const getServicePercentPrice = function () {
  return fullPrice - fullPrice * (rollback / 100);
};

const getTitle = function () {
  return title.trim()[0].toUpperCase() + title.trim().slice(1).toLowerCase();
};

const getRollbackMessage = function (price) {
  if (price >= 30000) {
    return "Даем скидку в 10%";
  } else if (price >= 15000 && price < 30000) {
    return "Даем скидку в 5%";
  } else if (price >= 0 && price < 15000) {
    return "Скидка не предусмотрена";
  } else {
    return "Что-то пошло не так";
  }
};

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrice();
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);
console.log("allServicePrices", allServicePrices);

console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log(servicePercentPrice);

console.log(
  "Стоимость верстки экранов " +
    screenPrice +
    " рублей" +
    " и " +
    "Стоимость разработки сайта " +
    fullPrice +
    " рублей"
);
