let fs=require("fs");
let datab=require("./data");
let b="dum1@gmail.com";
//var data  = fs.readFileSync(db, 'utf-8'); 
   datab.db.push(  {
    "name":"dummy5",
    "age":48,
    "mail":"dumm5@gmail.com"
}
) ;
console.log(datab.db);

fs.writeFileSync("data.js", parseInt(datab.db,10).toString()  );



// unique id 
//  let a=JSON.parse(data);
// let arr=[];
// for(let i=0;i<a.length;i++){
//     arr.push(a[i].mail);
// }
// console.log(arr);
//  let ans=arr.includes(b);
//  console.log(ans);