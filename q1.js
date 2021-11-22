const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
var areaFunction = function(radius) {
return Math.PI * radius*radius;
}
readline.question('Enter Radius? ', radius => {
    console.log(`Area of circle is : ${areaFunction(radius)}`);
    readline.close();
  });
