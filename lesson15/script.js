"use strict";

const DomElement = function (selector, height, width, bg, fontSize, text) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.text = text;

  this.createElement = function () {
    let element;
    if (this.selector[0] === ".") {
      element = document.createElement("div");
      element.classList.add(this.selector.slice(1));
    } else if (this.selector[0] === "#") {
      element = document.createElement("p");
      element.id = this.selector.slice(1);
    }
    element.textContent = this.text;
    element.style.height = this.height + "px";
    element.style.width = this.width + "px";
    element.style.backgroundColor = this.bg;
    element.style.fontSize = this.fontSize + "px";
    document.body.appendChild(element); // Добавляем созданный элемент в тело документа
  };

  // Вызываем метод createElement при создании экземпляра объекта
  this.createElement();
};

const elementNew = new DomElement(
  "#test",
  100,
  100,
  "yellow",
  15,
  "This is my text"
);
console.log(elementNew);

// УСЛОЖНЕННОЕ  ЗАДАНИЕ: Создаем новый объект на основе класса DomElement

const square = new DomElement(".square", 100, 100, "blue");

square.position = "absolute";
square.createElement();
