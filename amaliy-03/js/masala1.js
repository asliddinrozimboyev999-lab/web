function kabisaYili(yil) {
    if ((yil % 4 === 0 && yil % 100 !== 0) || (yil % 400 === 0)) {
        return true;
    }
    return false;
}

let kiritilganYil = prompt();
if (kiritilganYil) {
    let natija = kabisaYili(Number(kiritilganYil));
    console.log(natija);
}
