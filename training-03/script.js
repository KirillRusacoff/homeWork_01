/* Создание объекта */

// 1. Литерал

let counter = {};

// 2. Конструктор

counter = new Object();

// 3. Функция-конструктор

function User() {}
 
counter = new User();

// 4. Object.create

counter = Object.create(null);

// 5. С помощью классов

class Person {
    constructor() {}
}  
counter = new Person();

/* Копирование объекта */

// 1. spread-оператор

counter = {};
let copiedObject = {...counter};

// 2. Object.assign()

counter = {};
let copiedObject2 = Object.assign({}, counter);

// 3. JSON.parse() и JSON.stringify()

counter = {key:'value', nested:{key:'nestedValue'}};
let copiedObject3 = JSON.parse(JSON.stringify(counter));

// 4. библиотека Lodash

const _ = require('lodash');
counter = {};
let copiedObject4 = _.cloneDeep(counter);

/* Создать функцию */

// 1. function declaration

function makeCounter() {};

//2. function expression

makeCounter = function() {};

//3. cтрелочная функция

makeCounter = () => {};

//4. с использованием классов

class Counter {
    constructor() {}
  
    makeCounter() {}
}

/* Функция глубокого сравнения */

const deepEqual = (obj1, obj2) => {

    // Проверка на null или не объект
    if (obj1 === null || obj2 === null || typeof obj1 !== 'object' || typeof obj2 !== 'object') {
      return obj1 === obj2;
    }
  
    // Получение массивов ключей объектов
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    // Проверка на равное количество ключей
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    // Проверка каждого ключа и его значения рекурсивно
    for (let key of keys1) {
      if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
        return false;
      }
    }
  
    // Если все проверки пройдены, объекты равны
    return true;
};

/*
const obj1 = {here: {is:"on", other:"3"}, object:"Y"};
const obj2 = {here: {is:"on", other:"2"}, object:"Y"};

console.log(deepEqual(obj1, obj2));
*/ 

/* разворачивание строки */

function reverseStr(str) {
    return str.split('').reverse().join('');
}
  
