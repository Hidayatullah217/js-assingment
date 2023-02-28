
// let result = "Result:";
// let a = 10
// document.write(`<h1>Arithmetic</h1> <br>
// ${result} <br>`)
// document.write(`The value of a is: ${a}<br><br>`)

// a = ++a
// document.write(`
//     The value of ++a is: ${a}<br>
//     Now The value of a is: ${a}<br><br>`)

// b = a++
// document.write(`
//     The value of a++ is: ${b}<br>
//     Now The value of a is: ${a}<br><br>`)

// b = --a
// document.write(`
//     The value of --a is: ${b}<br>
//     Now The value of a is: ${a}<br><br>`)
    
// a = b--
// document.write(`
//     The value of a-- is: ${a}<br>
//     Now The value of a is: ${b}<br><br>`)

 



// let a = 2,
//     b = 1
// document.write(`
//     a is ${a} <br>
//     b is ${b} <br>
// `)

// let results = --a;
// document.write(`result is ${results} <br>`)

// results = --a - --b;
// document.write(`result is ${results} <br>`)

// results = --a - --b + ++b;
// document.write(`result is ${results} <br>`)

// results = --a - --b + ++b + b--;
// document.write(`result is ${results} <br>`)




// let username = (prompt("What's  your name"));
//  alert(`Welcome  ${username}`)





// document.write("<h1>Multiplication table</h1>");
// let number = +prompt("Enter a number") || 5;

// let table = "<table border='1' cellspacing='0' cellpadding='5'>";

// for (let a = 1; a <= 10; a++) {
//   table += (`<tr><td> ${number} x ${a} = ${number * a}  </td></tr>
// `)}

// table += "</table>";
// document.write(table);




// let subject1st = prompt("Enter the first subject name");
// let subject2nd = prompt("Enter the second subject name");
// let subject3rd = prompt("Enter the third subject name");

// let totalMarks = 100;

// let marks1 = +prompt(`Enter your obtained marks in ${subject1st}` )
// let marks2 = +prompt(`Enter your obtained marks in ${subject2nd}` )
// let marks3 = +prompt(`Enter your obtained marks in ${subject3rd}` )

// let totalObtainedMarks = marks1 + marks2 + marks3;
// let percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// document.write("<h1>Total marks and percentage</h1>")
// document.write("<table border='1' cellspacing='0' cellpadding='5'>")
// document.write(`<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>
//     <tr><td> ${subject1st} </td><td> ${totalMarks} </td><td> ${marks1} </td></tr>
//     <tr><td> ${subject2nd} </td><td> ${totalMarks} </td><td> ${marks2} </td></tr>
//     <tr><td> ${subject3rd} </td><td> ${totalMarks} </td><td> ${marks3} </td></tr>
//     <tr><td>Total</td><td> ${totalMarks * 3} </td><td> ${totalObtainedMarks} </td></tr>
//     <tr><td>Percentage</td><td colspan='2'> ${percentage}%</td></tr>
//     </table>`);