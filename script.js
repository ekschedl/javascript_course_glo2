const title = "Проект 1";
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = 1000;
const rollback = Math.floor(Math.random() * 100);
const fullPrice = 100000;
const adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
const screenPriceInRub = "Стоимость верстки экранов " + screenPrice + " рублей";
const fullPriceInRub = "Стоимость разработки сайта " + fullPrice + " рублей";
console.log('"' + screenPriceInRub + '"' + " и " + '"' + fullPriceInRub + '"');

console.log(screens.toLowerCase().split(", "));

const percentForAgent = fullPrice * (rollback / 100);
console.log(percentForAgent);
