let menuItem =document.getElementsByClassName('menu-item'),
    menu =  document.getElementsByClassName('menu');
  

    menu.replaceChild(menu[1], menu[2]);
console.log(menu);
console.log(menuItem);