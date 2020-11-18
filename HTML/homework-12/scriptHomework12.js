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
// if (localStorage.getItem("checkboxYes") === "checked") {
//     getCheckboxYes.setAttribute("checked", "")
//     countCheckboxYes = 1;
// }
// if (localStorage.getItem("checkboxNo") === "checked") {
//     getCheckboxNo.setAttribute("checked", "")
//     countCheckboxNo = 1;
// }
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
//     localStorage.setItem(`AreaText${count}`, getTextArea.value);
//     count++;
//     localStorage.setItem("count", count);
// })
//
// getLeftButton.addEventListener("click", function () {
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
//     getTextArea.innerText = localStorage.getItem(`AreaText${countRight}`)
//     countRight++;
//     localStorage.setItem("countRight", countRight);
// })
//
//
// let getTextArea = document.getElementById("text");
// getTextArea.innerText = localStorage.getItem(`AreaText${count}`)
//

