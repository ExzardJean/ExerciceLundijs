let token = "webinsecure;34829sjdfnsj32984madsdkj"
let tab = token.split('');
let tableau = [];
let result = [];

for (let i = 0; i < token.length; i++) {
    if (tab[i] == ";") {

        for (let j= tab.indexOf(tab[i]); j >= 0; j--) {
            tableau.push(tab[j]);

        }
    }
}
console.log(` ${(tableau.reverse().join(''))}`);