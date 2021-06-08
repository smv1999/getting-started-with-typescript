// Type Annotations - Functions
function addNums(num1, num2) {
    if (typeof num1 == "string") {
        if (isNaN(parseInt(num1, 10))) {
            return 0;
        }
        num1 = parseInt(num1, 10);
    }
    return num1 + num2;
}
console.log(addNums('10', 20));
// Generics
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(3, 4));
console.log(add("a", "b"));
// console.log(add("a",4));
//# sourceMappingURL=functions.js.map