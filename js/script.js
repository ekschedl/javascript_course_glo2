// Получаем заголовок с помощью метода getElementsByTagName
const titleElement = document.getElementsByTagName("h1");
console.log(titleElement[0]);

const buttons = document.getElementsByClassName("handler_btn");
console.log(buttons);

const buttonAdd = document.querySelector(".screen-btn");
console.log(buttonAdd);

const otherItemsPercent = document.querySelectorAll(".other-items.percent");
console.log(otherItemsPercent);
const otherItemsNumber = document.querySelectorAll(".other-items.number");
console.log(otherItemsNumber);

const inputTypeRange = document.querySelector(".rollback input[type='range']");
console.log(inputTypeRange);

const spanRangeValue = document.querySelector(".rollback .range-value");
console.log(spanRangeValue);

const totalInputs = document.getElementsByClassName("total-input");
for (let i = 0; i < totalInputs.length; i++) {
  console.log(totalInputs[i]);
}
let divsScreen = document.querySelectorAll(".screen");
console.log(divsScreen);

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  services: {},

  start: function () {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice();
    appData.getServicePercentPrice();
    appData.getTitle();
    appData.logger();
  },

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  isString: function (str) {
    return typeof str === "string";
  },

  asking: function () {
    appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");

    while (
      appData.title !== null &&
      (!appData.isString(appData.title) || !appData.title.trim())
    ) {
      appData.title = prompt("Пожалуйста, введите название проекта (текст)");
    }

    for (let i = 0; i < 2; i++) {
      let name;
      do {
        name = prompt(
          "Какие типы экранов нужно разработать?",
          "Простые, Сложные, Интерактивные"
        );
        if (name !== null && appData.isNumber(name)) {
          alert("Пожалуйста, введите типы экранов (текст)");
        }
      } while (name !== null && appData.isNumber(name));

      if (name === null) {
        break;
      }

      let price = 0;

      do {
        price = prompt("Сколько будет стоить данная работа? (цифры)");
      } while (!appData.isNumber(price));

      appData.screens.push({ id: i, name: name, price: +price });
    }

    for (let i = 0; i < 2; i++) {
      let name;
      do {
        name = prompt("Какой дополнительный тип услуги нужен? (текст)");
        if (name !== null && appData.isNumber(name)) {
          alert("Пожалуйста, введите дополнительный тип услуги (текст)");
        }
      } while (name !== null && appData.isNumber(name));

      if (name === null) {
        break;
      }

      let price = 0;

      do {
        price = prompt("Сколько это будет стоить? (цифры)");
      } while (!appData.isNumber(price));

      appData.services[name] = +price;
    }

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },

  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price;
    }

    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
  },

  getFullPrice: function () {
    appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
  },

  getServicePercentPrice: function () {
    appData.servicePercentPrice =
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  },

  getTitle: function () {
    appData.title =
      appData.title.trim()[0].toUpperCase() +
      appData.title.trim().slice(1).toLowerCase();
  },

  getRollbackMessage: function (price) {
    if (price >= 30000) {
      return "Даем скидку в 10%";
    } else if (price >= 15000 && price < 30000) {
      return "Даем скидку в 5%";
    } else if (price >= 0 && price < 15000) {
      return "Скидка не предусмотрена";
    } else {
      return "Что-то пошло не так";
    }
  },

  logger: function () {
    console.log("Full Price: ", appData.fullPrice);
    console.log("Service Percent Price: ", appData.servicePercentPrice);
    console.log("Screens: ", appData.screens);
  },
};

appData.start();
