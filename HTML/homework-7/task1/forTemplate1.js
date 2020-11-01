// ----------------------------------------------------Task 1----------------------------------------------------------
// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу

// let dog = {
//     name: "Barsik",
//     age: 2,
//     color: "brown",
//     breed: "Labrador",
//     height: 50,
//     weight: 25
// };
//
// let human = {
//     name: "Viktor",
//     age: 21,
//     height: 180,
//     weight: 65,
//     skinColor: "white"
// };
//
// let car = {
//     name: "Audi",
//     model: "A6",
//     color: "red",
//     engine: "V8",
//     numberOfDoor: 4,
//     price: 30000,
//     yearOfCarManufacture: 2018
// };
//
// let flat = {
//     numberOfRoom: 3,
//     fullSquareOfFlat: 70,
//     numberOfFlor: 5,
//     isBalcony: true,
//     squareOfKitchen: 10,
//     squareOfBathroom: 5,
//     squareFirstRoom: 16.6,
//     squareSecondRoom: 16.6,
//     squareThirdRoom: 16.6,
// };
//
// let book = {
//     name: "Mountains",
//     color: "black",
//     numberOfList: 325,
//     isEBook: false,
//     price: 250
// }


// ----------------------------------------------------Task 2----------------------------------------------------------
// -- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів

// let dogs = ["Barsik", "Charli", "Muhtar", "Tarzan", "Jek"];
// console.log(dogs);
//
// let people = ["Taras", "Nazar", "Oleg", "Viktor", "Diana"];
// console.log(people);
//
// let cars = ["Audi", "BMW", "Bugatti", "VAZ", "Zaporo*ez"];
// console.log(cars);

// ----------------------------------------------------Task 3----------------------------------------------------------
// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка
//

// let house = {
//     fullSquareOfFlat: {firstRoom: 20, secondRoom: 25, thirdRoom: 30},
//     ownerHouse: {nameFirstOwner: "Ivan", nameSecondOwner: "Taras", nameThirdOwner: "Maria",},
//     houseColor: "White",
//     housePrice: 100000,
//     isPets: true,
//     pets: ["Cat", "Dog", "Perot"],
// }
//
// let driver = {
//     person: {name: "Oleg", age: 28, isMarried: true, isChildren: true},
//     driveCategory: ["A", "A1", "B", "B1"],
//     experience: 5,
//     isHaveOwnerCar: true,
//     isReadyToWorkOnHoliday: false,
// }
//
//
// let table = {
//     color: "brown",
//     material: "wood",
//     size: [height = 100, diamert = 150],
//     personOnTheTable: {
//         firstPeople: {name: "Maria", age: 21},
//         secondPeople: {name: "Taras", age: 19},
//         thirdPeople: {name: "Nazar", age: 25}
//     },
//     quantityOfPeople: 4,
// }
//
// let toy = {
//     color: "Red",
//     size: [height = 20, width = 20],
//     material: "plastic",
//     price: 25,
//     forWho: {
//         genderFirst: {gender: "Boy", overAge: 3},
//         genderSecond: {gender: "Girl", overAge: 5},
//     }
// }
//
// let bag = {
//     size: [height = 10, width = 15],
//     material: "leather",
//     numberOfBranch: 5,
//     price: 50,
//     forWho: {
//         genderFirst: {gender: "Male", color: "Black"},
//         genderSecond: {gender: "Female", color: "Pink"},
//     }
// }
//

// ----------------------------------------------------Task 4----------------------------------------------------------
// Дан массив:
//     let users = [
//         {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true},
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name: 'max', age: 31, status: true}
//     ];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// - статус Максима
// - ім'я передостаннього об'єкту
// - ім'я третього об'єкта
// - вік Олега
// - вік Олі
// - вік + ім'я 5го об'єкта
// - вік + сатус Анни
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// console.log(users[7].status);
// console.log(users[4].status);
// console.log(users[9].name);
// console.log(users[2].name);
// console.log(users[6].age);
// console.log(users[9].age);
// console.log(users[4].age, users[4].name);
// console.log(users[5].age, users[5].status);

// ----------------------------------------------------Task 5----------------------------------------------------------
// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// - отримує текст з блоку з id "rules"
// - замініть текст параграфа з id 'content' на будь-який інший
// - замініть текст параграфа з id 'rules' на будь-який інший
// - змініть кожному елементу колір фону на червоний
// - змініть кожному елементу колір тексту на синій
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// - отримати всі елементи з класом fc_rules
// - поміняти колір тексту у всіх елементів fc_rules на червоний


// let getTextIDContent = document.getElementById("content");
// getTextIDContent.innerText = "Hello I change this text";
//
// let getTextIDRules = document.getElementById("rules");
// getTextIDRules.innerText = "Никаких правил больше нет";
//
// document.body.style.backgroundColor = "red";
// document.body.style.color = "blue";

// let getAllElementIDRules = document.getElementById("rules");
// console.log(getAllElementIDRules);

// let getAllElementsFcRules = document.getElementsByClassName("fc_rules");
// console.log(getAllElementsFcRules);
//
// for (let count of getAllElementsFcRules) {
//     count.style.color = "red";
// }




