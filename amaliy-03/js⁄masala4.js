function palindromSozlar(s) {
    let sozlar = s.split(" ");
    let natija = [];
    for (let i = 0; i < sozlar.length; i++) {
        let soz = sozlar[i];
        if (soz.length >= 2) {
            let kichikSoz = soz.toLowerCase();
            let teskariSoz = kichikSoz.split("").reverse().join("");
            if (kichikSoz === teskariSoz) {
                natija.push(soz);
            }
        }
    }
    return natija;
}

console.log(palindromSozlar("Kiyik va tot qaradi"));
console.log(palindromSozlar("salom dunyo"));
console.log(palindromSozlar("Level radar va non"));
console.log(palindromSozlar("a b c"));
