const title = document.getElementsByClassName("title")[0];

const buttonPlus = document.querySelector(".screen-btn");

const otherItemsPercent = document.querySelectorAll(".other-items.percent");
const otherItemsNumber = document.querySelectorAll(".other-items.number");

const inputRange = document.querySelector(".rollback input[type='range']");
const inputRangeValue = document.querySelector(".rollback .range-value");

const startBtn = document.getElementsByClassName("handler_btn")[0];
const resetBtn = document.getElementsByClassName("handler_btn")[1];

const total = document.getElementsByClassName("total-input")[0];
const totalCount = document.getElementsByClassName("total-input")[1];
const totalCountOther = document.getElementsByClassName("total-input")[2];
const fullTotalCount = document.getElementsByClassName("total-input")[3];
const totalCountRollback = document.getElementsByClassName("total-input")[4];
let screens = document.querySelectorAll(".screen");

const appData = {
  title: "",
  screens: [],
  totalCountScreens: 0,
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  init: function () {
    appData.addTitle();
    startBtn.addEventListener("click", appData.start);
    buttonPlus.addEventListener("click", appData.addScreenBlock);

    inputRange.addEventListener("input", function () {
      const rangeValue = inputRange.value;
      inputRangeValue.textContent = rangeValue;
      appData.rollback = rangeValue;
    });
  },
  addTitle: function () {
    console.log(title.textContent);
    document.title = title.textContent;
  },
  start: function () {
    let allScreensFilled = true;
    screens.forEach(function (screen) {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      if (!select.value || !input.value) {
        allScreensFilled = false;
      }
    });
    if (allScreensFilled) {
      appData.addScreens();
      appData.addServices();
      appData.addPrices();
      appData.getServicePercentPrice();
      appData.showResult();
    } else {
      alert("Ошибка: не выбран тип экрана и/или не введено количество");
    }
  },
  showResult: function () {
    total.value = appData.screenPrice;
    totalCount.value = appData.totalCountScreens;
    totalCountOther.value =
      appData.servicePricesPercent + appData.servicePricesNumber;
    fullTotalCount.value = appData.fullPrice;
    totalCountRollback.value = appData.servicePercentPrice;
  },
  isString: function (str) {
    return typeof str === "string";
  },
  addScreens: function () {
    screens = document.querySelectorAll(".screen");
    appData.totalCountScreens = 0;
    appData.screens = [];
    screens.forEach(function (screen, index) {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;
      const screenCount = +input.value;
      appData.totalCountScreens += screenCount;
      appData.screens.push({
        id: index,
        name: selectName,
        count: screenCount,
        price: +select.value * screenCount,
      });
    });
    console.log(appData.screens);
  },
  addServices: function () {
    otherItemsPercent.forEach(function (item) {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");
      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }
    });
    otherItemsNumber.forEach(function (item) {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");
      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
    });
  },
  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);

    screens[screens.length - 1].after(cloneScreen);
  },
  addPrices: function () {
    appData.screenPrice = 0;
    appData.fullPrice = 0;
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price;
    }
    for (let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key];
    }
    for (let key in appData.servicesPercent) {
      appData.servicePricesPercent +=
        appData.screenPrice * (appData.servicesPercent[key] / 100);
    }
    appData.fullPrice =
      appData.screenPrice +
      appData.servicePricesPercent +
      appData.servicePricesNumber;
  },
  getServicePercentPrice: function () {
    appData.servicePercentPrice =
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  },

  // logger: function () {
  //   console.log("Full Price: ", appData.fullPrice);
  //   console.log("Service Percent Price: ", appData.servicePercentPrice);
  //   console.log("Screens: ", appData.screens);
  // },
};

appData.init();
