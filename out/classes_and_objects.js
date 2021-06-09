var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
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
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.walk = function (distance) {
        console.log("My name is " + this.name + " and I walk " + distance + " meters");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(theName) {
        return _super.call(this, theName) || this;
    }
    Dog.prototype.bark = function () {
        console.log("I bark.");
    };
    return Dog;
}(Animal));
var dog = new Dog("Shero");
dog.walk(30);
dog.bark();
function operate(x) {
    return x.side * x.side;
}
var calc = operate({ shape: "square", side: 5 });
console.log(calc);
var Person = /** @class */ (function () {
    function Person() {
        console.log("Person Constructor");
    }
    Person.prototype.getID = function () {
        return 10;
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        var _this = _super.call(this) || this;
        console.log("Employee Constructor");
        return _this;
    }
    return Employee;
}(Person));
var emp = new Employee();
console.log(emp.getID());
//# sourceMappingURL=classes_and_objects.js.map