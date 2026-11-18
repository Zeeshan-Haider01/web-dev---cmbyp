// if else

// voting eligibility checking
// let age = +prompt("Enter You Age");
// if(age >= 18){
//     console.log("you can vote")
// }else{
//     console.log("you can not vote")
// }

// MarkSheet
// let marks = +prompt("Enter Your Marks");

// if(marks >= 0 && marks <= 100){
//     if(marks >= 90){
//         console.log("A+")
//     }else if(marks >= 80){
//         console.log("A")
//     }else if(marks >= 70){
//         console.log("B")
//     }else if(marks >= 60){
//         console.log("C")
//     }else if(marks >= 50){
//         console.log("D")
//     } else{
//         console.log("Fail")
//     }
// }else{
//     console.log("Invalid Marks")
// }

// let marks = +prompt("enter marks");

// if (marks > 100 || marks < 0) {
//   console.log("Invalid No");
// } else {
//   if (marks >= 90) {
//     console.log("A+");
//   } else if (marks >= 80) {
//     console.log("A");
//   } else if (marks >= 70) {
//     console.log("B");
//   } else if (marks >= 60) {
//     console.log("C");
//   } else if (marks >= 50) {
//     console.log("D");
//   } else {
//     console.log("Fail");
//   }
// }

// function checkMarks() {
//   let marks = document.getElementById("getmarks").value;
//   if (marks > 100 || marks < 0) {
//     document.getElementById("show").innerText = "Invalid Marks";
//   } else {
//     if (marks >= 90) {
//       document.getElementById("show").innerText = "A+ Grade";
//     } else if (marks >= 80) {
//       document.getElementById("show").innerText = "A Grade";
//     } else if (marks >= 70) {
//       document.getElementById("show").innerText = "B Grade";
//     } else if (marks >= 60) {
//       document.getElementById("show").innerText = "C Grade";
//     } else if (marks >= 50) {
//       document.getElementById("show").innerText = "D Grade";
//     } else {
//       document.getElementById("show").innerText = "Fail";
//     }
//   }
// }

// Atm
// let balance = 5000;
// let pass = '1234';
// let EnteredPass = prompt("Enter Pass");

// if(EnteredPass == pass){
//     let amount = +prompt("Enter amount")
//     if(amount > balance){
//         console.log("Insuficient Balance")
//     }else{
//         balance = balance - amount;
//         console.log("balance = " , balance)
//         console.log("Withdrawal Amount = " , amount)
//     }
// }else{
//     console.log("Wrong Pass")
// }

// Calculator

// let num1 = +prompt("Enter First Number")
// let sign = prompt("Enter Operator (+,-,/,*)")
// let num2 = +prompt("Enter Second Number")

// if(sign == "+"){
//     console.log(num1 + num2)
// }else if(sign == "-"){
//     console.log(num1 - num2)
// }else if(sign == "/"){
//     console.log(num1 / num2)
// }else if(sign == "*"){
//     console.log(num1 * num2)
// }else{
//     console.log("Invalid Input")
// }


let balance = 10000;
let pass = "1234";
let enteredPass = +prompt("Enter Your Password")
if (enteredPass == pass  ) {
console.log("Correct Password")
let amount = +prompt ("Enter Your Amount")
if (amount > balance){
    console.log("Insuficient Balance")
}else {
    balance = balance - amount 
    console.log("Balance: " , balance)
    console.log("Withdrawal Amount:" , amount)
}
} else {
    console.log("Incorrect Password")
}