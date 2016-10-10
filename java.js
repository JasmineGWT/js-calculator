//This is totally Kathrine and Gaby's javascript code but they went through the whole thing with me so it actually makes sence to me which is awesome (THANK YOU SO MUCH!!!)! This is just a showing of what I understand, but not what I have written myself. I did however change various parts to be somewhat origional, show my understanding and also because I just wanted to change/add a few things. Again though, this is not my orional code, it is copied and altered! Thank you to them pretty much! The html and css were my own though.

//What I did myself was add functions that took -- and made it into a + and also took -+ and made it -. I found it just didn't work trying to make a function that made +- into - too though. It does it in the calculator but it doesn't change the improved shown equation which is what I wanted and did for the other two functions. I will try and figure this out later. 


document.addEventListener('DOMContentLoaded', start);

function start () {
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", getButton);
    }
}

var equation = "";
var result = 0;

function getButton(evt) {
    if (evt.target.id === "AC") {
        clearResult();
    } else if (evt.target.id === "CE") {
        clearLast();
    } else if (evt.target.id === "equals") {
        calculateResult();
    } else {
        equation += evt.target.value;
        console.log(equation);
        document.getElementById("equation").innerHTML = "<i>" + equation + "</i>";
    }
}

function calculateResult() {
    var illegalExpression = /[\/\*][\/\*]/; // matches two characters: each is either * or /
    var twoPlus = /(\+\+)/ // matches two pluses together
    var twoMinus = /(\-\-)/ // matches two minues together
    var minusAndPlus = /(\-\+)/ // matches a minus and plus together
    var alsoIllegal = /[\+\-][\*\/]/; // matches two characters; first is + or -, second is * or /
    if ( (illegalExpression.test(equation) && equation.match(illegalExpression) != "**") || alsoIllegal.test(equation) || twoPlus.test(equation) ) {
        result = "Illegal!!";
    }
    else if (minusAndPlus.test(equation)) {
        changeMinusAndPlus(equation);
    }
    else if (twoMinus.test(equation)) {
        changeTwoMinus(equation);
    }
    else {
        result = eval(equation);
    }
    console.log(result);
    document.getElementById("result").innerHTML = "<p>" + result + "</p>";
    equation = result;
}

function clearResult() {
    result = 0;
    equation = "";
    document.getElementById("result").innerHTML = "<p>" + result + "</p>";
    document.getElementById("equation").innerHTML = "<i>0</i>";
    console.log(result);
}

function clearLast() {
  var lastDigit = equation[equation.length - 1];
  if (lastDigit === "+" || lastDigit === "-" || lastDigit === "*" || lastDigit === "/") {
    equation = equation.slice(0, equation.length -1);
    document.getElementById("equation").innerHTML = "<i>" + equation + "</i>";
  } else {
    var operators = /[\/\+\-\*]/g; // To match all arithmetic operators
    var tempArray = equation.split(operators);
    var lastElementLength = tempArray[tempArray.length -1].length;
    equation = equation.slice(0, equation.length - lastElementLength);
  }
  document.getElementById("equation").innerHTML = "<i>" + equation + "</i>";
}

function changeTwoMinus(equation) {
  var equation = equation.replace(/-\-/g,"+");
  result = eval(equation);
  console.log(result);
  document.getElementById("equation").innerHTML = "<i>" + equation + "</i>";
  document.getElementById("result").innerHTML = "<p>" + result + "</p>";
  equation = result;
}
function changeMinusAndPlus(equation) {
  var equation = equation.replace(/-\+/g,"-");
  result = eval(equation);
  console.log(result);
  document.getElementById("equation").innerHTML = "<i>" + equation + "</i>";
  document.getElementById("result").innerHTML = "<p>" + result + "</p>";
  equation = result;
}
