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
let question1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    question2 = prompt("Во сколько обойдется?", ''),
    question3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    question4 = prompt("Во сколько обойдется?", '');
appData.expenses = [ (question1), (question2), (question3), (question4) ];
console.log(appData.expenses);

//задание 5 - Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней)
alert(appData.budget / 30);



