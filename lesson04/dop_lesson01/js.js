// let arr = [10]; 
// for (i=0; i<10; i++) {
//     if 
//     console.log((i+1) + " Делители данного числа - " + (i+1) + " и " + "1");  
// }
  
var arr = [];
for(var i=3;i<=100;i+=2) {
  if(arr.every(function(arr){return i%arr!=0})) {
    arr.push(i);
  }
 
}
arr.unshift(2);
console.log(JSON.stringify(arr));

//console.log(arr[i++]); 



// 1) Вывести в столбик все простые числа от 1 до 100
// ·        Статья про простые числа - КЛИК
// ·        Рядом с каждым числом написать оба делителя данного числа
// ·        Например: “Делители этого числа: 1 и n”