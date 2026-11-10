function kabisaYili(yil) {
    if ((yil % 4 === 0 && yil % 100 !== 0) || (yil % 400 === 0)) {
        return true;
    }
    return false;
}

console.log(kabisaYili(2024));
console.log(kabisaYili(1900));
console.log(kabisaYili(2000));
console.log(kabisaYili(2023));
