

//object literal
const sym=Symbol("key1")
const user={
  'name':"vaibhav",
  [sym]:"mykey11"
}

user.greet=function(){
  console.log("hello user");
  
}
user.greettwo=function(){
  console.log(`hello user , ${this.name}`);
  
}

user.greettwo();

 

// console.log(typeof user[sym]);

// Object.freeze(user)