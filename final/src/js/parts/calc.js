function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

        totalValue.innerHTML = 0;

    persons.addEventListener('change', function() {
        persons.value = persons.value.replace(/[^0-9]+/g, '');
        personsSum = +this.value;
        total = (daysSum + personsSum)*4000;
        
        if (persons.value == '' || restDays.value == '' || persons.value[0] == '0' || restDays.value[0] == '0') {
            totalValue.innerHTML = 0;

        } else {
            totalValue.innerHTML = total;
        }
    });

    restDays.addEventListener('change', function() {
        restDays.value = restDays.value.replace(/[^0-9]+/g, '');
        daysSum = +this.value;
        total = (daysSum + personsSum)*4000;
    
        if (persons.value == '' || restDays.value == '' || persons.value[0] == '0' || restDays.value[0] == '0')  {
            totalValue.innerHTML = 0;

        } else {
            
            totalValue.innerHTML = total;
        } 

    });

    place.addEventListener('change', function() {
        if (restDays.value == '' || persons.value == ''|| persons.value[0] == '0' || restDays.value[0] == '0') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });
}

export default calc;