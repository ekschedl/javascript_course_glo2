"use strict";
// Определение класса First
class First {
  constructor() {}
  methodOfFirst() {
    // Вложенная функция hello
    function hello() {
      console.log("Привет я метод родителя!");
    }
    // Вызов вложенной функции
    hello();
  }
}
// так тоже будет работатьЮ class First {
//     methodOfFirst() {
//     console.log("Привет я метод родителя!");
//     }
//     }
class First {
  methodOfFirst() {
    console.log("Привет я метод родителя!");
  }
}
// Определение класса Second, который наследует от класса First
class Second extends First {
  constructor() {
    super(); // Вызываем конструктор родительского класса
  }

  // Переопределяем метод methodOfFirst
  methodOfFirst() {
    // Вызываем метод methodOfFirst родительского класса First
    super.methodOfFirst();
    // Печатаем дополнительное сообщение
    console.log("А я наследуемый метод!");
  }
}

// Создание объекта класса Second
let obj = new Second();

// Теперь объект obj имеет доступ к методу methodOfFirst, унаследованному от класса First
obj.methodOfFirst();
