//Zadanie 1
// var data = new Date();
// var dataString = "Hello! Today is " + data.getDay() + "." + data.getMonth() + "." + data.getFullYear() + " " + data.getHours() + ":" + data.getMinutes() + ".";

// document.getElementById("dataHello").innerHTML = dataString;

//Zadanie 2
// var array = [1,14,15,-31,5,6,129,9,-21,55];
// var min = array[0];
// var max = array[0];
// for(var i = 1; i < array.length; i++) {
//     if(array[i] < min) {
//         min = array[i];
//     }
//     if(array[i] > max) {
//         max = array[i];
//     }
// }
// console.log("min: " + min + ", max: " + max);

//Zadanie 3
var pesel = prompt("Enter your pesel", "00000000000");
var peselSum = 0;
if(pesel.length != 11) {
    console.log("Pesel must be 11 numbers long");
} else {
    peselSum = pesel[0]*1 + pesel[1]*3 + pesel[2]*7 + pesel[3]*9 + pesel[4]*1 + pesel[5]*3 + pesel[6]*7 + pesel[7]*9 + pesel[8]*1 + pesel[9]*3;
    peselSum = peselSum % 10;
    peselSum = 10 - peselSum;
    peselSum = peselSum % 10;
    if(pesel[10] == peselSum) {
        console.log("pesel correct");
    } else {
        console.log("pesel incorrect");
    }
}