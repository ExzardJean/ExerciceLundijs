let itilizate;
let nonb = "127.0.01.02.1"
let compt;
do {

    itilizate = prompt("Entre Adrese ip u an");
    itilizate = itilizate.split('')


    for (let el of itilizate) {

        if (!nonb.includes(el)) {

            alert("adres ip a pa bn");

        }
        if (el == '.') {

            compt += 1;
        }

    }

    if (itilizate == '') {

        alert("Chan vid");


    }
} while (nonb.includes(itilizate) && compt == 3)


let somme = 0;
for (let i = 0; i < itilizate.length; i++) {
    if (itilizate[i] == '.') {

        continue
    }
    itilizate[i] = parseInt(itilizate[i], 10);

    somme += itilizate[i];

}
let Result = parseInt(itilizate[0]) * somme

console.log(`Pot ki ouvri a se : ${Result}`)