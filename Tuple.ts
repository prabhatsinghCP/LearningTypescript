//tuple is a special type of data type in typescript, it is not in javascript 
//tuple-> when we need a data type having fix number of variable and of
//  specific type for each variable then we can use tuple there 
//Use cases: it provides a tite bound on data type while taking inputs...

const person:{
    name :string;
    age:number;
    myJob:any[];
    MyTuple:[number,string,boolean];
}={
    name:"prabhat",
    age:23,
    myJob:["coding","engineering"],
    MyTuple:[1,"randomString",true]
}

//the 2nd position can only take true or false , other values can not be given to it 

person.MyTuple[2]=false;

// person.MyTuple[2]=0;->give error 

//this ios possible because at the end tuples are
//  build on the top of arrays in javascript 
person.MyTuple.push("kjzcxkj");

// person.MyTuple[3]=23 ->this will give error
//  (because one the tyope is fixed then we can not change it latter )


console.log(person);


