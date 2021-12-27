let impval=document.getElementById("txt");
let clear=document.getElementById("clear");
let zero=document.getElementById("zero");
let one=document.getElementById("one");
let two=document.getElementById("two");
let three=document.getElementById("three");
let four=document.getElementById("four");
let five=document.getElementById("five");
let six=document.getElementById("six");
let seven=document.getElementById("seven");
let eight=document.getElementById("eight");
let nine=document.getElementById("nine");
let plus=document.getElementById("plus");
let minus=document.getElementById("minus");
let multiply=document.getElementById("multiply");
let equalto=document.getElementById("equalto");
one.addEventListener("click",function() {
    impval.value+='1';
})
two.addEventListener("click",function() {
    impval.value+='2';
})
three.addEventListener("click",function() {
    impval.value+='3';
})
four.addEventListener("click",function() {
    impval.value+='4';
})
five.addEventListener("click",function() {
    impval.value+='5';
})
six.addEventListener("click",function() {
    impval.value+='6';
})
seven.addEventListener("click",function() {
    impval.value+='7';
})
eight.addEventListener("click",function() {
    impval.value+='8';
})
nine.addEventListener("click",function() {
    impval.value+='9';
})
plus.addEventListener("click",function() {
    impval.value+='+';
})
minus.addEventListener("click",function() {
    impval.value+='-';
})
multiply.addEventListener("click",function() {
    impval.value+='*';
})
divide.addEventListener("click",function() {
    impval.value+='/';
})
zero.addEventListener("click",function() {
    impval.value+='0';
})
equalto.addEventListener("click",function () {
impval.value=eval(impval.value);
})
clear.addEventListener("click",function () {
  impval.value='';  
})
