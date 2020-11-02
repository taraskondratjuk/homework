// -------------------------------------------------Task 1-----------------------------------------------------
// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно
// присутствовать только 1 раз в одном объекте )

// let car = {brand: "BMW", model: "x5", color: "Red", numberOfDoor: 4, price: 30000};
// let table = {height: 100, width: 150, material: "wood", NumberOfLeg: 4};
// let dog = {name: "Rick", age: 3, breed: "Labrador"};
// let human = {sex: "Male", hairColor: "Red", eyesColor: "Blue", weight: 70};
// let bus = {numberOfWheel: 6, numberOfPassenger: 50, numberOfFloor: 1, conditioner: true}


// -------------------------------------------------Task 2-----------------------------------------------------
// // - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний
// объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

// let woman = {name: "Diana", age: 25, brother: {name: "Ivan", age: 22}, pets: ["cat", "dog"]};
// let man = {name: "Taras", hobbies: ["fishing", "football"], children: {name: "Natalia", age: 2}};
// let driver = {name: "Igor", drivingLicense: ["A", "A1", "B", "C"], wife: {name: "Katia", age: 36}};
// let cars = {model: "Audi", color: ["Red", "Black", "Green"], owner: {name: "Taras", age: 25}};
// let phone = {brand: "Samsung", price: ["100 USD", "90 EUR", "2800 UAH"], costumer: {name: "Ira", age: 19}};

// -------------------------------------------------Task 3--------------------------------------------------------
// - При помощи for in вывести все ключи всех объектов из задания 1 и 2

// for (let count in car) {
//     console.log(count);
// }

// for (let count in table) {
//     console.log(count);
// }
//
// for (let count in dog) {
//     console.log(count);
// }
//
// for (let count in human) {
//     console.log(count);
// }
//
// for (let count in bus) {
//     console.log(count);
// }
//
// for (let count in woman) {
//     console.log(count);
// }
//
// for (let count in man) {
//     console.log(count);
// }
//
// for (let count in driver) {
//     console.log(count);
// }
//
// for (let count in cars) {
//     console.log(count);
// }
//
// for (let count in phone) {
//     console.log(count);
// }
//

// -----------------------------------------------------Task 4--------------------------------------------------------
// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

// console.log(Object.keys(car));
// console.log(Object.keys(table));
// console.log(Object.keys(dog));
// console.log(Object.keys(human));
// console.log(Object.keys(bus));
// console.log(Object.keys(woman));
// console.log(Object.keys(man));
// console.log(Object.keys(driver));
// console.log(Object.keys(cars));
// console.log(Object.keys(phone));
//

// -----------------------------------------------------Task 5--------------------------------------------------------
// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)

// let carsFirst = [
//     cars = {model: "Audi", color: "Red", age: 2010, power: 200},
//     cars = {model: "BMW", color: "Blue", age: 2014, power: 250},
//     cars = {model: "Pontiac", color: "Yellow", age: 1998, power: 450},
//     cars = {model: "VAZ", color: "Black", age: 2001, power: 80},
//     cars = {model: "Lanos", color: "Pink", age: 2009, power: 95},
//     cars = {model: "Skoda", color: "White", age: 2015, power: 130},
//     cars = {model: "Opel", color: "Darkblue", age: 2018, power: 150},
//     cars = {model: "Bugatti", color: "Purple", age: 2019, power: 600},
//     cars = {model: "Nissan", color: "Green", age: 2015, power: 950},
//     cars = {model: "Tavria", color: "Brown", age: 2005, power: 65},
// ];

// -----------------------------------------------------Task 6--------------------------------------------------------
// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)

// let cities = [
//     cities = {name: "Lviv", country: "Ukraine", numberOfPeople: 456456},
//     cities = {name: "London", country: "UK", numberOfPeople: 46546545},
//     cities = {name: "Paris", country: "France", numberOfPeople: 98984516},
//     cities = {name: "Barcelona", country: "Spain", numberOfPeople: 4564564587},
// ];


// -----------------------------------------------------Task 7--------------------------------------------------------
// Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель
// является отдельным объектом с полями имя, возраст, пол, стаж.

// let carsSecond = [
//
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
//
// ];

// -----------------------------------------------------Task 8--------------------------------------------------------
// - проитерировать каждый массив из задания 5,6,7 при помощи while.

// let countCars = 0;
// while (countCars < carsFirst.length) {
//     console.log(carsFirst[countCars]);
//     countCars++;
// }

// let countCities = 0;
// while (countCities < cities.length) {
//     console.log(cities[countCities]);
//     countCities++;
// }

// let countCarsSecond = 0;
// while (countCarsSecond < carsSecond.length) {
//     console.log(carsSecond[countCarsSecond]);
//     countCarsSecond++;
//}

// -----------------------------------------------------Task 9--------------------------------------------------------
// - проитерировать каждый массив из задания 5,6,7 при помощи for.

// for (let i = 0; i < carsFirst.length; i++) {
//     console.log(carsFirst[i]);
// }

// for (let i = 0; i < cities.length; i++) {
//     console.log(cities[i]);
// }

// for (let i = 0; i < carsSecond.length; i++) {
//     console.log(carsSecond[i]);
// }

// -----------------------------------------------------Task 10--------------------------------------------------------
// - проитерировать каждый массив из задания 5,6,7 при помощи for of.

// for (let count of carsFirst){
//     console.log(count);
// }

// for (let count of cities){
//     console.log(count);
// }

// for(let count of carsSecond){
//     console.log(count)
// }

// -----------------------------------------------------Task 11--------------------------------------------------------
// - взять объекты из задания 1 и превратить каждый в json.

// let carCopy = JSON.stringify(car);
// let tableCopy = JSON.stringify(table);
// let dogCopy = JSON.stringify(dog);
// let humanCopy = JSON.stringify(human);
// let busCopy = JSON.stringify(bus);

// -----------------------------------------------------Task 12--------------------------------------------------------
// - взять json из задания 11 и превратить их обратно в объекты.

// let returnToCar = JSON.parse(carCopy);
// let returnToTable = JSON.parse(tableCopy);
// let returnToDog = JSON.parse(dogCopy);
// let returnToHuman = JSON.parse(humanCopy);
// let returnToBus = JSON.parse(busCopy);

// -----------------------------------------------------Task 13--------------------------------------------------------
// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .

// let carsFirst = [
//     cars = {model: "Audi", color: "Red", age: 2010, power: 200},
//     cars = {model: "BMW", color: "Blue", age: 2014, power: 250},
//     cars = {model: "Pontiac", color: "Yellow", age: 1998, power: 450},
//     cars = {model: "VAZ", color: "Black", age: 2001, power: 80},
//     cars = {model: "Lanos", color: "Pink", age: 2009, power: 95},
//     cars = {model: "Skoda", color: "White", age: 2015, power: 130},
//     cars = {model: "Opel", color: "Darkblue", age: 2018, power: 150},
//     cars = {model: "Bugatti", color: "Purple", age: 2019, power: 600},
//     cars = {model: "Nissan", color: "Green", age: 2015, power: 950},
//     cars = {model: "Tavria", color: "Brown", age: 2005, power: 65},
// ];
//
//
// for (let i = 0; i < carsFirst.length; i++) {
//    JSON.stringify(carsFirst[i]);
// }
//

// -----------------------------------------------------Task 14--------------------------------------------------------
// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

// let cities = [
//     cities = {name: "Lviv", country: "Ukraine", numberOfPeople: 456456},
//     cities = {name: "London", country: "UK", numberOfPeople: 46546545},
//     cities = {name: "Paris", country: "France", numberOfPeople: 98984516},
//     cities = {name: "Barcelona", country: "Spain", numberOfPeople: 4564564587},
// ];
//
// for (let i = 0; i < cities.length; i++) {
//     JSON.stringify(cities[i]);
// }


// -----------------------------------------------------Task 15--------------------------------------------------------
// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

// let carsSecond = [
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
// ];
//
// let carsSecondCopy = [];
// for (let i = 0; i < carsSecond.length; i++) {
//     carsSecondCopy += JSON.stringify(carsSecond[i]);
// }


// -----------------------------------------------------Task 16--------------------------------------------------------
//     - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
//     Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills

// let users = [
//     {user: "Taras", age: 22, skills : ["JS", "Java", "English", "JSON"]},
//     {user: "Ivan", age: 19, skills : ["Ubuntu", "Java", "React", "JQuery"]},
//     {user: "Ira", age: 25, skills : ["Windows 10", "Windows 7", "Ubuntu", "Office", "Borscht"]},
//     {user: "Halia", age: 45, skills : ["Deruny", "Java", "React", "Ubuntu", "Drive license"]},
// ];
//
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
//     console.log(users[i].skills);
//
// }

// -----------------------------------------------------Task 17--------------------------------------------------------
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
//     Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills
// всех пользователей в отедльный массив

// let users = [
//     {user: "Taras", age: 22, skills : ["JS", "Java", "English", "JSON"]},
//     {user: "Ivan", age: 19, skills : ["Ubuntu", "Java", "React", "JQuery"]},
//     {user: "Ira", age: 25, skills : ["Windows 10", "Windows 7", "Ubuntu", "Office", "Borscht"]},
//     {user: "Halia", age: 45, skills : ["Deruny", "Java", "React", "Ubuntu", "Drive license"]},
// ];
//
// let allUsersSkills=[];
// for (let i = 0; i < users.length; i++) {
//     allUsersSkills[i]=users[i].skills;
// }

// -----------------------------------------------------Task 18--------------------------------------------------------
// - За допомогою 2х циклів  проітеррувати  даний масив і масив кожного об'єкта.

// let users = [
//     {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//     {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
// ];
//
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
//     for (let j = 0; j < users[i].skills.length; j++) {
//         console.log(users[i].skills[j]);
//     }
// }


// -----------------------------------------------------Task 19--------------------------------------------------------
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];


// let allUsersAddresses = [];
//
// for (let i = 0; i < users.length; i++) {
//     allUsersAddresses[i] = (users[i].address);
// }
// console.log(allUsersAddresses);


// -----------------------------------------------------Task 20--------------------------------------------------------
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги
// document.createElement. Всі данні в одному блоці.



// for (let i = 0; i < users.length; i++) {
//     let user = document.createElement("div");
//     user.innerText = "user: " + users[i].name + "," + " age: " + users[i].age + "," + " status: " + users[i].status
//         + "," + " address: " + users[i].address + ",";
//
// }


// -----------------------------------------------------Task 20--------------------------------------------------------
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
//     розділивши всі властивості по своїм блокам (div>div*4)

// for (let i = 0; i < users.length; i++) {
//     let user = document.createElement("div");
//
//
//         let userName = document.createElement("div");
//         userName.innerHTML = `name: ${users[i].name}`;
//
//         let userAge = document.createElement("div");
//         userAge.innerText = `age: ${users[i].age} `;
//
//         let userStatus = document.createElement("div");
//         userStatus.innerText = `status: ${users[i].status} `;
//
//         let userAddress = document.createElement("div");
//         userAddress.innerText = `address: ${users[i].address} `;
//
// }