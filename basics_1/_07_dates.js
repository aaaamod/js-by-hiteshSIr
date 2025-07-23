//dates

let d=new Date(2023 , 0, 22);
let dd=new Date(2023 , 0, 22,5 ,34,34);
let ddd=new Date("01-14-2023");
// console.log(ddd.toLocaleDateString());

let timestamp=Date.now()
// console.log(timestamp);

let newdate=new Date();
// console.log(newdate.getMonth());
// console.log(newdate.getDay());


console.log(newdate.toLocaleString('default',{
  hour:"2-digit",
  weekday:"long"
}));


