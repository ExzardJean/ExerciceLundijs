let nom = prompt("Antre nonw svp");

nom = nom.split(" ")


for (let i = 0; i < nom.length; i++) {
    nom[i] = nom[i].charAt(0).toUpperCase() + nom[i].slice(1);

}

console.log(nom.join(' '))