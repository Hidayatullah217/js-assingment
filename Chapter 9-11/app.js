
// let city = prompt("Where are you form...?")
// if (city == "karachi") {
//     alert("Welcome to city of lights")
// } else {
//     alert("welcome ")
// }



// let gender = prompt("gender")
// if (gender == "male") {
//     alert("Good Morning Sir")
// } else {(gender == "female") 
//     alert("Good Morning Ma'am ")
// }



// document.write(`
//     <h1> Traffic Signal </h1>
//     <table ><tr><th> Signal Color </th> <th> Message </th></tr> <br>
//     </tr><td> Red <td> Must Stop </td> </tr>   
//     </tr><td> Yellow <td> Ready To Move </td> </tr>   
//     </tr><td> Green <td> Move Now </td> </tr></table>   
// `)




// document.write("<h1>Fuel in Car</h1>");
// let fuel = prompt("Enter the remaining fuel in your car (in litres):");
// if (fuel < 0.25) {
//   document.write("Please refill the fuel in your car");
// } else{
//   document.write("No need to fill the fuel in your car!");  
// }




// let a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }else{
// alert("given condition for variable a is false");
// }

// let b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }else{
// alert("given condition for variable b is false");
// }

// var c = 12;
// if (c++ === 13 || c === 13 || ++c < 14 || c === 14){
// alert("condition 1 is true");
// }else{
// alert("condition 1 is false");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }else{
// alert("the cost is not equals")
// }

// if (totalCost == 22000){
// alert("True");
// }
// else
// {
// alert("False");
// }

// if("car" < "cat"){
// alert("cat is smaller than car");
// }




// function calculateResult() {
//     let subject1TotalMarks = document.getElementById("subject1TotalMarks").value;
//     let subject1ObtainedMarks = document.getElementById("subject1ObtainedMarks").value;
//     let subject2TotalMarks = document.getElementById("subject2TotalMarks").value;
//     let subject2ObtainedMarks = document.getElementById("subject2ObtainedMarks").value;
//     let subject3TotalMarks = document.getElementById("subject3TotalMarks").value;
//     let subject3ObtainedMarks = document.getElementById("subject3ObtainedMarks").value;

//     let totalMarks = parseInt(subject1TotalMarks) + parseInt(subject2TotalMarks) + parseInt(subject3TotalMarks);
//     let obtainedMarks = parseInt(subject1ObtainedMarks) + parseInt(subject2ObtainedMarks) + parseInt(subject3ObtainedMarks);
//     let percentage = (obtainedMarks / totalMarks) * 100;
  
//     document.getElementById("totalMarks").value = totalMarks;
//     document.getElementById("obtainedMarks").value = obtainedMarks;
//     document.getElementById("percentage").value = percentage + "%";
  
//     let grade, remarks;
//     if (percentage >= 80) {
//       grade = "A+";
//       remarks = "Excellent";
//     } else if (percentage >= 70) {
//       grade = "A";
//       remarks = "Good";
//     } else if (percentage >= 60) {
//       grade = "B";
//       remarks = "Average";
//     } else if (percentage >= 50) {
//       grade = "C";
//       remarks = "Pass";
//     } else {
//       grade = "F";
//       remarks = "Fail";
//     }
  
//     document.getElementById("grade").value = grade;
//     document.getElementById("remarks").value = remarks;
//   }





// let secretNumber = Math.floor(Math.random() * 10) + 1;
// function checkGuess() {
//     let guess = document.getElementById("guess").value;
//     let resultDisplay = document.getElementById("result");
  
//     if (guess == secretNumber) {
//       resultDisplay.innerHTML = "Bingo! Correct answer.";
//     } else if (Math.abs(guess - secretNumber) <= 1) {
//       resultDisplay.innerHTML = "Close enough to the correct answer.";
//     } else {
//       resultDisplay.innerHTML = "Wrong guess. Try again.";
//     }
//   }




// document.write("<h1>Divisible number</h1>");
// var number = prompt("Enter a number:");
// if (number % 3 == 0) {
//   alert(number + " is divisible by 3");
// } else {
//   alert(number + " is not divisible by 3");
// }




// document.write("<h1>even or odd number</h1>");

// function checkEvenOdd() {
//     let number = parseInt(prompt("Enter a number:"));
//     if (number % 2 === 0) {
//       alert(number + " is an even number.");
//     } else {
//       alert(number + " is an odd number.");
//     }
//   }




// function showMessage() {
//     let temperature = document.getElementById("temperature").value;
//     let message = document.getElementById("message");

//     if (temperature > 40) {
//       message.innerHTML = "It is too hot outside.";
//     } else if (temperature > 30) {
//       message.innerHTML = "The Weather today is Normal.";
//     } else if (temperature > 20) {
//       message.innerHTML = "Today's Weather is cool.";
//     } else if (temperature > 10) {
//       message.innerHTML = "OMG! Today's weather is so Cool.";
//     }
//   }





// function calculate() {
//     let firstNumber = parseFloat(document.getElementById("firstNumber").value);
//     let secondNumber = parseFloat(document.getElementById("secondNumber").value);
//     let operation = document.getElementById("operation").value;
//     let result;

//     if (operation === "+") {
//       result = firstNumber + secondNumber;
//     } else if (operation === "-") {
//       result = firstNumber - secondNumber;
//     } else if (operation === "*") {
//       result = firstNumber * secondNumber;
//     } else if (operation === "/") {
//       result = firstNumber / secondNumber;
//     } else if (operation === "%") {
//       result = (firstNumber / secondNumber) * 100  + "%";
//     }
  
//     document.getElementById("resul").value = result;
//   }