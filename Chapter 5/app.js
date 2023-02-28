// let values1 =(3)
//     values2 =(5)

// let addingTogether =(values1 + values2)
// document.write(`Sum of ${values1} and ${values2} is ${addingTogether}<br>`)


// let multiplicationTogether =(values1 * values2)
// document.write(`Sum of ${values1} and ${values2} is ${multiplicationTogether}<br>`)



// let divisionTogether =(values1 % values2)
// document.write(`Sum of ${values1} and ${values2} is ${divisionTogether}<br> <br>`)


// //      Declare a varriable


// let nothing;
// document.write(`Value after variable declaraiton is ${nothing} <br>`)


// //  initialize  the variable with some number

// let number = (5)
// document.write(`initialize value ${number}<br> `)

// // increment the variable

// let incremenAdd = ++number;
// document.write(` value after increment is: ${incremenAdd} <br>`)

// // add 7 variable

// let addSeven = incremenAdd + 7;
// document.write(` value after addition is: ${addSeven} <br>`)

// // Decrement the variable

// let removeOne = --addSeven;
// document.write(` value after decrement is: ${removeOne} <br>`)


// // // remaindar aftar Decrement
// let divide = removeOne - 12 / 1;
// document.write(`the remaindar is ${divide}: <br><br>`)





// let oneMovieTicketCost =(600)
// let ticketsQuantity = +prompt("How Much Movie Tickets Do You Want To Buy ??")
// document.write(`Total cost of buy ${ticketsQuantity} tickets to a movie is ${oneMovieTicketCost * ticketsQuantity}PKR <br> <br>`)




// let table = +prompt("Which Table You Want ?")

// document.write(`
//     table of ${table} <br>
//     ${table} X 1 = ${table * 1} <br>
//     ${table} X 2 = ${table * 2} <br>
//     ${table} X 3 = ${table * 3} <br>
//     ${table} X 4 = ${table * 4} <br>
//     ${table} X 5 = ${table * 5} <br>
//     ${table} X 6 = ${table * 6} <br>
//     ${table} X 7 = ${table * 7} <br>
//     ${table} X 8 = ${table * 8} <br>
//     ${table} X 9 = ${table * 8} <br>
//     ${table} X 10 = ${table * 10} <br>`)





// let priceOfItem1 = (650)  
// let orderQuantityItem1 = (3)
// let priceOfItem2 = (100)  
// let orderQuantityItem2 = (7)
// let shippingcharges = (100)

// document.write(`
//     <h1> Shopping Cart</h1> <br> <br>
//     Price of item 1 is ${priceOfItem1} <br>
//     Quantity of item 1 is ${orderQuantityItem1} <br>
//     Price of item 2 is ${priceOfItem2} <br>
//     Quantity of item 2 is ${orderQuantityItem2} <br>
//     Shipping Charges is ${shippingcharges} <br> <br> 
//     Total cost of order is ${priceOfItem1 * orderQuantityItem1 + priceOfItem2 * orderQuantityItem2 + shippingcharges}
//     `)





// let totalMarks = +prompt("Your Total Marks ?")
// let marksObtained = +prompt("Your Marks Obtained ?")
// document.write(`
//     <h1>Mark Sheet </h1>  <br><br>
//     Total Marks: ${totalMarks} <br>
//     Marks Obtained: ${marksObtained} <br>
//     Percentage: ${marksObtained * 100 / totalMarks} 
// `)




// let USDollar = (104.80)
// let saudiRiyal =(28)
// document.write(`
//     <h2> Total Currency in PKR </h2> <br>
//     ${USDollar * 10 + saudiRiyal * 25}`)

 
   
 
// let myNumbers = 6 + 5 * 10 / 2;
// alert(myNumbers)




let currentYear = (2023)
let birthYear = +prompt("What is your birth year ?")
document.write(`
    <h1> Age Calculator </h1> <br>
    Current Year: 2023 <br>    
    Birth Year: ${birthYear} <br>
    Your Age is: ${currentYear - birthYear}`)




var favoriteSnack = "Lays";
var currentage = 15;
var maximumAge = 65 ;
var perDaySnack = 3;

document.write(`
    <h1> The Lifetime Supply Calculator:</h1> <br>
    Favorite Snack : ${favoriteSnack} <br>
    Current Age : ${currentage} <br>
    Estimate Maximum Age : ${maximumAge} <br>
    Amount Of Snack Per Day : ${perDaySnack} <br>
    You will need ${perDaySnack * (maximumAge - currentage)} Lays to last you until the ripe old age of ${maximumAge} `)