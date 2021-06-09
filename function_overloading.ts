function addAnything(s1:string, s2:string) : string;
function addAnything(num1:number, num2:number) : number;
function addAnything(a:any, b:any) : any{
    return (a + b);
}


console.log(addAnything("Hello","World"));
console.log(addAnything(10,20));