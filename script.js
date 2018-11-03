var data = new Date();
var dataString = "Hello! Today is " + data.getDay() + "." + data.getMonth() + "." + data.getFullYear() + " " + data.getHours() + ":" + data.getMinutes() + ".";

document.getElementById("dataHello").innerHTML = dataString;

var array = [1,14,15,-31,5,6,129,9,-21,55];
var min = array[0];
var max = array[0];
for(var i = 1; i < array.length; i++) {
    if(array[i] < min) {
        min = array[i];
    }
    if(array[i] > max) {
        max = array[i];
    }
}
console.log("min: " + min + ", max: " + max);