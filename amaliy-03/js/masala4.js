function palindromTekshir(soz) {
    let kichikSoz = soz.toLowerCase();
    let teskariSoz = kichikSoz.split("").reverse().join("");
    return kichikSoz === teskariSoz;
}
let kiritilganSoz = prompt();
if (kiritilganSoz) {
    let natija = palindromTekshir(kiritilganSoz);
    if (natija) {
        console.log("palindrom");
    } else {
        console.log("palindrom emas.");
    }
}
