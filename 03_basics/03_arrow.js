let user={
  username:"vaibhav",
  welcomeMessage:function(){
    console.log(`${this.username} , welcome to website`);
    console.log(this);
    
    
  }
}

// console.log(this);


// user.welcomeMessage();
// user.username="sam"
//  user.welcomeMessage();

// function chai(){
//   console.log(this);
  
// }

// chai();

// let a= function(){
//   let username="vaibhav"
//   console.log(this.username);
  
// }

// a();
//output->undefined hi aayega...this nahi kamm karega yaha bhi

// const chai=()=>{
//   let username="vaibhav"
//   console.log(this);
//   console.log(this.username);
  
// }
// chai();

// const arrow1=(n1 ,n2)=>{
// return n1+n2
// }

// console.log(arrow1(4,4));


//upar wala tohh basic line of code hua arrow me par tum ek aur tarike se ise likh sakte->imlicit retutn usee kehte->

// const arrow2=(n1,n2)=>n1+n2;
// const arrow3=(n1,n2)=>(n1+n2);

// console.log(arrow2(3,7));
