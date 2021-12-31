//print stars 

var readlineSync = require('readline-sync');
var n = readlineSync.question("How many lines of stars would you like to print? ");

let string = "";
let str = "";

for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

for(i=n; i>=1; i--){
  for (let j = 0; j < i; j++) {
    str += "*";
  }
  str += "\n";
}
console.log(str);