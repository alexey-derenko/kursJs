'use strict'

let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");

let appData = {
    budget: money, //бюджет (передаем сюда переменную из п.2)
    moneyPerDay: '',
    timeData: time, //данные времени - timeData (передаем сюда переменную из п.2)
    expenses: {}, //объект с обязательными расходами - expenses
    optionalExpenses: {}, //объект с обязательными расходами
    income: [], // массив данных с доп. доходом - income (оставляем пока пустым)
    savings: false
};


for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');

    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
        a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        i--;
    }
};

function detectDayBudget (moneyPerDay) {
    appData.moneyPerDay = appData.budget / 30;
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

detectDayBudget (); 

function detectLevel (moneyPerDay) {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка")
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}

detectLevel (); 

function chooseOptExpenses (c,d) {
    for (let i = 0; i < 3; i++) {
        let c = prompt("Введите необязательную статью расходов в этом месяце", ''),
            d = prompt("Во сколько обойдется?", '');
    
        if ((typeof (c)) === 'string' && (typeof (c)) != null && (typeof (d)) != null &&
            c != '' && d != '' && c.length < 50) {
            console.log("done");
            appData.expenses[c] = d;
        } else {
            i--;
        }
    };
};

chooseOptExpenses ();
