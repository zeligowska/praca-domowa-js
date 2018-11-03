var data = new Date();
var dataString = "Hello! Today is " + data.getDay() + "." + data.getMonth() + "." + data.getFullYear() + " " + data.getHours() + ":" + data.getMinutes() + ".";
console.log(dataString);

document.getElementById("dataHello").innerHTML = dataString;