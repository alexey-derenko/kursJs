'use strict'

//задание 2 - создание 2 переменных
let money = +prompt("Ваш бюджет на месяц?", ""),
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



/* первый вариант цикла
let i=0;
while ( i < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
     
    if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) !=null
        && a != '' && b != '' && a.length < 50) {
            console.log ("done");
            appData.expenses[a] = b;
        } else {
            i--;
        }
    i++;
    };
*/

/* второй вариант цикла 
let i=0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
     
    if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) !=null
        && a != '' && b != '' && a.length < 50) {
            console.log ("done");
            appData.expenses[a] = b;
        } else {
            i--;
        }
    i++;
    } while (i < 2);

    */
           

appData.moneyPerDay = appData.budget / 30

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка")
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка")
}

