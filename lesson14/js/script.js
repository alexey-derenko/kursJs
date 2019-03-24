$(document).ready(function() {
    $('.main_btna').click(function(){
        $('.overlay').animate(
            {
                opacity:'toggle',                
            }, 2000);       
        $('.modal').animate(
            {
                opacity:'toggle',
                height: 'toggle'
            }, 3000);
    }); 

    $('.main_btn').click(function(){
        $('.overlay').animate(
            {
                opacity:'toggle',                
            }, 2000);       
        $('.modal').animate(
            {
                opacity:'toggle',
                height: 'toggle'
            }, 3000);
    }); 

    $('li:nth-child(2)').click(function(){
        $('.overlay').animate(
            {
                opacity:'toggle',                
            }, 2000);       
        $('.modal').animate(
            {
                opacity:'toggle',
                height: 'toggle'
            }, 3000);
    }); 
    
    $('.close').click(function(){        
        $('.modal').animate(
            {
                opacity:'toggle',
                height: 'toggle'
            }, 2000);
        $('.overlay').animate(
            {
                opacity:'toggle',                
            }, 3000);  
        
    });

});



/*
$(window.ready)


$(document).ready(function(){
    $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el


<script>
$( "div" ).click(function() {
  var color = $( this ).css( "background-color" );
  $( "#result" ).html( "That div is <span style='color:" +
    color + ";'>" + color + "</span>." );
});
</script>


        */