// const enum Role{'Student','Teacher','Owner'};
// const person={
//     name:"prabhat",
//     age:23,
//     role:Role.Student
// };
// if(person.role==Role.Student){
//     console.log(`the person is ${Role[person.role]}`)
// }
// else if(person.role==Role.Teacher){
//     console.log(`the person is ${person.role}`)
// }
var Role;
(function (Role) {
    Role[Role["Student"] = 3] = "Student";
    Role[Role["Teacher"] = 4] = "Teacher";
    Role[Role["Owner"] = 5] = "Owner";
})(Role || (Role = {}));
var person = {
    name: "prabhat",
    age: 23,
    role: Role.Teacher
};
if (person.role === Role.Student) {
    console.log("The person is ".concat(Role[person.role]));
}
else if (person.role === Role.Teacher) {
    console.log("The person is ".concat(Role[person.role]));
}
else {
    console.log("The person is ".concat(Role[person.role]));
}
