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






enum Role {
    Student = 3,
    Teacher,
    Owner
}

const person = {
    name: "prabhat",
    age: 23,
    role: Role.Teacher
};

if (person.role === Role.Student) {
    console.log(`The person is ${Role[person.role]}`);
} else if (person.role === Role.Teacher) {
    console.log(`The person is ${Role[person.role]}`);
} else {
    console.log(`The person is ${Role[person.role]}`);
}
