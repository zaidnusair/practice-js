'use strict'
var today = new Date(); 
var hourNow = today.getHours();
var greeting; 

if (hourNow >18) { 
    greeting = 'Goodevening,Class!'; 

} else if (hourNow >12){
    greeting = 'Goodafternoon,Class!'; 
} else if(hourNow >=0){ 
    greeting = 'Goodmorning!';
 }else { 
    greeting = 'Somethingwentwrong!';
 } 
 document.write('<h3>' + greeting + '</h3>');

 