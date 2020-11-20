// --------------------------------------------Task 1--------------------------------------------------------
//     Треба реалізувати свій розпорядок дня колбеками
//
//     В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання.
//     Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.


// function wakeUp(time, callback) {
//     console.log("Доброго ранку");
//
//     setTimeout(() => {
//         console.log("Йдемо в душ і чистимо зуби");
//         console.log("Яка година?")
//         console.log(time);
//
//         if (time < 8) {
//             callback(null, "В нас ще є час попити каву")
//         } else {
//             callback("Блін знов пізно встав, сьогодні без кави (", null)
//         }
//     }, 3000);
// }
//
//
// function drinkCoffee(time, callback) {
//
//     if (time) {
//
//         setTimeout(() => {
//             console.log("Готуємо каву")
//             callback(null, "Смачна була кава пора йти на роботу")
//         }, 2000)
//     } else {
//         callback("Нема часу пити каву йдем на роботу", null)
//     }
// }
//
//
// function goToWork(mask, callback) {
//
//
//     console.log("Я маску взяв?")
//     setTimeout(() => {
//         if (mask) {
//             callback(null, "Фух єєє, їдем на маршрутці)))")
//         } else {
//             callback("Блін, забув до роботи не далеко йду пішки", null)
//         }
//
//     }, 2000)
//
// }
//
//
//
// function goLunch(money, callback) {
//
//     console.log("Оооо, вже майже обід");
//     console.log("А я гроші взяв?")
//     setTimeout(() => {
//         if (money) {
//             callback(null, "Є, гаманець на місці))")
//         } else {
//             callback("Капец, забув гроші((. Буду сьогодні без обіду ((.", null)
//         }
//
//     }, 2000)
//
// }
//
//
// function goHome(mask, callback) {
//
//     console.log("Вже пора йти до дому")
//     if (mask) {
//
//         callback(null, "Добре що маску колеги позичили, а то би знов йшов пішки))")
//     } else {
//         callback("А маски то нема((. На роботу пішки з роботи пішки, ну хоть спортом позаймаюсь))", null)
//     }
// }
//
//
// function goShop(product, callback) {
//     console.log("Треба подзвонити до дому і запитати чи траба зайти в магазин і щось купити")
//     setTimeout(() => {
//         console.log("Ок, поняв")
//         if (product) {
//             callback(null, "Не буду захотиди в магазин, в дома все є")
//         } else {
//             callback("Зайду, куплю щось смачного", null)
//         }
//     }, 2500)
// }
//
//
// function goToSleep(time, callback) {
//     console.log("Яка зараз година?")
//     setTimeout(() => {
//         console.log("Зараз " + time)
//         if (time < 22) {
//             callback(null, "Можна ще подивитись відео по JS")
//         } else {
//             callback("Треба йти спати, завтра зранку на роботу", null)
//         }
//     }, 2500)
// }
//
//
//
// wakeUp(7, (err, answer) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(answer);
//
//         drinkCoffee(true, (err, answer) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(answer);
//
//                 goToWork(true, (err, answer) => {
//                     if (err) {
//                         console.log(err);
//                     } else {
//                         console.log(answer);
//
//                         goLunch(true, (err, answer) => {
//                             if (err) {
//                                 console.log(err);
//                             } else {
//                                 console.log(answer);
//
//                                 goHome(true, (err, answer) => {
//                                     if (err) {
//                                         console.log(err);
//                                     } else {
//                                         console.log(answer);
//
//                                         goShop(true, (err, answer) => {
//                                             if (err) {
//                                                 console.log(err)
//                                             } else {
//                                                 console.log(answer)
//
//                                                 goToSleep(23, (err, answer) => {
//                                                     if (err) {
//                                                         console.log(err)
//                                                     } else {
//                                                         console.log(answer);
//                                                     }
//                                                 })
//                                             }
//                                         })
//                                     }
//                                 });
//                             }
//                         });
//                     }
//                 });
//             }
//         });
//     }
// });


// --------------------------------------------Task 2--------------------------------------------------------
//     Треба реалізувати свій розпорядок дня промісами
//
//     В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання.
//     Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.


// function wakeUp(time) {
//     return new Promise((resolve, reject) => {
//
//         console.log("Доброго ранку");
//
//         setTimeout(() => {
//             console.log("Йдемо в душ і чистимо зуби");
//             console.log("Яка година?")
//             console.log(time);
//
//             if (time < 8) {
//                 resolve("В нас ще є час попити каву")
//             } else {
//                 reject("Блін знов пізно встав, сьогодні без кави (")
//             }
//         }, 3000);
//     })
// }
//
// function drinkCoffee(time) {
//     return new Promise((resolve, reject) => {
//
//         if (time) {
//             setTimeout(() => {
//                 console.log("Готуємо каву")
//                 resolve("Смачна була кава пора йти на роботу")
//             }, 2000)
//         } else {
//             reject("Нема часу пити каву йдем на роботу")
//         }
//     })
// }
//
//
// function goToWork(mask) {
//     return new Promise((resolve, reject) => {
//
//         console.log("Я маску взяв?")
//         setTimeout(() => {
//             if (mask) {
//                 resolve("Фух єєє, їдем на маршрутці)))")
//             } else {
//                 reject("Блін, забув до роботи не далеко йду пішки")
//             }
//
//         }, 2000)
//     })
// }
//
//
// function goLunch(money) {
//     return new Promise((resolve, reject) => {
//
//
//         console.log("Оооо, вже майже обід");
//         console.log("А я гроші взяв?")
//         setTimeout(() => {
//             if (money) {
//                 resolve("Є, гаманець на місці))")
//             } else {
//                 reject("Капец, забув гроші((. Буду сьогодні без обіду ((.");
//             }
//
//         }, 2000)
//
//     })
// }
//
//
// function goHome(mask) {
//     return new Promise((resolve, reject) => {
//         console.log("Вже пора йти до дому");
//         if (mask) {
//             resolve("Добре що маску колеги позичили, а то би знов йшов пішки))");
//         } else {
//             reject("А маски то нема((. На роботу пішки з роботи пішки, ну хоть спортом позаймаюсь))");
//         }
//     });
// }
//
//
// function goShop(product) {
//     return new Promise((resolve, reject) => {
//
//
//         console.log("Треба подзвонити до дому і запитати чи траба зайти в магазин і щось купити")
//         setTimeout(() => {
//             console.log("Ок, поняв")
//             if (product) {
//                 resolve("Не буду захотиди в магазин, в дома все є")
//             } else {
//                 reject("Зайду, куплю щось смачного")
//             }
//         }, 2500)
//     })
// }
//
//
// function goToSleep(time) {
//     return new Promise((resolve, reject) => {
//
//
//         console.log("Яка зараз година?")
//         setTimeout(() => {
//             console.log("Зараз " + time)
//             if (time < 22) {
//                 resolve("Можна ще подивитись відео по JS")
//             } else {
//                 reject("Треба йти спати, завтра зранку на роботу")
//             }
//         }, 2500)
//     })
// }
//
//
// wakeUp(7).then(wakeUp => {
//
//     console.log(wakeUp)
//
//
//     return drinkCoffee(true);
// }).then(drinkCoffee => {
//
//     console.log(drinkCoffee);
//
//     return goToWork(true);
// }).then(goToWork => {
//
//     console.log(goToWork);
//
//     return goLunch(true);
// }).then(goLunch => {
//
//     console.log(goLunch);
//
//     return goHome(true);
// }).then(goHome => {
//
//     console.log(goHome);
//
//     return goShop(true);
// }).then(goShop => {
//
//     console.log(goShop);
//
//     return goToSleep(21);
// }).then(goToSleep => {
//
//     console.log(goToSleep)
//
// }).catch(reason => {
//     console.log(reason)
//
// }).finally(() => {
//     console.log("Кінець")
// })


