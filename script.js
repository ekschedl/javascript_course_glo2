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
    return typeof str === "string" && !isNaN(str);
  },

  asking: function () {
    appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");

    while (
      appData.title !== null &&
      (typeof appData.title !== "string" || !appData.isString(appData.title))
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
        if (name !== null && !isNaN(name)) {
          alert("Пожалуйста, введите типы экранов (текст)");
        }
      } while (name !== null && !isNaN(name));

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
      let name = prompt("Какой дополнительный тип услуги нужен? (текст)");

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
