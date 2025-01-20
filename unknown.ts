// let userInput:unknown;
// userInput=5;//its ok 
// userInput="prabhat"//its also ok 

// // unmknowm io a type which can take any value but it not know till now 
// //and  at any moment it will not know which value it has taken



//what is differance between "unknown" and "any"  type [let's understand here..]


// let userInput:unknown;
// let userName:string;

// userInput="PRabhat";
// userName=userInput;
// //this will nmot accept because it does not know what is userInput contains(more restriction )


// let userInput:any;
// let userName:string;
// userInput:"its will be ok now";
// userName=userInput;
// //it's ok now because any type is less restrictive than "unknown";





let userInput:unknown;
let userName:string;
userInput="prabhat";
if(typeof userInput =='string'){
    userName=userInput;
    //now it qill be ok because proper condition checking is done here..
}

