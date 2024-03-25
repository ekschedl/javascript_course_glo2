"use strict";
const title = prompt("Как называется ваш проект?");
console.log(typeof title);

const screens = prompt(
  "Какие типы экранов нужно разработать?",
  "пример: Простые, Сложные, Интерактивные"
);
console.log(screens.length);

const screenPrice = +prompt(
  "Сколько будет стоить данная работа?",
  "пример: 12000"
);
const rollback = Math.floor(Math.random() * 100);

const adaptive = prompt("Нужен ли адаптив на сайте?");
console.log(typeof adaptive);

const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = parseInt(prompt("Сколько это будет стоить?"));

const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = parseInt(prompt("Сколько это будет стоить?"));

const fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log(typeof fullPrice);

const percentForAgent = fullPrice * (rollback / 100);
console.log(percentForAgent);

const servicePercentPrice = Math.ceil(fullPrice - percentForAgent);
console.log(servicePercentPrice);

if (fullPrice >= 15000 && fullPrice <= 30000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice >= 0 && fullPrice < 15000) {
  console.log("Скидка не предусмотрена");
} else if (fullPrice < 0) {
  console.log("Что-то пошло не так");
} else {
  console.log("Даем скидку в 10%");
}

const screenPriceInRub = "Стоимость верстки экранов " + screenPrice + " рублей";
const fullPriceInRub = "Стоимость разработки сайта " + fullPrice + " рублей";
console.log('"' + screenPriceInRub + '"' + " и " + '"' + fullPriceInRub + '"');

console.log(screens.toLowerCase().split(", "));
