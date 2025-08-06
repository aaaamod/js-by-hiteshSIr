// let a=10;
// const b=20;
// let c=30
//let d=20

// if(true){
//  let a=10;
// const b=20;
// var c=300
//let e=8
// }

// console.log(a);
// console.log(b);
// console.log(c);


// if ke andar ka area block scope like e variable , uske bahar ka area global scope-> like d variable

//  function one(){
//   let username="vaibhav"

//   function two(){
//     const website="utube"
//     console.log(username );
    
//   }
//  }

console.log(one(2));

function one (val){
  return val+1
}

two(6)
const two=function(val){
  return val+2

}
