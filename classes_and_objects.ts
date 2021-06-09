class Student {
    rno: number;
    name: string;
    marks: number;
}

var student = new Student();
student.rno = 1;
student.name = "Rahul";
student.marks = 90;
// student = {
//     rno:1,
//     name:"Rahul",
//     marks: 90
// }

console.log(student.rno);
console.log(student.name);
console.log(student.marks);

// abstract classes 

abstract class Animal {
    private name: string;

    constructor(theName : string) {
        this.name = theName;
    }

    walk(distance: number) {
        console.log("My name is " + this.name + " and I walk "+ distance + " meters");
    }
}

class Dog extends Animal {
   
    constructor(theName : string) {
        super(theName);
    }

    bark() {
        console.log("I bark.");
    }
}

var dog = new Dog("Shero");
dog.walk(30);
dog.bark();


// Interfaces 

interface operateInterface {
    shape: string;
    side?: number;
}

function operate(x:operateInterface) {
    return x.side * x.side;
}

var calc = operate({shape:"square", side:5});
console.log(calc);


class Person {
    constructor() {
        console.log("Person Constructor");
    }
    getID() {
        return 10;
    }
}

class Employee extends Person {
    constructor() {
        super();
        console.log("Employee Constructor");
    }
}

var emp = new Employee();
console.log(emp.getID());
