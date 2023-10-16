var readlineSync = require('readline-sync');
var myQuestion = readlineSync.question('What is time now(Hint: Please use train time) ');
var greeting1 = "Good Morning"
var greeting2 = "Good AfterNoon"
var greeting3 = "Good Evening"
var greeting4 = "Good Night"
if (myQuestion <= 12){
  console.log(greeting1);
} else if (myQuestion <= 15 ){
    console.logo(greeting2);
  } else if (myQuestion <=20){
  console.log(greeting3)
  }
else{
  console.log(greeting4);
}