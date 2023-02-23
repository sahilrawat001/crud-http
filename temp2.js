let fs=require("fs");
var data  = fs.readFileSync('data2.json', 'utf8'); 

let b=22;
let a=JSON.parse(data);
let arr=[];
for(let i=0;i<a.length;i++){
    arr.push(a[i].mail);
}
console.log(arr);
 let ans=arr.includes(b);
 console.log(ans);