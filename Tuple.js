//tuple is a special type of data type in typescript, it is not in javascript 
//tuple-> when we need a data type having fix number of variable and of
//  specific type for each variable then we can use tuple there 
//Use cases: it provides a tite bound on data type while taking inputs...
var person = {
    name: "prabhat",
    age: 23,
    myJob: ["coding", "engineering"],
    MyTuple: [1, "randomString", true]
};
//the 2nd position can only take true or false , other values can not be given to it 
person.MyTuple[2] = false;
// person.MyTuple[2]=0;->give error 
person.MyTuple.push("kjzcxkj");
console.log(person);
