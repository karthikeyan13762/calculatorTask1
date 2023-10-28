
let container=document.createElement('div');

container.setAttribute('class',"container");


let app=document.createElement('div');

app.setAttribute('id',"app");


container.append(app);


let cardHeading=document.createElement('div');


cardHeading.setAttribute('class',"card-heading");

cardHeading.innerHTML='<h2>CALC 1998</h2>';


let cardBody=document.createElement('div');

cardBody.setAttribute('class',"card-body");



let conatiner1=document.createElement('div');

conatiner1.setAttribute('class',"conatiner1");


let operands=document.createElement('div');

operands.setAttribute('id',"operands");



let result=document.createElement('div');

result.setAttribute('id',"result");

result.textContent=0;
conatiner1.append(operands,result)

// console.log(container);


let grid=document.createElement('div');
// ------------------------------------
grid.setAttribute('class',"grid");

let button1=document.createElement('button');
button1.setAttribute('id',"clear");
button1.textContent="DEL";

let button2=document.createElement('button');
button2.setAttribute('class',"data-operation");
button2.textContent="(";


let button3=document.createElement('button');
button3.setAttribute('class',"data-operation");
button3.textContent=")";


let button4=document.createElement('button');
button4.setAttribute('class',"data-operation");
button4.textContent="/";


let button5=document.createElement('button');
button5.setAttribute('class',"data-operand");
button5.textContent="7";



let button6=document.createElement('button');
button6.setAttribute('class',"data-operand");
button6.textContent="8";


let button7=document.createElement('button');
button7.setAttribute('class',"data-operand");
button7.textContent="9";



let button8=document.createElement('button');
button8.setAttribute('class',"data-operation");
button8.textContent="*";



let button9=document.createElement('button');
button9.setAttribute('class',"data-operand");
button9.textContent="4";



let button10=document.createElement('button');
button10.setAttribute('class',"data-operand");
button10.textContent="5";



let button11=document.createElement('button');
button11.setAttribute('class',"data-operand");
button11.textContent="6";



let button12=document.createElement('button');
button12.setAttribute('class',"data-operation");
button12.textContent="-";



let button13=document.createElement('button');
button13.setAttribute('class',"data-operand");
button13.textContent="1";



let button14=document.createElement('button');
button14.setAttribute('class',"data-operand");
button14.textContent="2";



let button15=document.createElement('button');
button15.setAttribute('class',"data-operand");
button15.textContent="3";


let button16=document.createElement('button');
button16.setAttribute('class',"data-operation");
button16.textContent="+";


let button17=document.createElement('button');
button17.setAttribute('class',"data-operation");
button17.textContent=".";

let button18=document.createElement('button');
button18.setAttribute('class',"data-operand");
button18.textContent="0";

let button19=document.createElement('button');
button19.setAttribute('class',"data-operation");
button19.textContent="%";



let button20=document.createElement('button');
button20.setAttribute('id',"equal");
button20.textContent="=";


grid.append(button1,button2,button3,button4,button5,button6,button7,button8,button9,button10,button11,button12,button13,button14,button15,button16,button17,button18,button19,button20);


//-------------------------------------


cardBody.append(conatiner1,grid)


app.append(cardHeading,cardBody)


document.body.append(container) 


// -----------------------------------------------------
const equaltoOPerator= document.getElementById("equal");
const finalResult = document.querySelector("#result");
const operand = document.querySelector("#operands");
const numbers=document.querySelectorAll('.data-operand');
const operends=document.querySelectorAll('.data-operation');

const clear=document.getElementById("clear")

// numbers

// const num1=document.getElementById("num1");
// const num2=document.getElementById("num2");



const appende=(numbers)=>{
  operand.innerText += numbers;
}

const onlynumber=(e)=>{

if(
  (e.which >=48 && e.which <=57) ||

  (e.keyCode >=96 && e.keyCode <= 111) ||

  e.keyCode === 13

){



if(e.keyCode === 13){
 

  evaluate();
}
else
  appende(e.key);


  


}
else{
  return false;
}


};

const textFunction = (e) =>{
  

  if(e.type === 'click'){
    appende( e.target.innerText);
       
   }
 else if(e.type === 'keydown'){
      
       onlynumber(e);
      }
}

const setNumber = (num)=>{
  num.addEventListener('keydown',textFunction)
  }




numbers.forEach((num)=>{
  setNumber(num);
  
})

// operends.forEach((opera)=>{
//   opera.addEventListener("click", textFunction)
  
// })


// equaltoOPerator.addEventListener('click', () =>{


//   evaluate();
// });


const clearData =(e)=>{
  operand.innerText=""
  finalResult.innerText="0"

}

clear.addEventListener('keydown',clearData)


document.body.addEventListener('keydown',textFunction);

document.body.addEventListener('keydown',(e)=>{
  if(e.key === 'Delete'){
   clearData();
  }
})


document.body.addEventListener('keydown',(e)=>{
  if(e.key === 'Backspace'){

    const slice= operand.innerText.slice(0,-1);
    operand.innerText=slice;
    // alert("Backspace")

  }
})

document.addEventListener("keydown", function(event) {
  const key = event.key;
  if (/[\d.]/.test(key)) {
    appendCharacter(key);
  } else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
    appendCharacter(key);
  } else if (key === 'Enter' || key === '=') {
    calculate();
  } else if (key === 'Escape') {
    clearExpression();
  }
  else if (key === 'Backspace' || key === 'Delete') {
    expressionInput.value = expressionInput.value.slice(0, -1); // Remove the last character
  }
  
  else {
    alert('Only numbers and mathematical symbols are allowed.');
  }
}); 


function evaluate(){
  const result = eval(operand.innerText)
  
  finalResult.innerText=result;
}

