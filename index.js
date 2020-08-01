// Code your solutions in this file
const names = ["Lisa", "Kaitlin", "Jan"];
const event = "surprise";

function writeCards(names, event) {
    const thankYouArr = []; 
    for (let i = 0; i < names.length; i++) {
        thankYouArr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouArr;
}


let num = 10;

function countDown(num) {
    while (num >= 0 ) {
        console.log(num);
        num--;
    }
}