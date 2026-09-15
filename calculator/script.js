let display = document.getElementById('display');
let current = '';

function append(val){
  if(current === '0' && val !== '.') current = '';
  current += val;
  display.innerText = current;
}
function clearDisplay(){
  current = '';
  display.innerText = '0';
}
function deleteChar(){
  current = current.slice(0,-1);
  display.innerText = current || '0';
}
function calculate(){
  try{
    let result = eval(current);
    display.innerText = result;
    current = result.toString();
  }catch{
    display.innerText = 'Error';
    current = '';
  }
}
