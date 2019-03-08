let menuItem = document.getElementsByClassName('menu-item'),
    menu =  document.getElementsByClassName('menu'),
    li = document.createElement('li'),
    title = document.getElementById('title'),
    elem = document.querySelector('.adv'),
    ask = prompt('Какое у вас отношение к технике apple: ', ''),
    prom = document.querySelector('.prompt');
      
    

    menu[0].insertBefore(menuItem[2], menuItem[1]);
    menu[0].appendChild(li);
    li.classList.add('menu-item');
    li.innerHTML='Пятый пункт';
    document.body.style.backgroundImage = "url('../img/apple_true.jpg')";
    title.innerHTML='Мы продаем только подлинную технику Apple';
 //  document.body.elem1.getElementsByClassName
    elem.remove();
   prom.innerHTML=ask;

   console.log(ask);

  
   //Спросить у пользователя отношение к технике apple и записать ответ в блок на 
//странице с id "prompt"

//console.log(elem);

//Спросить у пользователя отношение к технике apple и записать ответ в блок на 
//странице с id "prompt"








