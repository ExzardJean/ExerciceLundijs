let chaine="hidden Exzard jean Abellard endpass";
let intstring= chaine.split('');
let hidenn=chaine.indexOf("hidden");
let endpas=chaine.indexOf("endpass")

let resultat=chaine.substring(hidenn+6,endpas)

console.log(resultat);