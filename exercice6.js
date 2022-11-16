function reversechaine(str) {
    let chaine = "";
    for (let i = str.length - 1; i >= 0; i--) {
        chaine += str[i];
    }
    return chaine;
}
console.log(reversechaine('Ayibobo Ayiti'));