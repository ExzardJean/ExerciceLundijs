let nonm = [0,1,2,3,4];
let n = nonm[3];
aranjman = nonm.reverse();
let pati,patiA = [];

for(let i = 0 ; i < nonm.length - 1 ; i++)
{
    
    if(i == 0) 
    {
        console.log(aranjman);
    }
    else
    {
        pati = aranjman.slice(-i);
        for(el of aranjman)
        {
            if(!pati.includes(el)) patiA.push(el)

        }
        let a =patiA.reverse(); 
        aranjman = a.concat(pati)
        console.log(aranjman)
    }
    patiA = [];
    pati = [];
}
console.log("eleman",n,"nan pozisyon",aranjman.indexOf(n), "nan denye sekans lan.")