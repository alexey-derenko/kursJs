'use strict'

//задание 2 - создание 2 переменных
let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");

//задание 3 - Создать объект appData
let appData = {
    budget: money, //бюджет (передаем сюда переменную из п.2)
    timeData: time, //данные времени - timeData (передаем сюда переменную из п.2)
    expenses: {}, //объект с обязательными расходами - expenses
    optionalExpenses: {}, //объект с обязательными расходами
    income: [], // массив данных с доп. доходом - income (оставляем пока пустым)
    savings: false
};

//задание 4 - Задать пользователю по 2 раза вопросы:
let q1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    q2 = prompt("Во сколько обойдется?", ''),
    q3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    q4 = prompt("Во сколько обойдется?", '');
appData.expenses[q1] = q2;
appData.expenses[q3] = q4;
console.log(appData.expenses);

alert(appData.budget / 30);



