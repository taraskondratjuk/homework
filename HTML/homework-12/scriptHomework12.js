// -----------------------------------------------Task 1--------------------------------------------------------
// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.


// let textarea = document.getElementById("text");
//
//
// window.addEventListener("mousemove", function () {
//     let textarea = document.getElementById("text").value;
//      localStorage.setItem("someText", textarea);
//
// })
//
// let getTextarea = localStorage.getItem("someText")
// textarea.innerText = getTextarea;


// -----------------------------------------------Task 2--------------------------------------------------------
// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.


// let getInputText = document.getElementById("input");
// let getTextArea = document.getElementById("textarea");
//
// let getCheckboxYes = document.getElementById("checkboxYes");
// let getCheckboxNo = document.getElementById("checkboxNo");
//
// let getSelect = document.getElementById("select")
//
//
// window.addEventListener("mousemove", function () {
//     localStorage.setItem("inputText", getInputText.value)
//     localStorage.setItem("textarea", getTextArea.value)
//     localStorage.setItem("choseLanguage", getSelect.value)
//
// })
//
// getInputText.value = localStorage.getItem("inputText")
//
// getTextArea.value = localStorage.getItem("textarea")
//
// getSelect.value = localStorage.getItem("choseLanguage")
//
// getCheckboxYes.value = localStorage.getItem("checkboxYes")
//
// getCheckboxNo.value = localStorage.getItem("checkboxNo")
//
// let countCheckboxYes = 0;
//
// getCheckboxYes.addEventListener("click", function () {
//     countCheckboxYes++;
//     if (countCheckboxYes % 2 === 0) {
//         localStorage.removeItem("checkboxYes");
//         return;
//     }
//     getCheckboxYes.getAttribute("checked")
//     localStorage.setItem("checkboxYes", "checked")
// })
//
// let countCheckboxNo = 0;
//
// getCheckboxNo.addEventListener("click", function () {
//     countCheckboxNo++;
//     if (countCheckboxNo % 2 === 0) {
//         localStorage.removeItem("checkboxNo");
//         return;
//     }
//     getCheckboxNo.getAttribute("checked")
//     localStorage.setItem("checkboxNo", "checked")
// })
//
//
// if (localStorage.getItem("checkboxYes") === "checked") {
//     getCheckboxYes.setAttribute("checked", "")
//     countCheckboxYes = 1;
// }
//
// if (localStorage.getItem("checkboxNo") === "checked") {
//     getCheckboxNo.setAttribute("checked", "")
//     countCheckboxNo = 1;
// }


// -----------------------------------------------Task 3--------------------------------------------------------
// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).


// let getLeftButton = document.getElementById("left")
//
// let getRightButton = document.getElementById("right")
//
// let getSaveButton = document.getElementById("button-save")
//
// let count = localStorage.getItem("count",)
//
// let countRight = localStorage.getItem("countRight")
//
//
// getSaveButton.addEventListener("click", function (key) {
//     ++count;
//     localStorage.setItem(`AreaText${count}`, getTextArea.value);
//     localStorage.setItem("count", count);
// })
//
// getLeftButton.addEventListener("click", function () {
//
//
//
//     if (countRight > 0) {
//         getTextArea.innerText = localStorage.getItem(`AreaText${countRight}`)
//         countRight--;
//         localStorage.setItem("countLeft", countRight);
//     }
//
//
// })
//
// getRightButton.addEventListener("click", function () {
//
//     if (countRight <= count) {
//
//         getTextArea.innerText = localStorage.getItem(`AreaText${countRight}`)
//         countRight++;
//         localStorage.setItem("countRight", countRight);
//     }
// })
//
//
// let getTextArea = document.getElementById("text");
// getTextArea.innerText = localStorage.getItem(`AreaText${count}`)


// -----------------------------------------------Task 4--------------------------------------------------------
// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть
// все необходимые инпуты для редактирования, которые уже заполнены данными объекта

// let getName = document.getElementById("name");
// let getPhoneNumber = document.getElementById("phoneNumber");
// let getEmail = document.getElementById("email");
// let getCompany = document.getElementById("company");
// let getDepartment = document.getElementById("department");
// let getBirthDay = document.getElementById("birthDay");
// let getCreateUserButton = document.getElementById("create-user");
// let getUserPlace = document.getElementById("users");
// let count = localStorage.getItem("count",);
//
//
// getCreateUserButton.addEventListener("click", function () {
//     count++;
//
//     let user = {
//         id: `${count}`,
//         name: `${getName.value}`,
//         phone: `${getPhoneNumber.value}`,
//         email: `${getEmail.value}`,
//         company: `${getCompany.value}`,
//         department: `${getDepartment.value}`,
//         birthday: `${getBirthDay.value}`
//
//     };
//
//     localStorage.setItem("count", count)
//     let userStringify = JSON.stringify(user)
//     localStorage.setItem(`user${count}`, userStringify)
// });
//
//
// for (let i = 1; i <= count; i++) {
//     let getUserCopy = localStorage.getItem(`user${i}`)
//     let getUser = JSON.parse(getUserCopy);
//
//     let userDiv = document.createElement("div");
//     userDiv.style.marginTop = "15px"
//     userDiv.style.backgroundColor = "grey"
//     userDiv.id = `${i}`;
//
//     userDiv.innerText = `Імя : ${getUser.name}, ` + ` Телефон : ${getUser.phone}, ` + ` email : ${getUser.email},` + ` Компанія : ${getUser.company}, ` +
//         ` Відділ : ${getUser.department}, ` + ` День народження : ${getUser.birthday}`;
//     getUserPlace.appendChild(userDiv);
//
//
//     let deleteButton = document.createElement("button");
//     deleteButton.appendChild(document.createTextNode("Видалити"));
//     deleteButton.style.marginLeft = "20px";
//     deleteButton.id = `${i}`;
//     userDiv.appendChild(deleteButton)
//
//
//     deleteButton.addEventListener("click", function (event) {
//         let id = event.target.id;
//         let getElement = document.getElementById(`${id}`);
//         getElement.remove();
//
//         localStorage.removeItem(`user${id}`);
//         count--;
//         localStorage.setItem("count", count);
//     });
//
//
//
//     let editButton = document.createElement("button");
//     editButton.style.marginLeft = "20px";
//     editButton.id = `${i}`;
//     userDiv.appendChild(editButton)
//     editButton.appendChild(document.createTextNode("Редагувати"));
//
//
//
//     editButton.addEventListener("click", function (event) {
//         let id = event.target.id;
//         //let getElement = document.getElementById(`${id}`);
//         let getEditUserCopy = localStorage.getItem(`user${id}`);
//         let getEditUser = JSON.parse(getEditUserCopy);
//
//
//
//         getCreateUserButton.style.display = "none"
//
//
//         let getForm = document.getElementById("form")
//
//         let createEditButton = document.createElement("button");
//         createEditButton.innerText = "Редагувати";
//         getForm.appendChild(createEditButton);
//
//
//         getName.value = getEditUser.name;
//         getPhoneNumber.value = getEditUser.phone;
//         getEmail.value = getEditUser.email
//         getCompany.value = getEditUser.company;
//         getDepartment.value = getEditUser.department;
//         getBirthDay.value = getEditUser.birthday;
//
//
//         createEditButton.addEventListener("click", function () {
//
//             let user = {
//                 id: `${count}`,
//                 name: `${getName.value}`,
//                 phone: `${getPhoneNumber.value}`,
//                 email: `${getEmail.value}`,
//                 company: `${getCompany.value}`,
//                 department: `${getDepartment.value}`,
//                 birthday: `${getBirthDay.value}`
//
//             };
//
//             let userStringify = JSON.stringify(user)
//             localStorage.setItem(`user${id}`, userStringify)
//         })
//     })
// }








