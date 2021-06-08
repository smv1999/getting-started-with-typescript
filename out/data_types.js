var num = 20;
var personName = "Rahul";
console.log(num);
console.log(personName);
var n = 20;
var pName = "Rahul";
// Both the declarations mean the same
console.log(n);
console.log(pName);
var flag = true;
flag = !flag;
console.log(flag);
var students = ["Rahul", "John", "Peter"];
console.log(students[2]);
var anything = ["Apple", 100, 95.5];
console.log(anything[2]);
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["blue"] = 1] = "blue";
    color[color["green"] = 2] = "green";
})(color || (color = {}));
console.log(color.blue);
//# sourceMappingURL=data_types.js.map