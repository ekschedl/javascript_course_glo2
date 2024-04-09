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
  rollback: 0,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  init: function () {
    this.addTitle();
    startBtn.addEventListener("click", this.start.bind(this));
    buttonPlus.addEventListener("click", this.addScreenBlock.bind(this));

    // Устанавливаем начальное значение текста рядом с ползунком
    inputRange.addEventListener("input", () => {
      const rangeValue = inputRange.value;
      inputRangeValue.textContent = rangeValue;
      this.rollback = rangeValue;

      // Проверяем, были ли уже выполнены расчеты перед обновлением суммы с учетом отката
      if (this.fullPrice !== 0) {
        this.getServicePercentPrice(); // Пересчитываем сумму с учетом отката
        totalCountRollback.value = this.servicePercentPrice; // Обновляем значение поля "Стоимость с учетом отката"
      }
    });
  },
  addTitle: function () {
    console.log(title.textContent);
    document.title = title.textContent;
  },
  start: function () {
    let allScreensFilled = true;
    screens.forEach((screen) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      if (!select.value || !input.value) {
        allScreensFilled = false;
      }
    });
    if (allScreensFilled) {
      this.addScreens();
      this.addServices();
      this.addPrices();
      this.getServicePercentPrice();
      this.showResult();
    } else {
      alert("Ошибка: не выбран тип экрана и/или не введено количество");
    }
  },
  showResult: function () {
    total.value = this.screenPrice;
    totalCount.value = this.totalCountScreens;
    totalCountOther.value =
      this.servicePricesPercent + this.servicePricesNumber;
    fullTotalCount.value = this.fullPrice;
    totalCountRollback.value = this.servicePercentPrice;
  },
  isString: function (str) {
    return typeof str === "string";
  },

  addScreens: function () {
    screens = document.querySelectorAll(".screen");
    this.totalCountScreens = 0;
    this.screens = [];
    screens.forEach((screen, index) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;
      const screenCount = +input.value;
      this.totalCountScreens += screenCount;
      this.screens.push({
        id: index,
        name: selectName,
        count: screenCount,
        price: +select.value * screenCount,
      });
    });
    console.log(this.screens);
  },
  addServices: function () {
    otherItemsPercent.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");
      if (check.checked) {
        this.servicesPercent[label.textContent] = +input.value;
      }
    });
    otherItemsNumber.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");
      if (check.checked) {
        this.servicesNumber[label.textContent] = +input.value;
      }
    });
  },
  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);
    screens[screens.length - 1].after(cloneScreen);
    // Обновляем коллекцию экранов после добавления нового экрана
    screens = document.querySelectorAll(".screen");
  },
  addPrices: function () {
    this.screenPrice = 0;
    this.fullPrice = 0;
    for (let screen of this.screens) {
      this.screenPrice += +screen.price;
    }
    for (let key in this.servicesNumber) {
      this.servicePricesNumber += this.servicesNumber[key];
    }
    for (let key in this.servicesPercent) {
      this.servicePricesPercent +=
        this.screenPrice * (this.servicesPercent[key] / 100);
    }
    this.fullPrice =
      this.screenPrice + this.servicePricesPercent + this.servicePricesNumber;
  },
  getServicePercentPrice: function () {
    this.servicePercentPrice =
      this.fullPrice - this.fullPrice * (this.rollback / 100);
  },
};

appData.init();
