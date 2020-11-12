// ----------------------------------------------------Task 1-----------------------------------------------------
// - создать массив с 20 числами.
// -- при помощи метода sort и колбека  отсортировать массив.

// let numbers = [-2, 8, 66, -88, 77, 5, 0, 6, 1784, -235, 7, 14, 63, 78, -3, -60, 45, 32, -41, 7];

// let sortNumbers = numbers.sort((a, b) => a - b);
// console.log(sortNumbers);


// ----------------------------------------------------Task 2-----------------------------------------------------
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.


// let sortNumbersReverse = numbers.sort((a, b) => b - a);
// console.log(sortNumbersReverse)


// ----------------------------------------------------Task 3-----------------------------------------------------
// -- при помощи filter получить числа кратные 3


// let numbersMultiple3 = numbers.filter((value, index) => {
//     if (value % 3 === 0) {
//         return value;
//     }
// });
// console.log(numbersMultiple3);


// ----------------------------------------------------Task 4-----------------------------------------------------
// -- при помощи filter получить числа кратные 10


// let numbersMultiple10 = numbers.filter((value, index) => {
//     if (value % 10 === 0) {
//         return value
//     }
// });
// console.log(numbersMultiple10);


// ----------------------------------------------------Task 5-----------------------------------------------------
// -- перебрать (проитерировать) массив при помощи foreach()


// let numbersIter = numbers.forEach(value => console.log(value));
// console.log(numbersIter);


// ----------------------------------------------------Task 6-----------------------------------------------------
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше


// let numbersIncrease3 = numbers.map((value, index) => value * 3);
// console.log(numbersIncrease3);


// ----------------------------------------------------Task 7-----------------------------------------------------
// - создать массив со словами на 15-20 элементов.
// -- отсортировать его по алфавиту в восходящем порядке.

// let words = ["car", "man", "woman", "summer", "winter", "center", "computer", "wine", "beer", "meat", "coffee", "tea", "salt", "sugar", "mouse", "dog", "animal"];


// let sortWords = words.sort((a, b) => {
//     if (a < b) {
//         return -1;
//     }
// });
// console.log(sortWords);

// ----------------------------------------------------Task 8-----------------------------------------------------
// -- отсортировать его по алфавиту  в нисходящем порядке.


// let sortWordsReverse = words.sort((a, b) => {
//     if (b < a) {
//         return -1;
//     }
// });
//
// console.log(sortWordsReverse);


// ----------------------------------------------------Task 9-----------------------------------------------------
// -- отфильтровать слова длиной менее 4х символов


// let wordsLengthLess4 = words.filter((value, index) => value.length < 4);
// console.log(wordsLengthLess4);


// ----------------------------------------------------Task 10-----------------------------------------------------
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

// let addSymbolToWords = words.map((value, index) => value + "!");
// console.log(addSymbolToWords);


// ----------------------------------------------------Task 11-----------------------------------------------------
// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :

// - відсортувати його за  віком (зростання , а потім окремо спадання)

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


// let sortAge = users.sort((a, b) => a.age - b.age);
// console.log(sortAge);

// let sortAgeRevers = users.sort((a, b) => b.age - a.age);
// console.log(sortAgeRevers);


// ----------------------------------------------------Task 11-----------------------------------------------------
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// let sortLengthName = users.sort((a, b) => {
//     if (a.name.length < b.name.length) {
//         return -1;
//     }
// });
//
// console.log(sortLengthName);


// let sortLengthNameReverse = users.sort((a, b) => {
//     if (b.name.length < a.name.length) {
//         return -1;
//     }
// });
// console.log(sortLengthNameReverse);

// ----------------------------------------------------Task 12-----------------------------------------------------
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)


// let usersCopy = JSON.stringify(users);
// let usersParse = JSON.parse(usersCopy);
//
// let addUsersID = usersParse.map((value, index) => {
//     value["id"] = Math.round(Math.random() * (30 - 1) + 1);
//     return value;
// });
// console.log(addUsersID)
// console.log(users)


// ----------------------------------------------------Task 13-----------------------------------------------------
// - відсортувати його за індентифікатором


// let sortUsersParseId = addUsersID.sort((a, b) => a.id - b.id);
// console.log(sortUsersParseId)

// let sortUsersParseIdReverse = addUsersID.sort((a, b) => b.id - a.id);
// console.log(sortUsersParseIdReverse);


// ----------------------------------------------------Task 14-----------------------------------------------------
// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації,
// що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі


// class Car {
//     constructor(producer, volume, owner, price, yearOfRealise) {
//         this.producer = producer;
//         this.volume = volume;
//         this.owner = owner;
//         this.price = price;
//         this.yearOfRealise = yearOfRealise;
//     }
//
//     repairsEngine() {
//         this.volume += this.volume * 0.1;
//         this.price += this.price * 0.05;
//     }
//
//     goToCurse(owner) {
//         owner.experience += 1;
//     }
//
// }
//
// let audi = new Car("Audi", 2, {name: "Ivan", age: 21, experience: 5}, 10000, 2008);
// let bmw = new Car("BMW", 3, {name: "Nazar", age: 26, experience: 2}, 12500, 2011);
// let mercedes = new Car("Mercedes", 2.5, {name: "Roman", age: 19, experience: 1}, 13250, 2007);
// let renault = new Car("Renault", 1.6, {name: "Mukola", age: 26, experience: 7}, 7500, 2009);
// let mazda = new Car("Mazda", 2.1, {name: "Ira", age: 18, experience: 1}, 6500, 2005);
// let dacia = new Car("Dacia", 1.4, {name: "Marichka", age: 23, experience: 3}, 5250, 2010);
// let porsche = new Car("Porsche", 2.5, {name: "Diana", age: 26, experience: 6}, 30000, 2015);
// let lamborghini = new Car("Lamborghini", 3.5, {name: "Taras", age: 27, experience: 1}, 85000, 2019);
//
// let cars = [audi, bmw, mercedes, renault, mazda, dacia, porsche, lamborghini];
//
//
// // Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// let repairsEngine = cars.map((value, index) => {
//     if (index % 2 !== 0) {
//         value.repairsEngine();
//     }
//     return value
// });
// console.log(repairsEngine);
//
//
// // Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації,
// let reviewExperienceOwner = cars.map((value, index) => {
//     if (value.owner.experience < 5 && value.owner.age > 25) {
//         value.goToCurse(value.owner);
//     }
//     return value;
// })
//
// console.log(reviewExperienceOwner)
//
//
// // Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
// let getSumForBuyAllCars = cars.reduce((accumulator, currentValue) => {
//   return accumulator+currentValue.price;
// },0);
// console.log(getSumForBuyAllCars)