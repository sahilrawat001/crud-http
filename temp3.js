let fs=require("fs");
var data  = fs.readFileSync('data2.json', 'utf8'); 
data=JSON.parse(data);
let a=data.splice(0,1);
console.log(data);
 