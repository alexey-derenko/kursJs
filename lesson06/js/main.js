
let startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName("button")[1],
    countBtn = document.getElementsByTagName("button")[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'); 

    
let money, time;

expensesBtn.disabled = true;
expensesBtn.style.backgroundImage = 'none';
optionalExpensesBtn.disabled = true;
optionalExpensesBtn.style.backgroundImage = 'none';
countBtn.disabled = true;
countBtn.style.backgroundImage = 'none';




startBtn.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?", "");
    
    while (isNaN(money) || money == '' || money == null) {
        money = prompt('Ваш бюджет?', "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1; //+1 месяц начинается с нуля
    dayValue.value = new Date(Date.parse(time)).getDate();
    expensesBtn.disabled = false;


    expensesBtn.disabled = false;
    expensesBtn.style.backgroundImage = 'linear-gradient(336deg,#ffbd75,#ff964b),linear-gradient(#fff,#fff)';
    optionalExpensesBtn.disabled = false;
    optionalExpensesBtn.style.backgroundImage = 'linear-gradient(336deg,#ffbd75,#ff964b),linear-gradient(#fff,#fff)';
    countBtn.disabled = false;
    countBtn.style.backgroundImage = 'linear-gradient(336deg,#ffbd75,#ff964b),linear-gradient(#fff,#fff)';
    //document.getElementsByTagName('button')[1].style.display = 'block';
    
});

// for (let i = 0; i < expensesItem.length; i++) {
        //     let a = expensesItem[i].value,
        //         b = expensesItem[++i].value;
        //         if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
        //             appData.expenses[a] = b;
        //             sum += +b;
        //             expensesBtn.disabled = false;
        //             //expensesBtn.style.backgroundImage = 'linear-gradient(336deg,#ffbd75,#ff964b),linear-gradient(#fff,#fff)';
        //             expensesBtn.style.backgroundColor = 'blue';
        //         } else {
        //             expensesBtn.disabled = true;
        //         };
            
        // };



document.body.addEventListener('input', e => {
    let target = e.target;
    let sum = 0;
    if (target.classList.contains('expenses-item')) {        
        for (let i = 0; i < expensesItem.length; i++) {
            let a = expensesItem[i].value,
            
                b = expensesItem[++i].value;
        
            if ( (typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
                console.log("Все верно");
                appData.expenses[a] = b;
                sum += +b;      // no work 
                expensesBtn.disabled = false; 
                expensesBtn.style.backgroundColor = 'blue';   
            } else {
                i = i -1; 
                expensesBtn.disabled = true;
            }
            expensesValue.textContent = sum; 
        }
    };
});


optionalExpensesBtn.addEventListener('mouseover', function () {
    if ((optionalExpensesItem[0].value =='') || (optionalExpensesItem[1].value =='') || (optionalExpensesItem[2].value =='')) {
         
        alert('Заполните поля ввода для расчета необязательных расходов!'); 
    } else {
        optionalExpensesBtn.disabled = false;
        optionalExpensesBtn.style.backgroundImage = 'linear-gradient(336deg,#ffbd75,#ff964b),linear-gradient(#fff,#fff)';
    }
});

optionalExpensesBtn.addEventListener('click', function () {
    if ((optionalExpensesItem[0].value =='') || (optionalExpensesItem[1].value =='') || (expensesItem[2].value =='')) {
        alert('Заполните поля ввода для расчета необязательных расходов!');          
    } else {
        for (let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
            appData.optionalExpenses[i] = opt;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + '  ';
        }
    }
});



// optionalExpensesBtn.addEventListener('click', function () {
//     for (let i = 0; i < optionalExpensesItem.length; i++) {
//         let opt = optionalExpensesItem[i].value;
//             appData.optionalExpenses[i] = opt;
//             optionalExpensesValue.textContent += appData.optionalExpenses[i] + '  ';
//     }
// });

countBtn.addEventListener('click', function() {
    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget-expensesValue.innerText) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = 'Минимальный уровень достатка';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = 'Средний уровень достатка';
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = 'Высокий уровень достатка';
        } else {
            levelValue.textContent = 'Произошла ошибка';
        }
    } else {
        dayBudgetValue.textContent = 'Произошла ошибка';
    }    
});

incomeItem.addEventListener('input', function() {
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});
     
sumValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
}); 

percentValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
}); 


    let appData = {
        budget: money, 
        expenses: {},
        optionalExpenses: {},
        income: [],
        timeData: time,    
        savings: false
    };
        


// 2) Если программа еще не запущена( не нажали кнопку "Начать расчет") или нужное(соответственное) 
//для заполнения поле пустое - сделать кнопки неактивными. (Например, если ни одно поле обязательных расходов не заполнено - 
//блокируем кнопку "Утвердить")

// 3) Реализовать функционал: при расчете дневного бюджета учитывать сумму обязательных трат 
//(т. e. от бюджета на месяц отнимаем общую сумму всех обяз. трат и ее делим на 30 дней)

// 4) Проверить, чтобы все работало и не было ошибок в консоли

// 5) Добавить папку с уроком на свой GitHub

// 6) Ознакомиться с объектом Date