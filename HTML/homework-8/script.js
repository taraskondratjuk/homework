// -----------------------------------------------Task 1-----------------------------------------------------------
//     - створити функцію яка виводить масив

// let array = [2, 8, "Taras", true, -99, 44];

// function showArray(arr) {
//     console.log(arr);
// }

// showArray(array);


// -----------------------------------------------Task 2-----------------------------------------------------------
// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

// function randomArray() {
//     let arr=[];
//     for (let i = 0; i < 10; i++) {
//         arr[i] =Math.round (Math.random() * (100 - 1) + 1);
//     }
//     return arr;
// }
//
// showArray(randomArray());


// -----------------------------------------------Task 3-----------------------------------------------------------
// - створити функцію яка приймає три числа та виводить та повертає найменьше.

// function snowMinNumber(numberFirst, numberSecond, numberThird) {
//     let min = 0;
//
//     if (numberFirst > numberSecond) {
//         if (numberSecond > numberThird) {
//             min = numberThird;
//         } else {
//             min = numberSecond;
//         }
//     }
//
//         if (numberSecond > numberThird) {
//             if (numberThird > numberFirst) {
//                 min = numberFirst;
//             } else {
//                 min = numberThird;
//             }
//         }
//
//         if (numberThird > numberFirst) {
//             if (numberFirst > numberSecond) {
//                 min = numberSecond;
//             } else {
//                 min = numberFirst;
//             }
//         }
//
//         console.log(min);
//         return min;
//
// }
//
// snowMinNumber(200, 170, 180);


// -----------------------------------------------Task 4-----------------------------------------------------------
// - створити функцію яка приймає три числа та виводить та повертає найбільше.

// function snowMaxNumber(numberFirst, numberSecond, numberThird) {
//     let max = 0;
//
//     if (numberFirst > numberSecond) {
//         max = numberFirst;
//     } else if (numberSecond > numberThird) {
//         max = numberSecond;
//     } else if (numberThird > numberFirst) {
//         max = numberThird;
//     }
//
//
//     console.log(max);
//     return max;
// }
//
// snowMaxNumber(-2, -8, -5);


// -----------------------------------------------Task 5-----------------------------------------------------------
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

// function getMinShowMax() {
//     let minNumber = 0;
//     let maxNumber = 0;
//
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] > maxNumber) {
//             maxNumber = arguments[i];
//         }
//         if (arguments[i] < minNumber) {
//             minNumber = arguments[i];
//         }
//
//     }
//
//     console.log(maxNumber)
//     return minNumber;
// }
//
// let showMin = getMinShowMax(5, 98, 4, 230, 78, 55, -55, -1, -66, 7, 22);
// console.log(showMin);


// -----------------------------------------------Task 6-----------------------------------------------------------
// - створити функцію яка повертає найбільше число з масиву


// function getMaxElementArr(arr) {
//     let maxArr = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > maxArr) {
//             maxArr = arr[i];
//         }
//     }
//     return maxArr;
//
// }
//
// let maxElementArr = getMaxElementArr([5, 79, -33, 878, 1, 4, -2, 6]);
// console.log(maxElementArr)


// -----------------------------------------------Task 7-----------------------------------------------------------
// - створити функцію яка повертає найменьше число з масиву

// function getMinElementArr(arr) {
//     let minArr = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < minArr) {
//             minArr=arr[i];
//         }
//     }
//     return minArr;
// }
//
// let minElementArr = getMinElementArr([4, 8, 3, 88, -99, 7, 1, 6 , 988, -8798]);
// console.log(minElementArr)


// -----------------------------------------------Task 8-----------------------------------------------------------
// Створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

// function getSumAllNumbers(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
//
// let sumAllNumbers = getSumAllNumbers([5, 22, -88, 77, -3, 8, -77, 11])
// console.log(sumAllNumbers);


// -----------------------------------------------Task 9-----------------------------------------------------------
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function getAverageSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }
//
// let averageSumArr = getAverageSum([15, 18, 17, 12, 13]);
// console.log(averageSumArr);


// -----------------------------------------------Task 10-----------------------------------------------------------
// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві


// function getNumberObjectsInArr(arr) {
//     return arr.length;
// }
//
// let numberObjectsInArr = getNumberObjectsInArr([
//     {name: "Taras", age: 22},
//     {name: "Ivan", age: 18},
//     {name: "Taras", age: 22, isWife: true},
//     {model: "A4", price: 25000},
//     {name: "Jek", age: 2, color: "black"}
// ]);
//
// console.log(numberObjectsInArr)
//

// -----------------------------------------------Task 11-----------------------------------------------------------
// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них


// function getNumberObjectsInArr(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < Object.keys(arr[i]).length; j++) {
//             count++;
//         }
//     }
//     return count;
// }
//
// let numberObjectsInArr = getNumberObjectsInArr([
//     {name: "Taras", age: 22},
//     {name: "Ivan", age: 18},
//     {name: "Petro", age: 45, isWife: true},
//     {mark: "Audi", model: "A4", price: 25000},
//     {name: "Jek", age: 2, color: "black",}
// ]);
//
// console.log(numberObjectsInArr)


// -----------------------------------------------Task 12-----------------------------------------------------------
// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]


// function getSumOfArr(arr1, arr2) {
//     let sumArr = [];
//     for (let i = 0; i < arr1.length; i++) {
//         sumArr[i] = arr1[i] + arr2[i];
//     }
//     return sumArr;
// }
//
// let sumOfArr = getSumOfArr(
//     [1, 2, 3, 4],
//     [2, 3, 4, 5]
// )
// console.log(sumOfArr);


// -----------------------------------------------Task 13-----------------------------------------------------------
// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

// function getChangeElementsOfArr(arr, i) {
//     let array = arr;
//
//     let count = arr[i];
//     arr[i] = arr[i + 1];
//     arr[i + 1] = count;
//
//     return array;
// }
//
//
// let changeElementsOfArr = getChangeElementsOfArr([5, 3, 1, 4, 55, 6, 8,], 1)
// console.log(changeElementsOfArr);


// -----------------------------------------------Task 14-----------------------------------------------------------
// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//     Двожина масиву від 2 до 100
// Приклад
//     [1,0,6,0,3] => [1,6,3,0,0]
//     [0,1,2,3,4] => [1,2,3,4,0]
//     [0,0,1,0]   => [1,0,0,0]


// function getSortArr(arr) {
//     let countNumber = [];
//     let countZero = [];
//
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 0) {
//             countZero.push(arr[i]);
//         } else {
//             countNumber.push(arr[i]);
//         }
//     }
//     for (let i = 0; i < countZero.length; i++) {
//         countNumber.push(countZero[i]);
//     }
//
//
//     return countNumber;
// }
//
// let sortArr = getSortArr([1,0,6,0,3]);
// console.log(sortArr);


// -----------------------------------------------Task 15-----------------------------------------------------------
// Створити функцію яка :
//     - Додає в боді блок з текстом "Hello owu"

// function createDivInBodyWithText(textOfElement) {
//     let createDiv = document.createElement("div");
//     createDiv.innerText = textOfElement;
//     document.body.appendChild(createDiv);
// }
//
// createDivInBodyWithText("Hello owu10");


// -----------------------------------------------Task 16-----------------------------------------------------------
// Створити функцію яка :
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи


// function createElementInBodyWithText(typeOfElement, textOfElement) {
//     let createElement = document.createElement(typeOfElement);
//     createElement.innerText = textOfElement;
//     document.body.appendChild(createElement);
// }
//
// createElementInBodyWithText("div", "Hello owu10");


// -----------------------------------------------Task 17-----------------------------------------------------------
// Створити функцію яка :
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати в список цих автомобілів.
//     Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
//     Для кожної властивості створити всередені блока автомобiля свій блок


// function createBlocksCars(arr, ID) {
//     let cars = document.createElement("div")
//     cars.classList.add("cars");
//     document.body.appendChild(cars);
//
//     for (let i = 0; i < arr.length; i++) {
//         let car = document.createElement("div");
//
//         let id = document.createElement("p");
//         id.innerText = "Id: " + ID;
//
//         let model = document.createElement("p");
//         model.innerText = "model: " + arr[i].model;
//
//         let color = document.createElement("p");
//         color.innerText = "color: " + arr[i].color;
//
//         let age = document.createElement("p");
//         age.innerText = "age: " + arr[i].age;
//
//         let power = document.createElement("p");
//         power.innerText = "power: " + arr[i].power;
//
//         let driver = document.createElement("p");
//         driver.innerText = "Driver { name: " + arr[i].driver.name + ", age: " + arr[i].driver.age + ", sex: " +
//             arr[i].driver.sex + ", experience: " + arr[i].driver.experience + " }";
//
//         car.appendChild(id);
//         car.appendChild(model);
//         car.appendChild(color);
//         car.appendChild(age);
//         car.appendChild(power);
//         car.appendChild(driver);
//
//         cars.appendChild(car);
//     }
// }
//
//
// createBlocksCars([
//     cars = {
//         model: "Audi",
//         color: "Red",
//         age: 2010,
//         power: 200,
//         driver: {name: "Ivan", age: 21, sex: "Male", experience: 1}
//     },
//     cars = {
//         model: "Porsche",
//         color: "Blue",
//         age: 2020,
//         power: 825,
//         driver: {name: "Igor", age: 25, sex: "Male", experience: 5}
//     },
//     cars = {
//         model: "Opel",
//         color: "Black",
//         age: 2008,
//         power: 110,
//         driver: {name: "Sergiy", age: 35, sex: "Male", experience: 9}
//     },
//     cars = {
//         model: "Lada",
//         color: "White",
//         age: 2008,
//         power: 95,
//         driver: {name: "Ira", age: 19, sex: "Female", experience: 10}
//     },
// ], 3);


// -----------------------------------------------Task 18-----------------------------------------------------------
// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
//     Приклад масивів:


// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false},
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'},
// ];

// function getConcatUsersArr(arr1, arr2) {
//
//     let concatUsersArr = arr1;
//
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i].id === arr2[j].user_id) {
//                 concatUsersArr[i].address = arr2[j];
//             }
//         }
//     }
//     return concatUsersArr;
//
// }
//
//
// let concatUsersArr = getConcatUsersArr(
//     [
//         {id: 1, name: 'vasya', age: 31, status: false, address: {}},
//         {id: 2, name: 'petya', age: 30, status: true, address: {}},
//         {id: 3, name: 'kolya', age: 29, status: true, address: {}},
//         {id: 4, name: 'olya', age: 28, status: false, address: {}},
//     ],
//
//     [
//         {user_id: 3, country: 'USA', city: 'Portland'},
//         {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//         {user_id: 2, country: 'Poland', city: 'Krakow'},
//         {user_id: 4, country: 'USA', city: 'Miami'},
//     ]
// );
//
// console.log(concatUsersArr);


// -----------------------------------------------Task 19-----------------------------------------------------------


// function createBlockOfRules(arr) {
//     let createWrap = document.createElement("div");
//     createWrap.setAttribute("id","wrap");
//     document.body.appendChild(createWrap);
//
//
//     for (let i = 0; i < arr.length; i++) {
//         let createBlockOfRule = document.createElement("div");
//         createBlockOfRule.classList.add("rules");
//         createBlockOfRule.classList.add("rules" + (i + 1));
//
//
//         let createHeadOfRule = document.createElement("h2");
//         let createRule = document.createElement("p");
//
//
//         createHeadOfRule.innerText = arr[i].title;
//         createRule.innerText = arr[i].body;
//
//         createBlockOfRule.appendChild(createHeadOfRule);
//         createBlockOfRule.appendChild(createRule);
//
//
//         createWrap.appendChild(createBlockOfRule);
//
//     }
//
// }
//
// createBlockOfRules([
//         {
//             title: 'Первое правило Бойцовского клуба.',
//             body: 'Никому не рассказывать о Бойцовском клубе.'
//         },
//         {
//             title: 'Второе правило Бойцовского клуба.',
//             body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//         },
//         {
//             title: 'Третье правило Бойцовского клуба.',
//             body: 'В схватке участвуют только двое.'
//         },
//         {
//             title: 'Четвертое правило Бойцовского клуба.',
//             body: 'Не более одного поединка за один раз.'
//         },
//         {
//             title: 'Пятое правило Бойцовского клуба.',
//             body: 'Бойцы сражаются без обуви и голые по пояс.'
//         },
//         {
//             title: 'Шестое правило Бойцовского клуба.',
//             body: 'Поединок продолжается столько, сколько потребуется.'
//         },
//         {
//             title: 'Седьмое правило Бойцовского клуба.',
//             body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//         },
//         {
//             title: 'Восьмое и последнее правило Бойцовского клуба.',
//             body: 'Новичок обязан принять бой.'
//         },
//
//     ]
// );

