// 1. 

let promiseTwo = new Promise((resolve, reject) => {
    resolve("a");
});

promiseTwo
.then((res) => {
return res + "b";
})
.then((res) => {
return res + "с";
})
.finally((res) => {
return res + "!!!!!!!";
})
.catch((res) => {
return res + "d";
})
.then((res) => {
console.log(res);
});

// Консоль выведет: abc

// 2. 

function doSmth() {
    return Promise.resolve("123");
 }
 
doSmth()
.then(function (a) {
console.log("1", a); //
return a;
})
.then(function (b) {
console.log("2", b);
return Promise.reject("321");
})
.catch(function (err) {
console.log("3", err);
})
.then(function (c) {
console.log("4", c);
return c;
});

// 123 / 123 / 321 / undefined

// 3. 

function printWithDelay(arr) {
    arr.forEach((element, index) => {
        setTimeout(() => {
            console.log(`Индекс: ${index}, Элемент: ${element}`);
        }, 3000 * index);
    });
}

// Пример использования
const inputArray = [10, 12, 15, 21];
printWithDelay(inputArray);


// 5. - БОНУС

function fetchUrl(url, attempts = 5) {
    return new Promise((resolve, reject) => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const data = await response.text();
          resolve(data);
        } catch (error) {
          attempts--;
  
          if (attempts <= 0) {
            reject(error);
          } else {
            // Повторяем запрос с уменьшенным количеством попыток
            fetchData();
          }
        }
      };
  
      // Начинаем выполнение запроса
      fetchData();
    });
}

fetchUrl('https://google/com&#39')
  .then((data) => {
    // Обработка успешного запроса
    console.log('Содержимое страницы:', data);
  })
  .catch((error) => {
    // Обработка ошибки после 5 неудачных попыток
    console.error('Ошибка запроса:', error);
  });