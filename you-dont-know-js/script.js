"use strict";

const listOfBooks = document.querySelectorAll(".book");
console.log(listOfBooks);

listOfBooks[1].after(listOfBooks[0]);
listOfBooks[5].after(listOfBooks[2]);
listOfBooks[4].after(listOfBooks[3]);

const book5 = document.querySelectorAll(".book")[4];
console.log(book5);
// Получение списка элементов <li>
const listItemsOfbook5 = book5.querySelectorAll("li");
console.log(listItemsOfbook5);
listItemsOfbook5[4].after(listItemsOfbook5[2]);
listItemsOfbook5[1].after(listItemsOfbook5[9]);
listItemsOfbook5[7].after(listItemsOfbook5[5]);

const book2 = document.querySelectorAll(".book")[1];
console.log(book2);
// Получение списка элементов <li>
const listItemsOfbook2 = book2.querySelectorAll("li");
console.log(listItemsOfbook2);
listItemsOfbook2[9].after(listItemsOfbook2[2]);
listItemsOfbook2[4].before(listItemsOfbook2[8]);
listItemsOfbook2[3].after(listItemsOfbook2[6]);

// Получаем элемент, у которого нужно изменить фоновую картинку
const bodyEl = document.querySelector("body");
// Заменяем текущую фоновую картинку на новую
bodyEl.style.backgroundImage = 'url("./image/adv.jpg")';

const book3 = document.querySelectorAll(".book")[2];
const h2book3 = book3.querySelector("h2 a"); //  querySelector, чтобы получить первый элемент h2 внутри книги
h2book3.textContent = "Книга 3. this и Прототипы Объектов"; //
console.log(h2book3);

// Получаем элемент с классом "adv"
const advElement = document.querySelector(".adv");
// Удаляем элемент
advElement.remove();

const book6 = document.querySelectorAll(".book")[5];
console.log(book6);

// Создаем новый элемент li
const newChapter = document.createElement("li");
newChapter.textContent = "Глава 8: За пределами ES6";

// Получаем ссылку на нужный ul
const ul = book6.querySelector("ul");

// Вставляем новую главу перед последним элементом списка
ul.insertBefore(newChapter, ul.lastElementChild);
