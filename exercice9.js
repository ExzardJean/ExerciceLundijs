let a = 0,
    b = 100;
let tab_stokage = []
for (let i = a; i <= b; i++) {
    tab_stokage.push(i)

}
console.log(` les nombre qui sont dans l'intervale ${a} et ${b} sont : \n ${tab_stokage.join("-")}`)
let total_pair = 0
let nomb_pair = []
for (let i = 0; i < tab_stokage.length; i++) {
    if (tab_stokage[i] % 2 == 0) {
        total_pair += tab_stokage[i]
        nomb_pair.push(tab_stokage[i])

    }
}
console.log("\n");
console.log(` voici les nombre qui sont pair : \n${nomb_pair.join("-")}`)