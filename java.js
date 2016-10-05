var box = document.getElementById('display');

function addtoscreen(x)
{
  box.value += x;

  if(x=='C'){
    box.value='';
  }
}

function answer(){
  x=box.value;
  x=eval(x);
  box.value=x;
}

function backspace(){
  var num=box.value;
  var len=num.length-1;
  var newnum=num.substring(0,len);
  box.value=newnum;
}﻿
