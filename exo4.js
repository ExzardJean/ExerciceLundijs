let a = 2;
let b = 9;
let tablo1 = [], compt1 = 0;
let tablo2 = [], compt2 = 0;
let tablo3 = [], compt3 = 0;
let tablo4 = [],compt4 = 0;
let n = 90;

for (let i = 0; i <= n; i++) {
    if (i % 2 == 0) {
        tablo1.push(i);

        compt1 += 1;
    } else if (i % 9 == 0) {

        tablo2.push(i);
        compt2 += 1;

    } else if (i % 2 == 0 && i % 9 == 0) {

        tablo3.push(i);
        compt3 += 1;
    } else if (i % 2 != 0 && i % 9 != 0) {

        tablo4.push(i)
        compt4 += 1;
    }
}
console.log(`${tab1} total nonb -> ${compt1}`)
console.log(`${tab2} total nonb -> ${compt2}`)
console.log(`${tab3} total nonb -> ${compt3}`)
console.log(`${tab4} total nonb -> ${compt4}`)