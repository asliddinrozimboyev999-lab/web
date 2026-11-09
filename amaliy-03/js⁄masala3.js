function engUzunSatr(arr) {
    if (arr.length === 0) return "";
    let engUzun = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > engUzun.length) {
            engUzun = arr[i];
        }
    }
    return engUzun;
}

console.log(engUzunSatr(["olma", "banan", "nok"]));
console.log(engUzunSatr(["ab", "cd"]));
console.log(engUzunSatr(["javascript", "html", "css"]));
console.log(engUzunSatr([]));
