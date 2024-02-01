//Литеральная нотация
let Person = {};

//Функция-конструктор
function PersonConstructor() {}

//Класс
class PersonClass {
  constructor() {}
}

// Создание объекта Person2 с доступом к методам объекта Person
let Person2 = Object.create(Person);

// Добавление метода logInfo, доступного всем объектам
Person.logInfo = function () {};

//PersonTree

class PersonThree extends PersonConstructor {
    constructor() {}
  
    get getName() {}
  
    set setName() {}
}