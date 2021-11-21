/*
First problem
let a = Math.floor(Math.random() * 1000)
let b = Math.floor(Math.random() * 1000)
let c = Math.floor(Math.random() * 1000)
let d = Math.floor(Math.random() * 1000)
let e = Math.floor(Math.random() * 1000)

console.log('Min Value ->' + Math.min(a,b,c,d,e))
console.log('Max value ->' + Math.max(a,b,c,d,e))
*/

/*
Second problem
const year = 2001
// var input = prompt("Enter 4 digit number to check leap year -> ");
if ((year%400 && year%100) == 0){
console.log(year + " -> is a Leap Year");
} else {
    console.log(year + "-> is not a leap year");
}
*/

/*
Third problem
let flip = Math.floor(Math.random()*10) % 2
if(flip == 1){
console.log("It's a Head")
} else {
    console.log("It's a Tails")
}
*/

// var date = new Date().getDate();
// console.log(date)

var month = 'January';
let date = 20;

if ((month == 'March'||'May') && (0<date<32)) {
   console.log(month + " " + date + " is present in Scheduled Calender")
} else if ((month == 'April'||'June') && (0<date<31)) {
    console.log(month + " " + date + " is present in Scheduled Calender")
} else {
    console.log("Enter Proper date")
}