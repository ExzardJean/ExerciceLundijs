let output;
let a = prompt("Antre premye nonm");
while(isNaN(a))
{
    a = prompt("Ou sipoze antre on nonm");

}

let b = prompt("Antre dezyem nonm");
while(isNaN(a))
{
    b = prompt("Ou sipoze antre on nonm");

}

if(a > b || a === b)
{
    output = a * b / a;
}
else
{
    output = a * b / b;
}

console.log("( a =",a,";","b =",b,")","=>",output);