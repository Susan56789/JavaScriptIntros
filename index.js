


//will output on console in browser 
 console.log('Hello JavaScript');

 //variables . Cannot be reserved words
 let name='Susan'; //String Literal
 let age= 
 console.log(name);

 //Constants
 const interestRate=0.3;
 //interestRate=1; //We cannot re-assign a constant thus this will bring an error
 console.log(interestRate);

 //Arrays. Length is dynamic i.e it can change
 let selectedColors=['purple','black','red','yellow'];
 console.log(selectedColors);

 //functions perform a task
 function greet(name){ //parameter called name
     console.log('Hello '+ name);
 }
 greet('Pauline'); //Here Pauline is an argument

 //calculating a value
 function square(number){
     return number*number;
 }
 console.log(square(3));