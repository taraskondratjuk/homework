// ---------------------------------------------------Task 1--------------------------------------------------------
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }


// function CreateTagElement(tag, describeAction, attributesArr) {
//     this.tag = tag;
//     this.describeAction = describeAction;
//     this.attributesArr = attributesArr;
//
//     this.tagInfo = function () {
//         console.log("Назва тегу : " + this.tag);
//         console.log("---------------------------------------------------------------------");
//         console.log("Опис тегу : " + this.describeAction);
//         console.log("---------------------------------------------------------------------");
//         console.log("Декілька основних атрибутів тегу : ")
//         for (let atr in this.attributesArr) {
//             console.log(this.attributesArr[atr]);
//         }
//     }
// }


// Тeg <a>--------------------------------------------------------------------------------------------------------

// let tegName = "<a>";
//
// let tegDescribeAction = "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. " +
//     "В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется " +
//     "закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает" +
//     " на якорь, происходит переход к закладке внутри веб-страницы.";
//
// let tegAttributeArr = [
//     {coords: "Устанавливает координаты активной области."},
//     {download: "Предлагает скачать указанный по ссылке файл."},
//     {href: "Задает адрес документа, на который следует перейти."}
// ];
//
// let createAElement = new CreateTagElement(tegName, tegDescribeAction, tegAttributeArr);
// console.log(createAElement.tagInfo())


// Teg <div>-----------------------------------------------------------------------------------------------------

// let tegName = "<div>";
//
// let tegDescribeAction = "Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с " +
//     "целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый " +
//     "раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с" +
//     " именем селектора.\n" +
//     "\n" +
//     "Как и при использовании других блочных элементов, содержимое тега <div> всегда начинается с новой строки. После него " +
//     "также добавляется перенос строки."
//
// let tegAttributeArr = [
//     {align: "Задает выравнивание содержимого тега <div>."},
//     {title: "Добавляет всплывающую подсказку к содержимому."}
// {id: "Указывает имя стилевого идентификатора."}
// ];
//
// let createAElement = new CreateTagElement(tegName, tegDescribeAction, tegAttributeArr);
// console.log(createAElement.tagInfo())


// Teg <h1>-----------------------------------------------------------------------------------------------------

// let tegName = "<h1>";
//
// let tegDescribeAction = "HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность " +
//     "секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня." +
//     " <h1>Заголовок первого уровня</h1>"
//
// let tegAttributeArr = [
//     {align: "Определяет выравнивание заголовка."},
//     {class: "Определяет имя класса, которое позволяет связать тег со стилевым оформлением."},
//     {style: "Применяется для определения стиля элемента с помощью правил CSS."}
// ];
//
// let createAElement = new CreateTagElement(tegName, tegDescribeAction, tegAttributeArr);
// console.log(createAElement.tagInfo())


// // Teg <span>---------------------------------------------------------------------------------------------------
//
// let tegName = "<span>";
//
// let tegDescribeAction = "Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных " +
//     "элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других " +
//     "тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) можно изменить цвет и размер первой" +
//     " буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста. Чтобы не описывать" +
//     " каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class" +
//     " или id с именем селектора.";
//
// let tegAttributeArr = [
//     {dir: "Задает направление и отображение текста — слева направо или справа налево."},
//     {class: "Определяет имя класса, которое позволяет связать тег со стилевым оформлением."},
//     {style: "Применяется для определения стиля элемента с помощью правил CSS."}
// ];
//
// let createAElement = new CreateTagElement(tegName, tegDescribeAction, tegAttributeArr);
// console.log(createAElement.tagInfo())


// Teg <input>-------------------------------------------------------------------------------------------------
//
// let tegName = "<input>";
//
// let tegDescribeAction = "Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные" +
//     " элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания" +
//     " текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент <input> не требуется помещать внутрь" +
//     " контейнера <form>, определяющего форму, но если введенные пользователем данные должны быть отправлены на сервер," +
//     " где их обрабатывает серверная программа, то указывать <form> обязательно. То же самое обстоит и в случае обработки" +
//     " данных с помощью клиентских приложений, например, скриптов на языке JavaScript."+"\n"+
//
//     "Основной атрибут тега <input>, определяющий вид элемента — type. Он позволяет задавать" +
//     " следующие элементы формы: текстовое поле (text), поле с паролем (password), переключатель (radio)," +
//     " флажок (checkbox), скрытое поле (hidden), кнопка (button), кнопка для отправки формы (submit), кнопка для" +
//     " очистки формы (reset), поле для отправки файла (file) и кнопка с изображением (image). Для каждого элемента существует" +
//     " свой список атрибутов, которые определяют его вид и характеристики. Кроме того, в HTML5 добавлено еще более десятка новых элементов.";
//
// let tegAttributeArr = [
//     {type: "Сообщает браузеру, к какому типу относится элемент формы."},
//     {value: "Значение элемента."},
//     {form: "Связывает поле с формой по её идентификатору."}
// ];
//
// let createAElement = new CreateTagElement(tegName, tegDescribeAction, tegAttributeArr);
// console.log(createAElement.tagInfo())


// Teg <form>----------------------------------------------------------------------------------------------------
//
// let tegName = "<form>";
//
// let tegDescribeAction = "Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между" +
//     " пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских" +
//     " скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению.";
//
// let tegAttributeArr = [
//     {acceptCharset: "Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные."},
//     {method: "Метод протокола HTTP."},
//     {target: "Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат."}
// ];
//
// let createAElement = new CreateTagElement(tegName, tegDescribeAction, tegAttributeArr);
// console.log(createAElement.tagInfo())


// // Teg <option>---------------------------------------------------------------------------------------------
// //
// let tegName = "<option>";
//
// let tegDescribeAction = "Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. " +
//     "Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью " +
//     "стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы." +
//     " Это также необходимо, когда к данным списка идет обращение через скрипты.";
//
// let tegAttributeArr = [
//     {disabled: "Заблокировать для доступа элемент списка."},
//     {label: "Указание метки пункта списка."},
//     {selected: "Заранее устанавливает определенный пункт списка выделенным."}
// ];
//
// let createAElement = new CreateTagElement(tegName, tegDescribeAction, tegAttributeArr);
// console.log(createAElement.tagInfo())


// Teg <select>-------------------------------------------------------------------------------------------------
// //
// let tegName = "<select>";
//
// let tegDescribeAction = "Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также " +
//     "список с одним или множественным выбором";
//
// let tegAttributeArr = [
//     {autofocus: "Устанавливает, что список получает фокус после загрузки страницы."},
//     {disabled: "Блокирует доступ и изменение элемента."},
//     {multiple: "Позволяет одновременно выбирать сразу несколько элементов списка."}
// ];
//
// let createAElement = new CreateTagElement(tegName, tegDescribeAction, tegAttributeArr);
// console.log(createAElement.tagInfo())


// ---------------------------------------------------Task 2--------------------------------------------------------
// -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }


// class CreateTeg {
//     constructor(tegName, describeAction, attributesArr) {
//         this.tegName = tegName;
//         this.describeAction = describeAction;
//         this.attributesArr = attributesArr;
//
//         this.showInfo = function () {
//             console.log("Назва тегу : " + this.tegName);
//             console.log("--------------------------------------------------------------");
//             console.log("Опис тегу : " + this.describeAction);
//             console.log("--------------------------------------------------------------");
//             console.log("Декілька основних атрибутів тегу :");
//             for (let atr in this.attributesArr) {
//                 console.log(this.attributesArr[atr]);
//             }
//         }
//     }
// }

// Тeg <a>-----------------------------------------------------------------------------------------------------

// let tegName = "<a>";
//
// let tegDescribeAction = "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. " +
//     "В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется " +
//     "закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает" +
//     " на якорь, происходит переход к закладке внутри веб-страницы.";
//
// let tegAttributeArr = [
//     {name: "Устанавливает имя якоря внутри документа."},
//     {title: "Добавляет всплывающую подсказку к тексту ссылки."},
//     {href: "Задает адрес документа, на который следует перейти."}
// ];
//
// let createAElement = new CreateTeg(tegName, tegDescribeAction, tegAttributeArr);
// console.log(createAElement.showInfo())


// Teg <div>---------------------------------------------------------------------------------------------------

// let tegName = "<div>";
//
// let tegDescribeAction = "Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с " +
//     "целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый " +
//     "раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с" +
//     " именем селектора.\n" +
//     "\n" +
//     "Как и при использовании других блочных элементов, содержимое тега <div> всегда начинается с новой строки. После него " +
//     "также добавляется перенос строки."
//
// let tegAttributeArr = [
//     {class: "Определяет имя класса, которое позволяет связать тег со стилевым оформлением."},
//     {style: "Применяется для определения стиля элемента с помощью правил CSS."},
//     {title: "Описывает содержимое элемента в виде всплывающей подсказки."}
// ];
//
// let createAElement = new CreateTeg(tegName, tegDescribeAction, tegAttributeArr);
// console.log(createAElement.showInfo())


// Teg <h1>---------------------------------------------------------------------------------------------------

// let tegName = "<h1>";
//
// let tegDescribeAction = "HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность " +
//     "секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня." +
//     " <h1>Заголовок первого уровня</h1>"
//
// let tegAttributeArr = [
//     {id: "Указывает имя стилевого идентификатора."},
//     {dir: "Задает направление и отображение текста — слева направо или справа налево."},
//     {hidden: "Скрывает содержимое элемента от просмотра."}
// ];
//
// let createAElement = new CreateTeg(tegName, tegDescribeAction, tegAttributeArr);
// console.log(createAElement.showInfo())


// // Teg <span>-------------------------------------------------------------------------------------------------
//
// let tegName = "<span>";
//
// let tegDescribeAction = "Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных " +
//     "элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других " +
//     "тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) можно изменить цвет и размер первой" +
//     " буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста. Чтобы не описывать" +
//     " каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class" +
//     " или id с именем селектора.";
//
// let tegAttributeArr = [
//     {accesskey: "Позволяет получить доступ к элементу с помощью заданного сочетания клавиш."},
//     {spellcheck: "Указывает браузеру проверять или нет правописание и грамматику в тексте."},
//     {title: "Описывает содержимое элемента в виде всплывающей подсказки."}
// ];
//
// let createAElement = new CreateTeg(tegName, tegDescribeAction, tegAttributeArr);
// console.log(createAElement.showInfo())


// Teg <input>-------------------------------------------------------------------------------------------------
//
// let tegName = "<input>";
//
// let tegDescribeAction = "Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные" +
//     " элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания" +
//     " текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент <input> не требуется помещать внутрь" +
//     " контейнера <form>, определяющего форму, но если введенные пользователем данные должны быть отправлены на сервер," +
//     " где их обрабатывает серверная программа, то указывать <form> обязательно. То же самое обстоит и в случае обработки" +
//     " данных с помощью клиентских приложений, например, скриптов на языке JavaScript."+"\n"+
//
//     "Основной атрибут тега <input>, определяющий вид элемента — type. Он позволяет задавать" +
//     " следующие элементы формы: текстовое поле (text), поле с паролем (password), переключатель (radio)," +
//     " флажок (checkbox), скрытое поле (hidden), кнопка (button), кнопка для отправки формы (submit), кнопка для" +
//     " очистки формы (reset), поле для отправки файла (file) и кнопка с изображением (image). Для каждого элемента существует" +
//     " свой список атрибутов, которые определяют его вид и характеристики. Кроме того, в HTML5 добавлено еще более десятка новых элементов.";
//
// let tegAttributeArr = [
//     {type: "Сообщает браузеру, к какому типу относится элемент формы."},
//     {value: "Значение элемента."},
//     {form: "Связывает поле с формой по её идентификатору."}
// ];
//
// let createAElement = new CreateTeg(tegName, tegDescribeAction, tegAttributeArr);
// console.log(createAElement.showInfo())


// Teg <form>----------------------------------------------------------------------------------------------------
//
// let tegName = "<form>";
//
// let tegDescribeAction = "Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между" +
//     " пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских" +
//     " скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению.";
//
// let tegAttributeArr = [
//     {acceptCharset: "Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные."},
//     {autocomplete: "Включает автозаполнение полей формы."},
//     {novalidate: "Отменяет встроенную проверку данных формы на корректность ввода."}
// ];
//
// let createAElement = new CreateTeg(tegName, tegDescribeAction, tegAttributeArr);
// console.log(createAElement.showInfo())


// // Teg <option>---------------------------------------------------------------------------------------------
// //
// let tegName = "<option>";
//
// let tegDescribeAction = "Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. " +
//     "Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью " +
//     "стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы." +
//     " Это также необходимо, когда к данным списка идет обращение через скрипты.";
//
// let tegAttributeArr = [
//     {disabled: "Заблокировать для доступа элемент списка."},
//     {label: "Указание метки пункта списка."},
//     {value: "Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов."}
// ];
//
// let createAElement = new CreateTeg(tegName, tegDescribeAction, tegAttributeArr);
// console.log(createAElement.showInfo())


// Teg <select>-------------------------------------------------------------------------------------------------
// //
// let tegName = "<select>";
//
// let tegDescribeAction = "Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также " +
//     "список с одним или множественным выбором";
//
// let tegAttributeArr = [
//     {autofocus: "Устанавливает, что список получает фокус после загрузки страницы."},
//     {disabled: "Блокирует доступ и изменение элемента."},
//     {multiple: "Позволяет одновременно выбирать сразу несколько элементов списка."}
// ];
//
// let createAElement = new CreateTeg(tegName, tegDescribeAction, tegAttributeArr);
// console.log(createAElement.showInfo())


// ---------------------------------------------------Task 3--------------------------------------------------------
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// let car = {
//
//     model: "A6",
//     producer: "Audi",
//     yearOfRelease: 2010,
//     maxSpeed: 250,
//     volumeEngine: 3.0,
//
//     drive() {
//         console.log("Ми їдемо зі швидкістю : " + this.maxSpeed);
//     },
//
//     info() {
//         console.log("Модель автомобіля : " + this.model);
//         console.log("Марка автомобіля : " + this.producer);
//         console.log("Рік випуску автомобіля : " + this.yearOfRelease);
//         console.log("Максимальна швидкість автомобіля : " + this.maxSpeed);
//         console.log("Обєм двигуна автомобіля : " + this.volumeEngine);
//     },
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += newSpeed;
//     },
//
//     changeYear(newValue) {
//         this.yearOfRelease = newValue;
//     },
//
//     addDriver(driver) {
//         car["driver"] = driver;
//     }
//
// }
// console.log(car.info());
// car.addDriver({name:"Nazar",age:21});
// console.log(car.driver);
// console.log("----------------------------------------------------");
// car.increaseMaxSpeed(15);
// car.info();


// ---------------------------------------------------Task 4--------------------------------------------------------
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// function Car(model, producer, yearOfRelease, maxSpeed, volumeEngine) {
//     this.model = model;
//     this.producer = producer;
//     this.yearOfRelease = yearOfRelease;
//     this.maxSpeed = maxSpeed;
//     this.volumeEngine = volumeEngine;
//
//     this.drive = function () {
//         console.log("Ми їдемо зі швидкістю : " + this.maxSpeed)
//
//     }
//
//     this.info = function () {
//         console.log("Модель автомобіля : " + this.model);
//         console.log("Виробник автомобіля : " + this.producer);
//         console.log("Рік випуску автомобіля : " + this.yearOfRelease);
//         console.log("Максимальна швидкість автомобіля : " + this.maxSpeed);
//         console.log("Обєм двигуна : " + this.volumeEngine);
//
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//
//     this.changeYear = function (newValue) {
//         this.yearOfRelease = newValue;
//     }
//
//     this.addDriver = function (driver) {
//         Car["driver"] = driver;
//     }
//
// }
//
//
// let audi = new Car("RS6", "Audi", 2018, 350, 4.0);
// console.log(audi.info());
// console.log("--------------------------------");
// console.log(audi.drive());
// console.log("--------------------------------");
// audi.increaseMaxSpeed(50);
// console.log(audi.drive());
// console.log("--------------------------------");
// audi.changeYear(2020);
//
// console.log(audi.info());
// console.log("--------------------------------");
// audi.addDriver({name: "Taras", age: 22});
// console.log(Car.driver);


// ---------------------------------------------------Task 5--------------------------------------------------------
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// class Car {
//     constructor(model, producer, yearOfRelease, maxSpeed, volumeEngine) {
//         this.model = model;
//         this.producer = producer;
//         this.yearOfRelease = yearOfRelease;
//         this.maxSpeed = maxSpeed;
//         this.volumeEngine = volumeEngine;
//
//
//     }
//
//     drive() {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     info() {
//         console.log(`Модель автомобіля ${this.model}`);
//         console.log(`Виробник автомобіля ${this.producer}`);
//         console.log(`Рік випуску автомобіля ${this.yearOfRelease}`);
//         console.log(`Максимальна швидкість автомобіля ${this.maxSpeed}`);
//         console.log(`Обєм двигуна  ${this.volumeEngine}`);
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//
//     changeYear(newValue) {
//         this.yearOfRelease = newValue;
//
//     }
//
//     addDriver(driver) {
//         Car["driver"] = driver;
//     }
//
// }
//
// let lanos = new Car("Deo", "Lanos", 2010, 150, 1.6);
//
// console.log(lanos.info());
// lanos.increaseMaxSpeed(50);
// console.log("------------------------------------------------------");
// console.log(lanos.info());


// ---------------------------------------------------Task 6--------------------------------------------------------
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом


// class Princess {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
//
// }
//
// let Diana = new Princess("Diana", 19, 34);
// let Ira = new Princess("Ira", 20, 35);
// let Julia = new Princess("Julia", 22, 37);
// let Maria = new Princess("Maria", 28, 38);
// let Uliana = new Princess("Uliana", 30, 45);
// let Hrustyna = new Princess("Hrustyna", 18, 34);
// let Svitlana = new Princess("Svitlana", 40, 47);
// let Sonia = new Princess("Sonia", 55, 25);
// let Olga = new Princess("Olga", 18, 37);
// let Konchita = new Princess("Konchita", 25, 48);
//
// let princesses = [Diana, Ira, Julia, Maria, Uliana, Hrustyna, Svitlana, Sonia, Olga, Konchita];
//
// class Prince {
//     constructor(name, age, findShoes) {
//         this.name = name;
//         this.age = age;
//         this.findShoes = findShoes;
//     }
//
//     findPrincess(princesses) {
//         for (let i = 0; i < princesses.length; i++) {
//             if (this.findShoes === princesses[i].footSize) {
//                 console.log(`Уррраааа ${this.name} знайшов свою ${princesses[i].name} всі на весіллє!!!))))`);
//
//             }
//         }
//         console.log("Тут такої немає, їдемо в інше село:)");
//     }
// }
//
// let Ivan = new Prince("Ivan", 15, 50);
// console.log(Ivan.findPrincess(princesses));


// ---------------------------------------------------Task 7--------------------------------------------------------
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить


// function Princess(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
//
// }
//
// let Diana = new Princess("Diana", 19, 34);
// let Ira = new Princess("Ira", 20, 35);
// let Julia = new Princess("Julia", 22, 37);
// let Maria = new Princess("Maria", 28, 38);
// let Uliana = new Princess("Uliana", 30, 45);
// let Hrustyna = new Princess("Hrustyna", 18, 34);
// let Svitlana = new Princess("Svitlana", 40, 47);
// let Sonia = new Princess("Sonia", 55, 25);
// let Olga = new Princess("Olga", 18, 37);
// let Konchita = new Princess("Konchita", 25, 48);
//
// let princesses = [Diana, Ira, Julia, Maria, Uliana, Hrustyna, Svitlana, Sonia, Olga, Konchita];
//
//
// function Prince(name, age, findShoes) {
//     this.name = name;
//     this.age = age;
//     this.findShoes = findShoes;
//
//     this.findPrincess = function (princesses) {
//         for (let i = 0; i < princesses.length; i++) {
//             if (this.findShoes === princesses[i].footSize) {
//                 console.log(`Ура ${this.name} знайшов свою ${princesses[i].name}`);
//             }
//         }
//
//     }
// }
//
// let Nazar = new Prince("Nazar", 25, 45);
//
// console.log(Nazar.findPrincess(princesses));



