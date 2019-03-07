'use strict'
let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");
    while (isNaN(money) || money == '' || money == null) {
        money = prompt('Ваш бюджет?', "");
    }
}
start();

 

let appData = {
    budget: money, 
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,    
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');
        
            if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
                console.log("Все верно");
                appData.expenses[a] = b;
            } else {
                i--;
            }
        };  
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка")
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?', ''),
                percent = +prompt('Под какой процент?', '');
            appData.monthIncome = save/100/12*percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let opt = prompt("Статья необязательных расходов?", '');
                appData.optionalExpenses[i] = opt;
        }
    },   
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        if (typeof(items) === 'string' && typeof(items) != null && items != '')  {
            appData.income = items.split(', ');
            //console.log(items);              
            appData.income.push(prompt('Может что-то еще?', '')); 
            appData.income.sort();
            appData.income.forEach(function(item,i) {               
               console.log(" Способы доп. заработка: " + (++i) + ' ' + appData.income);
            });
        } else {
            alert("Перечислите текст через запятую", '');            
        }    
    }   
};

appData.chooseIncome();

//    3) Используя цикл for in для объекта (appData) вывести в консоль сообщение "Наша программа включает в себя данные: " (вывести весь appData)
 for (const key in appData) {
    console.log("Наша программа включает в себя данные: " + appData());
 }      


// Дополнить свою программу по видео
// 1) Написать проверку, что пользователь может:
// ·        Ввести в дополнительных доходах (chooseIncome) только строку
// ·        Не может оставить строку пустой
// ·        Не может отменить вопрос
// 2) При помощи метода перебора массива(forEach) вывести на экран сообщение "Способы доп. заработка: " и полученные способы (внутри chooseIncome)
// ·        Товары должны начинаться с 1, а не с 0. Выполняем этот пункт в chooseIncome.
// 3) Используя цикл for in для объекта (appData) вывести в консоль сообщение "Наша программа включает в себя данные: " (вывести весь appData)
// 4) Проверить, чтобы все работало и не было ошибок в консоли
// 5) Добавить папку с уроком на свой GitHub
// 6) Ознакомиться с конструкторами:
// ·        1. learn.javascript.ru/constructor-new
// ·        2. learn.javascript.ru/classes





