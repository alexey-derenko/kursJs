let massage = {
        loading: 'Загрузка ...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошо не так',
    };

    let formContact = document.querySelector('#form'),
        inputContact = formContact.getElementsByTagName('input')[1],
        statusMessageContact = document.createElement('div');

    statusMessageContact.classList.add('status');
    console.log(document.querySelector('#form'));