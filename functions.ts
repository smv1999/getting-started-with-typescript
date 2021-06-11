// Type Annotations - Functions

function addNums(num1 : any, num2 : number) : number {
    if (typeof num1 == "string"){
        if(isNaN(parseInt(num1, 10))){
            return 0;
        }
        num1 = parseInt(num1, 10);
    }
    return num1 + num2;
}

console.log(addNums('10', 20));
console.log(addNums(30, 40));
console.log(addNums('a', 50));

// Generics

function add<T extends string | number>(num1: T, num2: T) : T extends string ? string : number {
    return <any>num1 + <any>num2;
}

console.log(add(3,4));
console.log(add("a","b"));
// console.log(add("a",4));