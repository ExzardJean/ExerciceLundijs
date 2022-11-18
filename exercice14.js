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
    if(a != 0)
    {
        output = b / a / 2;
        console.log("( a =",a,";","b =",b,")","=>",output);
    }
}
else
{
    console.log("b dwe pi gran oubyen gen menm vale ak a");
}
