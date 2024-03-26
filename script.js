"use strict";
const title = prompt("Как называется ваш проект?");

const screens = prompt(
  "Какие типы экранов нужно разработать?",
  "пример: Простые, Сложные, Интерактивные"
);

const screenPrice = +prompt(
  "Сколько будет стоить данная работа?",
  "пример: 12000"
);

const screenPriceInRub = "Стоимость верстки экранов " + screenPrice + " рублей";

const adaptive = confirm("Нужен ли адаптив на сайте?");

const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = parseInt(prompt("Сколько это будет стоить?"));

const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = parseInt(prompt("Сколько это будет стоить?"));

const rollback = Math.floor(Math.random() * 100);

function getFullPrice(screenPrice, allServicePrices) {
  return screenPrice + allServicePrices;
}

const getAllServicePrices = function (servicePrice1, servicePrice2) {
  return servicePrice1 + servicePrice2;
};

const allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

const fullPrice = getFullPrice(screenPrice, allServicePrices);
const fullPriceInRub = "Стоимость разработки сайта " + fullPrice + " рублей";

const percentForAgent = fullPrice * (rollback / 100);

const servicePercentPrice = getServicePercentPrices(fullPrice, percentForAgent);

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getRollbackMessage = function (price) {
  if (price >= 15000 && price <= 30000) {
    return "Даем скидку в 5%";
  } else if (price >= 0 && price < 15000) {
    return "Скидка не предусмотрена";
  } else if (price < 0) {
    return "Что-то пошло не так";
  } else {
    return "Даем скидку в 10%";
  }
};

if (adaptive == "Да") {
  console.log(true);
} else if (adaptive == "да") {
  console.log(true);
} else {
  console.log(false);
}

function getTitle(title) {
  if (!title) return "";
  title = title.trim();
  return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
}

function getServicePercentPrices(fullPrice, rollback) {
  return fullPrice - rollback;
}

showTypeOf(title);
showTypeOf(adaptive);
showTypeOf(fullPrice);

console.log(getRollbackMessage(fullPrice));
console.log(allServicePrices);
console.log(fullPrice);
console.log(getTitle(" КаЛьКулятор Верстки"));
console.log(screens.length);
console.log('"' + screenPriceInRub + '"' + " и " + '"' + fullPriceInRub + '"');
console.log(screens.toLowerCase().split(", "));
console.log(servicePercentPrice);
console.log(getServicePercentPrices(fullPrice, percentForAgent));
