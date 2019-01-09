var evaluateStr = '';
var lastNum = true; var lastSym = false; var lastEql = false;

function insert(num){
  if (lastEql){
    clean(); lastEql = false;
  }
  if (lastNum){
    document.calculator.display.value = (document.calculator.display.value + num);
    lastSym = true;
  } else {
    document.calculator.display.value = (num);
    lastSym = true; lastNum = true;
  }
    evaluateStr = evaluateStr + num;

    if(Number(document.calculator.display.value.length) > 11){
    document.calculator.display.value = "Too many digits";
    }
}
function parseSym(sym){
  if (lastSym){
    document.calculator.display.value = (sym);
    lastSym = false; lastNum = false; lastEql = false; evaluateStr = evaluateStr + sym;
  }
}
function equal(){
  document.calculator.display.value = eval(evaluateStr).toLocaleString("en");
  evaluateStr = eval(evaluateStr); lastNum = false; lastEql = true;
  if(Number(evaluateStr) > 1000000000) {
         let coefficient = 0;
         let degree;
         for(let n = 9; coefficient < 1 || coefficient >= 10; n++) {
           coefficient = evaluateStr / 10 ** n;
           degree = n;
         }
         document.calculator.display.value = String(coefficient) + "e" + String(degree);
  }
}
function clean(){
  document.calculator.display.value = ' ';
  evaluateStr = ''; lastNum = true; lastSym = false;
}
function percentage(){
  document.calculator.display.value = document.calculator.display.value/100;
}

function negation(){
document.calculator.display.value = document.calculator.display.value * -1;
}
