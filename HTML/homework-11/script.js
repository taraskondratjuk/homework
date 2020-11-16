// ------------------------------------------------Task 1----------------------------------------------------
// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let createDivElement = document.createElement("text");
// createDivElement.classList.add('id');
// createDivElement.style.display="flex"
// createDivElement.style.margin="25px"
//
// let createText = document.createElement("p");
// createText.innerText = "This is homework-10";
// createText.style.marginTop="5px";
// createText.style.marginLeft="500px"
// createText.style.marginRight="20px"
//
//
// let createButton=document.createElement("button");
// createButton.style.height="25px";
// createButton.style.width="100px";
// createButton.appendChild(document.createTextNode("Delete"))
//
// createDivElement.appendChild(createText);
// createDivElement.appendChild(createButton);
//
// document.body.appendChild(createDivElement);
//
// createButton.addEventListener("click", function () {
//     createDivElement.remove()
// });


// ------------------------------------------------Task 2----------------------------------------------------
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.


// let createBottom = document.createElement("button")
// createBottom.appendChild(document.createTextNode("Кнопка"))
// createBottom.style.backgroundColor = "black";
// createBottom.style.color = "red";
// createBottom.style.marginLeft = "600px";
//
// document.body.appendChild(createBottom);
//
// createBottom.addEventListener("click", function () {
//     createBottom.style.display = "none";
// })


// ------------------------------------------------Task 3----------------------------------------------------
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з
// інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let createBlockInput = document.createElement("div");
// createBlockInput.style.display = "flex";
// createBlockInput.style.marginTop = "25px"
//
// let createNameOfInput = document.createElement("p");
// createNameOfInput.innerText = "Введіть сюди свой вік :";
// createNameOfInput.style.fontSize = "18px";
//
// createNameOfInput.style.marginLeft = "400px"
//
// createBlockInput.appendChild(createNameOfInput);
//
// let createInput = document.createElement("input");
// createBlockInput.appendChild(createInput);
// createInput.style.border = "2px solid black";
// createInput.style.color = "black"
//
// let createButton = document.createElement("button")
// createBlockInput.appendChild(createButton);
// createButton.appendChild(document.createTextNode("OK"));
// createButton.style.width = "55px";
// createButton.style.height = "56px";
// createButton.style.marginLeft = "15px";
// createButton.style.backgroundColor = "green"
// createButton.style.fontSize = "20px"
//
// document.body.appendChild(createBlockInput)
//
//
// createButton.addEventListener("click", function () {
//     if (createInput.value < 18) {
//         alert("Ваш вік меньше 18, нажаль Ви не можете зайти на наш сайт!!!!");
//     } else {
//         alert(`Вітаю))!!!. Вам ${createInput.value} років і ви можете зайти на наш сайт`);
//     }
// });
//

// ------------------------------------------------Task 4----------------------------------------------------
// - Создайте меню, которое раскрывается/сворачивается при клике

// let createBlockMenu = document.createElement("div");
// createBlockMenu.style.display = "flex";
// createBlockMenu.style.justifyContent = "center";
// createBlockMenu.style.flexDirection = "column";
//
//
// let mainMenuElement = document.createElement("div");
// mainMenuElement.style.display = "flex";
// mainMenuElement.style.justifyContent = "center";
//
// let createMainElementMenu = document.createElement("button");
//
// createMainElementMenu.appendChild(document.createTextNode("Меню"));
//
// createMainElementMenu.style.height = "50px";
// createMainElementMenu.style.width = "150px";
//
// createMainElementMenu.style.fontSize = "20px"
// createMainElementMenu.style.backgroundColor = "green"
//
//
// mainMenuElement.appendChild(createMainElementMenu);
// createBlockMenu.appendChild(mainMenuElement)
//
//
// document.body.appendChild(createBlockMenu)
//
//
// let menuElements = ["Програма развития", "Тренажоры", "Соревнования", "Курсы", "Статистика", "Рейтинг"];
//
// let count = 2;
//
// mainMenuElement.addEventListener("click", function () {
//
//
//     if (count % 2 === 0) {
//         for (let i = 0; i < menuElements.length; i++) {
//
//             let createMenuElement = document.createElement("div");
//             createMenuElement.classList.add(`${i}`);
//             createMenuElement.style.display = "flex";
//             createMenuElement.style.justifyContent = "center";
//
//             let createFirstElementMenu = document.createElement("button");
//
//             createFirstElementMenu.appendChild(document.createTextNode(menuElements[i]));
//
//             createFirstElementMenu.style.height = "50px";
//             createFirstElementMenu.style.width = "150px";
//
//             createFirstElementMenu.style.fontSize = "20px"
//             createFirstElementMenu.style.backgroundColor = "green"
//
//
//             createMenuElement.appendChild(createFirstElementMenu);
//             createBlockMenu.appendChild(createMenuElement)
//
//
//         }
//         count++;
//
//     } else {
//         for (let i = 0; i < menuElements.length; i++) {
//             let getElement = document.getElementsByClassName(`${i}`);
//             for (let j = 0; j < getElement.length; j++) {
//                 getElement[j].remove()
//             }
//         }
//         count++;
//     }
//
// })


// ------------------------------------------------Task 5----------------------------------------------------
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

// let comentsList = [
//     {title: "Taras", body: "Всім привіт"},
//     {title: "Ivan", body: "Привіт, хто вчора дивився футбол"},
//     {title: "Nazar", body: "Класно вчора наші зіграли"},
//     {title: "Unknown", body: "Могли і краще("},
//     {title: "Ira", body: "Вийди зіграй краще)))"},
// ];
//
// let createBlockComents = document.createElement("div");
// document.body.appendChild(createBlockComents);
// document.body.style.backgroundColor = ""
//
//
// for (let i = 0; i < comentsList.length; i++) {
//     let user = document.createElement("p");
//     user.style.fontSize = "20px"
//     user.style.color = "red"
//
//     let userComent = document.createElement("p");
//     userComent.style.fontFamily = "cursive"
//     userComent.style.marginLeft = "15px"
//     userComent.style.color = "blue"
//     userComent.style.display = "flex";
//
//
//     let buttom = document.createElement("button");
//
//     buttom.appendChild(document.createTextNode("Сховати коментар"))
//     buttom.style.marginLeft = "20px"
//
//     user.innerText = comentsList[i].title;
//     userComent.innerText = comentsList[i].body;
//
//
//     createBlockComents.appendChild(user);
//     createBlockComents.appendChild(userComent)
//     user.appendChild(buttom)
//
//     buttom.addEventListener("click",function (){
//         userComent.style.display="none"
//     })
//
// }


// ------------------------------------------------Task 5----------------------------------------------------
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.


// let getButton = document.querySelector("button")
// getButton.addEventListener("click", function () {
//     let getFirstNameFirstForm = document.getElementById("form1Firstname").value;
//     let getLastNameFirstForm = document.getElementById("form1Lastname").value;
//     console.log("Імя : " + getFirstNameFirstForm + "      Фамілія : " + getLastNameFirstForm);
//     console.log("---------------------------------------------------------")
//     let getFirstNameSecondForm = document.getElementById("form2Firstname").value;
//     let getLastNameSecondForm = document.getElementById("form2Lastname").value;
//     console.log("Імя : " + getFirstNameSecondForm + "      Фамілія : " + getLastNameSecondForm);
// })


// ------------------------------------------------Task 6----------------------------------------------------
// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.


// function createTable(numberOfLine, numberOfCells, element) {
//
//     let createTableInBody = document.createElement("div");
//     createTableInBody.classList.add("table");
//     document.body.appendChild(createTableInBody);
//
//     for (let i = 0; i < numberOfLine; i++) {
//
//         let createLine = document.createElement("tr");
//         createTableInBody.appendChild(createLine)
//
//         for (let j = 0; j < numberOfCells; j++) {
//             let createCell = document.createElement("td")
//             createCell.innerText = element;
//             createCell.style.border = "2px solid blue";
//             createCell.style.padding = "10px"
//             createLine.appendChild(createCell);
//         }
//     }
// }
//
//
// createTable(21, 3, "Hello JS");


// ------------------------------------------------Task 7----------------------------------------------------
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)


// let getStartCreateTable = document.querySelector("button");
//
// getStartCreateTable.addEventListener("click", function () {
//     let numberOfLines = document.getElementById("first-form").value;
//     let numberOfCell = document.getElementById("second-form").value;
//     let element = document.getElementById("third-form").value;
//     console.log(numberOfLines)
//     console.log(numberOfCell)
//     console.log(element)
//
//     let createPlaceOfTable = document.createElement("div");
//     document.body.appendChild(createPlaceOfTable)
//
//     let createTable = document.createElement("table");
//     createPlaceOfTable.appendChild(createTable);
//
//
//     for (let i = 0; i < numberOfLines; i++) {
//
//         let createLine = document.createElement("tr")
//         createTable.appendChild(createLine);
//
//         for (let j = 0; j < numberOfCell; j++) {
//             let createCell = document.createElement("td");
//             createCell.innerText = element;
//             createCell.style.border = "2px solid blue";
//             createLine.appendChild(createCell);
//         }
//     }
// })

// ------------------------------------------------Task 8----------------------------------------------------
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.


// let imagesArr = [
//     {id: 1, img_url: "images/1.jpg"},
//     {id: 2, img_url: "images/2.jpg"},
//     {id: 3, img_url: "images/3.jpg"},
//     {id: 4, img_url: "images/4.jpg"},
//     {id: 5, img_url: "images/5.jpg"},
//     {id: 6, img_url: "images/6.jpg"},
//     {id: 7, img_url: "images/7.jpg"},
//     {id: 8, img_url: "images/8.jpg"},
//     {id: 9, img_url: "images/9.jpg"},
//     {id: 10, img_url: "images/10.jpg"},
// ];
//
//
// let getLeftButton = document.getElementById("left")
//
// let getRightButton = document.getElementById("right")
//
// let getCenterBlock = document.getElementById("center");
//
// let img = document.createElement("img");
//
// let getMainImg = document.getElementById("main-image");
//
// let leftCount = 9;
// let rightCount = 0;
//
//
// console.log(leftCount);
// console.log(rightCount);
//
// getLeftButton.addEventListener("click", function () {
//     getMainImg.remove();
//
//     leftCount--;
//
//
//     if (leftCount < 1) {
//         leftCount = 9;
//     }
//
//     img.style.height = "935px";
//     img.style.width = "1610px";
//     img.src = imagesArr[leftCount].img_url;
//     getCenterBlock.appendChild(img);
// })
//
// getRightButton.addEventListener("click", function () {
//     getMainImg.remove();
//
//     rightCount++;
//
//
//     if (rightCount > 9) {
//         rightCount = 0;
//     }
//
//     img.style.height = "935px";
//     img.style.width = "1610px";
//     img.src = imagesArr[rightCount].img_url;
//     getCenterBlock.appendChild(img);
// })


// ------------------------------------------------Task 9----------------------------------------------------
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку


// let arrBadWords = ["смерть", "боль", "война", "тоска", "говно", "вонь", "болезнь", "печаль", "рана'," +
// "горе", "уныние", "бомба", "кошмар", "обида", "жопа", "водка", "страдание", "ложь", "обман", "тревога", "развод",
//     "убийство", "зло", "беда", "скука", "политика", "могила", "безысходность", "враг", "сигарета", "гроб", "крик",
//     "заболевание", "злоба", "гнев", "утрата", "проститутка", "дерьмо", "рвота", "страх", "алкоголь", "безвыходность",
//     "насилие", "гной", "бухло", "яд", "ужас", "пьянство", "паника", "мордобой", "грязь", "грипп", "апатия",
//     "труп", "одиночество", "сирота", "агрессия", "опечатка", "злость", "тупость", "какашка", "мышеловка", "тупица",
// ];
//
// let getButton = document.getElementById("button");
// getButton.addEventListener("click", function () {
//     let getInputWord = document.getElementById("bad-words").value;
//     arrBadWords.forEach((value, index) => {
//         if (getInputWord.toLowerCase() === value) {
//             alert("Ви ввели погане слово!!!!  " + value)
//         }
//     })
// })


// ------------------------------------------------Task 10----------------------------------------------------
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     alert("Ви ввели погане слово!!!!  " + value)
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку


// let arrBadWords = ["смерть", "боль", "жалкий", "война", "тоска", "говно", "вонь", "болезнь", "печаль", "рана'," +
// "горе", "уныние", "бомба", "кошмар", "обида", "жопа", "водка", "страдание", "ложь", "обман", "тревога", "развод",
//     "убийство", "зло", "беда", "скука", "политика", "могила", "безысходность", "враг", "сигарета", "гроб", "крик",
//     "заболевание", "злоба", "гнев", "утрата", "проститутка", "дерьмо", "рвота", "страх", "алкоголь", "безвыходность",
//     "насилие", "гной", "бухло", "яд", "ужас", "пьянство", "паника", "мордобой", "грязь", "грипп", "апатия",
//     "труп", "одиночество", "сирота", "агрессия", "опечатка", "злость", "тупость", "какашка", "мышеловка", "тупица",
// ];
//
// let getButton = document.getElementById("button");
// getButton.addEventListener("click", function () {
//     let getInputText = document.getElementById("bad-words").value;
//
//     let getInputWord = getInputText.split(" ");
//
//     for (let i = 0; i < arrBadWords.length; i++) {
//         for (let j = 0; j < getInputWord.length; j++) {
//             if (getInputWord[j].toLowerCase() === arrBadWords[i]) {
//                 alert("Ви ввели погане слово!!!!  " + getInputWord[j])
//             }
//         }
//     }
// })


// ------------------------------------------------Task 11----------------------------------------------------
// -- взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ


// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
//
// let getFilterByStatusFalse = document.getElementById("filterStatus");
// let getFilterByYear = document.getElementById("filterUnder29year");
// let getFilterByCity = document.getElementById("filterCityKiev")
//
// getFilterByStatusFalse.addEventListener("click", function () {
//     usersWithAddress.filter(value => {
//         if (!value.status) {
//             document.write(`id : ${value.id}, name : ${value.name}, age : ${value.age}, status : ${value.status},
//             address [ city : ${value.address.city}, street : ${value.address.street}, number : ${value.address.number} ]`);
//             document.write("<br>")
//         }
//     })
// })
//
//
// getFilterByYear.addEventListener("click", function () {
//     usersWithAddress.filter(value => {
//         if (value.age <= 29) {
//             document.write(`id : ${value.id}, name : ${value.name}, age : ${value.age}, status : ${value.status},
//             address [ city : ${value.address.city}, street : ${value.address.street}, number : ${value.address.number} ]`);
//             document.write("<br>")
//         }
//     })
// })
//
// getFilterByCity.addEventListener("click", function (){
//     usersWithAddress.filter(value => {
//         if(value.address.city==="Kyiv"){
//             document.write(`id : ${value.id}, name : ${value.name}, age : ${value.age}, status : ${value.status},
//             address [ city : ${value.address.city}, street : ${value.address.street}, number : ${value.address.number} ]`);
//             document.write("<br>")
//         }
//     })
// })
