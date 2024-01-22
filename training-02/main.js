// 3) Написать по 2 примера создания примитивных значений (если есть несколько способов - использовать) (string, number, boolean, null, undefined, symbol, bigInt)

//Строка

let firstString = "Hello";

let secondString = 10;
let newString = toString(secondString);

//Число

let firstNumber = 10;

let secondNumber = parseInt('10');

//Булевое значения

let firstBoolean = Boolean(1);

let secondBoolean = Boolean(0);

//null

let firstNull = null;

let secondNull = null;

//undefined

let firstUndefined;

let secondUndefined = undefined; //работает, но неверный способ

//symbol

let firstSymbol = Symbol();

let secondSymbol = Symbol("a");

//bigInt

let firstBigInt = 10n;

let secondBigInt = 1000000n;

// 5) Решить... 

const res = "B" + "a" + (1 - "hello");
console.log(res); //BaNaN

const res2 = (true && 3) + "d";
console.log(res2); //3d

const res3 = Boolean(true && 3) + "d";
console.log(res3); //trued