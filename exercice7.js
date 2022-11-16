let voyelles = "AEIOUYaeiouy";
let stokage = voyelles.split('');

for (let i = 0; i < stokage.length; i++) {
    if (stokage[i] == "A" || stokage[i] == "a" || stokage[i] == "E" || stokage[i] == "e" || stokage[i] == "I" || stokage[i] == "i" || stokage[i] == "O" || stokage[i] == "o" || stokage[i] == "U" || stokage[i] == "u" || stokage[i] == "Y" || stokage[i] == "y") {

        stokage[i - 1] = '*';
    }

}
console.log(stokage.join(' '));